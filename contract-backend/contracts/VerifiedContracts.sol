// SPDX-License-Identifier: GPL-3.0-only
pragma solidity 0.8.1;

contract VerifiedContracts {
    address SiteAdmin;
    constructor() {
        SiteAdmin = msg.sender; //created and set when machineFactory is deployed
    }

    event VerifiedStatusChange(address tokenContract, uint8 newStatus);  

    modifier onlySiteAdmin() {
        require(msg.sender == SiteAdmin, "Not Site Admin");
        _;
    }


    mapping (address => uint8) public verifiedStatus;
    
    
    function setVerified(address tokenContract, uint8 theStatus) public onlySiteAdmin {
        verifiedStatus[tokenContract] = theStatus;
        emit VerifiedStatusChange(tokenContract, theStatus);
    }



}