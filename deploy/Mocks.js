module.exports = async function ({ getNamedAccounts, deployments }) {
  const { deploy } = deployments

  const { deployer } = await getNamedAccounts()

  await deploy("MagicMock", {
    from: deployer,
    log: true,
  })

  await deploy("UsdcMock", {
    from: deployer,
    log: true,
  })

  await deploy("MedalsMock", {
    from: deployer,
    log: true,
  })

  await deploy("ELM", {
    from: deployer,
    log: true,
  })

  await deploy("WethMock", {
    from: deployer,
    log: true,
  })
}

module.exports.skip = ({ getChainId }) =>
  new Promise(async (resolve, reject) => {
    try {
      const chainId = await getChainId()
      resolve(chainId !== "31337" && chainId !== "421611" && chainId !== "421613")
    } catch (error) {
      reject(error)
    }
  })

module.exports.tags = ["Mocks"]
