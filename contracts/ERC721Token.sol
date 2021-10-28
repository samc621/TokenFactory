// SPDX-License-Identifier: MIT
pragma solidity >=0.8.9;

import "../node_modules/@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "../node_modules/@openzeppelin/contracts/utils/Counters.sol";

contract ERC721Token is ERC721URIStorage {
    using Counters for Counters.Counter;
    Counters.Counter private _tokenIds;

    event awardNewItem(uint256 indexed newItemId);

    constructor(string memory name, string memory symbol)
        ERC721(name, symbol)
    {}

    function awardItem(address player, string memory tokenURI)
        public
        returns (uint256)
    {
        _tokenIds.increment();

        uint256 newItemId = _tokenIds.current();
        _mint(player, newItemId);
        _setTokenURI(newItemId, tokenURI);

        emit awardNewItem(newItemId);

        return newItemId;
    }
}
