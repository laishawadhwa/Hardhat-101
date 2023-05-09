// SPDX-License-Identifier: MIT
pragma solidity 0.8.18;

// Way to import solidity files form npm dependencies
import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

// MyPestoGems is an ERC20 token
// Basic implementation of ERC20 token standard is already provided by openzeppelin
contract MyPestoGems is ERC20 {
    constructor(uint256 _initalSupply) ERC20("MyPestoGems", "MPG") {
        //mint initial supply  tokens to the deployer
        // '**' means to the power, here 10 power 18
        _mint(msg.sender, _initalSupply * 10 ** 18);
    }
}