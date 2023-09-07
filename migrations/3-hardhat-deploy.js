import {ethers} from "hardhat";

require("hardhat/config");

async function deploy() {
    const {ethers} = require("hardhat");
    const flashloanContractFactory = await ethers.getContractFactory("Flashloan");
    const flashloan = await flashloanContractFactory.deploy();
    await flashloan.deployed();
    console.log(`Flashloan Contract was deployed to ${flashloan.address}`);
}
deploy();