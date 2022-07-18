// SPDX-License-Identifier: GPL-3.0-only
pragma solidity 0.8.1;
pragma abicoder v2; 


import "@openzeppelin/contracts/token/ERC20/utils/SafeERC20.sol";
import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/utils/Strings.sol"; //only for debugging...remove when done

interface IERC7211 {
    function mintCapsule(address player) external returns (uint256);
}
interface IERC2011 {
    function transferFrom(address from, address to, uint value) external returns (bool); 
}

contract BuyCapsules { 
    //this contract created by factory
    
    IERC20 token;
    IERC7211 capsuleContract; 
    address owner;
    address factoryAddress;

    uint256 capsuleCost;
    uint256 saleCost;
    uint256 saleBlockDuration;
    uint256 lastSaleBlockStartNumber;


    constructor (address theOwner, address _factoryAddress,  uint256 _CapsuleCost, address _CapsuleTokenAddress){
        factoryAddress = _factoryAddress;
        token =             IERC20(_CapsuleTokenAddress);             
        capsuleCost =       _CapsuleCost;                                                  
        // capsuleContract =   IERC7211(_capsuleContract);             //capsule contract
        owner = theOwner; //factory owns this
    }

    function setWheelContract(address thecontract) external {
        require(msg.sender == factoryAddress, "no");
        capsuleContract =   IERC7211(thecontract); 
    }

    function beginOnSale(uint256 _saleBlockDuration, uint256 _saleCost) public onlyOwner {
        lastSaleBlockStartNumber = block.number;
        saleCost = _saleCost;
        saleBlockDuration = _saleBlockDuration;

    }
    
    function getSaleInfo() public view returns(uint256, uint256, uint256){
        return( saleCost, saleBlockDuration, lastSaleBlockStartNumber );
    }

    function Approvetokens(uint256 _tokenamount) public returns(bool){
        token.approve(address(this), _tokenamount);
        return true;
    }
    
    modifier onlyOwner() {
        require(msg.sender == owner, "Not owner");
        _;
    }
    
 
    function GetCapsuleInfo() public view returns(uint256, IERC7211, IERC20,address ){   //capsuleCost, capsuleContract, token, owner
        return (capsuleCost, capsuleContract, token, owner);
    }

    function GetAllowance() public view returns(uint256){
        return token.allowance(msg.sender, address(this));
    }


    function buyCapsule(uint256 _tokenamount, uint256 _capsuleQty) public returns(bool) {
        uint256 qq = token.allowance( msg.sender, address(this) );

        require(_tokenamount <= (qq * _capsuleQty), "Please approve tokens before transferring"); 
        require( (_tokenamount == (capsuleCost * _capsuleQty) ) , "incorrect total price for capsule cost");
        
        
        token.transferFrom(msg.sender, address(this), _tokenamount);



        for (uint i = 0; i < _capsuleQty; i++){
            capsuleContract.mintCapsule(msg.sender);
        }
        return true;
    }

    function GetContractTokenBalance() public view returns(uint256){
        return token.balanceOf(address(this));
    }
}
