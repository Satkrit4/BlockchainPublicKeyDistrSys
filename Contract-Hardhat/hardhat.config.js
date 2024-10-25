require("@nomiclabs/hardhat-waffle");
module.exports = {
  solidity: "0.8.0",
  networks: {
    ganache: {
      url: "http://127.0.0.1:7545",
      accounts: ["0x4da2965d4a5b3c40b3cfd9cbd4e3021e892fce349b06bf0f560f1210123c38a2"] // Replace with your Ganache account's private key
    }
  }
};

