const hre = require("hardhat");

async function main() {
  try{
    const MyContract = await hre.ethers.getContractFactory("Nfts");
    const myContract = await MyContract.deploy();
  
    await myContract.waitForDeployment();;
  
    console.log("MyContract deployed to:", myContract);
  }catch(error){
    console.error("Error deploying contract:", error);
  }
  
}

main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });
