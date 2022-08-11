/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { Contract, ContractFactory, Overrides } from "@ethersproject/contracts";

import type { UsdcMock } from "../UsdcMock";

export class UsdcMock__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(overrides?: Overrides): Promise<UsdcMock> {
    return super.deploy(overrides || {}) as Promise<UsdcMock>;
  }
  getDeployTransaction(overrides?: Overrides): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): UsdcMock {
    return super.attach(address) as UsdcMock;
  }
  connect(signer: Signer): UsdcMock__factory {
    return super.connect(signer) as UsdcMock__factory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): UsdcMock {
    return new Contract(address, _abi, signerOrProvider) as UsdcMock;
  }
}

const _abi = [
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
    ],
    name: "allowance",
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
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "balanceOf",
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
    name: "decimals",
    outputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "subtractedValue",
        type: "uint256",
      },
    ],
    name: "decreaseAllowance",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "addedValue",
        type: "uint256",
      },
    ],
    name: "increaseAllowance",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bool",
        name: "test",
        type: "bool",
      },
    ],
    name: "isUSDC",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "recipient",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amt",
        type: "uint256",
      },
    ],
    name: "mint",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "symbol",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "totalSupply",
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
    inputs: [
      {
        internalType: "address",
        name: "recipient",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transfer",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "sender",
        type: "address",
      },
      {
        internalType: "address",
        name: "recipient",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b506040805180820182526004808252635553444360e01b60208084018281528551808701909652928552840152815191929161004e91600391610077565b508051610062906004906020840190610077565b50506005805460ff191660121790555061010a565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f106100b857805160ff19168380011785556100e5565b828001600101855582156100e5579182015b828111156100e55782518255916020019190600101906100ca565b506100f19291506100f5565b5090565b5b808211156100f157600081556001016100f6565b610ef6806101196000396000f3fe608060405234801561001057600080fd5b50600436106100df5760003560e01c8063395093511161008c57806395d89b411161006657806395d89b41146102ef578063a457c2d7146102f7578063a9059cbb14610330578063dd62ed3e14610369576100df565b8063395093511461024857806340c10f191461028157806370a08231146102bc576100df565b806323b872dd116100bd57806323b872dd146101c8578063313ce5671461020b578063356ce30714610229576100df565b806306fdde03146100e4578063095ea7b31461016157806318160ddd146101ae575b600080fd5b6100ec6103a4565b6040805160208082528351818301528351919283929083019185019080838360005b8381101561012657818101518382015260200161010e565b50505050905090810190601f1680156101535780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b61019a6004803603604081101561017757600080fd5b5073ffffffffffffffffffffffffffffffffffffffff8135169060200135610458565b604080519115158252519081900360200190f35b6101b6610475565b60408051918252519081900360200190f35b61019a600480360360608110156101de57600080fd5b5073ffffffffffffffffffffffffffffffffffffffff81358116916020810135909116906040013561047b565b61021361051c565b6040805160ff9092168252519081900360200190f35b61019a6004803603602081101561023f57600080fd5b50351515610525565b61019a6004803603604081101561025e57600080fd5b5073ffffffffffffffffffffffffffffffffffffffff8135169060200135610671565b6102ba6004803603604081101561029757600080fd5b5073ffffffffffffffffffffffffffffffffffffffff81351690602001356106cc565b005b6101b6600480360360208110156102d257600080fd5b503573ffffffffffffffffffffffffffffffffffffffff166106da565b6100ec610702565b61019a6004803603604081101561030d57600080fd5b5073ffffffffffffffffffffffffffffffffffffffff8135169060200135610781565b61019a6004803603604081101561034657600080fd5b5073ffffffffffffffffffffffffffffffffffffffff81351690602001356107f6565b6101b66004803603604081101561037f57600080fd5b5073ffffffffffffffffffffffffffffffffffffffff8135811691602001351661080a565b60038054604080516020601f60027fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff61010060018816150201909516949094049384018190048102820181019092528281526060939092909183018282801561044e5780601f106104235761010080835404028352916020019161044e565b820191906000526020600020905b81548152906001019060200180831161043157829003601f168201915b5050505050905090565b600061046c610465610842565b8484610846565b50600192915050565b60025490565b600061048884848461098d565b61051284610494610842565b61050d85604051806060016040528060288152602001610e2b6028913973ffffffffffffffffffffffffffffffffffffffff8a166000908152600160205260408120906104df610842565b73ffffffffffffffffffffffffffffffffffffffff1681526020810191909152604001600020549190610b5d565b610846565b5060019392505050565b60055460ff1690565b600060405160200180807f55534443000000000000000000000000000000000000000000000000000000008152506004019050604051602081830303815290604052805190602001206105766103a4565b6040516020018082805190602001908083835b602083106105c657805182527fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe09092019160209182019101610589565b6001836020036101000a038019825116818451168082178552505050505050905001915050604051602081830303815290604052805190602001201461066d57604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600860248201527f6e6f742075736463000000000000000000000000000000000000000000000000604482015290519081900360640190fd5b5090565b600061046c61067e610842565b8461050d856001600061068f610842565b73ffffffffffffffffffffffffffffffffffffffff908116825260208083019390935260409182016000908120918c168152925290205490610c0e565b6106d68282610c89565b5050565b73ffffffffffffffffffffffffffffffffffffffff1660009081526020819052604090205490565b60048054604080516020601f60027fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff61010060018816150201909516949094049384018190048102820181019092528281526060939092909183018282801561044e5780601f106104235761010080835404028352916020019161044e565b600061046c61078e610842565b8461050d85604051806060016040528060258152602001610e9c60259139600160006107b8610842565b73ffffffffffffffffffffffffffffffffffffffff908116825260208083019390935260409182016000908120918d16815292529020549190610b5d565b600061046c610803610842565b848461098d565b73ffffffffffffffffffffffffffffffffffffffff918216600090815260016020908152604080832093909416825291909152205490565b3390565b73ffffffffffffffffffffffffffffffffffffffff83166108b2576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401808060200182810382526024815260200180610e786024913960400191505060405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff821661091e576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401808060200182810382526022815260200180610de36022913960400191505060405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff808416600081815260016020908152604080832094871680845294825291829020859055815185815291517f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b9259281900390910190a3505050565b73ffffffffffffffffffffffffffffffffffffffff83166109f9576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401808060200182810382526025815260200180610e536025913960400191505060405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff8216610a65576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401808060200182810382526023815260200180610dc06023913960400191505060405180910390fd5b610a70838383610dba565b610aba81604051806060016040528060268152602001610e056026913973ffffffffffffffffffffffffffffffffffffffff86166000908152602081905260409020549190610b5d565b73ffffffffffffffffffffffffffffffffffffffff8085166000908152602081905260408082209390935590841681522054610af69082610c0e565b73ffffffffffffffffffffffffffffffffffffffff8084166000818152602081815260409182902094909455805185815290519193928716927fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef92918290030190a3505050565b60008184841115610c06576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825283818151815260200191508051906020019080838360005b83811015610bcb578181015183820152602001610bb3565b50505050905090810190601f168015610bf85780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b505050900390565b600082820183811015610c8257604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601b60248201527f536166654d6174683a206164646974696f6e206f766572666c6f770000000000604482015290519081900360640190fd5b9392505050565b73ffffffffffffffffffffffffffffffffffffffff8216610d0b57604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601f60248201527f45524332303a206d696e7420746f20746865207a65726f206164647265737300604482015290519081900360640190fd5b610d1760008383610dba565b600254610d249082610c0e565b60025573ffffffffffffffffffffffffffffffffffffffff8216600090815260208190526040902054610d579082610c0e565b73ffffffffffffffffffffffffffffffffffffffff83166000818152602081815260408083209490945583518581529351929391927fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9281900390910190a35050565b50505056fe45524332303a207472616e7366657220746f20746865207a65726f206164647265737345524332303a20617070726f766520746f20746865207a65726f206164647265737345524332303a207472616e7366657220616d6f756e7420657863656564732062616c616e636545524332303a207472616e7366657220616d6f756e74206578636565647320616c6c6f77616e636545524332303a207472616e736665722066726f6d20746865207a65726f206164647265737345524332303a20617070726f76652066726f6d20746865207a65726f206164647265737345524332303a2064656372656173656420616c6c6f77616e63652062656c6f77207a65726fa264697066735822122003cadf962aef8db4bf7cdc7ae3f0f2975b3a8352ac2c2c86440d34554e085ab864736f6c634300060c0033";