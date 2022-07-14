// contracts/GameItem.sol
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/utils/Counters.sol";
import "@openzeppelin/contracts/utils/Strings.sol";




contract CommonGray is ERC721URIStorage {
    using Counters for Counters.Counter;
    Counters.Counter private _tokenIds;


    constructor() ERC721("CommonGray", "COMMON") {
        for (uint i = 1000; i < 1010; i++){
            string memory z;
            z = Strings.toString(i);
            string memory temp = append("https://gateway.pinata.cloud/ipfs/QmSMnzGKWuFX2eDScHxjTDsQSRuhUZxpvrwPqGraWfWqrr/common/common-", z, ".json");
            mintToken(0x9A3A8Db1c09cE2771A5e170a01a2A3eFB93ADA17, temp); //mint some tokens to an address upon creation
        }
    }
    
    function mint5ToTarget(address target) public{
        for (uint i = 0; i < 5; i++){
            uint256 newItemId = _tokenIds.current();
            newItemId = (newItemId + 1)+1000;
            string memory z;
            z = Strings.toString(newItemId);
            string memory temp = append("https://gateway.pinata.cloud/ipfs/QmSMnzGKWuFX2eDScHxjTDsQSRuhUZxpvrwPqGraWfWqrr/common/common-", z, ".json");
            mintToken(target, temp); 
        }
    }
    function append(string memory a, string memory b, string memory c) internal pure returns (string memory ) {

        return string(abi.encodePacked(a, b, c));

    }


    function mintToken(address player, string memory tokenURI)
        public
        returns (uint256)
    {
        _tokenIds.increment();

        uint256 newItemId = _tokenIds.current();
        _mint(player, newItemId);
        _setTokenURI(newItemId, tokenURI);

        return newItemId;
    }

    function getMaxId() public view returns(Counters.Counter memory){
        return _tokenIds;
    }

    // function getAllIds() public view returns ( Counters.Counter [] memory) {
    //    uint256[] memory = [];
    // }
}

contract UncommonGreen is ERC721URIStorage {
    using Counters for Counters.Counter;
    Counters.Counter private _tokenIds;

    constructor() ERC721("UncommonGreen", "UNCOMMON") {
        for (uint i = 1000; i < 1010; i++){
            string memory z;
            z = Strings.toString(i);
            string memory temp = append("https://gateway.pinata.cloud/ipfs/QmSMnzGKWuFX2eDScHxjTDsQSRuhUZxpvrwPqGraWfWqrr/uncommon/uncommon-", z, ".json");
            mintToken(0x9A3A8Db1c09cE2771A5e170a01a2A3eFB93ADA17, temp); //mint some tokens to an address upon creation
        }
    }
    function mint5ToTarget(address target) public{
        for (uint i = 0; i < 5; i++){
            uint256 newItemId = _tokenIds.current();
            newItemId = (newItemId + 1)+1000;
            string memory z;
            z = Strings.toString(newItemId);
            string memory temp = append("https://gateway.pinata.cloud/ipfs/QmSMnzGKWuFX2eDScHxjTDsQSRuhUZxpvrwPqGraWfWqrr/uncommon/uncommon-", z, ".json");
            mintToken(target, temp); 
        }
    }

    function append(string memory a, string memory b, string memory c) internal pure returns (string memory ) {

        return string(abi.encodePacked(a, b, c));

    }

    function mintToken(address player, string memory tokenURI)
        public
        returns (uint256)
    {
        _tokenIds.increment();

        uint256 newItemId = _tokenIds.current();
        _mint(player, newItemId);
        _setTokenURI(newItemId, tokenURI);

        return newItemId;
    }

    function getMaxId() public view returns(Counters.Counter memory){
        return _tokenIds;
    }

    // function getAllIds() public view returns ( Counters.Counter [] memory) {
    //    uint256[] memory = [];
    // }
}

