// SPDX-License-Identifier: GPL-3.0-only
pragma solidity 0.8.1;

import "./Machine.sol";
import "./MiddleData.sol"; 
import "./BuyCapsules.sol"; 

contract MachineFactory is MiddleData {
    Machine[] private _machines;
    mapping(address => Machine[]) public MachinesByOwner;
    mapping(address => uint8) public userAcceptEula;
    event MachineUsed(address machineAddress, bytes32 requestId, uint256 theNumber, uint256 nftTokenId, uint256 winningSlot);   
    event PullRequest(address machineAddress, bytes32 requestId, address requesterAddress); 

    mapping(Machine => BuyCapsules) public BuyCapsuleByMachine;


   //add security so only machines created by the factory can call these
   /////////////////////////////////////////////////
   function eventEmitMachineUsed(address _machineAddress, bytes32 _requestId, uint256 theNumber, uint256 _nftTokenId, uint256 _winningSlot) public {
       emit MachineUsed(_machineAddress, _requestId, theNumber, _nftTokenId, _winningSlot);
   }
   function eventEmitPullRequest(address _machineAddress, bytes32 _requestId, address _requesterAddress) public {
       emit PullRequest(_machineAddress, _requestId, _requesterAddress);
   }
   /////////////////////////////////////////////////

   function getuserAcceptEula(address user) public view returns (uint){
       return userAcceptEula[user];
   }

   function getEulaContentId () public pure returns(string memory){
       return("some content ID for an IPFS text file"); //content ID to pull from IPFS node
   }

   function signEula(bool signTrue) public {
       if ( (signTrue == true)&&(userAcceptEula[msg.sender] == 0) ){
        userAcceptEula[msg.sender] = 1;
       }
   }

   function createMachine(SlotStruct memory slots1, OddsStruct memory odds1, string memory MachineName, uint256 CapsuleCost, address CapsuleTokenAddress) public 
    {
        require (userAcceptEula[msg.sender] == 1, "creator must accept terms");
        Machine machine = new Machine(
            slots1,
            odds1,
            msg.sender,
            address(this),
            MachineName
        );
        _machines.push(machine);
        MachinesByOwner[msg.sender].push(machine);
        
        BuyCapsules buycapsule = new BuyCapsules(
            msg.sender,
            address(machine),
            CapsuleCost,
            CapsuleTokenAddress
        );
        BuyCapsuleByMachine[machine] = buycapsule;
        
    }


    function BuyCapsulesByMachineAddress(Machine machineAddress) public view returns (BuyCapsules){
        return( BuyCapsuleByMachine[machineAddress] );
    }

    function allMachines() public view returns (Machine[] memory coll)
    {
        coll = _machines;
        return coll;
    }

    function getMyMachines() public view returns (Machine[] memory){
        return MachinesByOwner[msg.sender];
    }

}