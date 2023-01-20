const hre = require('hardhat');
const fs = require("fs") //file system

async function main() {
  // const [deployer] = await ethers.getSigners();
  // console.log("Deploying contracts with the account:", deployer.address); 
  // console.log("Account balance:", (await deployer.getBalance()).toString());
  
  const NFTMarketplace = await hre.ethers.getContractFactory('NFTMarketplace');
  const nftMarketplace = await NFTMarketplace.deploy();

  await nftMarketplace.deployed();

  // save the contract address to a local file.
	fs.writeFileSync('./config.js', 
  `export const contractAddress = "${nftMarketplace.address}"
  export const ownerAddress = "${nftMarketplace.signer.address}"`)
  console.log('NFTMarketplace deployed to:', nftMarketplace.address);


  const data = {
    address: nftMarketplace.address,
    abi: JSON.parse(nftMarketplace.interface.format('json'))
  }

  //This writes the ABI and address to the mktplace.json
  fs.writeFileSync('./context/NftMarketPlace.json', JSON.stringify(data))

}



main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
