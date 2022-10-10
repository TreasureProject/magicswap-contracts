// SPDX-License-Identifier: MIT

pragma solidity 0.6.12;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract MagicMock is ERC20 {
    constructor() public ERC20("Magic Mock", "MAGICMOCK") {
    }

    function mint(address recipient, uint256 amt) external {
        _mint(recipient, amt);
    }
    function isMagic(bool test) external returns (bool) {
        require(keccak256(abi.encodePacked(name())) == keccak256(abi.encodePacked("Magic Mock")), "not magic");
        return test;
    }
}