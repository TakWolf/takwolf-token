// SPDX-License-Identifier: MIT
pragma solidity ^0.8.28;

import {ERC20} from "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract Token is ERC20 {
    constructor() ERC20("TakWolf Token", "WOLF") {
        _mint(msg.sender, 100000000 * 10 ** decimals());
    }
}
