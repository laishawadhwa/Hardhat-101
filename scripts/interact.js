
const { ethers } = require("hardhat");

async function main() {
    console.log('Getting the ARGRAM token contract...\n');
    const contractAddress = ''; // Deployed contract Address
    const argramToken = await ethers.getContractAt('ArGram', contractAddress);
    const signers = await ethers.getSigners();
    console.log("Fetched the signers", signers)

    // name()
    console.log('Querying NFT collection name...');
    const name = await argramToken.name();
    console.log(`Token Collection Name: ${name}\n`);
    // symbol()
    console.log('Querying NFT collection symbol...');
    const symbol = await argramToken.symbol();
    console.log(`Token Collection Symbol: ${symbol}\n`);

    // Mint new NFTs from the collection using custom function mintCollectionNFT()
    console.log('Minting a new NFT from the collection to the contractOwner...');
    const contractOwner = signers[0].address;
    const initialMintCount = 2; // Number of NFTs to mint
    let initialMint = [];
    for (let i = 1; i <= initialMintCount; i++) {
        let tx = await argramToken.mintCollectionNFT(signers[0].address, i.toString());
        await tx.wait(); // wait for this tx to finish to avoid nonce issues
        initialMint.push(i.toString());
    }
    console.log(`${symbol} NFT with tokenIds ${initialMint} and minted to: ${contractOwner}\n`);

    // balanceOf()
    console.log(`Querying the balance count of contractOwner ${contractOwner}...`);
    let contractOwnerBalances = await argramToken.balanceOf(contractOwner);
    console.log(`${contractOwner} has ${contractOwnerBalances} NFTs from this ${symbol} collection\n`)

     // ownerOf()
    const NFT1 = initialMint[0];
    console.log(`Querying the owner of ${symbol}#${NFT1}...`);
    const owner = await argramToken.ownerOf(NFT1);
    console.log(`Owner of NFT ${symbol} ${NFT1}: ${owner}\n`);

    // safeTransferFrom()
    const collector = ""; // Address you want to mint to 
    console.log(`Transferring ${symbol}#${NFT1} to collector ${collector}...`);
    // safeTransferFrom() is overloaded (ie. multiple functions with same name) hence differing syntax
    await argramToken["safeTransferFrom(address,address,uint256)"](contractOwner, collector, NFT1);
    console.log(`${symbol}#${NFT1} transferred from ${contractOwner} to ${collector}`);
    console.log(`Querying the owner of ${symbol}#${NFT1}...`);
    let NFT1Owner = await argramToken.ownerOf(NFT1);
    console.log(`Owner of ${symbol}#${NFT1}: ${NFT1Owner}\n`);

    // const NFT2 = initialMint[0];
    // console.log(`Querying the owner of ${symbol}#${NFT1}...`);
    // const owner = await argramToken.ownerOf(NFT1);
    // console.log(`Owner of NFT ${symbol} ${NFT1}: ${owner}\n`);
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exitCode = 1;
    });