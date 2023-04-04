# TokenFactory

# Polygon Address

Migration.sol https://polygonscan.com/address/0xeBfF3bd5E6325DE8057Dc43eE58BC4Dcdc838361
Factory.sol https://polygonscan.com/address/0x5ad70c187e448b9ca6104cc55619bf9a3a271efd
ERC20Token.sol https://polygonscan.com/address/0x7284D116753D79015017a6a1e3a3e94d30170157

## What does this repository contain?

1. An `ERC20` and an `ERC721` contract using the [@openzeppelin/contracts](https://github.com/OpenZeppelin/openzeppelin-contracts) standards.
2. A `Factory` contract to deploy these contracts.
3. A Javascript test file for testing the `Factory` contract with [Truffle](https://github.com/trufflesuite/truffle).

## What can I use it for?

You can deploy the `Factory` contract on an Ethereum blockchain network, and then use it to trustlessly deploy secure new ERC20 and ERC721 tokens on that same network.

## How can I use it?

1. Install `truffle` with `npm install -g truffle`.
2. Install dependencies with `npm install`.
3. Run `truffle develop` to spawn a development blockchain with interactive console.
4. Compile code into a `build` directory with `truffle compile`.
5. Run migrations to deploy the `Factory` contract with `truffle migrate`.
6. Start the test suite with `truffle test`.
