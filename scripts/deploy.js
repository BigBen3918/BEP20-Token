// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// When running the script with `npx hardhat run <script>` you'll find the Hardhat
// Runtime Environment's members available in the global scope.
const { ethers } = require("hardhat");

async function main() {
    // var [owner] = await ethers.getSigners();
    // let network = await owner.provider._networkPromise;

    // NT token deployment
    let term = 90 * 24 * 3600 // 90 days
    const BEP20Contract = await ethers.getContractFactory("BEP20");
    const LATHToken = await BEP20Contract.deploy(
        "Last Doge",
        "LATH",
        term
    );

    await LATHToken.deployed();
    console.log("LATHToken deployed to:", LATHToken.address);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });
