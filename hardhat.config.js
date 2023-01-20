const fs = require('fs');
require('@nomiclabs/hardhat-waffle');
require("dotenv").config({ path: ".env" });
// const privateKey = fs.readFileSync('.secret').toString().trim();

const MUMBAI_URL = process.env.MUMBAI_URL
const PRIVATE_KEY = process.env.PRIVATE_KEY
module.exports = {
  networks: {
    hardhat: {
      chainId: 1337,
    },

    mumbai: {
      url: MUMBAI_URL,
      account: [PRIVATE_KEY],
    }
  },
  solidity: '0.8.4',
};
