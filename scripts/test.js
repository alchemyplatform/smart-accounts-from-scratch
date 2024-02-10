const hre = require("hardhat");

const ACCOUNT_ADDR = "0xd434fe29413880281134b9d552426c950d4e2440";

async function main() {
  const account = await hre.ethers.getContractAt("Account", ACCOUNT_ADDR);
  const count = await account.count();
  console.log(count);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
