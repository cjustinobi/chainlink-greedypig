# GreedyPig

This project demonstrates a basic Hardhat use case. It comes with a sample contract, a test for that contract, and a Hardhat Ignition module that deploys that contract.

Try running some of the following tasks:


# Smart Contract Deployment
The smart contract is deployed to polygon Amoy [0x40DB6Bee9CAe6F8F9DaFFA6a51fcA4c7A6AffF2C](https://amoy.polygonscan.com/address/0x40DB6Bee9CAe6F8F9DaFFA6a51fcA4c7A6AffF2C)

```shell
npx hardhat help
npx hardhat test
REPORT_GAS=true npx hardhat test
npx hardhat node
npx hardhat ignition deploy ./ignition/modules/GreedyPig.js
npx hardhat ignition deploy ignition/modules/GreedyPig.js --network polygon_amoy --deployment-id amoy-deployment --verify
npx hardhat vars set ENVIRONMENT_VARIABLE 
npx hardhat ignition verify amoy_deployment
```
