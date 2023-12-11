require("@nomicfoundation/hardhat-toolbox");
// require("@nomiclabs/hardhat-waffle");

module.exports = {
  solidity: "0.8.19",
  networks : {
    sepolia : {
      url : "https://eth-sepolia.g.alchemy.com/v2/eqcMkw5LDQ_c7XRWytWP7eD_3eBrq3AV",
      accounts : ['d7b37374a7e3b0b6554eeec18d529fa5f25735e3183486ead61a8ea456ce2664'],
      chainId : 11155111
    },
    localhost : {
      url : "http://127.0.0.1:8545/",
      chainId : 31337
    }
  }
};
