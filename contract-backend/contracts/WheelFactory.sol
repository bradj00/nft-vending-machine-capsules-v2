// SPDX-License-Identifier: GPL-3.0-only
pragma solidity 0.8.1;

import "./Wheel.sol";
import "./MiddleData.sol"; 
import "./BuyCapsules.sol"; 

contract WheelFactory is MiddleData {
    Wheel[] public wheels;
    mapping(address => Wheel[]) public WheelsByOwner;
    // mapping(address => uint8) public userAcceptEula;



//fake example content id for string length check..
    // string public EulaLink = "QmXS8ki7djqD3pkE5p6fmWk8wKZVhoTaPF2e4y2F5LKq22";
    


    event MachineUsed(address machineAddress, bytes32 requestId, uint256 theNumber, uint256 nftTokenId, uint256 winningSlot);   
    event PullRequest(address machineAddress, bytes32 requestId, address requesterAddress); 

    mapping(Wheel => BuyCapsules) public BuyCapsuleByMachine;





   //add security so only machines created by the factory can call these
   /////////////////////////////////////////////////
   function eventEmitMachineUsed(address _machineAddress, bytes32 _requestId, uint256 theNumber, uint256 _nftTokenId, uint256 _winningSlot) public {
       emit MachineUsed(_machineAddress, _requestId, theNumber, _nftTokenId, _winningSlot);
   }
   function eventEmitPullRequest(address _machineAddress, bytes32 _requestId, address _requesterAddress) public {
       emit PullRequest(_machineAddress, _requestId, _requesterAddress);
   }
   /////////////////////////////////////////////////

//    function getuserAcceptEula(address user) public view returns (uint){
//        return userAcceptEula[user];
//    }

//    function getEulaContentId () public pure returns(string memory){
//        return("CID-link"); //content ID to pull from IPFS node
//    }

//    function signEula(bool signTrue) public {
//        if ( (signTrue == true)&&(userAcceptEula[msg.sender] == 0) ){
//         userAcceptEula[msg.sender] = 1;
//        }
//    }

   function createMachine(SlotStruct memory slots1, OddsStruct memory odds1, string memory MachineName, uint256 CapsuleCost, address CapsuleTokenAddress) public
    // returns(uint256) 
    {
        // require (userAcceptEula[msg.sender] == 1, "a");
        BuyCapsules buycapsule = new BuyCapsules(
            msg.sender,
            address(this),
            CapsuleCost,
            CapsuleTokenAddress
        );

        Wheel machine = new Wheel(
            slots1,
            odds1,
            msg.sender,
            address(this),
            MachineName,
            address(buycapsule)
        );
        wheels.push(machine);
        WheelsByOwner[msg.sender].push(machine);
        
        BuyCapsuleByMachine[machine] = buycapsule;

        buycapsule.setWheelContract(address(machine));
        // machine.setBCC(buycapsule);

        // return WheelsByOwner[msg.sender].length;
    }


    function getMyMachines() public view returns (Wheel[] memory){
        return WheelsByOwner[msg.sender];
    }

}