import { HardhatUserConfig, vars } from 'hardhat/config'
import '@nomicfoundation/hardhat-toolbox'

const config: HardhatUserConfig = {
  solidity: '0.8.28',
  networks: {
    polygon: {
      url: `https://polygon-mainnet.infura.io/v3/${vars.get('INFURA_API_KEY')}`,
      accounts: [
        vars.get('POLYGON_DEPLOY_PRIVATE_KEY'),
      ],
    },
  },
}

export default config
