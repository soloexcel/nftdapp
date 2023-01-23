// // const fs = require('fs');
// require('@nomiclabs/hardhat-waffle');
// require("dotenv").config({ path: ".env" });
// // 
// // const privateKey = fs.readFileSync('.secret').toString().trim();

// const MUMBAI_URL = process.env.MUMBAI_URL
// const PRIVATE_KEY = process.env.PRIVATE_KEY
// module.exports = {
//   defaultNetwork: "mumbai",
//   networks: {
    // hardhat: {
    //   chainId: 1337,
    // },

//     mumbai: {
//       url: MUMBAI_URL,
//       accounts: [PRIVATE_KEY]
//     }
//   },
//   solidity: '0.8.4',
// };


require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config({ path: ".env" });

const QUICKNODE_HTTP_URL = process.env.QUICKNODE_HTTP_URL;
const PRIVATE_KEY = process.env.PRIVATE_KEY;

module.exports = {
  solidity: "0.8.9",
  networks: {
    goerli: {
      url: QUICKNODE_HTTP_URL,
      accounts: [PRIVATE_KEY],
    },
  },
};



// require("@nomicfoundation/hardhat-toolbox");

// // Go to https://www.alchemyapi.io, sign up, create
// // a new App in its dashboard, and replace "KEY" with its key
// const ALCHEMY_API_KEY = "KEY";

// // Replace this private key with your Goerli account private key
// // To export your private key from Metamask, open Metamask and
// // go to Account Details > Export Private Key
// // Beware: NEVER put real Ether into testing accounts
// const GOERLI_PRIVATE_KEY = "YOUR GOERLI PRIVATE KEY";

// module.exports = {
//   solidity: "0.8.9",
//   networks: {
//     goerli: {
//       url: `https://eth-goerli.alchemyapi.io/v2/${ALCHEMY_API_KEY}`,
//       accounts: [GOERLI_PRIVATE_KEY]
//     }
//   }
// };
