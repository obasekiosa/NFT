const main = async () => {
    const nftContractFactory = await hre.ethers.getContractFactory("MyEpicNFT");
    const nftContract = await nftContractFactory.deploy();
    await nftContract.deployed();
    console.log("Contract deployed to:", nftContract.address);

    let tnx = await nftContract.makeAnEpicNFT();

    await tnx.wait();
    console.log("Minted NFT #1");

    tnx = await nftContract.makeAnEpicNFT();

    await tnx.wait();
    console.log("Minted NFT #2")


};

const runMain = async () => {
    try {
        await main();
        process.exit(0);
    } catch (error) {
        console.log(error);
        process.exit(1);
    }
};


runMain();