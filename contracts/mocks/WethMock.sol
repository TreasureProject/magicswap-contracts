// SPDX-License-Identifier: MIT

pragma solidity 0.6.12;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract WethMock is ERC20 {
    constructor() public ERC20("WETH", "WETH") {
    }

    function mint(address recipient, uint256 amt) external {
        _mint(recipient, amt);
    }

    function isWETH(bool test) external returns (bool) {
        require(keccak256(abi.encodePacked(name())) == keccak256(abi.encodePacked("WETH")), "not usdc");
        return test;
    }
}