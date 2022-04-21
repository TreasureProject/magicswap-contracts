const { SUSHI_ADDRESS } = require("@sushiswap/core-sdk");

module.exports = async function ({ ethers, deployments, getNamedAccounts }) {
  const { deploy } = deployments;

  const { deployer, dev } = await getNamedAccounts();

  const chainId = await getChainId();

  let magicAddress;

  const magicAddresses = {
    // arb testnet
    421611: "0x7B402a341f92d2Ce96da3F87D00B60D552D66cA7",
  };

  if (chainId === "31337") {
    magicAddress = (await deployments.get("SushiToken")).address;
  } else if (magicAddresses[chainId]){
    magicAddress = magicAddresses[chainId]
  }else {
    throw Error("No MAGIC!");
  }

  await deploy("MiniChefV2", {
    from: deployer,
    args: [magicAddress],
    log: true,
    deterministicDeployment: false,
  });

  const miniChefV2 = await ethers.getContract("MiniChefV2");
  if ((await miniChefV2.owner()) !== dev) {
    console.log("Transfer ownership of MiniChef to dev");
    await (await miniChefV2.transferOwnership(dev, true, false)).wait();
  }
};

module.exports.tags = ["MiniChefV2"];
// module.exports.dependencies = ["UniswapV2Factory", "UniswapV2Router02"]
