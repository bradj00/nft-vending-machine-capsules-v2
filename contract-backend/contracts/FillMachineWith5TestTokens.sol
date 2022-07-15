// SPDX-License-Identifier: GPL-3.0-only
pragma solidity 0.8.0;

import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "./ERC721_Test_Tokens.sol";


contract FillMachineWith5TestTokens is ERC721URIStorage, CommonGray {

    address[] tokenAddresses = [ 0xB5fe4FA23d661efA35155bC7661A052A0ef4AE45, 0xa277Dd3Af4E3ED61636d5B2117658f886BB3d682,0x0aDA8a96c7c592fd04CC0c71404D02982a9711e3,0x8aA0B84Ca4B0a3FBCb6e7Dea1156f419bd7663B2,0xFB956a542a2eA527B6dd826A80e323718C867dc6,0x4C019b7aD626fEe05d312AD130cc584bD07056E6,0xf23183F094C09adD12b7C21cb68733DbfF926309,0xb32E3dE5E6da9aaC9680393a78eb735e3dbA3aa5,0x23283cb354139a3d119DAefc6640a61D9687a48E,0x830821Deb0d2877513E12241eB3f59D2dAE8c5DB ];


    function mint5FromAllTestTokens(address MachineAddressTarget) public {
        for (uint q =0; q < tokenAddresses.length; q++){
            CommonGray nftContract;
            nftContract = CommonGray(tokenAddresses[q]);
            nftContract.mint5ToTarget(MachineAddressTarget);
        }

    }

}