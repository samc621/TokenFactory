const chai = require('chai');
const { expect } = chai;
const BN = require('bn.js');
const FACTORY = artifacts.require("./Factory.sol");
const ERC20TOKEN = artifacts.require("./ERC20Token.sol");
const ERC721TOKEN = artifacts.require("./ERC721Token.sol");

chai.use(require('chai-bn')(BN));

contract("Factory", async accounts => {
  let Factory;
  let ERC20Token;
  let ERC721Token;

  before("Create new instance of factory contract", async () => {
    Factory = await FACTORY.deployed();
  });

  it("Should use factory to deploy new ERC20 token", async () => {
    ERC20Token = await Factory.deployNewERC20Token(
      "Demo Token",
      "DEMO20",
      18,
      new BN('1'),
    );
    const TokenInstance = await ERC20TOKEN.at(ERC20Token.logs[0].args.tokenAddress);
    const balance = await TokenInstance.balanceOf.call(accounts[0]);
    expect(balance).to.be.a.bignumber.that.equals('1000000000000000000')
  });

  it("Should use factory to deploy new ERC721 token", async () => {
    ERC721Token = await Factory.deployNewERC721Token(
      "Demo ERC721 Token",
      "DEMO721"
    );
    const TokenInstance = await ERC721TOKEN.at(ERC721Token.logs[0].args.tokenAddress);
    const symbol = await TokenInstance.symbol.call();
    expect(symbol).to.equal("DEMO721")
  });

  it("Should mint a new ERC721 item", async () => {
    const TokenInstance = await ERC721TOKEN.at(ERC721Token.logs[0].args.tokenAddress);
    const minter = accounts[1];
    const uri = 'https://ipfs.io/ipfs/QmYGgEFqTRkWvNZ6u7gfk9HDdh55bQAbYVyc16TF1zX658/3503'
    const tx = await TokenInstance.awardItem(minter, uri)
    const tokenIdBN = tx.logs[1].args.newItemId;
    const tokenId = tokenIdBN.toNumber()
    const owner = await TokenInstance.ownerOf.call(tokenId);
    const tokenUri = await TokenInstance.tokenURI.call(tokenId);
    expect(owner).to.equal(minter)
    expect(tokenUri).to.equal(uri);
  });
});
