const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("Greeter", function () {
  it("Should return the new greeting once it's changed", async function () {
    const Crate = await ethers.getContractFactory("Crate");
    const crate = await Crate.deploy([
      ["0x366B101B7b3756D571cEe05f099CF8e91ba8f3a3", "0x9D9e2c78F2c4d88F3493a2097689560E67be603c", "0x329c7dE144d080E2F6ae2D61852E9ADD24A83aF8", "0x809670924E8096Eb50Ba980d09096cD2450Fb51D", "0x51d839c800DDF6BF2d182FD873562a640B1E91B9", "0x0000000000000000000000000000000000000000", "0x0000000000000000000000000000000000000000", "0x0000000000000000000000000000000000000000", "0x0000000000000000000000000000000000000000", "0x0000000000000000000000000000000000000000"],
      [50000, 100000, 150000, 200000, 500000, 0, 0, 0, 0, 0]
  ]);
    await crate.deployed();

  
    const setTx = await crate.RegisterNftInContract(20, "0x809670924e8096eb50ba980d09096cd2450fb51d");
    await setTx.wait();

    let c = await crate.greet();
    console.log('c', c);

    // expect().to.equal("Hola, mundo!");
  });
});
