// SPDX-License-Identifier: GPL-3.0-only
pragma solidity 0.8.1;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/utils/Counters.sol";
import "@openzeppelin/contracts/utils/Strings.sol";




contract MCPTestNetCitizens is ERC721URIStorage {
    address TestNetManagerAddress;


    using Counters for Counters.Counter;
    Counters.Counter private _tokenIds;

    constructor() ERC721("MCPTestNetCitizen", "MCPTNC") {
        TestNetManagerAddress = msg.sender;
        for (uint q = 0; q < 2000; q++){
             _tokenIds.increment();
        }
    }

    function mint10Tokens(address toAddress) public {
        // require(msg.sender == TestNetManagerAddress, "only TestNetManagerAddress can mint from this testnet contract");

        // mintToken(toAddress, "https://ipfs.moralis.io:2053/ipfs/QmcHBoPvwFB1iPLhnQeMuqbjotHkHvQyuopfCHCf88Vzye"); 
        mintToken(toAddress, "https://gateway.pinata.cloud/ipfs/QmfNtfsZyUqBJmaqXBzEeGDwV7bGJhDTLf2aoe9Yzbpkp4/1.json"); 
        mintToken(toAddress, "https://gateway.pinata.cloud/ipfs/QmfNtfsZyUqBJmaqXBzEeGDwV7bGJhDTLf2aoe9Yzbpkp4/2.json"); 
        mintToken(toAddress, "https://gateway.pinata.cloud/ipfs/QmfNtfsZyUqBJmaqXBzEeGDwV7bGJhDTLf2aoe9Yzbpkp4/3.json"); 
        mintToken(toAddress, "https://gateway.pinata.cloud/ipfs/QmfNtfsZyUqBJmaqXBzEeGDwV7bGJhDTLf2aoe9Yzbpkp4/4.json"); 
        mintToken(toAddress, "https://gateway.pinata.cloud/ipfs/QmfNtfsZyUqBJmaqXBzEeGDwV7bGJhDTLf2aoe9Yzbpkp4/5.json"); 
        mintToken(toAddress, "https://gateway.pinata.cloud/ipfs/QmfNtfsZyUqBJmaqXBzEeGDwV7bGJhDTLf2aoe9Yzbpkp4/6.json"); 
        mintToken(toAddress, "https://gateway.pinata.cloud/ipfs/QmfNtfsZyUqBJmaqXBzEeGDwV7bGJhDTLf2aoe9Yzbpkp4/7.json"); 
        mintToken(toAddress, "https://gateway.pinata.cloud/ipfs/QmfNtfsZyUqBJmaqXBzEeGDwV7bGJhDTLf2aoe9Yzbpkp4/8.json"); 
        mintToken(toAddress, "https://gateway.pinata.cloud/ipfs/QmfNtfsZyUqBJmaqXBzEeGDwV7bGJhDTLf2aoe9Yzbpkp4/9.json"); 
        mintToken(toAddress, "https://gateway.pinata.cloud/ipfs/QmfNtfsZyUqBJmaqXBzEeGDwV7bGJhDTLf2aoe9Yzbpkp4/10.json"); 




    }

    function mintToken(address player, string memory tokenURI) public returns (uint256) {
        // require(msg.sender == TestNetManagerAddress, "only TestNetManagerAddress can mint from this testnet contract");
        _tokenIds.increment();

        uint256 newItemId = _tokenIds.current();
        _mint(player, newItemId);
        _setTokenURI(newItemId, tokenURI);

        return newItemId;
    }

    function getMaxId() public view returns(Counters.Counter memory){
        return _tokenIds;
    }

}
