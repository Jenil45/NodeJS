const {ethers} = require("hardhat");

const main = async () => {

  // getting the contract
  const Transactions = await ethers.getContractFactory("Transaction");
  // deploy
  const transactions = await Transactions.deploy();
  await transactions.waitForDeployment();

  console.log("Transaction deploy " , transactions.runner.address);
 
}

// deploy result

const runMain = async () => {
  try {
    await main();
    process.exit(0);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
}

runMain();