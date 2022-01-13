require("@nomiclabs/hardhat-waffle");
const fs = require("fs");
let privateKey = "E9873D79C6D87DC0FB6A5778633389F4453213303DA61F20BD67FC233AA33262";

try {
  privateKey = fs.readFileSync(".secret").toString().trim();
} catch (error) {
  console.log("No secret file found, using default private key");
}

module.exports = {
  solidity: "0.8.4",
  defaultNetwork: "hardhat",
  networks: {
    hardhat: {
      chainId: 1337,
    },
    testnet: {
      url: `https://api.s0.b.hmny.io`,
      accounts: [privateKey],
    },
  },
};
