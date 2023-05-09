const {
    loadFixture,
} = require("@nomicfoundation/hardhat-network-helpers");
const { expect } = require('chai');
const { ethers } = require("hardhat");

// Start test block
describe('ArGram', function () {
  it("Deployment should fetch and check the name of the NFT", async function () {
    
    const argramToken = await ethers.getContractFactory('ArGram');
    // deploy the contract
    const hhargramToken = await argramToken.deploy();
    

    // Get the contractOwner and collector address
    const signers = await ethers.getSigners();
    this.contractOwner = signers[0].address;
    this.collector = ""; //Add your wallet address to mint the nft to 
    

    // Get the collector contract for signing transaction with collector key
    const collectorContract = hhargramToken.connect(""); // Ass the public address

    // Mint an initial set of NFTs from this collection
    this.initialMintCount = 2;
    this.initialMint = [];
    for (let i = 1; i <= this.initialMintCount; i++) { // tokenId to start at 1
        await hhargramToken.mintCollectionNFT(this.contractOwner, i);
        this.initialMint.push(i.toString());
    }

     expect(await hhargramToken.name()).to.equal('ajchkjabccn');
  });
  
});



//   // Test cases
//   it('Creates a token collection with a name', async function () {
//     expect(await this.argramToken.name()).to.exist;
//     // expect(await this.argramToken.name()).to.equal('argramToken');
//   });

//   it('Creates a token collection with a symbol', async function () {
//     expect(await this.argramToken.symbol()).to.exist;
//     // expect(await this.argramToken.symbol()).to.equal('NONFUN');
//   });

//   it('Mints initial set of NFTs from collection to contractOwner', async function () {
//     for (let i = 0; i < this.initialMint.length; i++) {
//         expect(await this.argramToken.ownerOf(this.initialMint[i])).to.equal(this.contractOwner);
//     }
//   });

//   it('Is able to query the NFT balances of an address', async function () {
//     expect(await this.argramToken.balanceOf(this.contractOwner)).to.equal(this.initialMint.length);
//   });

//   it('Is able to mint new NFTs to the collection to collector', async function () {
//     let tokenId = (this.initialMint.length+1).toString();
//     await this.argramToken.mintCollectionNFT(this.collector,tokenId);
//     expect(await this.argramToken.ownerOf(tokenId)).to.equal(this.collector);
//   });

//   it('Emits a transfer event for newly minted NFTs', async function () {
//     let tokenId = (this.initialMint.length+1).toString();
//     await expect(this.argramToken.mintCollectionNFT(this.contractOwner, tokenId))
//     .to.emit(this.argramToken, "Transfer")
//     .withArgs("0x0000000000000000000000000000000000000000", this.contractOwner, tokenId); //NFTs are minted from zero address
//   });

//   it('Is able to transfer NFTs to another wallet when called by owner', async function () {
//     let tokenId = this.initialMint[0].toString();
//     await this.argramToken["safeTransferFrom(address,address,uint256)"](this.contractOwner, this.collector, tokenId);
//     expect(await this.argramToken.ownerOf(tokenId)).to.equal(this.collector);
//   });

//   it('Emits a Transfer event when transferring a NFT', async function () {
//     let tokenId = this.initialMint[0].toString();
//     await expect(this.argramToken["safeTransferFrom(address,address,uint256)"](this.contractOwner, this.collector, tokenId))
//     .to.emit(this.argramToken, "Transfer")
//     .withArgs(this.contractOwner, this.collector, tokenId);
//   });

//   // it('Approves an operator wallet to spend owner NFT', async function () {
//   //   let tokenId = this.initialMint[0].toString();
//   //   await this.argramToken.approve(this.collector, tokenId);
//   //   expect(await this.argramToken.getApproved(tokenId)).to.equal(this.collector);
//   // });

//   // it('Emits an Approval event when an operator is approved to spend a NFT', async function() {
//   //   let tokenId = this.initialMint[0].toString();
//   //   await expect(this.argramToken.approve(this.collector, tokenId))
//   //   .to.emit(this.argramToken, "Approval")
//   //   .withArgs(this.contractOwner, this.collector, tokenId);
//   // });

//   // it('Allows operator to transfer NFT on behalf of owner', async function () {
//   //   let tokenId = this.initialMint[0].toString();
//   //   await this.argramToken.approve(this.collector, tokenId);
//   //   // Using the collector contract which has the collector's key
//   //   await this.collectorContract["safeTransferFrom(address,address,uint256)"](this.contractOwner, this.collector, tokenId);
//   //   expect(await this.argramToken.ownerOf(tokenId)).to.equal(this.collector);
//   // });

//   // it('Approves an operator to spend all of an owner\'s NFTs', async function () {
//   //   await this.argramToken.setApprovalForAll(this.collector, true);
//   //   expect(await this.argramToken.isApprovedForAll(this.contractOwner, this.collector)).to.equal(true);
//   // });

//   // it('Emits an ApprovalForAll event when an operator is approved to spend all NFTs', async function() {
//   //   let isApproved = true
//   //   await expect(this.argramToken.setApprovalForAll(this.collector, isApproved))
//   //   .to.emit(this.argramToken, "ApprovalForAll")
//   //   .withArgs(this.contractOwner, this.collector, isApproved);
//   // });

//   // it('Removes an operator from spending all of owner\'s NFTs', async function() {
//   //   // Approve all NFTs first
//   //   await this.argramToken.setApprovalForAll(this.collector, true);
//   //   // Remove approval privileges
//   //   await this.argramToken.setApprovalForAll(this.collector, false);
//   //   expect(await this.argramToken.isApprovedForAll(this.contractOwner, this.collector)).to.equal(false);
//   // });

//   // it('Allows operator to transfer all NFTs on behalf of owner', async function() {
//   //   await this.argramToken.setApprovalForAll(this.collector, true);
//   //   for (let i = 0; i < this.initialMint.length; i++) {
//   //       await this.collectorContract["safeTransferFrom(address,address,uint256)"](this.contractOwner, this.collector, this.initialMint[i]);
//   //   }
//   //   expect(await this.argramToken.balanceOf(this.collector)).to.equal(this.initialMint.length.toString());
//   // });

//   it('Only allows contractOwner to mint NFTs', async function () {
//     await expect (this.collectorContract.mintCollectionNFT(this.collector, "100")).to.be.reverted;
//   });

// });