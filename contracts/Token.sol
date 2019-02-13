pragma solidity >=0.4.20;

import "../node_modules/openzeppelin-solidity/contracts/token/ERC20/ERC20.sol";

contract Token is ERC20 {

    string public name;
    string public symbol;
    uint8 public decimals = 18;

    constructor(string memory _name, string memory _symbol, uint totalSupply, address issuer) public {
        name = _name;
        symbol = _symbol;
        _totalSupply = totalSupply;
        _balances[issuer] = totalSupply;
        emit Transfer(address(0x0), issuer, totalSupply);
    }

}