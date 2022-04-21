/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, BigNumberish } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { Contract, ContractFactory, Overrides } from "@ethersproject/contracts";

import type { ComplexRewarderTime } from "../ComplexRewarderTime";

export class ComplexRewarderTime__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    _rewardToken: string,
    _rewardPerSecond: BigNumberish,
    _MASTERCHEF_V2: string,
    overrides?: Overrides
  ): Promise<ComplexRewarderTime> {
    return super.deploy(
      _rewardToken,
      _rewardPerSecond,
      _MASTERCHEF_V2,
      overrides || {}
    ) as Promise<ComplexRewarderTime>;
  }
  getDeployTransaction(
    _rewardToken: string,
    _rewardPerSecond: BigNumberish,
    _MASTERCHEF_V2: string,
    overrides?: Overrides
  ): TransactionRequest {
    return super.getDeployTransaction(
      _rewardToken,
      _rewardPerSecond,
      _MASTERCHEF_V2,
      overrides || {}
    );
  }
  attach(address: string): ComplexRewarderTime {
    return super.attach(address) as ComplexRewarderTime;
  }
  connect(signer: Signer): ComplexRewarderTime__factory {
    return super.connect(signer) as ComplexRewarderTime__factory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ComplexRewarderTime {
    return new Contract(address, _abi, signerOrProvider) as ComplexRewarderTime;
  }
}

