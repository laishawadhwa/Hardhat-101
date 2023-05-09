// SPDX-License-Identifier: MIT
pragma solidity ^0.8.18;

import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract TokenSale is Ownable {
    IERC20 public token;
    uint256 public pricePerEth;

    event TokenSold(
        address indexed buyer,
        address indexed seller,
        uint256 indexed saleCount
    );

    constructor(address _token, uint256 _pricePerEth) {
        token = IERC20(_token);
        pricePerEth = _pricePerEth;
    }

    function buyTokens() external payable {
        require(msg.value >= 1 ether, "Required Ether not sent");

        uint256 saleCount = msg.value * pricePerEth;

        require(
            token.transferFrom(owner(), msg.sender, saleCount),
            "Transfer Failed"
        );

        emit TokenSold(msg.sender, address(this), saleCount);
    }
}

