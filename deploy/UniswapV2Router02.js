const { hrtime } = require("process");

module.exports = async function ({ getNamedAccounts, deployments }) {
  const { deploy } = deployments;

  const { deployer } = await getNamedAccounts();

  const chainId = await getChainId();

  const magicAddresses = {
    // arb testnet
    421611: "0x7B402a341f92d2Ce96da3F87D00B60D552D66cA7",
    // arb one
    42161: "0x539bdE0d7Dbd336b79148AA742883198BBF60342",
    // arb goerli
    421613: "0x88f9eFB3A7F728fdb2B8872fE994c84b1d148f65",
    // arb sepolia
    421614: "0x55d0cf68a1afe0932aff6f36c87efa703508191c",
  };

  let addr;

  // 421613 is Arbitrum Goerli
  if (chainId === "31337") {
    let mock = await deployments.getOrNull("MagicMock");
    if(mock === undefined) {
      mock = await deploy("MagicMock",{
        from: deployer,
        log: true,
      });
    }
    addr = mock.address;
  } else if (magicAddresses[chainId]){
    addr = magicAddresses[chainId]
  } else {
    throw Error("No MAGIC!");
  }


  const factoryAddress = (await deployments.get("UniswapV2Factory")).address;

  await deploy("UniswapV2Router02", {
    from: deployer,
    args: [factoryAddress, addr],
    gasLimit: 90000000,
    log: true,
    deterministicDeployment: false,
  });
};

module.exports.tags = ["UniswapV2Router02", "AMM"];
module.exports.dependencies = ["UniswapV2Factory"];
