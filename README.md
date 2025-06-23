# 狼人小林 's 数字代币

[![Network](https://img.shields.io/badge/network-Polygon-773EF0)](https://polygon.technology)
[![Token](https://img.shields.io/badge/token-WOLF-orange)](https://polygonscan.com/token/0x6B8c86ddAc4f7C4132A9DE5B1360AFb20b67f5E4)

狼人小林发行的自己的数字代币，基于 [以太坊](https://ethereum.org) 构建，符合 [ERC-20 标准](https://eips.ethereum.org/EIPS/eip-20)，发行在 [Polygon](https://polygon.technology) 网络。

它将用于一种纪念，赠予我的好友，或者对我有过帮助的人。

该项目包含代币的智能合约的完整源代码。

## 代币信息

| 属性 | 值 |
|---|---|
| 代币名称 | TakWolf Token |
| 代币符号 | WOLF |
| 发行网络 | [Polygon](https://polygon.technology) |
| 合约地址 | [0x6B8c86ddAc4f7C4132A9DE5B1360AFb20b67f5E4](https://polygonscan.com/token/0x6B8c86ddAc4f7C4132A9DE5B1360AFb20b67f5E4) |
| 发行数量 | 固定总量 1 亿 |
| 小数位数 | 18 |

## 如何空投

全凭个人喜好。以下人群有较大概率获得空投：

- 我的好友
- 合作伙伴
- 我的 [赞助商](https://github.com/TakWolf/TakWolf/blob/master/sponsors.md)
- 对我参与的项目提交过较大贡献的人
- 对我有过其它帮助的人

你需要有一个 [以太坊钱包](https://ethereum.org/zh/wallets/) 来接收空投，请将钱包地址放到你的个人主页，或者 [发私信给我](https://github.com/TakWolf#%E5%85%B3%E6%B3%A8%E6%88%91)，以便我可以进行空投。

你也可以在 [Issues](https://github.com/TakWolf/takwolf-token/issues) 提交空投申请，附带你的钱包地址以及获得空投的理由，但不一定会实现。

由于每笔交易均需要消耗手续费，因此空投不会特别频繁。

## 代币价值

代币仅用于纪念意义，没有任何经济价值，你可以将它视为一种好友凭证。

收到代币的人，可以自由使用，我无法干涉。

有些朋友，可能会用它做一些恶搞，例如通过某种手段实现了虚假估值。请把它当成一种玩笑。

其他人使用代币进行的任何行为，均与本人无关。请勿进行任何交易，避免个人财产受到损失。

## 命令

编译：

```shell
npx hardhat compile
```

测试：

```shell
npx hardhat test
```

启动本地网络：

```shell
npx hardhat node
```

部署到本地网络：

```shell
npx hardhat ignition deploy ./ignition/modules/Token.ts --network localhost
```

设置变量：

```shell
npx hardhat vars set INFURA_API_KEY
npx hardhat vars set POLYGON_DEPLOY_PRIVATE_KEY
```

部署到主网络：

```shell
npx hardhat ignition deploy ./ignition/modules/Token.ts --network polygon
```

## 程序依赖

- [OpenZeppelin Contracts](https://github.com/OpenZeppelin/openzeppelin-contracts)
- [Hardhat](https://github.com/NomicFoundation/hardhat)

## 参考资料

- [Solidity Documentation](https://docs.soliditylang.org/zh-cn/latest/)
- [ERC-20: Token Standard](https://eips.ethereum.org/EIPS/eip-20)
- [Hardhat's tutorial for beginners](https://hardhat.org/tutorial)

## 许可证

[MIT License](LICENSE)
