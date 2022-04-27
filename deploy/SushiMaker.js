const { WETH_ADDRESS } = require("@sushiswap/core-sdk")

module.exports = async function ({ ethers: { getNamedSigner }, getNamedAccounts, deployments }) {
  const { deploy } = deployments

  const { deployer, dev } = await getNamedAccounts()

  const chainId = await getChainId()

  const magicAddresses = {
    // arb testnet
    421611: "0x7B402a341f92d2Ce96da3F87D00B60D552D66cA7",
  };


  const factory = await ethers.getContract("UniswapV2Factory")
  const bar = await ethers.getContract("SushiBar")
  const sushi = await ethers.getContract("SushiToken")
  
  let addr;
  
  if (chainId === '31337') {
    addr = (await deployments.get("WETH9Mock")).address
  } else if (chainId in magicAddresses) {
    addr = magicAddresses[chainId]
  } else {
    throw Error("No MAGIC!")
  }

  await deploy("SushiMaker", {
    from: deployer,
    args: [factory.address, bar.address, sushi.address, addr],
    log: true,
    deterministicDeployment: false
  })

  const maker = await ethers.getContract("SushiMaker")
  if (await maker.owner() !== dev) {
    console.log("Setting maker owner")
    await (await maker.transferOwnership(dev, true, false)).wait()
  }
}

module.exports.tags = ["SushiMaker"]
module.exports.dependencies = ["UniswapV2Factory", "UniswapV2Router02", "SushiBar", "SushiToken"]