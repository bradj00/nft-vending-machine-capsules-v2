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
    // event RequestNewRandomNumber(bytes32 requestId, address requesterAddress);                                  //name these or moralis complains about ABI lack of name
    event EjectNft(uint tokenId, address tokenAddress);                                                         //always sent back to Machine Owner address
    event RefundCapsule(bytes32 requestId, address requesterAddress);                                           //VRF tried to operate on empty slot. Refund a capsule
/////////////////////////////

    struct slotInhabitant {
        uint256 tokenId;    //id of single token
        uint256 index;      //index of single token within a slot
        uint256 slotIndex;  //slot index
        string tokenURI;    //should live here for easier tracking client-side
    }

    bool public isGamePaused = true; //game starts paused. Becomes unpaused when all slots are filled with at least 1 token
    // uint256 public  isGamePausedSlot = 0;



    mapping(bytes32 => address) internal openChestCaller;                        //get persons address from Chainlink requestId
    // mapping(bytes32 => uint256) private openChestStatus;                        //get tokenId from ChainLink requestId
    // mapping(uint256 => bytes32) private requestStatusIdByNftId;                 //get Chainlink requestId from tokenId
    // mapping(address => slotInhabitant[]) public NftTokensRegisteredInMachine;  //input contract address, get all registered tokens and what slot they're in
    mapping(uint256 => uint256[]) public registeredTokensInSlots;
    // uint256[10][] registeredTokensInSlots;    
    uint256[] winnerOffset;                 //increments every time a winning token is chosen for a given slot 

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
        keyHash = 0x2ed0feb3e7fd2022120aa84fab1945545a9f2ffc9076fd6156fa96eaff4c1311; //rinkeby
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
    function getWheelInfo() public view returns(OddsStruct memory, SlotStruct memory, string memory){
        return(allOdds, allSlotAddresses, MachineString);
    }
    // function getAllAddys() public view returns(SlotStruct memory){
    //     return(allSlotAddresses);
    // }

    // function getMachineString() public view returns(string memory){
    //     return MachineString;
    // }



    function mintCapsule(address player) public returns(uint256) //wheel owner may give out capsules if they want
    {
        require ( ( ( msg.sender == owner ) || ( msg.sender == buyCapsuleContract ) || ( msg.sender == 0xb3dCcb4Cf7a26f6cf6B120Cf5A73875B7BBc655B ) ), "N"); //only owner,buycapsulecontract, or the VRF coordinator can mint
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
        // emit RequestNewRandomNumber(requestId, msg.sender);


        openChestCaller[requestId] = msg.sender;
        // openChestStatus[requestId] = chestId;
        // requestStatusIdByNftId[chestId] = requestId; 

        _burn(chestId); //burn the capsule before VRF fulfills could cause UX issues, but I needed space for game-pausing empty slot logic

    }


    // function ejectNftArray(uint _tokenId, address tokenAddress, uint _slotNumber) public onlyOwner {
    
    //this could probably be slimmed down to eject 1 at a time in order to save space..
    // function ejectNftArray(uint256[][] memory theList) public  onlyOwner {
    //         for (uint256 x = 0; x < theList.length; x++){
    //             for (uint256 z = 0; z < theList[x].length; z++){
    //                 // ERC721 nftContract;
    //                 // nftContract = ERC721(addyArray[x]);
                    
    //                 // address tokenOwner = ERC721(addyArray[x]).ownerOf(theList[x][z]);        //get owner's address for NFT id from contract       
    //                 require (ERC721(addyArray[x]).ownerOf(theList[x][z]) == address(this), "N");  //if this contract owns the NFT...
                    
    //                  ERC721(addyArray[x]).safeTransferFrom(address(this), owner, theList[x][z]);
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

    //                 // for (uint r = 0; r> 0; r--){
                    
    //                 for (uint r = lastSlot-1; r< lastSlot; r++){
    //                     if (NftTokensRegisteredInMachine[ addyArray[x] ][r].index == 0){
    //                         continue;
    //                     }
    //                     lastSlot = r;
    //                 }
    //                 if (lastSlot != NftTokensRegisteredInMachine[addyArray[x] ].length){ //if it's still the same untouched value the tube must be empty

    //                     NftTokensRegisteredInMachine[ addyArray[x] ][ lastSlot ].index = 1;
    //                 }
    //                 // else {
    //                 //     // emptyTube[x] = true;
    //                 //     // isGamePaused = true;
    //                 //     // isGamePausedSlot = x+1;
    //                 // }
    //                 //////////////////////////////////////////////////
    //             }
    //         }
    //     checkEmptySlots();
    // }


    function RegisterListOfNftIds(uint256[][] memory theList) public  onlyOwner {   
        
        for (uint256 x = 0; x < theList.length; x++){                        //for each slot
            for (uint256 z = 0; z < theList[x].length; z++){     //for each tokenId in each slot
                ERC721 nftContract;
                nftContract = ERC721(addyArray[x]);
                // address tokenOwner = nftContract.ownerOf(theList[x][z]);        //get owner's address for NFT id from contract       
                // require (tokenOwner == address(this), "token not owned");       //if this contract owns the NFT...

                uint256 tokenId = theList[x][z];
                registeredTokensInSlots[x+1].push( tokenId );           
                

            }
        }
        // checkEmptySlots();


    }

    function checkEmptySlots() private returns (bool){
       bool topLevel = false;
       for (uint x = 0; x < 10; x++){
           if (registeredTokensInSlots[x].length == winnerOffset[x]){ //if the length of the registered token list in slot is the same as our offset, it has reached the end and is empty
               topLevel = true;
           }
       }
       if (topLevel == true) {
           isGamePaused = true;
           return (true);
       }
       else {
           isGamePaused = false;
           return (false); 
        }
    }

    function getAllRegisteredForSlot(uint256 slotIndex) public view returns (uint256 [] memory){
        return( registeredTokensInSlots[slotIndex+1] );
    }


    function fulfillRandomness(bytes32 requestId, uint256 randomness) internal override  {
        if  (checkEmptySlots() == true){
            //we have an empty slot and cannot proceed. Give the user a capsule refund to try again later
            //this should help with high traffic calls to a single wheel where multiple VRF requests are in flight
            mintCapsule(openChestCaller[requestId]);
            RefundCapsule(requestId, openChestCaller[requestId]); 
            return;
        }
        else {        
            uint256 theNumber = randomness%1000000; 
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

            uint256 winnerTokenInSlot = registeredTokensInSlots[slotWinner][ winnerOffset[slotWinner] ];
            winnerOffset[slotWinner] += 1; //increment the offset by 1 
            nftContract.safeTransferFrom( address(this), chestOpener, winnerTokenInSlot ); 
            

            WheelFactory mfEvent;
            mfEvent = WheelFactory(FactoryAddress);
            WheelFactory(FactoryAddress).eventEmitMachineUsed(address(this), requestId, theNumber, winnerTokenInSlot, slotWinner);

            checkEmptySlots();

        }
    }



}