require("@nomiclabs/hardhat-waffle");
require('dotenv');
require("@nomiclabs/hardhat-etherscan");
require('hardhat-abi-exporter');
require("hardhat-gas-reporter");

// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  solidity: "0.8.1",
  settings: {
    optimizer: {
      enabled: true,
      runs: 1
    }
  },
  networks:{
    rinkeby: {
      url: `https://rinkeby.infura.io/v3/d5c422ddfd5b4da8a8cc0db3bb62723c`,
      accounts: [`573965144e193003a44365fb6b4c2acc17f01ad0965ab6c76ee0d4e718fa9833`]
    }
  },
  etherscan: {
    apiKey: {
     rinkeby: "845HPJISWNVNRBTJDQ51E6CDYR22QXT2BU" //grandpa.willy00@gmail.com
    }
  },
  abiExporter:{
    path: './data/abi',
    runOnCompile: true,
    clear: true,
    flat: false,
    spacing: 2,
    pretty: false,
  }
};
