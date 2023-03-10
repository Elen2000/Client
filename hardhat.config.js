require("@nomiclabs/hardhat-ethers");
require("@nomiclabs/hardhat-waffle");
require("@nomiclabs/hardhat-etherscan");

require("dotenv").config();

const privateKey=process.env.PRIVATE_KEY;
const endpoint=process.env.INFURA_KEY;
const etherscanKey=process.env.ETHERSCAN_KEY


module.exports={
    solidity: {
        version: "0.8.9",
    },
    networks: {
        goerli: {
            url: endpoint,
            accounts: [`0x${privateKey}`]
        }
    },
    etherscan: {
        apiKey: etherscanKey
    }
}