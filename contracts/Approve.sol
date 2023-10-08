// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC721/IERC721.sol";

contract MyNFTContract {
    // Mapping to keep track of operator approvals
    mapping(address => mapping(address => bool)) private _operatorApprovals;

    event ApprovalForAll(address indexed owner, address indexed operator, bool approved);

    // Function to approve or revoke an operator for all tokens of the sender
    function setApprovalForAll(address operator, bool approved) external {
        require(msg.sender != operator, "You cannot approve yourself as an operator");
        _operatorApprovals[msg.sender][operator] = approved;
        emit ApprovalForAll(msg.sender, operator, approved);
    }

    // Function to check if an operator is approved for all tokens of the owner
    function isApprovedForAll(address owner, address operator) external view returns (bool) {
        return _operatorApprovals[owner][operator];
    }

    // Other functions of your ERC721 contract
    // ...
}
