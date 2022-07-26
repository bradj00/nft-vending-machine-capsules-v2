// SPDX-License-Identifier: GPL-3.0-only
pragma solidity 0.8.1;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";



contract BulkDepositer {

function makeBulkDeposit (address tokenContractAddress, uint256 [] memory tokenIdList, address sendTo) public {
    ERC721 nftContract;
    nftContract = ERC721( tokenContractAddress );
    for (uint256 i = 0; i < tokenIdList.length; i++){
        require( nftContract.ownerOf(tokenIdList[i]) == msg.sender, "must own this token");
        nftContract.transferFrom( msg.sender, sendTo, tokenIdList[i] ); //IS NOT USING SafeTransferFrom() !!!!!! WARNING
    }

}

}