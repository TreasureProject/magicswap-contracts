module.exports = async function ({ ethers, deployments, getNamedAccounts }) {
  const { deploy } = deployments

  const { deployer, dev } = await getNamedAccounts();

  const masterChef = await ethers.getContract("MasterChef")
  const sushi = await ethers.getContract("SushiToken")
  
  const { address } = await deploy("MasterChefV2", {
    from: deployer,
    args: [masterChef.address, sushi.address, 1],
    log: true,
    deterministicDeployment: false
  })

  const masterChefV2 = await ethers.getContract("MasterChefV2")

  if (await masterChefV2.owner() !== dev) {
    // Transfer ownership of masterChefV2 to dev
    console.log("Transfer ownership of MasterChefv2 to dev")
    await (await masterChefV2.transferOwnership(dev, true, false)).wait()
  }
}

module.exports.tags = ["MasterChefV2"]
module.exports.dependencies = ["UniswapV2Factory", "UniswapV2Router02", "SushiToken", "MasterChef"]
