// hardhat.config.ts

import "dotenv/config"
import "@nomiclabs/hardhat-etherscan"
import "@nomiclabs/hardhat-solhint"
import "@tenderly/hardhat-tenderly"
import "@nomiclabs/hardhat-waffle"
import "hardhat-abi-exporter"
import "hardhat-deploy"
import "hardhat-deploy-ethers"
import "hardhat-gas-reporter"
import "hardhat-spdx-license-identifier"
import "hardhat-typechain"
import "hardhat-watcher"
import "solidity-coverage"

import { HardhatUserConfig } from "hardhat/types"
import { removeConsoleLog } from "hardhat-preprocessor"

import "./hardhat-extra"

const accounts = {
  mnemonic: process.env.MNEMONIC || "test test test test test test test test test test test junk",
  // accountsBalance: "990000000000000000000",
}

// KMS signer used for production deployments: 0x39c6bf2f2360e993a5ed8e1a30edc01001af64f3
const prodKmsKey = "arn:aws:kms:us-east-1:884078395586:key/mrk-58392046945f4fd3a273d6fee98cf9c8";

// KMS signer used for dev deployments: 0x80b756c9ce65d5a2c2922d4cf778cd2fb2e6fa24
const devKmsKey = "arn:aws:kms:us-west-2:665230337498:key/mrk-a9779aa79c2646429ded5dc3431054ba";

const priAccount = process.env.PRIVATE_KEY ?? null;
const devAccount = process.env.DEV_KEY ?? null;
const devAccounts = [
  priAccount!,devAccount!
]

const config: HardhatUserConfig = {
  abiExporter: {
    path: "./abi",
    clear: false,
    flat: true,
    // only: [],
    // except: []
  },
  defaultNetwork: "hardhat",
  gasReporter: {
    coinmarketcap: process.env.COINMARKETCAP_API_KEY,
    currency: "USD",
    enabled: process.env.REPORT_GAS === "true",
    excludeContracts: ["contracts/mocks/", "contracts/libraries/"],
  },
  mocha: {
    timeout: 20000,
  },
  namedAccounts: {
    deployer: {
      default: 0,
    },
    dev: {
      // Default to 1
      default: 1,
      // dev address mainnet
      1: priAccount,
    },
  },
  networks: {
    mainnet: {
      url: `https://mainnet.infura.io/v3/${process.env.INFURA_API_KEY}`,
      accounts,
      gasPrice: 120 * 1000000000,
      chainId: 1,
    },
    localhost: {
      live: false,
      saveDeployments: true,
      tags: ["local"],
    },
    hardhat: {
      forking: {
        enabled: process.env.FORKING === "true",
        url: process.env.ARBITRUM_MAINNET_URL || "",
      },
      live: false,
      saveDeployments: true,
      tags: ["test", "local"],
    },
    arbitrumsepolia: {
        url: process.env.ARBITRUM_SEPOLIA_URL || "",
        timeout: 120000,
        live: true,
        saveDeployments: true,
        kmsKeyId: devKmsKey,
    },
    arbitrummainnet: {
        url: process.env.ARBITRUM_MAINNET_URL || "",
        timeout: 120000,
        live: true,
        saveDeployments: true,
        gasMultiplier: 2,
        kmsKeyId: prodKmsKey,
    },
  },
  etherscan: {
    apiKey: process.env.ARBIMAINNET_API_KEY,
    customChains: [
      {
          network: 'arbitrumGoerli',
          chainId: 421613,
          urls: {
              apiURL: 'https://goerli-rollup-explorer.arbitrum.io/api?module=contract&action=verifysourcecode',
              browserURL: 'https://goerli-rollup-explorer.arbitrum.io',
          },
      },
      {
          network: 'arbitrumsepolia',
          chainId: 421614,
          urls: {
              apiURL: 'https://api-sepolia.arbiscan.io/api',
              browserURL: 'https://sepolia.arbiscan.io',
          },
      },
    ],
  },
  verify: {
    etherscan: {
      apiKey: process.env.ARBIMAINNET_API_KEY
    }
  },
  paths: {
    artifacts: "artifacts",
    cache: "cache",
    deploy: "deploy",
    deployments: "deployments",
    imports: "imports",
    sources: "contracts",
    tests: "test",
  },
  preprocess: {
    eachLine: removeConsoleLog((bre) => bre.network.name !== "hardhat" && bre.network.name !== "localhost"),
  },
  solidity: {
    compilers: [
      {
        version: "0.6.12",
        settings: {
          optimizer: {
            enabled: true,
            runs: 999999,
          },
        },
      },
      {
        version: "0.8.10",
        settings: {
          optimizer: {
            enabled: true,
            runs: 200,
          },
        },
      },
    ],
  },
  spdxLicenseIdentifier: {
    overwrite: false,
    runOnCompile: true,
  },
  tenderly: {
    project: process.env.TENDERLY_PROJECT!,
    username: process.env.TENDERLY_USERNAME!,
  },
  typechain: {
    outDir: "types",
    target: "ethers-v5",
  },
  watcher: {
    compile: {
      tasks: ["compile"],
      files: ["./contracts"],
      verbose: true,
            },
      },
}

export default config
