require("@nomicfoundation/hardhat-toolbox");
require("@nomiclabs/hardhat-etherscan");
require("dotenv").config();
require("@nomiclabs/hardhat-ethers");
const { API_URL, PRIVATE_KEY } = process.env;


/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: {
    version: "0.8.18",
    settings: {
      optimizer: {
        enabled: true,
        runs: 1000,
      },
    },
  },
  defaultNetwork: "mumbai",
   networks: {
     hardhat: {},
     mumbai: {
       url: API_URL,
       accounts: [`0x${PRIVATE_KEY}`],
       timeout: 60000
     },
   },
   hardhat: {
      // default field values picked
      loggingEnabled: true
    }
};


