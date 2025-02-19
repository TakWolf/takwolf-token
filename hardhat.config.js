require('@nomicfoundation/hardhat-toolbox')

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: '0.8.28',
  networks: {
    polygon: {
      url: `https://polygon-mainnet.infura.io/v3/${vars.get('INFURA_API_KEY')}`,
      accounts: [
          vars.get('POLYGON_DEPLOY_PRIVATE_KEY')
      ]
    }
  }
}
