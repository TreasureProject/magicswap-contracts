  module.exports = async function ({ getNamedAccounts, deployments }) {
  const { deploy } = deployments

  const { deployer } = await getNamedAccounts()

  // Arb mainnet Community Gamification Fund Wallet: 0x3Fe5d6AE3470b2De09eD062Ac78444E44Aa0cACe
  const communityWallet = "0x3Fe5d6AE3470b2De09eD062Ac78444E44Aa0cACe";
  // Arb mainnet Community Ecosystem Fund Wallet: 0x45236EB7C47a68aE63f62F7e38f7C2F864f2Ad14
  const treasureWallet = "0x45236EB7C47a68aE63f62F7e38f7C2F864f2Ad14";
  const communityShare = 50;
  const treasureShare = 50;

  const { address } = await deploy("FeeSplitter", {
    from: deployer,
    log: true,
    proxy: {
        owner: deployer,
        proxyContract: 'OpenZeppelinTransparentProxy',
        execute: {
            init: {
                methodName: "initialize",
                args: [
                  communityWallet,
                  treasureWallet,
                  communityShare,
                  treasureShare
                ]
            }
        }
    },
    args: [],
    deterministicDeployment: false
  });

  const uniFactory = await ethers.getContract("UniswapV2Factory")
  await uniFactory.setFeeTo(address);
}

module.exports.tags = ["FeeSplitter"]
module.exports.dependencies = ["UniswapV2Factory"]
