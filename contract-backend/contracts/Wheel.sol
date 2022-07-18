// SPDX-License-Identifier: GPL-3.0-only
pragma solidity 0.8.1;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/utils/Counters.sol"; 

import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@chainlink/contracts/src/v0.8/VRFConsumerBase.sol"; 
import "./MiddleData.sol";
import "./WheelFactory.sol";
 

contract Wheel is MiddleData, ERC721URIStorage, VRFConsumerBase{
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

    bool public isGamePaused = false;
    uint256 public  isGamePausedSlot = 0;



    mapping(bytes32 => address) private openChestCaller;                        //get persons address from Chainlink requestId
    // mapping(bytes32 => uint256) private openChestStatus;                        //get tokenId from ChainLink requestId
    // mapping(uint256 => bytes32) private requestStatusIdByNftId;                 //get Chainlink requestId from tokenId
    mapping(address => slotInhabitant[]) public NftTokensRegisteredInMachine;  //input contract address, get all registered tokens and what slot they're in

    uint256[] private oddsArray;
    address[] private addyArray;

    address public owner;
    address private FactoryAddress;
    address private buyCapsuleContract;

    string private MachineString;

    SlotStruct allSlotAddresses;
    OddsStruct allOdds;
     



    constructor(SlotStruct memory slots1, OddsStruct memory odds1, address theOwner, address _factoryAddress, string memory _MachineString, address _buyCapsuleContract) 
        ERC721("Capsule", "CAPSULE")  
        VRFConsumerBase(
            0xb3dCcb4Cf7a26f6cf6B120Cf5A73875B7BBc655B,     // VRF Coordinator          //rinkeby
            0x01BE23585060835E02B77ef475b0Cc51aA1e0709      // LINK Token               //rinkeby
        ) 
    {
        buyCapsuleContract = _buyCapsuleContract;
        owner = theOwner;
        MachineString = _MachineString;
        FactoryAddress = _factoryAddress;
        keyHash = 0x6e75b569a01ef56d18cab6a8e71e6600d6ce853834d4a5748b720d06f878b3a4; //rinkeby
        fee = 0.1 * 10 ** 18; // 0.1 LINK (Varies by network) (0.0001 for MUMBAI) (0.1 for rinkeby)
      
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



    //made public to hopefully save contract space
    // function getOwner()public view returns (address){
    //     return owner;
    // }

    modifier onlyOwner() {
        require(msg.sender == owner, "Not owner");
        _;
    }

    //update frontend because we're looking for contract space here..
    function getAllOdds() public view returns(OddsStruct memory, SlotStruct memory, string memory){
        return(allOdds, allSlotAddresses, MachineString);
    }
    // function getAllAddys() public view returns(SlotStruct memory){
    //     return(allSlotAddresses);
    // }

    // function getMachineString() public view returns(string memory){
    //     return MachineString;
    // }



    function mintCapsule(address player) public returns (uint256) //wheel owner may give out capsules if they want
    {
        require ( (( msg.sender == owner )||( msg.sender == buyCapsuleContract )), "no"); //only owner or the buycapsulecontract can mint
        _tokenIds.increment();
        string memory tokenURI = "http://gateway.ipfs.io/ipfs/QmYyRWtAEQ1HZFmTuY3fqQzLyd9eaHQHbXUiT2yeqW1x3B";
        uint256 newItemId = _tokenIds.current();
        _mint(player, newItemId);
        _setTokenURI(newItemId, tokenURI);

        return newItemId;
    }

    function openChest(uint256 chestId) public {
        require(ownerOf(chestId) == msg.sender, "n");
        // require(requestStatusIdByNftId[chestId] == 0x0000000000000000000000000000000000000000000000000000000000000000, "Chest has been opened");
        // ^^^ if chainlink vrf call fails we need this to revert back to unopened state..currently does not

        require(isGamePaused == false, "p"); //require game is not paused, or return the empty slot 
        
        require(LINK.balanceOf(address(this)) >= fee, "L");

        bytes32 requestId = requestRandomness(keyHash, fee);
        

        //tell machine factory we asked for a CL VRF 
        // WheelFactory mfEvent;
        // mfEvent = WheelFactory(FactoryAddress);
        WheelFactory(FactoryAddress).eventEmitPullRequest(address(this), requestId, msg.sender);
        
        emit RequestNewRandomNumber(requestId, msg.sender);
        openChestCaller[requestId] = msg.sender;
        // openChestStatus[requestId] = chestId;
        // requestStatusIdByNftId[chestId] = requestId; 

        _burn(chestId); //burn the capsule before VRF fulfills could cause UX issues, but I needed space for game-pausing empty slot logic

    }


    // function ejectNftArray(uint _tokenId, address tokenAddress, uint _slotNumber) public onlyOwner {
    function ejectNftArray(uint256[][] memory theList) public  onlyOwner {
            for (uint256 x = 0; x < theList.length; x++){
                for (uint256 z = 0; z < theList[x].length; z++){
                    ERC721 nftContract;
                    nftContract = ERC721(addyArray[x]);
                    
                    address tokenOwner = nftContract.ownerOf(theList[x][z]);        //get owner's address for NFT id from contract       
                    require (tokenOwner == address(this), "N");  //if this contract owns the NFT...
                    
                    nftContract.safeTransferFrom(address(this), owner, theList[x][z]);
                    emit EjectNft(theList[x][z], addyArray[x]);
                    
                    //MUST ALSO DE-REGISTER NFT ID FROM ANY SLOT HERE.
                    //////////////////////////////////////////////////
                    uint m = 99999999;
                    for (uint k = 0; k < NftTokensRegisteredInMachine[addyArray[x]].length; k++){
                        if (NftTokensRegisteredInMachine[addyArray[x]][k].tokenId==theList[x][z]){        //search for tokenId match from unordered array
                            m = k;
                            break;
                        }
                    }

                    if (m != 99999999){                       //indicating we found a match in our unordered array. If not, this token was never registered only deposited
                        NftTokensRegisteredInMachine[ addyArray[x] ][m].index = 0; //set index to zero, indicating de-activation in array since we are ejecting it
                    }
                    
                    uint lastSlot = NftTokensRegisteredInMachine[addyArray[x] ].length;

                    for (uint r = lastSlot-1; r> 0; r--){
                        if (NftTokensRegisteredInMachine[ addyArray[x] ][r].index == 0){
                            continue;
                        }
                        lastSlot = r;
                    }
                    if (lastSlot == NftTokensRegisteredInMachine[addyArray[x] ].length){ //if it's still the same untouched value the tube must be empty
                        // emptyTube[x] = true;
                        isGamePaused = true;
                        isGamePausedSlot = x+1;
                    }else {
                        NftTokensRegisteredInMachine[ addyArray[x] ][ lastSlot ].index = 1;
                    }
                    //////////////////////////////////////////////////
                }
            }

    }


    function RegisterListOfNftIds(uint256[][] memory theList) public  onlyOwner {   
        for (uint256 x = 0; x < theList.length; x++){       //for each slot
        for (uint256 z = 0; z < theList[x].length; z++){    //for each tokenId in each slot
            ERC721 nftContract;
            nftContract = ERC721(addyArray[x]);
            address tokenOwner = nftContract.ownerOf(theList[x][z]);        //get owner's address for NFT id from contract       
            require (tokenOwner == address(this), "N");  //if this contract owns the NFT...
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
                    
                    if (isGamePausedSlot == tempStruct.slotIndex){                  //an empty slot has been refilled. Game unpaused if it was paused
                        isGamePaused = false;
                        isGamePausedSlot = 0;
                    }
                }
            }
            
        }
        }
    }


    function getAllRegisteredForSlot(uint256 slotIndex) public view returns (slotInhabitant[] memory,  string memory, string memory, address){
        // address slotAddr = addyArray[slotIndex];
        // string[] memory tokenUriArray = new string[](NftTokensRegisteredInMachine[slotAddr].length);
        // ERC721 nftContract;
        
        // nftContract = ERC721(slotAddr);

        //[1]array of strings is not properly populating here...
        // for (uint256 i = 0; i < NftTokensRegisteredInMachine[slotAddr].length; i++){
        //     if ((NftTokensRegisteredInMachine[slotAddr][i].index != 0) && (i == slotIndex) ){ //if it isnt a used-up tokenId and it's the slot we requested
        //         tokenUriArray[i] = nftContract.tokenURI(NftTokensRegisteredInMachine[slotAddr][i].tokenId);
        //     }
        // }
        // string memory nftContract.name();
        // string memory _symbol = nftContract.symbol();

        return( NftTokensRegisteredInMachine[ addyArray[slotIndex] ], ERC721( addyArray[slotIndex] ).name(), ERC721( addyArray[slotIndex] ).symbol(), addyArray[slotIndex]);
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
        nftContract.safeTransferFrom( address(this), chestOpener, NftTokensRegisteredInMachine[addyArray[slotWinner]][m].tokenId );  //take the first non-zero ID for Wheel slot 
        
        WheelFactory mfEvent;
        mfEvent = WheelFactory(FactoryAddress);
        mfEvent.eventEmitMachineUsed(address(this), requestId, theNumber, NftTokensRegisteredInMachine[addyArray[slotWinner]][m].tokenId, slotWinner);


        ///cleanup after token has been transferred out...
        //////////////////////////////////////////////////
        NftTokensRegisteredInMachine[ addyArray[slotWinner] ][m].index = 0; //set index to zero, indicating de-activation in array (deactivate token since it's not in contract's possession anymore)
        uint lastSlot = NftTokensRegisteredInMachine[addyArray[slotWinner] ].length;

        for (uint r = lastSlot-1; r> 0; r--){ //This should probably start from lowest and work to highest right? 
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


        // uint256 sender;
        // sender = openChestStatus[requestId];
        // requestStatusIdByNftId[sender] = 0x0000000000000000000000000000000000000000000000000000000000000000;
        // _burn(sender); //burn the capsule

    }




}