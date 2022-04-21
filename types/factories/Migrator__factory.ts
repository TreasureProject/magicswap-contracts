/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, BigNumberish } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { Contract, ContractFactory, Overrides } from "@ethersproject/contracts";

import type { Migrator } from "../Migrator";

export class Migrator__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    _chef: string,
    _oldFactory: string,
    _factory: string,
    _notBeforeBlock: BigNumberish,
    overrides?: Overrides
  ): Promise<Migrator> {
    return super.deploy(
      _chef,
      _oldFactory,
      _factory,
      _notBeforeBlock,
      overrides || {}
    ) as Promise<Migrator>;
  }
  getDeployTransaction(
    _chef: string,
    _oldFactory: string,
    _factory: string,
    _notBeforeBlock: BigNumberish,
    overrides?: Overrides
  ): TransactionRequest {
    return super.getDeployTransaction(
      _chef,
      _oldFactory,
      _factory,
      _notBeforeBlock,
      overrides || {}
    );
  }
  attach(address: string): Migrator {
    return super.attach(address) as Migrator;
  }
  connect(signer: Signer): Migrator__factory {
    return super.connect(signer) as Migrator__factory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): Migrator {
    return new Contract(address, _abi, signerOrProvider) as Migrator;
  }
}

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_chef",
        type: "address",
      },
      {
        internalType: "address",
        name: "_oldFactory",
        type: "address",
      },
      {
        internalType: "contract IUniswapV2Factory",
        name: "_factory",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_notBeforeBlock",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [],
    name: "chef",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "desiredLiquidity",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "factory",
    outputs: [
      {
        internalType: "contract IUniswapV2Factory",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "contract IUniswapV2Pair",
        name: "orig",
        type: "address",
      },
    ],
    name: "migrate",
    outputs: [
      {
        internalType: "contract IUniswapV2Pair",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "notBeforeBlock",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "oldFactory",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

const _bytecode =
  "0x608060405260001960045534801561001657600080fd5b5060405161098f38038061098f8339818101604052608081101561003957600080fd5b50805160208201516040830151606090930151600080546001600160a01b03199081166001600160a01b039586161782556001805482169486169490941790935560028054909316939094169290921790556003556108f190819061009e90396000f3fe608060405234801561001057600080fd5b50600436106100725760003560e01c806340dc0e371161005057806340dc0e37146100ca578063c45a0155146100d2578063ce5494bb146100da57610072565b806305293137146100775780631bd6dfe1146100915780631fc8bc5d146100c2575b600080fd5b61007f61010d565b60408051918252519081900360200190f35b610099610113565b6040805173ffffffffffffffffffffffffffffffffffffffff9092168252519081900360200190f35b61009961012f565b61007f61014b565b610099610151565b610099600480360360208110156100f057600080fd5b503573ffffffffffffffffffffffffffffffffffffffff1661016d565b60035481565b60015473ffffffffffffffffffffffffffffffffffffffff1681565b60005473ffffffffffffffffffffffffffffffffffffffff1681565b60045481565b60025473ffffffffffffffffffffffffffffffffffffffff1681565b6000805473ffffffffffffffffffffffffffffffffffffffff1633146101f457604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601460248201527f6e6f742066726f6d206d61737465722063686566000000000000000000000000604482015290519081900360640190fd5b60035443101561026557604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601460248201527f746f6f206561726c7920746f206d696772617465000000000000000000000000604482015290519081900360640190fd5b600154604080517fc45a0155000000000000000000000000000000000000000000000000000000008152905173ffffffffffffffffffffffffffffffffffffffff9283169285169163c45a0155916004808301926020929190829003018186803b1580156102d257600080fd5b505afa1580156102e6573d6000803e3d6000fd5b505050506040513d60208110156102fc57600080fd5b505173ffffffffffffffffffffffffffffffffffffffff161461038057604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601460248201527f6e6f742066726f6d206f6c6420666163746f7279000000000000000000000000604482015290519081900360640190fd5b60008273ffffffffffffffffffffffffffffffffffffffff16630dfe16816040518163ffffffff1660e01b815260040160206040518083038186803b1580156103c857600080fd5b505afa1580156103dc573d6000803e3d6000fd5b505050506040513d60208110156103f257600080fd5b5051604080517fd21220a7000000000000000000000000000000000000000000000000000000008152905191925060009173ffffffffffffffffffffffffffffffffffffffff86169163d21220a7916004808301926020929190829003018186803b15801561046057600080fd5b505afa158015610474573d6000803e3d6000fd5b505050506040513d602081101561048a57600080fd5b5051600254604080517fe6a4390500000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff868116600483015280851660248301529151939450600093919092169163e6a43905916044808301926020929190829003018186803b15801561050d57600080fd5b505afa158015610521573d6000803e3d6000fd5b505050506040513d602081101561053757600080fd5b5051905073ffffffffffffffffffffffffffffffffffffffff811661060257600254604080517fc9c6539600000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff868116600483015285811660248301529151919092169163c9c653969160448083019260209291908290030181600087803b1580156105d357600080fd5b505af11580156105e7573d6000803e3d6000fd5b505050506040513d60208110156105fd57600080fd5b505190505b60008573ffffffffffffffffffffffffffffffffffffffff166370a08231336040518263ffffffff1660e01b8152600401808273ffffffffffffffffffffffffffffffffffffffff16815260200191505060206040518083038186803b15801561066b57600080fd5b505afa15801561067f573d6000803e3d6000fd5b505050506040513d602081101561069557600080fd5b50519050806106a9575092506108b6915050565b6004818155604080517f23b872dd000000000000000000000000000000000000000000000000000000008152339281019290925273ffffffffffffffffffffffffffffffffffffffff88166024830181905260448301849052905190916323b872dd9160648083019260209291908290030181600087803b15801561072d57600080fd5b505af1158015610741573d6000803e3d6000fd5b505050506040513d602081101561075757600080fd5b5050604080517f89afcb4400000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff84811660048301528251908916926389afcb4492602480820193918290030181600087803b1580156107c657600080fd5b505af11580156107da573d6000803e3d6000fd5b505050506040513d60408110156107f057600080fd5b5050604080517f6a627842000000000000000000000000000000000000000000000000000000008152336004820152905173ffffffffffffffffffffffffffffffffffffffff841691636a6278429160248083019260209291908290030181600087803b15801561086057600080fd5b505af1158015610874573d6000803e3d6000fd5b505050506040513d602081101561088a57600080fd5b50507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff60045550925050505b91905056fea26469706673582212204af15c28f8d689a25a49b918b07a56e8487248a73bbcee84c300540391eddaa464736f6c634300060c0033";
