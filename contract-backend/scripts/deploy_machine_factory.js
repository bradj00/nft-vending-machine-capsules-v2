// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// When running the script with `npx hardhat run <script>` you'll find the Hardhat
// Runtime Environment's members available in the global scope.
const hre = require("hardhat");
const { exec } = require("child_process");


async function main() {


  await hre.run('compile'); 

  console.log('✓\tdeploying [ Machine Factory ] manually...');
  const MachineFactory = await hre.ethers.getContractFactory("MachineFactory");
  const machineFactory = await MachineFactory.deploy();
  await machineFactory.deployed();
  console.log("\t\t[ Machine Factory ] deployed to:", machineFactory.address);



//   console.log('✓ '+('Verifying [ Machine ] contract')+'...');
//  exec("npx hardhat verify "+capsule.address+' --network rinkeby --constructor-args ./scripts/arguments.js', (error, stdout, stderr) => {
//     if (error) {
//         console.log(`error: ${error.message}`);
//         return;
//     }
//     if (stderr) {
//         console.log(`stderr: ${stderr}`);
//         return;
//     }
//     console.log(`stdout: ${stdout}`);
//   });
  console.log('✓✓✓ all done ✓✓✓\n\n');

}


main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
