const { WNATIVE_ADDRESS } = require("@sushiswap/core-sdk");
const { hrtime } = require("process");

module.exports = async function ({ getNamedAccounts, deployments }) {
  const { deploy } = deployments;

  const { deployer } = await getNamedAccounts();

  const chainId = await getChainId();

  const wethAddresses = {
    421611: "0xEBbc3452Cc911591e4F18f3b36727Df45d6bd1f9",
  }

  let wethAddress;

  if (chainId === "31337") {
    wethAddress = (await deployments.get("WETH9Mock")).address;
  } else if (chainId in WNATIVE_ADDRESS) {
    wethAddress = WNATIVE_ADDRESS[chainId];
  } else if (wethAddresses[chainId]){
    wethAddress = wethAddresses[chainId]
  } else {
    throw Error("No WNATIVE!");
  }


  const factoryAddress = (await deployments.get("UniswapV2Factory")).address;

  await deploy("UniswapV2Router02", {
    from: deployer,
    args: [factoryAddress, wethAddress],
    gasLimit: 9000000000,
    log: true,
    deterministicDeployment: false,
  });
};

module.exports.tags = ["UniswapV2Router02", "AMM"];
module.exports.dependencies = ["UniswapV2Factory", "Mocks"];
