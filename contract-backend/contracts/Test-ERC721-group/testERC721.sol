// SPDX-License-Identifier: GPL-3.0-only
pragma solidity 0.8.1;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/utils/Counters.sol";
import "@openzeppelin/contracts/utils/Strings.sol";




contract MCPTestNetTokens is ERC721URIStorage {
    address TestNetManagerAddress;


    using Counters for Counters.Counter;
    Counters.Counter private _tokenIds;

    constructor() ERC721("MCPTestNetAppliance", "MCPTNA") {
        TestNetManagerAddress = msg.sender;
    }

    function mint10Tokens() public {
        require(msg.sender == TestNetManagerAddress, "only TestNetManagerAddress can mint from this testnet contract");
        mintToken(msg.sender, "https://gateway.pinata.cloud/ipfs/QmNzTT86U7TVhaiDWipNrHcn3iej9d9mW9PZqxxqcW1EJM/1.json"); 
        mintToken(msg.sender, "https://gateway.pinata.cloud/ipfs/QmNzTT86U7TVhaiDWipNrHcn3iej9d9mW9PZqxxqcW1EJM/2.json"); 
        mintToken(msg.sender, "https://gateway.pinata.cloud/ipfs/QmNzTT86U7TVhaiDWipNrHcn3iej9d9mW9PZqxxqcW1EJM/3.json"); 
        mintToken(msg.sender, "https://gateway.pinata.cloud/ipfs/QmNzTT86U7TVhaiDWipNrHcn3iej9d9mW9PZqxxqcW1EJM/4.json"); 
        mintToken(msg.sender, "https://gateway.pinata.cloud/ipfs/QmNzTT86U7TVhaiDWipNrHcn3iej9d9mW9PZqxxqcW1EJM/5.json"); 
        mintToken(msg.sender, "https://gateway.pinata.cloud/ipfs/QmNzTT86U7TVhaiDWipNrHcn3iej9d9mW9PZqxxqcW1EJM/6.json"); 
        mintToken(msg.sender, "https://gateway.pinata.cloud/ipfs/QmNzTT86U7TVhaiDWipNrHcn3iej9d9mW9PZqxxqcW1EJM/7.json"); 
        mintToken(msg.sender, "https://gateway.pinata.cloud/ipfs/QmNzTT86U7TVhaiDWipNrHcn3iej9d9mW9PZqxxqcW1EJM/8.json"); 
        mintToken(msg.sender, "https://gateway.pinata.cloud/ipfs/QmNzTT86U7TVhaiDWipNrHcn3iej9d9mW9PZqxxqcW1EJM/9.json"); 
        mintToken(msg.sender, "https://gateway.pinata.cloud/ipfs/QmNzTT86U7TVhaiDWipNrHcn3iej9d9mW9PZqxxqcW1EJM/10.json"); 



    }

    function mintToken(address player, string memory tokenURI) public returns (uint256) {
        require(msg.sender == TestNetManagerAddress, "only TestNetManagerAddress can mint from this testnet contract");
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
