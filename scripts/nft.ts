import { ethers } from "hardhat";


async function main() {
    const [owner] = await ethers.getSigners();
  //deploy nft token
  const CSRnft = await ethers.getContractFactory("CSRNFT");
  const csrNftToken = await CSRnft.deploy();
  await csrNftToken.deployed();

  const csrNftTokenaddress = csrNftToken.address;

  console.log(`CaesarNFT Token deployed to ${csrNftTokenaddress}`);
  const CAESAR = await csrNftToken.safeMint(owner.address,9202, "QmVVbt4vo1Pw97EaVc4GWenfEYQ4WMfe9yv8zVaCMBSMc6" );
  console.log(CAESAR);


  const CSRDetails = await (await CAESAR.wait()).events[0].args[2];

  console.log(CSRDetails);




















}











































































































// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
  });