contract RareBlue is ERC721URIStorage {
    using Counters for Counters.Counter;
    Counters.Counter private _tokenIds;

    constructor() ERC721("RareBlue", "RARE") {
        for (uint i = 1000; i < 1010; i++){
            string memory z;
            z = Strings.toString(i);
            string memory temp = append("https://gateway.pinata.cloud/ipfs/QmSMnzGKWuFX2eDScHxjTDsQSRuhUZxpvrwPqGraWfWqrr/rare/rare-", z, ".json");
            mintToken(0x9A3A8Db1c09cE2771A5e170a01a2A3eFB93ADA17, temp); //mint some tokens to an address upon creation
        }
    }
    
    function mint5ToTarget(address target) public{
        for (uint i = 0; i < 5; i++){
            uint256 newItemId = _tokenIds.current();
            newItemId = (newItemId + 1)+1000;
            string memory z;
            z = Strings.toString(newItemId);
            string memory temp = append("https://gateway.pinata.cloud/ipfs/QmSMnzGKWuFX2eDScHxjTDsQSRuhUZxpvrwPqGraWfWqrr/rare/rare-", z, ".json");
            mintToken(target, temp); 
        }
    }
    function append(string memory a, string memory b, string memory c) internal pure returns (string memory ) {

        return string(abi.encodePacked(a, b, c));

    }

    function mintToken(address player, string memory tokenURI)
        public
        returns (uint256)
    {
        _tokenIds.increment();

        uint256 newItemId = _tokenIds.current();
        _mint(player, newItemId);
        _setTokenURI(newItemId, tokenURI);

        return newItemId;
    }

    function getMaxId() public view returns(Counters.Counter memory){
        return _tokenIds;
    }

    // function getAllIds() public view returns ( Counters.Counter [] memory) {
    //    uint256[] memory = [];
    // }
}
contract EpicPurple is ERC721URIStorage {
    using Counters for Counters.Counter;
    Counters.Counter private _tokenIds;

    constructor() ERC721("EpicPurple", "EPIC") {
        for (uint i = 1000; i < 1010; i++){
            string memory z;
            z = Strings.toString(i);
            string memory temp = append("https://gateway.pinata.cloud/ipfs/QmSMnzGKWuFX2eDScHxjTDsQSRuhUZxpvrwPqGraWfWqrr/epic/epic-", z, ".json");
            mintToken(0x9A3A8Db1c09cE2771A5e170a01a2A3eFB93ADA17, temp); //mint some tokens to an address upon creation
        }
    }
    
    function mint5ToTarget(address target) public{
        for (uint i = 0; i < 5; i++){
            uint256 newItemId = _tokenIds.current();
            newItemId = (newItemId + 1)+1000;
            string memory z;
            z = Strings.toString(newItemId);
            string memory temp = append("https://gateway.pinata.cloud/ipfs/QmSMnzGKWuFX2eDScHxjTDsQSRuhUZxpvrwPqGraWfWqrr/epic/epic-", z, ".json");
            mintToken(target, temp); 
        }
    }
    function append(string memory a, string memory b, string memory c) internal pure returns (string memory ) {

        return string(abi.encodePacked(a, b, c));

    }

    function mintToken(address player, string memory tokenURI)
        public
        returns (uint256)
    {
        _tokenIds.increment();

        uint256 newItemId = _tokenIds.current();
        _mint(player, newItemId);
        _setTokenURI(newItemId, tokenURI);

        return newItemId;
    }

    function getMaxId() public view returns(Counters.Counter memory){
        return _tokenIds;
    }

    // function getAllIds() public view returns ( Counters.Counter [] memory) {
    //    uint256[] memory = [];
    // }
}
contract LegendaryGold is ERC721URIStorage {
    using Counters for Counters.Counter;
    Counters.Counter private _tokenIds;

    constructor() ERC721("LegendaryGold", "LEGENDARY") {
        for (uint i = 1000; i < 1010; i++){
            string memory z;
            z = Strings.toString(i);
            string memory temp = append("https://gateway.pinata.cloud/ipfs/QmSMnzGKWuFX2eDScHxjTDsQSRuhUZxpvrwPqGraWfWqrr/legendary/legendary-", z, ".json");
            mintToken(0x9A3A8Db1c09cE2771A5e170a01a2A3eFB93ADA17, temp); //mint some tokens to an address upon creation
        }
    }
    
    function mint5ToTarget(address target) public{
        for (uint i = 0; i < 5; i++){
            uint256 newItemId = _tokenIds.current();
            newItemId = (newItemId + 1)+1000;
            string memory z;
            z = Strings.toString(newItemId);
            string memory temp = append("https://gateway.pinata.cloud/ipfs/QmSMnzGKWuFX2eDScHxjTDsQSRuhUZxpvrwPqGraWfWqrr/legendary/legendary-", z, ".json");
            mintToken(target, temp); 
        }
    }
    function append(string memory a, string memory b, string memory c) internal pure returns (string memory ) {

        return string(abi.encodePacked(a, b, c));

    }

    function mintToken(address player, string memory tokenURI)
        public
        returns (uint256)
    {
        _tokenIds.increment();

        uint256 newItemId = _tokenIds.current();
        _mint(player, newItemId);
        _setTokenURI(newItemId, tokenURI);

        return newItemId;
    }

    function getMaxId() public view returns(Counters.Counter memory){
        return _tokenIds;
    }

    // function getAllIds() public view returns ( Counters.Counter [] memory) {
    //    uint256[] memory = [];
    // }
}



