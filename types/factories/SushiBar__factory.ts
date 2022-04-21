/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { Contract, ContractFactory, Overrides } from "@ethersproject/contracts";

import type { SushiBar } from "../SushiBar";

export class SushiBar__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(_sushi: string, overrides?: Overrides): Promise<SushiBar> {
    return super.deploy(_sushi, overrides || {}) as Promise<SushiBar>;
  }
  getDeployTransaction(
    _sushi: string,
    overrides?: Overrides
  ): TransactionRequest {
    return super.getDeployTransaction(_sushi, overrides || {});
  }
  attach(address: string): SushiBar {
    return super.attach(address) as SushiBar;
  }
  connect(signer: Signer): SushiBar__factory {
    return super.connect(signer) as SushiBar__factory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): SushiBar {
    return new Contract(address, _abi, signerOrProvider) as SushiBar;
  }
}

const _abi = [
  {
    inputs: [
      {
        internalType: "contract IERC20",
        name: "_sushi",
        type: "address",
      },
    ],
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
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
    ],
    name: "enter",
    outputs: [],
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
        internalType: "uint256",
        name: "_share",
        type: "uint256",
      },
    ],
    name: "leave",
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
    name: "sushi",
    outputs: [
      {
        internalType: "contract IERC20",
        name: "",
        type: "address",
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
  "0x60806040523480156200001157600080fd5b506040516200157b3803806200157b833981810160405260208110156200003757600080fd5b5051604080518082018252600881526729bab9b434a130b960c11b60208281019182528351808501909452600684526578535553484960d01b9084015281519192916200008791600391620000d7565b5080516200009d906004906020840190620000d7565b5050600580546001600160a01b0390931661010002610100600160a81b031960ff1990941660121793909316929092179091555062000173565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f106200011a57805160ff19168380011785556200014a565b828001600101855582156200014a579182015b828111156200014a5782518255916020019190600101906200012d565b50620001589291506200015c565b5090565b5b808211156200015857600081556001016200015d565b6113f880620001836000396000f3fe608060405234801561001057600080fd5b50600436106100ea5760003560e01c806367dfd4c91161008c578063a457c2d711610066578063a457c2d7146102f8578063a59f3e0c14610331578063a9059cbb1461034e578063dd62ed3e14610387576100ea565b806367dfd4c91461029e57806370a08231146102bd57806395d89b41146102f0576100ea565b806318160ddd116100c857806318160ddd146101ea57806323b872dd14610204578063313ce567146102475780633950935114610265576100ea565b806306fdde03146100ef578063095ea7b31461016c5780630a087903146101b9575b600080fd5b6100f76103c2565b6040805160208082528351818301528351919283929083019185019080838360005b83811015610131578181015183820152602001610119565b50505050905090810190601f16801561015e5780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b6101a56004803603604081101561018257600080fd5b5073ffffffffffffffffffffffffffffffffffffffff8135169060200135610476565b604080519115158252519081900360200190f35b6101c1610494565b6040805173ffffffffffffffffffffffffffffffffffffffff9092168252519081900360200190f35b6101f26104b5565b60408051918252519081900360200190f35b6101a56004803603606081101561021a57600080fd5b5073ffffffffffffffffffffffffffffffffffffffff8135811691602081013590911690604001356104bb565b61024f61055c565b6040805160ff9092168252519081900360200190f35b6101a56004803603604081101561027b57600080fd5b5073ffffffffffffffffffffffffffffffffffffffff8135169060200135610565565b6102bb600480360360208110156102b457600080fd5b50356105c0565b005b6101f2600480360360208110156102d357600080fd5b503573ffffffffffffffffffffffffffffffffffffffff16610752565b6100f761077a565b6101a56004803603604081101561030e57600080fd5b5073ffffffffffffffffffffffffffffffffffffffff81351690602001356107f9565b6102bb6004803603602081101561034757600080fd5b503561086e565b6101a56004803603604081101561036457600080fd5b5073ffffffffffffffffffffffffffffffffffffffff81351690602001356109df565b6101f26004803603604081101561039d57600080fd5b5073ffffffffffffffffffffffffffffffffffffffff813581169160200135166109f3565b60038054604080516020601f60027fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff61010060018816150201909516949094049384018190048102820181019092528281526060939092909183018282801561046c5780601f106104415761010080835404028352916020019161046c565b820191906000526020600020905b81548152906001019060200180831161044f57829003601f168201915b5050505050905090565b600061048a610483610a2b565b8484610a2f565b5060015b92915050565b600554610100900473ffffffffffffffffffffffffffffffffffffffff1681565b60025490565b60006104c8848484610b76565b610552846104d4610a2b565b61054d8560405180606001604052806028815260200161130c6028913973ffffffffffffffffffffffffffffffffffffffff8a1660009081526001602052604081209061051f610a2b565b73ffffffffffffffffffffffffffffffffffffffff1681526020810191909152604001600020549190610d46565b610a2f565b5060019392505050565b60055460ff1690565b600061048a610572610a2b565b8461054d8560016000610583610a2b565b73ffffffffffffffffffffffffffffffffffffffff908116825260208083019390935260409182016000908120918c168152925290205490610df7565b60006105ca6104b5565b9050600061069782610691600560019054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166370a08231306040518263ffffffff1660e01b8152600401808273ffffffffffffffffffffffffffffffffffffffff16815260200191505060206040518083038186803b15801561065e57600080fd5b505afa158015610672573d6000803e3d6000fd5b505050506040513d602081101561068857600080fd5b50518690610e72565b90610ee5565b90506106a33384610f66565b600554604080517fa9059cbb00000000000000000000000000000000000000000000000000000000815233600482015260248101849052905161010090920473ffffffffffffffffffffffffffffffffffffffff169163a9059cbb916044808201926020929091908290030181600087803b15801561072157600080fd5b505af1158015610735573d6000803e3d6000fd5b505050506040513d602081101561074b57600080fd5b5050505050565b73ffffffffffffffffffffffffffffffffffffffff1660009081526020819052604090205490565b60048054604080516020601f60027fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff61010060018816150201909516949094049384018190048102820181019092528281526060939092909183018282801561046c5780601f106104415761010080835404028352916020019161046c565b600061048a610806610a2b565b8461054d8560405180606001604052806025815260200161139e6025913960016000610830610a2b565b73ffffffffffffffffffffffffffffffffffffffff908116825260208083019390935260409182016000908120918d16815292529020549190610d46565b600554604080517f70a082310000000000000000000000000000000000000000000000000000000081523060048201529051600092610100900473ffffffffffffffffffffffffffffffffffffffff16916370a08231916024808301926020929190829003018186803b1580156108e457600080fd5b505afa1580156108f8573d6000803e3d6000fd5b505050506040513d602081101561090e57600080fd5b50519050600061091c6104b5565b9050801580610929575081155b1561093d5761093833846110b0565b61095b565b600061094d836106918685610e72565b905061095933826110b0565b505b600554604080517f23b872dd00000000000000000000000000000000000000000000000000000000815233600482015230602482015260448101869052905161010090920473ffffffffffffffffffffffffffffffffffffffff16916323b872dd916064808201926020929091908290030181600087803b15801561072157600080fd5b600061048a6109ec610a2b565b8484610b76565b73ffffffffffffffffffffffffffffffffffffffff918216600090815260016020908152604080832093909416825291909152205490565b3390565b73ffffffffffffffffffffffffffffffffffffffff8316610a9b576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602481526020018061137a6024913960400191505060405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff8216610b07576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260228152602001806112a36022913960400191505060405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff808416600081815260016020908152604080832094871680845294825291829020859055815185815291517f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b9259281900390910190a3505050565b73ffffffffffffffffffffffffffffffffffffffff8316610be2576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260258152602001806113556025913960400191505060405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff8216610c4e576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602381526020018061125e6023913960400191505060405180910390fd5b610c598383836111e1565b610ca3816040518060600160405280602681526020016112c56026913973ffffffffffffffffffffffffffffffffffffffff86166000908152602081905260409020549190610d46565b73ffffffffffffffffffffffffffffffffffffffff8085166000908152602081905260408082209390935590841681522054610cdf9082610df7565b73ffffffffffffffffffffffffffffffffffffffff8084166000818152602081815260409182902094909455805185815290519193928716927fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef92918290030190a3505050565b60008184841115610def576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825283818151815260200191508051906020019080838360005b83811015610db4578181015183820152602001610d9c565b50505050905090810190601f168015610de15780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b505050900390565b600082820183811015610e6b57604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601b60248201527f536166654d6174683a206164646974696f6e206f766572666c6f770000000000604482015290519081900360640190fd5b9392505050565b600082610e815750600061048e565b82820282848281610e8e57fe5b0414610e6b576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260218152602001806112eb6021913960400191505060405180910390fd5b6000808211610f5557604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601a60248201527f536166654d6174683a206469766973696f6e206279207a65726f000000000000604482015290519081900360640190fd5b818381610f5e57fe5b049392505050565b73ffffffffffffffffffffffffffffffffffffffff8216610fd2576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260218152602001806113346021913960400191505060405180910390fd5b610fde826000836111e1565b611028816040518060600160405280602281526020016112816022913973ffffffffffffffffffffffffffffffffffffffff85166000908152602081905260409020549190610d46565b73ffffffffffffffffffffffffffffffffffffffff831660009081526020819052604090205560025461105b90826111e6565b60025560408051828152905160009173ffffffffffffffffffffffffffffffffffffffff8516917fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9181900360200190a35050565b73ffffffffffffffffffffffffffffffffffffffff821661113257604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601f60248201527f45524332303a206d696e7420746f20746865207a65726f206164647265737300604482015290519081900360640190fd5b61113e600083836111e1565b60025461114b9082610df7565b60025573ffffffffffffffffffffffffffffffffffffffff821660009081526020819052604090205461117e9082610df7565b73ffffffffffffffffffffffffffffffffffffffff83166000818152602081815260408083209490945583518581529351929391927fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9281900390910190a35050565b505050565b60008282111561125757604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601e60248201527f536166654d6174683a207375627472616374696f6e206f766572666c6f770000604482015290519081900360640190fd5b5090039056fe45524332303a207472616e7366657220746f20746865207a65726f206164647265737345524332303a206275726e20616d6f756e7420657863656564732062616c616e636545524332303a20617070726f766520746f20746865207a65726f206164647265737345524332303a207472616e7366657220616d6f756e7420657863656564732062616c616e6365536166654d6174683a206d756c7469706c69636174696f6e206f766572666c6f7745524332303a207472616e7366657220616d6f756e74206578636565647320616c6c6f77616e636545524332303a206275726e2066726f6d20746865207a65726f206164647265737345524332303a207472616e736665722066726f6d20746865207a65726f206164647265737345524332303a20617070726f76652066726f6d20746865207a65726f206164647265737345524332303a2064656372656173656420616c6c6f77616e63652062656c6f77207a65726fa2646970667358221220d66614508feb2fccc1bd270639cfe3a49283e64afbd300fa095d8a9e641a4a6d64736f6c634300060c0033";
