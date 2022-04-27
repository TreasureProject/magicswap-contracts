const { WNATIVE_ADDRESS } = require("@sushiswap/core-sdk");
const { hrtime } = require("process");

module.exports = async function ({ getNamedAccounts, deployments }) {
  const { deploy } = deployments;

  const { deployer } = await getNamedAccounts();

  const chainId = await getChainId();

  const magicAddresses = {
    // arb testnet
    421611: "0x7B402a341f92d2Ce96da3F87D00B60D552D66cA7",
  };

  let addr;

  if (chainId === "31337") {
    addr = (await deployments.get("WETH9Mock")).address;
  } else if (magicAddresses[chainId]){
    addr = magicAddresses[chainId]
  } else {
    throw Error("No MAGIC!");
  }


  const factoryAddress = (await deployments.get("UniswapV2Factory")).address;

  await deploy("UniswapV2Router02", {
    from: deployer,
    args: [factoryAddress, addr],
    gasLimit: 9000000000,
    log: true,
    deterministicDeployment: false,
  });
};

module.exports.tags = ["UniswapV2Router02", "AMM"];
module.exports.dependencies = ["UniswapV2Factory", "Mocks"];
