const _JUSD = artifacts.require("JUSD");

module.exports = async (deployer, network, accounts) => {
  await deployer.deploy(_JUSD);
};
