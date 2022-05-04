const _JUSD = artifacts.require("JUSD");
const _Mimic = artifacts.require("Mimic");
const _cJUSD = artifacts.require("cJUSD");

module.exports = async (deployer, network, accounts) => {
  await deployer.deploy(_JUSD);
  await deployer.deploy(_Mimic);
  await deployer.deploy(_cJUSD);
};
