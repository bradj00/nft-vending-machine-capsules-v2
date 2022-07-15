// SPDX-License-Identifier: GPL-3.0-only
pragma solidity 0.8.1;

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
        uint256 tokenId;    //id of single token
        uint256 index;      //index of single token within a slot
        uint256 slotIndex;  //slot index
        string tokenURI;    //should live here for easier tracking client-side
    }


    mapping(bytes32 => address) private openChestCaller;                        //get persons address from Chainlink requestId
    mapping(bytes32 => uint256) private openChestStatus;                        //get tokenId from ChainLink requestId
    mapping(uint256 => bytes32) private requestStatusIdByNftId;                 //get Chainlink requestId from tokenId
    mapping(address => slotInhabitant[]) public NftTokensRegisteredInMachine;  //input contract address, get all registered tokens and what slot they're in

    uint256[] private oddsArray;
    address[] private addyArray;

    address private owner;
    address private FactoryAddress;

    string private MachineString;

    SlotStruct allSlotAddresses;
    OddsStruct allOdds;
     

    constructor(SlotStruct memory slots1, OddsStruct memory odds1, address theOwner, address _factoryAddress, string memory _MachineString) 
        ERC721("Capsule", "CAPSULE")  
        VRFConsumerBase(
            0x8C7382F9D8f56b33781fE506E897a4F1e2d17255,     // VRF Coordinator          //mumbai
            0x326C977E6efc84E512bB9C30f76E30c160eD06FB      // LINK Token               //mumbai
        ) 
    {
        owner = theOwner;
        MachineString = _MachineString;
        FactoryAddress = _factoryAddress;
        keyHash = 0x6e75b569a01ef56d18cab6a8e71e6600d6ce853834d4a5748b720d06f878b3a4; //mumbai
        fee = 0.0001 * 10 ** 18; // 0.0001 LINK (Varies by network) (0.0001 for MUMBAI)
      
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
    // function ejectNftArray(uint256[][] memory theList) public  onlyOwner {
    //         for (uint256 x = 0; x < theList.length; x++){
    //             for (uint256 z = 0; z < theList[x].length; z++){
    //                 ERC721 nftContract;
    //                 nftContract = ERC721(addyArray[x]);
                    
    //                 address tokenOwner = nftContract.ownerOf(theList[x][z]);        //get owner's address for NFT id from contract       
    //                 require (tokenOwner == address(this), "contract does not own this token");  //if this contract owns the NFT...
                    
    //                 nftContract.safeTransferFrom(address(this), owner, theList[x][z]);
    //                 emit EjectNft(theList[x][z], addyArray[x]);
                    
    //                 //MUST ALSO DE-REGISTER NFT ID FROM ANY SLOT HERE.
    //                 //////////////////////////////////////////////////
    //                 uint m = 99999999;
    //                 for (uint k = 0; k < NftTokensRegisteredInMachine[addyArray[x]].length; k++){
    //                     if (NftTokensRegisteredInMachine[addyArray[x]][k].tokenId==theList[x][z]){        //search for tokenId match from unordered array
    //                         m = k;
    //                         break;
    //                     }
    //                 }

    //                 if (m != 99999999){                       //indicating we found a match in our unordered array. If not, this token was never registered only deposited
    //                     NftTokensRegisteredInMachine[ addyArray[x] ][m].index = 0; //set index to zero, indicating de-activation in array since we are ejecting it
    //                 }
                    
    //                 uint lastSlot = NftTokensRegisteredInMachine[addyArray[x] ].length;

    //                 for (uint r = lastSlot-1; r> 0; r--){
    //                     if (NftTokensRegisteredInMachine[ addyArray[x] ][r].index == 0){
    //                         continue;
    //                     }
    //                     lastSlot = r;
    //                 }
    //                 if (lastSlot == NftTokensRegisteredInMachine[addyArray[x] ].length){ //if it's still the same untouched value the tube must be empty
    //                     // emptyTube[x] = true;
    //                 }else {
    //                     NftTokensRegisteredInMachine[ addyArray[x] ][ lastSlot ].index = 1;
    //                 }
    //                 //////////////////////////////////////////////////
    //             }
    //         }

    // }


    function RegisterListOfNftIds(uint256[][] memory theList) public  onlyOwner {   
        for (uint256 x = 0; x < theList.length; x++){       //for each slot
        for (uint256 z = 0; z < theList[x].length; z++){    //for each tokenId in each slot
            ERC721 nftContract;
            nftContract = ERC721(addyArray[x]);
            address tokenOwner = nftContract.ownerOf(theList[x][z]);        //get owner's address for NFT id from contract       
            require (tokenOwner == address(this), "contract does not own this token");  //if this contract owns the NFT...
            for (uint256 i = 0; i < addyArray.length; i++){         //for each slot in vending machine
                if ((addyArray[x] == addyArray[i]) && (x == i) ){            //if supplied address matches up with a vending slot AND it's 
                    slotInhabitant memory tempStruct;
                    tempStruct.tokenId = theList[x][z];

                    //count how many .index values are zero.
                    uint zeroCount = 0;
                    for (uint s = 0; s < NftTokensRegisteredInMachine[addyArray[x]].length; s++){
                        if (NftTokensRegisteredInMachine[addyArray[x]][s].index == 0){
                            zeroCount = zeroCount+1;
                        }
                    }

                    tempStruct.slotIndex = x+1;
                    tempStruct.index   = NftTokensRegisteredInMachine[addyArray[i]].length+1-zeroCount; //zeroCount allows empty tube to be refilled and work again

                    tempStruct.tokenURI = nftContract.tokenURI(tempStruct.tokenId);

                    NftTokensRegisteredInMachine[addyArray[i]].push(tempStruct);    //add nftId to mapping
                    // emptyTube[i] = false;                                        //tube is no longer empty
                    
                }
            }
            
        }
        }
    }


    function getAllRegisteredForSlot(uint256 slotIndex) public view returns (slotInhabitant[] memory, string[] memory, string memory, string memory, address){
        address slotAddr = addyArray[slotIndex];
        string[] memory tokenUriArray = new string[](NftTokensRegisteredInMachine[slotAddr].length);
        ERC721 nftContract;
        
        nftContract = ERC721(slotAddr);

        //[1]array of strings is not properly populating here...
        for (uint256 i = 0; i < NftTokensRegisteredInMachine[slotAddr].length; i++){
            if ((NftTokensRegisteredInMachine[slotAddr][i].index != 0) && (i == slotIndex) ){ //if it isnt a used-up tokenId and it's the slot we requested
                tokenUriArray[i] = nftContract.tokenURI(NftTokensRegisteredInMachine[slotAddr][i].tokenId);
            }
        }
        string memory _name   = nftContract.name();
        string memory _symbol = nftContract.symbol();

        return( NftTokensRegisteredInMachine[addyArray[slotIndex]], tokenUriArray, _name, _symbol, addyArray[slotIndex]);
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
        for (uint k = 0; k < NftTokensRegisteredInMachine[addyArray[slotWinner]].length; k++){
            if (NftTokensRegisteredInMachine[addyArray[slotWinner]][k].index==1){ //search for index 1 from unordered array
                m = k;
                break;
            }
        }
        // require (m != 0, "no (index 1) value from array of structs was picked up. This should never happen.");
        nftContract.safeTransferFrom( address(this), chestOpener, NftTokensRegisteredInMachine[addyArray[slotWinner]][m].tokenId );  //take the first ID for that Nft Address
        
        MachineFactory mfEvent;
        mfEvent = MachineFactory(FactoryAddress);
        mfEvent.eventEmitMachineUsed(address(this), requestId, theNumber, NftTokensRegisteredInMachine[addyArray[slotWinner]][m].tokenId, slotWinner);
        
        // emit NewRandomItem(requestId, theNumber, NftTokensRegisteredInMachine[addyArray[slotWinner]][m].tokenId, slotWinner); //reqId, randomNum, nft ID being transferred, slot

        NftTokensRegisteredInMachine[ addyArray[slotWinner] ][m].index = 0; //set index to zero, indicating de-activation in array
        uint lastSlot = NftTokensRegisteredInMachine[addyArray[slotWinner] ].length;

        for (uint r = lastSlot-1; r> 0; r--){
            if (NftTokensRegisteredInMachine[ addyArray[slotWinner] ][r].index == 0){
                continue;
            }
            lastSlot = r;
        }
        if (lastSlot == NftTokensRegisteredInMachine[addyArray[slotWinner] ].length){ //if it's still the same untouched value the tube must be empty
            // emptyTube[slotWinner] = true;
        }else {
            NftTokensRegisteredInMachine[ addyArray[slotWinner] ][ lastSlot ].index = 1;
        }


        uint256 sender;
        sender = openChestStatus[requestId];
        requestStatusIdByNftId[sender] = 0x0000000000000000000000000000000000000000000000000000000000000000;
        _burn(sender); //burn the capsule

    }




}