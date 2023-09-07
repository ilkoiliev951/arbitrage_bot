require('dotenv').config();
require("hardhat-deploy");
require("@nomiclabs/hardhat-ethers");

module.exports = {
    defaultNetwork: "mainnet",
    networks: {
        hardhat: {
        },
        mainnet: {
            url: process.env.INFURA_URL,
            accounts: [process.env.PRIVATE_KEY]
        }
    },
    solidity: {
        version: "0.5.7",
        settings: {
            optimizer: {
                enabled: true,
                runs: 200
            }
        }
    }
}