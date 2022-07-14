// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// When running the script with `npx hardhat run <script>` you'll find the Hardhat
// Runtime Environment's members available in the global scope.
const hre = require("hardhat");
const { exec } = require("child_process");

const addy0 = "0xFB956a542a2eA527B6dd826A80e323718C867dc6"; //legendary
const addy1 = "0x8aA0B84Ca4B0a3FBCb6e7Dea1156f419bd7663B2"; //epic
const addy2 = "0x0aDA8a96c7c592fd04CC0c71404D02982a9711e3"; //rare
const addy3 = "0xa277Dd3Af4E3ED61636d5B2117658f886BB3d682"; //uncommon
const addy4 = "0xB5fe4FA23d661efA35155bC7661A052A0ef4AE45"; //common
const addy5 = "0x830821Deb0d2877513E12241eB3f59D2dAE8c5DB"; //square
const addy6 = "0x23283cb354139a3d119DAefc6640a61D9687a48E"; //star
const addy7 = "0xb32E3dE5E6da9aaC9680393a78eb735e3dbA3aa5"; //triangle
const addy8 = "0xf23183F094C09adD12b7C21cb68733DbfF926309"; //disabled slot
const addy9 = "0x4C019b7aD626fEe05d312AD130cc584bD07056E6"; //disabled slot

//out of 1,000,000
const odds0 = 50000;  // ( 50000 / 1,000,000) which is  5% chance   legendary
const odds1 = 100000; // (100000 / 1,000,000) which is 10% chance   epic
const odds2 = 100000; // (150000 / 1,000,000) which is 15% chance   rare
const odds3 = 150000; // (200000 / 1,000,000) which is 20% chance   uncommon
const odds4 = 150000; // (500000 / 1,000,000) which is 50% chance   common
const odds5 = 100000;
const odds6 = 170000;
const odds7 = 130000;
const odds8 = 25000;
const odds9 = 25000; 
 

async function main() {
  let total = (odds0 + odds1 + odds2 + odds3 + odds4 + odds5 + odds6 + odds7 + odds8 + odds9);
  if ( total != 1000000 ){
    console.log('incorrect odds set.\n[10000000] expected \n['+total+'] total')
    process.exit(1)
  }


  await hre.run('compile');

  console.log('✓\tdeploying Machine manually...');
  const Capsule = await hre.ethers.getContractFactory("Machine");
  const capsule = await Capsule.deploy([addy0, addy1, addy2, addy3, addy4, addy5, addy6, addy7, addy8, addy9], [odds0, odds1, odds2, odds3, odds4, odds5, odds6, odds7, odds8, odds9]);
  await capsule.deployed();
  console.log("\t\t[ Machine ] deployed to:", capsule.address);



  console.log('✓ '+('Verifying [ Machine ] contract')+'...');
  // console.log('command: \t'+"npx hardhat verify "+capsule.address+' --network rinkeby ['+addy0+', '+addy1+', '+addy2+', '+addy3+', '+addy4+', '+addy5+', '+addy6+', '+addy7+', '+addy8+', '+addy9+'] ['+odds0+', '+odds1+', '+odds2+', '+odds3+', '+odds4+', '+odds5+', '+odds6+', '+odds7+', '+odds8+', '+odds9+']');
  exec("npx hardhat verify "+capsule.address+' --network rinkeby --constructor-args ./scripts/arguments.js', (error, stdout, stderr) => {
    if (error) {
        console.log(`error: ${error.message}`);
        return;
    }
    if (stderr) {
        console.log(`stderr: ${stderr}`);
        return;
    }
    console.log(`stdout: ${stdout}`);
  });
  // exec("npx hardhat verify "+capsule.address+' --network rinkeby ['+addy0+', '+addy1+', '+addy2+', '+addy3+', '+addy4+', '+addy5+', '+addy6+', '+addy7+', '+addy8+', '+addy9+', '+odds0+'] ['+odds1+', '+odds2+', '+odds3+', '+odds4+', '+odds5+', '+odds6+', '+odds7+', '+odds8+', '+odds9+']', (error, stdout, stderr) => {
  //   if (error) {
  //       console.log(`error: ${error.message}`);
  //       return;
  //   }
  //   if (stderr) {
  //       console.log(`stderr: ${stderr}`);
  //       return;
  //   }
  //   console.log(`stdout: ${stdout}`);
  // });
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
