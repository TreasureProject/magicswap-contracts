/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { Contract, ContractFactory, Overrides } from "@ethersproject/contracts";

import type { BoringFactory } from "../BoringFactory";

export class BoringFactory__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(overrides?: Overrides): Promise<BoringFactory> {
    return super.deploy(overrides || {}) as Promise<BoringFactory>;
  }
  getDeployTransaction(overrides?: Overrides): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): BoringFactory {
    return super.attach(address) as BoringFactory;
  }
  connect(signer: Signer): BoringFactory__factory {
    return super.connect(signer) as BoringFactory__factory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): BoringFactory {
    return new Contract(address, _abi, signerOrProvider) as BoringFactory;
  }
}

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "masterContract",
        type: "address",
      },
      {
        indexed: false,
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
      {
        indexed: true,
        internalType: "address",
        name: "cloneAddress",
        type: "address",
      },
    ],
    name: "LogDeploy",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "masterContract",
        type: "address",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
      {
        internalType: "bool",
        name: "useCreate2",
        type: "bool",
      },
    ],
    name: "deploy",
    outputs: [
      {
        internalType: "address",
        name: "cloneAddress",
        type: "address",
      },
    ],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "masterContractOf",
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
  "0x608060405234801561001057600080fd5b506104dc806100206000396000f3fe6080604052600436106100295760003560e01c80631f54245b1461002e578063bafe4f1414610057575b600080fd5b61004161003c36600461035d565b610077565b60405161004e9190610403565b60405180910390f35b34801561006357600080fd5b5061004161007236600461033b565b6102e9565b600073ffffffffffffffffffffffffffffffffffffffff85166100cf576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016100c690610471565b60405180910390fd5b606085901b821561015857600085856040516100ec9291906103f3565b604051809103902090506040517f3d602d80600a3d3981f3363d3d373d3d3d363d7300000000000000000000000081528260148201527f5af43d82803e903d91602b57fd5bf300000000000000000000000000000000006028820152816037826000f5935050506101b4565b6040517f3d602d80600a3d3981f3363d3d373d3d3d363d7300000000000000000000000081528160148201527f5af43d82803e903d91602b57fd5bf3000000000000000000000000000000000060288201526037816000f09250505b73ffffffffffffffffffffffffffffffffffffffff8281166000818152602081905260409081902080547fffffffffffffffffffffffff000000000000000000000000000000000000000016938a169390931790925590517f4ddf47d4000000000000000000000000000000000000000000000000000000008152634ddf47d49034906102479089908990600401610424565b6000604051808303818588803b15801561026057600080fd5b505af1158015610274573d6000803e3d6000fd5b50505050508173ffffffffffffffffffffffffffffffffffffffff168673ffffffffffffffffffffffffffffffffffffffff167fd62166f3c2149208e51788b1401cc356bf5da1fc6c7886a32e18570f57d88b3b87876040516102d8929190610424565b60405180910390a350949350505050565b60006020819052908152604090205473ffffffffffffffffffffffffffffffffffffffff1681565b803573ffffffffffffffffffffffffffffffffffffffff8116811461033557600080fd5b92915050565b60006020828403121561034c578081fd5b6103568383610311565b9392505050565b60008060008060608587031215610372578283fd5b61037c8686610311565b9350602085013567ffffffffffffffff80821115610398578485fd5b818701915087601f8301126103ab578485fd5b8135818111156103b9578586fd5b8860208285010111156103ca578586fd5b602083019550809450505050604085013580151581146103e8578182fd5b939692955090935050565b6000828483379101908152919050565b73ffffffffffffffffffffffffffffffffffffffff91909116815260200190565b60006020825282602083015282846040840137818301604090810191909152601f9092017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0160101919050565b6020808252818101527f426f72696e67466163746f72793a204e6f206d6173746572436f6e747261637460408201526060019056fea264697066735822122099e6d501cf64f4496e5945b0a7da51a7269c1c3ba0a3d2f2d699080171c1303364736f6c634300060c0033";
