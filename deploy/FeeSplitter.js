  module.exports = async function ({ getNamedAccounts, deployments }) {
  const { deploy } = deployments

  const { deployer } = await getNamedAccounts()

  const communityWallet = deployer;
  const treasureWallet = "0xc9D8450f4a4d9C5De1033394bea892Afc3fB8353"; // TODO: change
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

module.exports.tags = ["FeeSplitter", "AMM"]
module.exports.dependencies = ["UniswapV2Factory"]
