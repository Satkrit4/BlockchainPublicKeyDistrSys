async function main() {
  const [deployer] = await ethers.getSigners();

  console.log("Deploying contracts with the account:", deployer.address);

  const balance = await deployer.getBalance();
  console.log("Account balance:", balance.toString());

  if (balance.lt(ethers.utils.parseEther("0.1"))) {
    throw new Error("Insufficient funds to deploy the contract");
  }

  const KeyManagement = await ethers.getContractFactory("KeyManagement");
  const keyManagement = await KeyManagement.deploy();

  console.log("KeyManagement contract deployed to:", keyManagement.address);
}

main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });
