// SPDX-License-Identifier: MIT

pragma solidity 0.6.12;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract ELM is ERC20 {
    constructor() public ERC20("ELM", "ELM") {
    }

    function mint(address recipient, uint256 amt) external {
        _mint(recipient, amt);
    }

    function isELM(bool test) external view returns (bool) {
        require(keccak256(abi.encodePacked(name())) == keccak256(abi.encodePacked("ELM")), "not elm");
        return test;
    }
}