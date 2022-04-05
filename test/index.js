require("dotenv").config();
// const { expect } = require("chai");
const { ethers, waffle } = require("hardhat");

const provider = waffle.provider;

describe("TEST CASE::", function () {
    it("deploy contract", async function () {
        [deployer] = await ethers.getSigners();

        let term = 90 * 24 * 3600; // 90 days
        const BEP20Contract = await ethers.getContractFactory("BEP20");
        const LATHToken = await BEP20Contract.deploy("Last Doge", "LATH", term);

        await LATHToken.deployed();
        console.log(LATHToken.address);

        const tx1 = await LATHToken.resetTerm(0);
        await tx1.wait();

        const tx2 = await LATHToken.transfer(
            "0xa63a89198bf036115ce142b3a4d84a245e2dbdec",
            10000
        );
        await tx2.wait();
    });

    // it("add tokens", async function () {
    //     // const tokens = [
    //     //     ["FAKE USDT", "FAKE WETH", "FAKE WBTC"],
    //     //     ["USDT", "WETH", "WBTC"],
    //     //     [18, 18, 18],
    //     // ];
    //     // const [owner] = await ethers.getSigners();
    //     const TestTokens = await ethers.getContractFactory("FixedSupplyToken");
    //     // testTokens = await TestTokens.deploy(
    //     //     tokens[0],
    //     //     tokens[1],
    //     //     tokens[2],
    //     //     owner.address
    //     // );
    //     // await testTokens.deployed();
    //     testToken = await TestTokens.deploy();

    //     // addrs = await testTokens.getTokens();
    //     // for (let i = 0; i < addrs.length; i++) {
    //     const tx = await exchange.addToken("FIXED", testToken.address);
    //     await tx.wait();
    //     // }
    //     // expect().to.equal(3);
    // });

    // it("buy tokens", async function () {
    //     //  gasPrice , gasLimit
    //     // const options = { value: };
    //     // ETH price: 1000USDT

    //     for (var i = 0; i < 10; i++) {
    //         var tx = await exchange.buyToken("FIXED", 990 + i, toAtomic(1e15), {
    //             value: toAtomic(1),
    //             gasLimit: "1000000",
    //         });
    //         await tx.wait();
    //         console.log("buyToken ", 990 + i);
    //     }

    //     console.log(
    //         ethers.utils.formatUnits(
    //             await provider.getBalance(deployer.address),
    //             18
    //         )
    //     );
    // });

    // it("sell Test", async () => {
    //     var IRC20ABI = artifacts.readArtifactSync("IRC20").abi;
    //     // var testToken = new ethers.Contract(addrs[0], IRC20ABI, deployer);
    //     var tx = await testToken.approve(
    //         exchange.address,
    //         toAtomic(100000000000)
    //     );
    //     await tx.wait();

    //     for (var i = 0; i < 10; i++) {
    //         var tx = await exchange.sellToken("FIXED", 990 + i, toAtomic(1e15));
    //         await tx.wait();
    //         console.log("sell Token ", 990 + i);
    //     }
    // });
});
