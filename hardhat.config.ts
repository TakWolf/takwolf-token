import { HardhatUserConfig, vars } from 'hardhat/config'
import '@nomicfoundation/hardhat-toolbox'

const INFURA_API_KEY = vars.get('INFURA_API_KEY', 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx')
const DEPLOY_PRIVATE_KEY = vars.get('POLYGON_DEPLOY_PRIVATE_KEY', '0000000000000000000000000000000000000000000000000000000000000000')

const config: HardhatUserConfig = {
  solidity: '0.8.28',
  networks: {
    polygon: {
      url: `https://polygon-mainnet.infura.io/v3/${INFURA_API_KEY}`,
      accounts: [DEPLOY_PRIVATE_KEY],
    },
  },
}

export default config
