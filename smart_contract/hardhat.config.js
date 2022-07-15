require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    ropsten: {
      url: 'https://eth-ropsten.alchemyapi.io/v2/NGnJBN2UIbhDeCWRARFSLn2cAAf2Wwbw',
      accounts: ['4f43045f457c2c3178afb52ab831ef242902759b07b512586ed1c23ad8afb1e0'],
    },
  },
};