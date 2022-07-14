// SPDX-License-Identifier: MIT
pragma solidity ^0.8.1;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/utils/Counters.sol"; 

import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@chainlink/contracts/src/v0.8/VRFConsumerBase.sol"; 
import "./MiddleData.sol";
import "./MachineFactory.sol";
 

contract Machine is MiddleData, ERC721URIStorage, VRFConsumerBase{
    using Counters for Counters.Counter;
    Counters.Counter private _tokenIds;
////////////////////////////
    bytes32 internal keyHash;
    uint256 internal fee;
    event NewRandomItem(bytes32 requestId, uint256 randomNumberInt, uint256 nftTokenId, uint256 slotWinner);    //name these or moralis complains about ABI lack of name
    event RequestNewRandomNumber(bytes32 requestId, address requesterAddress);                                  //name these or moralis complains about ABI lack of name
    event EjectNft(uint tokenId, address tokenAddress);                                                         //always sent back to Machine Owner address
/////////////////////////////

    struct slotInhabitant {
        uint256 tokenId;
        uint256 index;
    }


    mapping(bytes32 => address) public openChestCaller;         //get persons address from Chainlink requestId
    mapping(bytes32 => uint256) public openChestStatus;         //get tokenId from ChainLink requestId
    mapping(uint256 => bytes32) public requestStatusIdByNftId;  //get Chainlink requestId from tokenId
    mapping(address => slotInhabitant[]) public q;            

    uint256[] oddsArray;
    address[] addyArray;

    address owner;
    address FactoryAddress;

    string MachineString;

    SlotStruct allSlotAddresses;
    OddsStruct allOdds;
     

    constructor(SlotStruct memory slots1, OddsStruct memory odds1, address theOwner, address _factoryAddress, string memory _MachineString) 
        ERC721("Capsule", "CAPSULE")  
        VRFConsumerBase(
            0xb3dCcb4Cf7a26f6cf6B120Cf5A73875B7BBc655B,     // VRF Coordinator          //rinkeby
            0x01BE23585060835E02B77ef475b0Cc51aA1e0709      // LINK Token               //rinkeby
        ) 
    {
        owner = theOwner;
        MachineString = _MachineString;
        FactoryAddress = _factoryAddress;
        keyHash = 0x2ed0feb3e7fd2022120aa84fab1945545a9f2ffc9076fd6156fa96eaff4c1311; //rinkeby
        fee = 0.1 * 10 ** 18; // 0.25 LINK (Varies by network) (0.1 for RINKEBY)
      
        allSlotAddresses = slots1;
        allOdds = odds1;

        addyArray.push(allSlotAddresses.slot0);
        addyArray.push(allSlotAddresses.slot1);
        addyArray.push(allSlotAddresses.slot2);
        addyArray.push(allSlotAddresses.slot3);
        addyArray.push(allSlotAddresses.slot4);
        addyArray.push(allSlotAddresses.slot5);
        addyArray.push(allSlotAddresses.slot6);
        addyArray.push(allSlotAddresses.slot7);
        addyArray.push(allSlotAddresses.slot8); 
        addyArray.push(allSlotAddresses.slot9);

        oddsArray.push(allOdds.odds0); 
        oddsArray.push(allOdds.odds1);
        oddsArray.push(allOdds.odds2);
        oddsArray.push(allOdds.odds3);
        oddsArray.push(allOdds.odds4);
        oddsArray.push(allOdds.odds5);
        oddsArray.push(allOdds.odds6);
        oddsArray.push(allOdds.odds7);
        oddsArray.push(allOdds.odds8);
        oddsArray.push(allOdds.odds9); 

    }

    function getOwner()public view returns (address){
        return owner;
    }

    modifier onlyOwner() {
        require(msg.sender == owner, "Not owner");
        _;
    }


    function getAllOdds() public view returns(OddsStruct memory){
        return(allOdds);
    }
    function getAllAddys() public view returns(SlotStruct memory){
        return(allSlotAddresses);
    }

    function getMachineString() public view returns(string memory){
        return MachineString;
    }



    function mintChest(address player, string memory tokenURI)
        public   
        returns (uint256)
    {
        _tokenIds.increment();

        uint256 newItemId = _tokenIds.current();
        _mint(player, newItemId);
        _setTokenURI(newItemId, tokenURI);

        return newItemId;
    }

    // function setTokenURI(uint256 tokenId, string memory tokenURI) public { //eventually lock this down
    //     _setTokenURI(tokenId, tokenURI);
    // }

    function openChest(uint256 chestId) public  returns (bytes32) {
        require(ownerOf(chestId) == msg.sender, "Only callable from your chest");
        require(requestStatusIdByNftId[chestId] == 0x0000000000000000000000000000000000000000000000000000000000000000, "Chest has been opened");
        // ^^^ if chainlink vrf call fails we need this to revert back to unopened state..currently does not
        
        
        require(LINK.balanceOf(address(this)) >= fee, "Not enough LINK. Fill contract with more LINK tokens.");

        bytes32 requestId = requestRandomness(keyHash, fee);
        
        MachineFactory mfEvent;
        mfEvent = MachineFactory(FactoryAddress);
        mfEvent.eventEmitPullRequest(address(this), requestId, msg.sender);
        // emit RequestNewRandomNumber(requestId, msg.sender);

        openChestCaller[requestId] = msg.sender;
        openChestStatus[requestId] = chestId;
        requestStatusIdByNftId[chestId] = requestId; 
        return requestId;
    }







    // function ejectNftArray(uint _tokenId, address tokenAddress, uint _slotNumber) public onlyOwner {
    function ejectNftArray(uint256[][] memory theList) public  onlyOwner {
            for (uint256 x = 0; x < theList.length; x++){
                for (uint256 z = 0; z < theList[x].length; z++){
                    ERC721 nftContract;
                    nftContract = ERC721(addyArray[x]);
                    
                    address tokenOwner = nftContract.ownerOf(theList[x][z]);        //get owner's address for NFT id from contract       
                    require (tokenOwner == address(this), "contract does not own this token");  //if this contract owns the NFT...
                    
                    nftContract.safeTransferFrom(address(this), owner, theList[x][z]);
                    emit EjectNft(theList[x][z], addyArray[x]);
                    
                    //MUST ALSO DE-REGISTER NFT ID FROM ANY SLOT HERE.
                    //////////////////////////////////////////////////
                    uint m = 99999999;
                    for (uint k = 0; k < q[addyArray[x]].length; k++){
                        if (q[addyArray[x]][k].tokenId==theList[x][z]){        //search for tokenId match from unordered array
                            m = k;
                            break;
                        }
                    }

                    if (m != 99999999){                       //indicating we found a match in our unordered array. If not, this token was never registered only deposited
                        q[ addyArray[x] ][m].index = 0; //set index to zero, indicating de-activation in array since we are ejecting it
                    }
                    
                    uint lastSlot = q[addyArray[x] ].length;

                    for (uint r = lastSlot-1; r> 0; r--){
                        if (q[ addyArray[x] ][r].index == 0){
                            continue;
                        }
                        lastSlot = r;
                    }
                    if (lastSlot == q[addyArray[x] ].length){ //if it's still the same untouched value the tube must be empty
                        // emptyTube[x] = true;
                    }else {
                        q[ addyArray[x] ][ lastSlot ].index = 1;
                    }
                    //////////////////////////////////////////////////
                }
            }


    }


    function RegisterListOfNftIds(uint256[][] memory theList) public  onlyOwner {
        for (uint256 x = 0; x < theList.length; x++){
        for (uint256 z = 0; z < theList[x].length; z++){
            ERC721 nftContract;
            nftContract = ERC721(addyArray[x]);
            address tokenOwner = nftContract.ownerOf(theList[x][z]);        //get owner's address for NFT id from contract       
            require (tokenOwner == address(this), "contract does not own this token");  //if this contract owns the NFT...
            for (uint256 i = 0; i < addyArray.length; i++){         //for each slot in vending machine
                if (addyArray[x] == addyArray[i]){            //if supplied address matches up with a vending slot
                    slotInhabitant memory tempStruct;
                    tempStruct.tokenId = theList[x][z];

                    //count how many .index values are zero.
                    uint zeroCount = 0;
                    for (uint s = 0; s < q[addyArray[x]].length; s++){
                        if (q[addyArray[x]][s].index == 0){
                            zeroCount = zeroCount+1;
                        }
                    }

                    tempStruct.index   = q[addyArray[i]].length+1-zeroCount; //zeroCount allows empty tube to be refilled and work again

                    q[addyArray[i]].push(tempStruct);                    //add nftId to mapping
                    // emptyTube[i] = false;                                //tube is no longer empty
                    
                }
            }
            
        }
        }
    }

    function getAllRegisteredForSlot(uint256 slotIndex) public view returns (slotInhabitant[] memory, string[] memory, string memory, string memory, address){
        address slotAddr = addyArray[slotIndex];
        string[] memory tokenUriArray = new string[](q[slotAddr].length);
        ERC721 nftContract;
        
        nftContract = ERC721(slotAddr);
        for (uint256 i = 0; i < q[slotAddr].length; i++){
            if (q[slotAddr][i].index != 0){ //if it isnt a used-up tokenId
                tokenUriArray[i] = nftContract.tokenURI(q[slotAddr][i].tokenId);
            }
        }
        string memory _name   = nftContract.name();
        string memory _symbol = nftContract.symbol();

        return( q[addyArray[slotIndex]], tokenUriArray, _name, _symbol, addyArray[slotIndex]);
    }


    function fulfillRandomness(bytes32 requestId, uint256 randomness) internal override  {
        uint256 theNumber = randomness % 1000000; 
        uint256 offset = 0;
        uint256 slotWinner;

        for (uint256 i = 0; i < oddsArray.length; i++){
            if (oddsArray[i] == 0){continue;}           //disabled vending slot

            if ((theNumber > 0+offset) && (theNumber <= oddsArray[i]+offset) ){
                slotWinner = i;
                break;
            }else{
                offset = offset + oddsArray[i];
            }
        }

        ERC721 nftContract;
        nftContract = ERC721(addyArray[slotWinner]);
        address chestOpener = openChestCaller[requestId];

        uint m = 99999999;
        for (uint k = 0; k < q[addyArray[slotWinner]].length; k++){
            if (q[addyArray[slotWinner]][k].index==1){ //search for index 1 from unordered array
                m = k;
                break;
            }
        }
        // require (m != 0, "no (index 1) value from array of structs was picked up. This should never happen.");
        nftContract.safeTransferFrom( address(this), chestOpener, q[addyArray[slotWinner]][m].tokenId );  //take the first ID for that Nft Address
        
        MachineFactory mfEvent;
        mfEvent = MachineFactory(FactoryAddress);
        mfEvent.eventEmitMachineUsed(address(this), requestId, theNumber, q[addyArray[slotWinner]][m].tokenId, slotWinner);
        
        // emit NewRandomItem(requestId, theNumber, q[addyArray[slotWinner]][m].tokenId, slotWinner); //reqId, randomNum, nft ID being transferred, slot

        q[ addyArray[slotWinner] ][m].index = 0; //set index to zero, indicating de-activation in array
        uint lastSlot = q[addyArray[slotWinner] ].length;

        for (uint r = lastSlot-1; r> 0; r--){
            if (q[ addyArray[slotWinner] ][r].index == 0){
                continue;
            }
            lastSlot = r;
        }
        if (lastSlot == q[addyArray[slotWinner] ].length){ //if it's still the same untouched value the tube must be empty
            // emptyTube[slotWinner] = true;
        }else {
            q[ addyArray[slotWinner] ][ lastSlot ].index = 1;
        }


        uint256 sender;
        sender = openChestStatus[requestId];
        requestStatusIdByNftId[sender] = 0x0000000000000000000000000000000000000000000000000000000000000000;
        _burn(sender); //burn the treasure chest

    }




}