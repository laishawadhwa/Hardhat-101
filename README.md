# Hardhat-101
How to get started with Hardhat and running tests in Hardhat

# Setup, deploy and test ERC-721 contrcat using Hardhat 

This project demonstrates a basic Hardhat use case. 
It comes with a ERC-721 contract, a test for that contract, and a script that deploys and interacts with that contract.

We are using Polygon testnet for the deployment.

To get started 

1. Update the .env file with Provider API_URL and private key of your wallet
2. Once you have setup the project in local you can go ahead and update the addresses in the deploy.js and interact.js scripts

How to setup a hardhat project?
                                
```shell
mkdir <proj_name> && cd <proj_name>
npm init -y
npm install --save-dev hardhat
npx hardhat
``` 

Choose javascript project which will create the project with a default contract and Creates the necessary folders
contracts, test, scripts 

Next, install the necessary dependencies required to deploy 

```shell
npm install --save-dev @nomicfoundation/hardhat-toolbox
npm install --save @openzeppelin/contracts
```

Once your contracts are ready, compile the contracts using 

```shell
npx hardhat compile
```

Next we'll deploy the contract on Polygon Mumbai testnet
```shell
npx hardhat run scripts/deploy.js --network mumbai
```

To interact with the contract we'll use the interact.js
```shell
npx hardhat run scripts/deploy.js --network mumbai
```
Next, we'll also understand how to test the contracts and scripts. To run the tests present under tests/, run
```shell
npx hardhat test
```
You can also deploy your contracts to the network of your choice.
In order to do that add it under the network in hardhat.config.js

```javascript
networks: {
     hardhat: {},
     mumbai: {
       url: API_URL,
       accounts: [`0x${PRIVATE_KEY}`],
       timeout: 60000
     },
   },
   ```
