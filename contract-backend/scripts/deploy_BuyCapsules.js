// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// When running the script with `npx hardhat run <script>` you'll find the Hardhat
// Runtime Environment's members available in the global scope.
const hre = require("hardhat");
const { exec } = require("child_process");


async function main() {


  await hre.run('compile');

  console.log('✓\tdeploying BuyCapsules manually...');
  const BuyCapsules = await hre.ethers.getContractFactory("BuyCapsules");
  const buyCapsules = await BuyCapsules.deploy();
  await buyCapsules.deployed();
  console.log("\t\t[ BuyCapsules ] deployed to:", buyCapsules.address);


  console.log('✓✓✓ all done ✓✓✓\n\n');

}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