contract ChatBubble is ERC721URIStorage {
    using Counters for Counters.Counter;
    Counters.Counter private _tokenIds;


    constructor() ERC721("ChatBubble", "CHATBUB") {
        for (uint i = 1000; i < 1010; i++){
            string memory z;
            z = Strings.toString(i);
            string memory temp = append("https://gateway.pinata.cloud/ipfs/QmSCGYt1xEfH5x1tAmpTYBGCpxbNQ7jT5xDg66NkX6D5te/chatBubble/chatBubble-", z, ".json");
            mintToken(0x9A3A8Db1c09cE2771A5e170a01a2A3eFB93ADA17, temp); //mint some tokens to an address upon creation
        }
    }
    
    function mint5ToTarget(address target) public{
        for (uint i = 0; i < 5; i++){
            uint256 newItemId = _tokenIds.current();
            newItemId = (newItemId + 1)+1000;
            string memory z;
            z = Strings.toString(newItemId);
            string memory temp = append("https://gateway.pinata.cloud/ipfs/QmSCGYt1xEfH5x1tAmpTYBGCpxbNQ7jT5xDg66NkX6D5te/chatBubble/chatBubble-", z, ".json");
            mintToken(target, temp); 
        }
    }
    function append(string memory a, string memory b, string memory c) internal pure returns (string memory ) {

        return string(abi.encodePacked(a, b, c));

    }


    function mintToken(address player, string memory tokenURI)
        public
        returns (uint256)
    {
        _tokenIds.increment();

        uint256 newItemId = _tokenIds.current();
        _mint(player, newItemId);
        _setTokenURI(newItemId, tokenURI);

        return newItemId;
    }

    function getMaxId() public view returns(Counters.Counter memory){
        return _tokenIds;
    }

    // function getAllIds() public view returns ( Counters.Counter [] memory) {
    //    uint256[] memory = [];
    // }
}

