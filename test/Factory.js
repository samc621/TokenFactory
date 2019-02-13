const FACTORY = artifacts.require("./Factory.sol");
const TOKEN = artifacts.require("./Token.sol");

contract("Factory", async accounts => {
  let Factory;
  let Token;

  beforeEach("Create new instance of factory contract", async () => {
    Factory = await FACTORY.deployed();
  });

  it("Should use factory to deploy new token", async () => {
    Token = await Factory.deployNewToken("Demo Token", "DEMO", 1000000, {
      from: accounts[0]
    });
    let TokenInstance = await TOKEN.at(Token.logs[0].args.tokenAddress);
    let balance = await TokenInstance.balanceOf.call(accounts[0]);
    assert.equal(balance.valueOf(), 1000000);
  });
});
