# ERC20-Factory

## What does this repository contain?

1. A `Token` contract using the [openzeppelin-solidity](https://github.com/OpenZeppelin/openzeppelin-solidity/blob/master/contracts/token/ERC20/ERC20.sol) library to implement a standard ERC20 token.
2. A `Factory` contract to deploy this token.
3. A Javascript test file for the `Factory` contract.

## What can I use it for?

You can deploy the `Factory` contract on an Ethereum blockchain network, and then use it to trustlessly deploy secure new ERC20 tokens with params for `name` (e.g. "Google Token"), `symbol` (e.g. "GOOG"), and `totalSupply` (e.g. 1000000) on that same network.

## How can I use it?

1. Install `truffle` with `npm install -g truffle`.
2. Install dependencies with `npm install`.
3. Run `truffle develop` to spawn a development blockchain with interactive console.
4. Compile code into a `build` directory with `truffle compile`.
5. Run migrations to deploy the `Factory` contract with `truffle migrate`.
6. Start the test suite with `truffle test`.
