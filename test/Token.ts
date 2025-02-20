import { loadFixture } from '@nomicfoundation/hardhat-toolbox/network-helpers'
import { ethers } from 'hardhat'
import { expect } from 'chai'

describe('Token', () => {
  async function deployFixture() {
    const Token = await ethers.getContractFactory('Token')
    const token = await Token.deploy()
    const [owner] = await ethers.getSigners()
    return { token, owner }
  }

  describe('Deployment', () => {
    it('Check name', async () => {
      const { token } = await loadFixture(deployFixture)
      expect(await token.name()).to.equal('TakWolf Token')
    })

    it('Check symbol', async () => {
      const { token } = await loadFixture(deployFixture)
      expect(await token.symbol()).to.equal('WOLF')
    })

    it('Check total supply', async () => {
      const { token, owner } = await loadFixture(deployFixture)
      expect(await token.totalSupply()).to.equal(await token.balanceOf(owner.address))
    })
  })
})
