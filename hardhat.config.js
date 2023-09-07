require('dotenv').config();
import "hardhat-deploy";
import "@nomiclabs/hardhat-ethers";
import "./scripts/custom-tasks/customDeploy";
import "@nomicfoundation/hardhat-toolbox";

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
    },
    paths: {
        sources: "./contracts",
        cache: "./cache",
        artifacts: "./artifacts"
    }
}