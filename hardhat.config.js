require("@nomicfoundation/hardhat-ethers");
require("@nomicfoundation/hardhat-toolbox");

const INFURA_PROJECT_ID = "57f5f5f45dcd43f1b40212d6833281ed";


/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  networks: {
    mainnet: {
      url: 'https://mainnet.infura.io/v3/57f5f5f45dcd43f1b40212d6833281ed',
      accounts: ['96a438471e8e4dea34dee6e02d2edfd3a76631b4382af7e16116c313d3da93a5'],
      allowUnlimitedContractSize: true
    },
  },
  solidity: "0.8.19",
};
