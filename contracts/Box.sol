// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC721/IERC721.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract MultiERC721Transfer {
    // Mapping to keep track of approved contracts
    mapping(address => bool) public approvedContracts;

    event ApprovedContract(address indexed contractAddress, bool isApproved);

    // Function to approve or revoke an ERC721 contract for transfers
    function approveContract(address _contractAddress, bool _isApproved) public {
        approvedContracts[_contractAddress] = _isApproved;
        emit ApprovedContract(_contractAddress, _isApproved);
    }

    // Function to transfer multiple ERC721 tokens to a recipient
    function safeTransferMultipleERC721Tokens(
        address[] memory _tokenContracts,
        uint256[] memory _tokenIds,
        address _to
    ) external payable{
        require(_tokenContracts.length == _tokenIds.length, "Arrays must have the same length");

        for (uint256 i = 0; i < _tokenContracts.length; i++) {
            address tokenContract = _tokenContracts[i];
            uint256 tokenId = _tokenIds[i];

            require(
                IERC721(tokenContract).ownerOf(tokenId) == msg.sender,
                "Sender does not own the token"
            );

            IERC721(tokenContract).safeTransferFrom(msg.sender, _to, tokenId);
        }
    }
}