contract Square is ERC721URIStorage {
    using Counters for Counters.Counter;
    Counters.Counter private _tokenIds;

    constructor() ERC721("Square", "SQUARE") {
        for (uint i = 1000; i < 1010; i++){
            string memory z;
            z = Strings.toString(i);
            string memory temp = append("https://gateway.pinata.cloud/ipfs/QmSCGYt1xEfH5x1tAmpTYBGCpxbNQ7jT5xDg66NkX6D5te/square/square-", z, ".json");
            mintToken(0x9A3A8Db1c09cE2771A5e170a01a2A3eFB93ADA17, temp); //mint some tokens to an address upon creation
        }
    }
    function mint5ToTarget(address target) public{
        for (uint i = 0; i < 5; i++){
            uint256 newItemId = _tokenIds.current();
            newItemId = (newItemId + 1)+1000;
            string memory z;
            z = Strings.toString(newItemId);
            string memory temp = append("https://gateway.pinata.cloud/ipfs/QmSCGYt1xEfH5x1tAmpTYBGCpxbNQ7jT5xDg66NkX6D5te/square/square-", z, ".json");
            mintToken(target, temp); 
        }
    }

    function append(string memory a, string memory b, string memory c) internal pure returns (string memory ) {

        return string(abi.encodePacked(a, b, c));

    }

    function mintToken(address player, string memory tokenURI)
        public
        returns (uint256)
    {
        _tokenIds.increment();

        uint256 newItemId = _tokenIds.current();
        _mint(player, newItemId);
        _setTokenURI(newItemId, tokenURI);

        return newItemId;
    }

    function getMaxId() public view returns(Counters.Counter memory){
        return _tokenIds;
    }

    // function getAllIds() public view returns ( Counters.Counter [] memory) {
    //    uint256[] memory = [];
    // }
}
contract SquiggleLine is ERC721URIStorage {
    using Counters for Counters.Counter;
    Counters.Counter private _tokenIds;

    constructor() ERC721("SquiggleLine", "SQUIGGLE") {
        for (uint i = 1000; i < 1010; i++){
            string memory z;
            z = Strings.toString(i);
            string memory temp = append("https://gateway.pinata.cloud/ipfs/QmSCGYt1xEfH5x1tAmpTYBGCpxbNQ7jT5xDg66NkX6D5te/squiggleLine/squiggleLine-", z, ".json");
            mintToken(0x9A3A8Db1c09cE2771A5e170a01a2A3eFB93ADA17, temp); //mint some tokens to an address upon creation
        }
    }
    
    function mint5ToTarget(address target) public{
        for (uint i = 0; i < 5; i++){
            uint256 newItemId = _tokenIds.current();
            newItemId = (newItemId + 1)+1000;
            string memory z;
            z = Strings.toString(newItemId);
            string memory temp = append("https://gateway.pinata.cloud/ipfs/QmSCGYt1xEfH5x1tAmpTYBGCpxbNQ7jT5xDg66NkX6D5te/squiggleLine/squiggleLine-", z, ".json");
            mintToken(target, temp); 
        }
    }
    function append(string memory a, string memory b, string memory c) internal pure returns (string memory ) {

        return string(abi.encodePacked(a, b, c));

    }

    function mintToken(address player, string memory tokenURI)
        public
        returns (uint256)
    {
        _tokenIds.increment();

        uint256 newItemId = _tokenIds.current();
        _mint(player, newItemId);
        _setTokenURI(newItemId, tokenURI);

        return newItemId;
    }

    function getMaxId() public view returns(Counters.Counter memory){
        return _tokenIds;
    }

    // function getAllIds() public view returns ( Counters.Counter [] memory) {
    //    uint256[] memory = [];
    // }
}
contract Star is ERC721URIStorage {
    using Counters for Counters.Counter;
    Counters.Counter private _tokenIds;

    constructor() ERC721("Star", "STAR") {
        for (uint i = 1000; i < 1010; i++){
            string memory z;
            z = Strings.toString(i);
            string memory temp = append("https://gateway.pinata.cloud/ipfs/QmSCGYt1xEfH5x1tAmpTYBGCpxbNQ7jT5xDg66NkX6D5te/star/star-", z, ".json");
            mintToken(0x9A3A8Db1c09cE2771A5e170a01a2A3eFB93ADA17, temp); //mint some tokens to an address upon creation
        }
    }
    
    function mint5ToTarget(address target) public{
        for (uint i = 0; i < 5; i++){
            uint256 newItemId = _tokenIds.current();
            newItemId = (newItemId + 1)+1000;
            string memory z;
            z = Strings.toString(newItemId);
            string memory temp = append("https://gateway.pinata.cloud/ipfs/QmSCGYt1xEfH5x1tAmpTYBGCpxbNQ7jT5xDg66NkX6D5te/star/star-", z, ".json");
            mintToken(target, temp); 
        }
    }
    function append(string memory a, string memory b, string memory c) internal pure returns (string memory ) {

        return string(abi.encodePacked(a, b, c));

    }

    function mintToken(address player, string memory tokenURI)
        public
        returns (uint256)
    {
        _tokenIds.increment();

        uint256 newItemId = _tokenIds.current();
        _mint(player, newItemId);
        _setTokenURI(newItemId, tokenURI);

        return newItemId;
    }

    function getMaxId() public view returns(Counters.Counter memory){
        return _tokenIds;
    }

    // function getAllIds() public view returns ( Counters.Counter [] memory) {
    //    uint256[] memory = [];
    // }
}
contract Triangle is ERC721URIStorage {
    using Counters for Counters.Counter;
    Counters.Counter private _tokenIds;

    constructor() ERC721("Triangle", "TRIANGLE") {
        for (uint i = 1000; i < 1010; i++){
            string memory z;
            z = Strings.toString(i);
            string memory temp = append("https://gateway.pinata.cloud/ipfs/QmSCGYt1xEfH5x1tAmpTYBGCpxbNQ7jT5xDg66NkX6D5te/triangle/triangle-", z, ".json");
            mintToken(0x9A3A8Db1c09cE2771A5e170a01a2A3eFB93ADA17, temp); //mint some tokens to an address upon creation
        }
    }
    
    function mint5ToTarget(address target) public{
        for (uint i = 0; i < 5; i++){
            uint256 newItemId = _tokenIds.current();
            newItemId = (newItemId + 1)+1000;
            string memory z;
            z = Strings.toString(newItemId);
            string memory temp = append("https://gateway.pinata.cloud/ipfs/QmSCGYt1xEfH5x1tAmpTYBGCpxbNQ7jT5xDg66NkX6D5te/triangle/triangle-", z, ".json");
            mintToken(target, temp); 
        }
    }
    function append(string memory a, string memory b, string memory c) internal pure returns (string memory ) {

        return string(abi.encodePacked(a, b, c));

    }

    function mintToken(address player, string memory tokenURI)
        public
        returns (uint256)
    {
        _tokenIds.increment();

        uint256 newItemId = _tokenIds.current();
        _mint(player, newItemId);
        _setTokenURI(newItemId, tokenURI);

        return newItemId;
    }

    function getMaxId() public view returns(Counters.Counter memory){
        return _tokenIds;
    }

    // function getAllIds() public view returns ( Counters.Counter [] memory) {
    //    uint256[] memory = [];
    // }
}