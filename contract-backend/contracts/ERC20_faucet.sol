// SPDX-License-Identifier: GPL-3.0-only
pragma solidity 0.8.1;
import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract ERC20_faucet {

    function faucetDrip (address receipient) public {


        ERC20 tokenContract;
        tokenContract = ERC20(0x18d5C20bEa1d40d02642C033bf6C7044Ebd6dFEB); // New Shiny Emeralds
        
        //if our EMERALD balance  >= 500, send 500 to receipient
        require((tokenContract.balanceOf(address(this)) >= 500000000000000000000) , "token balance is not great enough. Please fill the contract");
                                            
        tokenContract.transfer(receipient, 500000000000000000000);

    }
    function getFaucetBalance () public view returns (uint256){
        ERC20 tokenContract;
        tokenContract = ERC20(0x18d5C20bEa1d40d02642C033bf6C7044Ebd6dFEB); // New Shiny Emeralds
        
        return(tokenContract.balanceOf(address(this)) );
    }
}