const _abi = [
  {
    inputs: [
      {
        internalType: "contract IERC20",
        name: "_rewardToken",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_rewardPerSecond",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "_MASTERCHEF_V2",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [],
    name: "LogInit",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "user",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "pid",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
    ],
    name: "LogOnReward",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "pid",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "allocPoint",
        type: "uint256",
      },
    ],
    name: "LogPoolAddition",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "rewardPerSecond",
        type: "uint256",
      },
    ],
    name: "LogRewardPerSecond",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "pid",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "allocPoint",
        type: "uint256",
      },
    ],
    name: "LogSetPool",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "pid",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint64",
        name: "lastRewardTime",
        type: "uint64",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "lpSupply",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "accSushiPerShare",
        type: "uint256",
      },
    ],
    name: "LogUpdatePool",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "allocPoint",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_pid",
        type: "uint256",
      },
    ],
    name: "add",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "claimOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256[]",
        name: "pids",
        type: "uint256[]",
      },
    ],
    name: "massUpdatePools",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "pid",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "_user",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "lpToken",
        type: "uint256",
      },
    ],
    name: "onSushiReward",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
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
    name: "pendingOwner",
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
    inputs: [
      {
        internalType: "uint256",
        name: "_pid",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "_user",
        type: "address",
      },
    ],
    name: "pendingToken",
    outputs: [
      {
        internalType: "uint256",
        name: "pending",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "pid",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "user",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "pendingTokens",
    outputs: [
      {
        internalType: "contract IERC20[]",
        name: "rewardTokens",
        type: "address[]",
      },
      {
        internalType: "uint256[]",
        name: "rewardAmounts",
        type: "uint256[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "poolIds",
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
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "poolInfo",
    outputs: [
      {
        internalType: "uint128",
        name: "accSushiPerShare",
        type: "uint128",
      },
      {
        internalType: "uint64",
        name: "lastRewardTime",
        type: "uint64",
      },
      {
        internalType: "uint64",
        name: "allocPoint",
        type: "uint64",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "poolLength",
    outputs: [
      {
        internalType: "uint256",
        name: "pools",
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
        name: "token",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        internalType: "address payable",
        name: "to",
        type: "address",
      },
    ],
    name: "reclaimTokens",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "rewardPerSecond",
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
        internalType: "uint256",
        name: "_pid",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_allocPoint",
        type: "uint256",
      },
    ],
    name: "set",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_rewardPerSecond",
        type: "uint256",
      },
    ],
    name: "setRewardPerSecond",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
      {
        internalType: "bool",
        name: "direct",
        type: "bool",
      },
      {
        internalType: "bool",
        name: "renounce",
        type: "bool",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "pid",
        type: "uint256",
      },
    ],
    name: "updatePool",
    outputs: [
      {
        components: [
          {
            internalType: "uint128",
            name: "accSushiPerShare",
            type: "uint128",
          },
          {
            internalType: "uint64",
            name: "lastRewardTime",
            type: "uint64",
          },
          {
            internalType: "uint64",
            name: "allocPoint",
            type: "uint64",
          },
        ],
        internalType: "struct ComplexRewarderTime.PoolInfo",
        name: "pool",
        type: "tuple",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "userInfo",
    outputs: [
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "rewardDebt",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "unpaidRewards",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

const _bytecode =
  "0x60c06040523480156200001157600080fd5b50604051620021ca380380620021ca83398101604081905262000034916200009e565b600080546001600160a01b0319163390811782556040519091907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0908290a36001600160601b0319606093841b811660805260069290925590911b1660a0526001600755620000fe565b600080600060608486031215620000b3578283fd5b8351620000c081620000e5565b602085015160408601519194509250620000da81620000e5565b809150509250925092565b6001600160a01b0381168114620000fb57600080fd5b50565b60805160601c60a05160601c61207f6200014b600039806106d9528061077b5280610aa95280610b4b528061110452508061123052806112fb5280611349528061157a525061207f6000f3fe608060405234801561001057600080fd5b50600436106101365760003560e01c806369883b4e116100b25780638f10369a11610081578063c1ea386811610066578063c1ea38681461027c578063d63b3c491461028f578063e30c3978146102b057610136565b80638f10369a1461025257806393f1a40b1461025a57610136565b806369883b4e14610204578063771602f7146102175780638bf637421461022a5780638da5cb5b1461023d57610136565b806348e43af41161010957806351eb05a6116100ee57806351eb05a6146101be57806357a5b58c146101de57806366da5815146101f157610136565b806348e43af4146101a35780634e71e0c8146101b657610136565b8063078dfbe71461013b578063081e3eda146101505780631526fe271461016e5780631ab06ee514610190575b600080fd5b61014e61014936600461193b565b6102b8565b005b61015861044c565b6040516101659190611fc3565b60405180910390f35b61018161017c366004611a69565b610452565b60405161016593929190611f8f565b61014e61019e366004611b50565b6104b5565b6101586101b1366004611a99565b6105f8565b61014e6108f8565b6101d16101cc366004611a69565b6109de565b6040516101659190611f4c565b61014e6101ec3660046119bb565b610db8565b61014e6101ff366004611a69565b610dee565b610158610212366004611a69565b610e7f565b61014e610225366004611b50565b610e9d565b61014e610238366004611ac8565b6110ec565b61024561142e565b6040516101659190611bb2565b61015861144a565b61026d610268366004611a99565b611450565b60405161016593929190611fcc565b61014e61028a366004611985565b61147c565b6102a261029d366004611b19565b611552565b604051610165929190611bf9565b61024561161e565b60005473ffffffffffffffffffffffffffffffffffffffff163314610312576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161030990611e3d565b60405180910390fd5b81156104065773ffffffffffffffffffffffffffffffffffffffff83161515806103395750805b61036f576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161030990611d98565b6000805460405173ffffffffffffffffffffffffffffffffffffffff808716939216917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e091a36000805473ffffffffffffffffffffffffffffffffffffffff85167fffffffffffffffffffffffff000000000000000000000000000000000000000091821617909155600180549091169055610447565b600180547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff85161790555b505050565b60035490565b6002602052600090815260409020546fffffffffffffffffffffffffffffffff81169067ffffffffffffffff7001000000000000000000000000000000008204811691780100000000000000000000000000000000000000000000000090041683565b60005473ffffffffffffffffffffffffffffffffffffffff163314610506576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161030990611e3d565b60008281526002602052604090205460055461055391839161054d917801000000000000000000000000000000000000000000000000900467ffffffffffffffff1661163a565b9061167d565b60055561055f816116ba565b60008381526002602052604090819020805467ffffffffffffffff9390931678010000000000000000000000000000000000000000000000000277ffffffffffffffffffffffffffffffffffffffffffffffff909316929092179091555182907f942cc7e17a17c164bd977f32ab8c54265d5b9d481e4e352bf874f1e568874e7c906105ec908490611fc3565b60405180910390a25050565b600061060261191b565b506000838152600260209081526040808320815160608101835290546fffffffffffffffffffffffffffffffff808216835267ffffffffffffffff7001000000000000000000000000000000008304811684870152780100000000000000000000000000000000000000000000000090920490911682840152878552600480855283862073ffffffffffffffffffffffffffffffffffffffff808a1688529552838620835194517f78ed5d1f00000000000000000000000000000000000000000000000000000000815293969095949092169391927f0000000000000000000000000000000000000000000000000000000000000000909216916378ed5d1f9161070e918b9101611fc3565b60206040518083038186803b15801561072657600080fd5b505afa15801561073a573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061075e9190611a4d565b73ffffffffffffffffffffffffffffffffffffffff166370a082317f00000000000000000000000000000000000000000000000000000000000000006040518263ffffffff1660e01b81526004016107b69190611bb2565b60206040518083038186803b1580156107ce57600080fd5b505afa1580156107e2573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906108069190611a81565b9050836020015167ffffffffffffffff164211801561082457508015155b156108b257600061084c856020015167ffffffffffffffff164261163a90919063ffffffff16565b90506000600554610880876040015167ffffffffffffffff1661087a6006548661170290919063ffffffff16565b90611702565b8161088757fe5b0490506108ad8361089d8364e8d4a51000611702565b816108a457fe5b8691900461167d565b935050505b6108ed836002015461054d856001015464e8d4a510006108df87896000015461170290919063ffffffff16565b816108e657fe5b049061163a565b979650505050505050565b60015473ffffffffffffffffffffffffffffffffffffffff1633811461094a576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161030990611e72565b6000805460405173ffffffffffffffffffffffffffffffffffffffff808516939216917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e091a36000805473ffffffffffffffffffffffffffffffffffffffff9092167fffffffffffffffffffffffff0000000000000000000000000000000000000000928316179055600180549091169055565b6109e661191b565b50600081815260026020908152604091829020825160608101845290546fffffffffffffffffffffffffffffffff8116825267ffffffffffffffff7001000000000000000000000000000000008204811693830184905278010000000000000000000000000000000000000000000000009091041692810192909252421115610db3576040517f78ed5d1f00000000000000000000000000000000000000000000000000000000815260009073ffffffffffffffffffffffffffffffffffffffff7f000000000000000000000000000000000000000000000000000000000000000016906378ed5d1f90610ade908690600401611fc3565b60206040518083038186803b158015610af657600080fd5b505afa158015610b0a573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610b2e9190611a4d565b73ffffffffffffffffffffffffffffffffffffffff166370a082317f00000000000000000000000000000000000000000000000000000000000000006040518263ffffffff1660e01b8152600401610b869190611bb2565b60206040518083038186803b158015610b9e57600080fd5b505afa158015610bb2573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610bd69190611a81565b90508015610c8d576000610c01836020015167ffffffffffffffff164261163a90919063ffffffff16565b90506000600554610c2f856040015167ffffffffffffffff1661087a6006548661170290919063ffffffff16565b81610c3657fe5b049050610c76610c5c84610c4f8464e8d4a51000611702565b81610c5657fe5b04611753565b85516fffffffffffffffffffffffffffffffff169061179f565b6fffffffffffffffffffffffffffffffff16845250505b610c96426116ba565b67ffffffffffffffff908116602084810191825260008681526002909152604090819020855181549351838801517fffffffffffffffffffffffffffffffff000000000000000000000000000000009095166fffffffffffffffffffffffffffffffff8316177fffffffffffffffff0000000000000000ffffffffffffffffffffffffffffffff16700100000000000000000000000000000000828816021777ffffffffffffffffffffffffffffffffffffffffffffffff16780100000000000000000000000000000000000000000000000095909616949094029490941790555185927f0fc9545022a542541ad085d091fb09a2ab36fee366a4576ab63714ea907ad35392610da99290918691611fe2565b60405180910390a2505b919050565b8060005b81811015610de857610ddf848483818110610dd357fe5b905060200201356109de565b50600101610dbc565b50505050565b60005473ffffffffffffffffffffffffffffffffffffffff163314610e3f576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161030990611e3d565b60068190556040517fde89cb17ac7f58f94792b3e91e086ed85403819c24ceea882491f960ccb1a27890610e74908390611fc3565b60405180910390a150565b60038181548110610e8c57fe5b600091825260209091200154905081565b60005473ffffffffffffffffffffffffffffffffffffffff163314610eee576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161030990611e3d565b600081815260026020526040902054700100000000000000000000000000000000900467ffffffffffffffff1615610f52576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161030990611ccd565b6005544290610f61908461167d565b60055560408051606081019091526000815260208101610f80836116ba565b67ffffffffffffffff168152602001610f98856116ba565b67ffffffffffffffff9081169091526000848152600260209081526040808320855181549387015196830151861678010000000000000000000000000000000000000000000000000277ffffffffffffffffffffffffffffffffffffffffffffffff97909616700100000000000000000000000000000000027fffffffffffffffff0000000000000000ffffffffffffffffffffffffffffffff6fffffffffffffffffffffffffffffffff9092167fffffffffffffffffffffffffffffffff0000000000000000000000000000000090951694909417169290921794909416929092179091556003805460018101825591527fc2575a0e9e593c00f959f8c92f12db2869c3395a3b0502d05e2516446f71f85b018390555182907f38410508059921573ab9ebdca2a5034be738d236366b8f32de4434ea95ed3c81906110df908690611fc3565b60405180910390a2505050565b3373ffffffffffffffffffffffffffffffffffffffff7f0000000000000000000000000000000000000000000000000000000000000000161461115b576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161030990611d3b565b600754600114611197576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161030990611ede565b60026007556111a461191b565b6111ad866109de565b600087815260046020908152604080832073ffffffffffffffffffffffffffffffffffffffff8a16845290915281208054929350911561137a5761122a826002015461054d846001015464e8d4a510006108df88600001516fffffffffffffffffffffffffffffffff16886000015461170290919063ffffffff16565b905060007f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff166370a08231306040518263ffffffff1660e01b81526004016112879190611bb2565b60206040518083038186803b15801561129f57600080fd5b505afa1580156112b3573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906112d79190611a81565b90508082111561132f5761132273ffffffffffffffffffffffffffffffffffffffff7f00000000000000000000000000000000000000000000000000000000000000001688836117f1565b8082036002840155611378565b61137073ffffffffffffffffffffffffffffffffffffffff7f00000000000000000000000000000000000000000000000000000000000000001688846117f1565b600060028401555b505b838255825164e8d4a51000906113a39086906fffffffffffffffffffffffffffffffff16611702565b816113aa57fe5b0482600101819055508573ffffffffffffffffffffffffffffffffffffffff16888873ffffffffffffffffffffffffffffffffffffffff167f2ece88ca2bc08dd018db50e1d25a20bf1241e5fab1c396caa51f01a54bd2f75b856002015485036040516114179190611fc3565b60405180910390a450506001600755505050505050565b60005473ffffffffffffffffffffffffffffffffffffffff1681565b60065481565b600460209081526000928352604080842090915290825290208054600182015460029092015490919083565b60005473ffffffffffffffffffffffffffffffffffffffff1633146114cd576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161030990611e3d565b73ffffffffffffffffffffffffffffffffffffffff83166115315760405173ffffffffffffffffffffffffffffffffffffffff82169083156108fc029084906000818181858888f1935050505015801561152b573d6000803e3d6000fd5b50610447565b61044773ffffffffffffffffffffffffffffffffffffffff841682846117f1565b60408051600180825281830190925260609182918291602080830190803683370190505090507f0000000000000000000000000000000000000000000000000000000000000000816000815181106115a657fe5b73ffffffffffffffffffffffffffffffffffffffff92909216602092830291909101909101526040805160018082528183019092526060918160200160208202803683370190505090506115fa87876105f8565b8160008151811061160757fe5b602090810291909101015290969095509350505050565b60015473ffffffffffffffffffffffffffffffffffffffff1681565b80820382811115611677576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161030990611c96565b92915050565b81810181811015611677576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161030990611e06565b600067ffffffffffffffff8211156116fe576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161030990611ea7565b5090565b600081158061171d5750508082028282828161171a57fe5b04145b611677576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161030990611f15565b60006fffffffffffffffffffffffffffffffff8211156116fe576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161030990611dcf565b8181016fffffffffffffffffffffffffffffffff8083169082161015611677576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161030990611e06565b600060608473ffffffffffffffffffffffffffffffffffffffff1663a9059cbb8585604051602401611824929190611bd3565b6040516020818303038152906040529060e01b6020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff83818316178352505050506040516118729190611b79565b6000604051808303816000865af19150503d80600081146118af576040519150601f19603f3d011682016040523d82523d6000602084013e6118b4565b606091505b50915091508180156118de5750805115806118de5750808060200190518101906118de9190611a2a565b611914576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161030990611d04565b5050505050565b604080516060810182526000808252602082018190529181019190915290565b60008060006060848603121561194f578283fd5b833561195a81612016565b9250602084013561196a8161203b565b9150604084013561197a8161203b565b809150509250925092565b600080600060608486031215611999578283fd5b83356119a481612016565b925060208401359150604084013561197a81612016565b600080602083850312156119cd578182fd5b823567ffffffffffffffff808211156119e4578384fd5b818501915085601f8301126119f7578384fd5b813581811115611a05578485fd5b8660208083028501011115611a18578485fd5b60209290920196919550909350505050565b600060208284031215611a3b578081fd5b8151611a468161203b565b9392505050565b600060208284031215611a5e578081fd5b8151611a4681612016565b600060208284031215611a7a578081fd5b5035919050565b600060208284031215611a92578081fd5b5051919050565b60008060408385031215611aab578182fd5b823591506020830135611abd81612016565b809150509250929050565b600080600080600060a08688031215611adf578081fd5b853594506020860135611af181612016565b93506040860135611b0181612016565b94979396509394606081013594506080013592915050565b600080600060608486031215611b2d578283fd5b833592506020840135611b3f81612016565b929592945050506040919091013590565b60008060408385031215611b62578182fd5b50508035926020909101359150565b815260200190565b60008251815b81811015611b995760208186018101518583015201611b7f565b81811115611ba75782828501525b509190910192915050565b73ffffffffffffffffffffffffffffffffffffffff91909116815260200190565b73ffffffffffffffffffffffffffffffffffffffff929092168252602082015260400190565b604080825283519082018190526000906020906060840190828701845b82811015611c4857815173ffffffffffffffffffffffffffffffffffffffff1684529284019290840190600101611c16565b50505083810382850152808551611c5f8184611fc3565b91508387019250845b81811015611c8957611c7b838551611b71565b938501939250600101611c68565b5090979650505050505050565b60208082526015908201527f426f72696e674d6174683a20556e646572666c6f770000000000000000000000604082015260600190565b60208082526013908201527f506f6f6c20616c72656164792065786973747300000000000000000000000000604082015260600190565b6020808252601c908201527f426f72696e6745524332303a205472616e73666572206661696c656400000000604082015260600190565b60208082526021908201527f4f6e6c79204d4356322063616e2063616c6c20746869732066756e6374696f6e60408201527f2e00000000000000000000000000000000000000000000000000000000000000606082015260800190565b60208082526015908201527f4f776e61626c653a207a65726f20616464726573730000000000000000000000604082015260600190565b6020808252601c908201527f426f72696e674d6174683a2075696e74313238204f766572666c6f7700000000604082015260600190565b60208082526018908201527f426f72696e674d6174683a20416464204f766572666c6f770000000000000000604082015260600190565b6020808252818101527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604082015260600190565b6020808252818101527f4f776e61626c653a2063616c6c657220213d2070656e64696e67206f776e6572604082015260600190565b6020808252601b908201527f426f72696e674d6174683a2075696e743634204f766572666c6f770000000000604082015260600190565b60208082526006908201527f4c4f434b45440000000000000000000000000000000000000000000000000000604082015260600190565b60208082526018908201527f426f72696e674d6174683a204d756c204f766572666c6f770000000000000000604082015260600190565b81516fffffffffffffffffffffffffffffffff16815260208083015167ffffffffffffffff90811691830191909152604092830151169181019190915260600190565b6fffffffffffffffffffffffffffffffff93909316835267ffffffffffffffff918216602084015216604082015260600190565b90815260200190565b9283526020830191909152604082015260600190565b67ffffffffffffffff93909316835260208301919091526fffffffffffffffffffffffffffffffff16604082015260600190565b73ffffffffffffffffffffffffffffffffffffffff8116811461203857600080fd5b50565b801515811461203857600080fdfea26469706673582212206bccd137cfc5cd70925e8768a9b58cb9316eade17b3a8b56cb585f933ff2ceaf64736f6c634300060c0033";
