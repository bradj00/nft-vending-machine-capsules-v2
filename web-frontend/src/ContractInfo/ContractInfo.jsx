//MCP testnet ERC721 token contract for modeling: 0x7C0fE03d75AA6C653C49176fcB88F3D948998838

// Polygon Main Net NFT addresses (for easy reference)
//0xfa17a2751576277176627c1f525f1eda94575555 MCPA
	//token ids to clone for random test data
		//9500 red air conditioner
		//3644 fire alarm
		//3644 fire alarm
		//3632 Router
		
//0x726e1b4841968c0c3eebeef880e60875b745b3c0 MCPC
	//token ids to clone for random test data
		//46000 gen C male executive

//rinkeby MCP testnet addressess:

//0x03ff78D3800688068D2Bd4E1eb55AF681bbd8DB3	citizens
//0x65bAA849d1A823009ffc2a45CB0f1e3220392d93	mint 50 citizens
//0x9d42046174eA34FdB78A96FAbF0403C842D18438	mint 50 generic 


//0x75E1817c8B16F29995eD9De9cAe2bD08A9244fC2	land
//0x775752df06Df60a3Bb4FA32A12B3fd592328CA71	appliance



		



export const BulkDepositorContractAddress = "0x8fB0865F1eCA95c4f68730C5e77aEAA1734317f6";

export const WheelFactoryContractAddress = "0x4c0763f24933505fEeF19f32e37F56EDf5A09e7C";

export const BulkDepositorABI = [
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "tokenContractAddress",
				"type": "address"
			},
			{
				"internalType": "uint256[]",
				"name": "tokenIdList",
				"type": "uint256[]"
			},
			{
				"internalType": "address",
				"name": "sendTo",
				"type": "address"
			}
		],
		"name": "makeBulkDeposit",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	}
];

export const BuyCapsuleContractABI = [
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "theOwner",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "_factoryAddress",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "_CapsuleCost",
				"type": "uint256"
			},
			{
				"internalType": "address",
				"name": "_CapsuleTokenAddress",
				"type": "address"
			}
		],
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_tokenamount",
				"type": "uint256"
			}
		],
		"name": "Approvetokens",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "GetAllowance",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "GetCapsuleInfo",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			},
			{
				"internalType": "contract IERC7211",
				"name": "",
				"type": "address"
			},
			{
				"internalType": "contract IERC20",
				"name": "",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "GetContractTokenBalance",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_saleBlockDuration",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "_saleCost",
				"type": "uint256"
			}
		],
		"name": "beginOnSale",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_tokenamount",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "_capsuleQty",
				"type": "uint256"
			}
		],
		"name": "buyCapsule",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getSaleInfo",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "thecontract",
				"type": "address"
			}
		],
		"name": "setWheelContract",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	}
];

export const WheelFactoryABI = [
	{
		"inputs": [
			{
				"components": [
					{
						"internalType": "address",
						"name": "slot0",
						"type": "address"
					},
					{
						"internalType": "address",
						"name": "slot1",
						"type": "address"
					},
					{
						"internalType": "address",
						"name": "slot2",
						"type": "address"
					},
					{
						"internalType": "address",
						"name": "slot3",
						"type": "address"
					},
					{
						"internalType": "address",
						"name": "slot4",
						"type": "address"
					},
					{
						"internalType": "address",
						"name": "slot5",
						"type": "address"
					},
					{
						"internalType": "address",
						"name": "slot6",
						"type": "address"
					},
					{
						"internalType": "address",
						"name": "slot7",
						"type": "address"
					},
					{
						"internalType": "address",
						"name": "slot8",
						"type": "address"
					},
					{
						"internalType": "address",
						"name": "slot9",
						"type": "address"
					}
				],
				"internalType": "struct MiddleData.SlotStruct",
				"name": "slots1",
				"type": "tuple"
			},
			{
				"components": [
					{
						"internalType": "uint256",
						"name": "odds0",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "odds1",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "odds2",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "odds3",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "odds4",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "odds5",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "odds6",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "odds7",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "odds8",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "odds9",
						"type": "uint256"
					}
				],
				"internalType": "struct MiddleData.OddsStruct",
				"name": "odds1",
				"type": "tuple"
			},
			{
				"internalType": "string",
				"name": "MachineName",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "CapsuleCost",
				"type": "uint256"
			},
			{
				"internalType": "address",
				"name": "CapsuleTokenAddress",
				"type": "address"
			}
		],
		"name": "createMachine",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_machineAddress",
				"type": "address"
			},
			{
				"internalType": "bytes32",
				"name": "_requestId",
				"type": "bytes32"
			},
			{
				"internalType": "uint256",
				"name": "theNumber",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "_nftTokenId",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "_winningSlot",
				"type": "uint256"
			}
		],
		"name": "eventEmitMachineUsed",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_machineAddress",
				"type": "address"
			},
			{
				"internalType": "bytes32",
				"name": "_requestId",
				"type": "bytes32"
			},
			{
				"internalType": "address",
				"name": "_requesterAddress",
				"type": "address"
			}
		],
		"name": "eventEmitPullRequest",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "address",
				"name": "machineAddress",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "bytes32",
				"name": "requestId",
				"type": "bytes32"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "theNumber",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "nftTokenId",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "winningSlot",
				"type": "uint256"
			}
		],
		"name": "MachineUsed",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "address",
				"name": "machineAddress",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "bytes32",
				"name": "requestId",
				"type": "bytes32"
			},
			{
				"indexed": false,
				"internalType": "address",
				"name": "requesterAddress",
				"type": "address"
			}
		],
		"name": "PullRequest",
		"type": "event"
	},
	{
		"inputs": [
			{
				"internalType": "contract Wheel",
				"name": "wheelAddress",
				"type": "address"
			}
		],
		"name": "BuyCapsuleByMachine",
		"outputs": [
			{
				"internalType": "contract BuyCapsules",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getMyMachines",
		"outputs": [
			{
				"internalType": "contract Wheel[]",
				"name": "",
				"type": "address[]"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "wheels",
		"outputs": [
			{
				"internalType": "contract Wheel",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "WheelsByOwner",
		"outputs": [
			{
				"internalType": "contract Wheel",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
];

export const WheelABI = [
	{
		"inputs": [
			{
				"components": [
					{
						"internalType": "address",
						"name": "slot0",
						"type": "address"
					},
					{
						"internalType": "address",
						"name": "slot1",
						"type": "address"
					},
					{
						"internalType": "address",
						"name": "slot2",
						"type": "address"
					},
					{
						"internalType": "address",
						"name": "slot3",
						"type": "address"
					},
					{
						"internalType": "address",
						"name": "slot4",
						"type": "address"
					},
					{
						"internalType": "address",
						"name": "slot5",
						"type": "address"
					},
					{
						"internalType": "address",
						"name": "slot6",
						"type": "address"
					},
					{
						"internalType": "address",
						"name": "slot7",
						"type": "address"
					},
					{
						"internalType": "address",
						"name": "slot8",
						"type": "address"
					},
					{
						"internalType": "address",
						"name": "slot9",
						"type": "address"
					}
				],
				"internalType": "struct MiddleData.SlotStruct",
				"name": "slots1",
				"type": "tuple"
			},
			{
				"components": [
					{
						"internalType": "uint256",
						"name": "odds0",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "odds1",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "odds2",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "odds3",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "odds4",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "odds5",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "odds6",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "odds7",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "odds8",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "odds9",
						"type": "uint256"
					}
				],
				"internalType": "struct MiddleData.OddsStruct",
				"name": "odds1",
				"type": "tuple"
			},
			{
				"internalType": "address",
				"name": "theOwner",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "_factoryAddress",
				"type": "address"
			},
			{
				"internalType": "string",
				"name": "_MachineString",
				"type": "string"
			},
			{
				"internalType": "address",
				"name": "_buyCapsuleContract",
				"type": "address"
			}
		],
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "owner",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "approved",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			}
		],
		"name": "Approval",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "owner",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "operator",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "bool",
				"name": "approved",
				"type": "bool"
			}
		],
		"name": "ApprovalForAll",
		"type": "event"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "to",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			}
		],
		"name": "approve",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "checkEmptySlots",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "address",
				"name": "tokenAddress",
				"type": "address"
			}
		],
		"name": "EjectNft",
		"type": "event"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "player",
				"type": "address"
			}
		],
		"name": "mintCapsule",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "bytes32",
				"name": "requestId",
				"type": "bytes32"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "randomNumberInt",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "nftTokenId",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "slotWinner",
				"type": "uint256"
			}
		],
		"name": "NewRandomItem",
		"type": "event"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "chestId",
				"type": "uint256"
			}
		],
		"name": "openChest",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "bytes32",
				"name": "requestId",
				"type": "bytes32"
			},
			{
				"internalType": "uint256",
				"name": "randomness",
				"type": "uint256"
			}
		],
		"name": "rawFulfillRandomness",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "bytes32",
				"name": "requestId",
				"type": "bytes32"
			},
			{
				"indexed": false,
				"internalType": "address",
				"name": "requesterAddress",
				"type": "address"
			}
		],
		"name": "RefundCapsule",
		"type": "event"
	},
	{
		"inputs": [
			{
				"internalType": "uint256[][]",
				"name": "theList",
				"type": "uint256[][]"
			}
		],
		"name": "RegisterListOfNftIds",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "from",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "to",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			}
		],
		"name": "safeTransferFrom",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "from",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "to",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			},
			{
				"internalType": "bytes",
				"name": "_data",
				"type": "bytes"
			}
		],
		"name": "safeTransferFrom",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "operator",
				"type": "address"
			},
			{
				"internalType": "bool",
				"name": "approved",
				"type": "bool"
			}
		],
		"name": "setApprovalForAll",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "from",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "to",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			}
		],
		"name": "Transfer",
		"type": "event"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "from",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "to",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			}
		],
		"name": "transferFrom",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "owner",
				"type": "address"
			}
		],
		"name": "balanceOf",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "slotIndex",
				"type": "uint256"
			}
		],
		"name": "getAllRegisteredForSlot",
		"outputs": [
			{
				"internalType": "uint256[]",
				"name": "",
				"type": "uint256[]"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			}
		],
		"name": "getApproved",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getslotWinnerOffsets",
		"outputs": [
			{
				"internalType": "uint256[10]",
				"name": "",
				"type": "uint256[10]"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getWheelInfo",
		"outputs": [
			{
				"components": [
					{
						"internalType": "uint256",
						"name": "odds0",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "odds1",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "odds2",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "odds3",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "odds4",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "odds5",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "odds6",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "odds7",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "odds8",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "odds9",
						"type": "uint256"
					}
				],
				"internalType": "struct MiddleData.OddsStruct",
				"name": "",
				"type": "tuple"
			},
			{
				"components": [
					{
						"internalType": "address",
						"name": "slot0",
						"type": "address"
					},
					{
						"internalType": "address",
						"name": "slot1",
						"type": "address"
					},
					{
						"internalType": "address",
						"name": "slot2",
						"type": "address"
					},
					{
						"internalType": "address",
						"name": "slot3",
						"type": "address"
					},
					{
						"internalType": "address",
						"name": "slot4",
						"type": "address"
					},
					{
						"internalType": "address",
						"name": "slot5",
						"type": "address"
					},
					{
						"internalType": "address",
						"name": "slot6",
						"type": "address"
					},
					{
						"internalType": "address",
						"name": "slot7",
						"type": "address"
					},
					{
						"internalType": "address",
						"name": "slot8",
						"type": "address"
					},
					{
						"internalType": "address",
						"name": "slot9",
						"type": "address"
					}
				],
				"internalType": "struct MiddleData.SlotStruct",
				"name": "",
				"type": "tuple"
			},
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "owner",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "operator",
				"type": "address"
			}
		],
		"name": "isApprovedForAll",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "isGamePaused",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "name",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "owner",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			}
		],
		"name": "ownerOf",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "registeredTokensInSlots",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "bytes4",
				"name": "interfaceId",
				"type": "bytes4"
			}
		],
		"name": "supportsInterface",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "symbol",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			}
		],
		"name": "tokenURI",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "winnerOffset",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
];

export const contractAddressChainLinkTokenABI = [
  {
      "constant": true,
      "inputs": [],
      "name": "name",
      "outputs": [
          {
              "name": "",
              "type": "string"
          }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
  },
  {
      "constant": false,
      "inputs": [
          {
              "name": "_spender",
              "type": "address"
          },
          {
              "name": "_value",
              "type": "uint256"
          }
      ],
      "name": "approve",
      "outputs": [
          {
              "name": "",
              "type": "bool"
          }
      ],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
  },
  {
      "constant": true,
      "inputs": [],
      "name": "totalSupply",
      "outputs": [
          {
              "name": "",
              "type": "uint256"
          }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
  },
  {
      "constant": false,
      "inputs": [
          {
              "name": "_from",
              "type": "address"
          },
          {
              "name": "_to",
              "type": "address"
          },
          {
              "name": "_value",
              "type": "uint256"
          }
      ],
      "name": "transferFrom",
      "outputs": [
          {
              "name": "",
              "type": "bool"
          }
      ],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
  },
  {
      "constant": true,
      "inputs": [],
      "name": "decimals",
      "outputs": [
          {
              "name": "",
              "type": "uint8"
          }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
  },
  {
      "constant": true,
      "inputs": [
          {
              "name": "_owner",
              "type": "address"
          }
      ],
      "name": "balanceOf",
      "outputs": [
          {
              "name": "balance",
              "type": "uint256"
          }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
  },
  {
      "constant": true,
      "inputs": [],
      "name": "symbol",
      "outputs": [
          {
              "name": "",
              "type": "string"
          }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
  },
  {
      "constant": false,
      "inputs": [
          {
              "name": "_to",
              "type": "address"
          },
          {
              "name": "_value",
              "type": "uint256"
          }
      ],
      "name": "transfer",
      "outputs": [
          {
              "name": "",
              "type": "bool"
          }
      ],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
  },
  {
      "constant": true,
      "inputs": [
          {
              "name": "_owner",
              "type": "address"
          },
          {
              "name": "_spender",
              "type": "address"
          }
      ],
      "name": "allowance",
      "outputs": [
          {
              "name": "",
              "type": "uint256"
          }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
  },
  {
      "payable": true,
      "stateMutability": "payable",
      "type": "fallback"
  },
  {
      "anonymous": false,
      "inputs": [
          {
              "indexed": true,
              "name": "owner",
              "type": "address"
          },
          {
              "indexed": true,
              "name": "spender",
              "type": "address"
          },
          {
              "indexed": false,
              "name": "value",
              "type": "uint256"
          }
      ],
      "name": "Approval",
      "type": "event"
  },
  {
      "anonymous": false,
      "inputs": [
          {
              "indexed": true,
              "name": "from",
              "type": "address"
          },
          {
              "indexed": true,
              "name": "to",
              "type": "address"
          },
          {
              "indexed": false,
              "name": "value",
              "type": "uint256"
          }
      ],
      "name": "Transfer",
      "type": "event"
  }
]

//temp just for helper tools in hackathon
export const fillMachinewith5TestTokenABI = [
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "owner",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "approved",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			}
		],
		"name": "Approval",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "owner",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "operator",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "bool",
				"name": "approved",
				"type": "bool"
			}
		],
		"name": "ApprovalForAll",
		"type": "event"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "to",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			}
		],
		"name": "approve",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "MachineAddressTarget",
				"type": "address"
			}
		],
		"name": "mint5FromAllTestTokens",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "target",
				"type": "address"
			}
		],
		"name": "mint5ToTarget",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "player",
				"type": "address"
			},
			{
				"internalType": "string",
				"name": "tokenURI",
				"type": "string"
			}
		],
		"name": "mintToken",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "from",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "to",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			}
		],
		"name": "safeTransferFrom",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "from",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "to",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			},
			{
				"internalType": "bytes",
				"name": "_data",
				"type": "bytes"
			}
		],
		"name": "safeTransferFrom",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "operator",
				"type": "address"
			},
			{
				"internalType": "bool",
				"name": "approved",
				"type": "bool"
			}
		],
		"name": "setApprovalForAll",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "from",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "to",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			}
		],
		"name": "Transfer",
		"type": "event"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "from",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "to",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			}
		],
		"name": "transferFrom",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "owner",
				"type": "address"
			}
		],
		"name": "balanceOf",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			}
		],
		"name": "getApproved",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getMaxId",
		"outputs": [
			{
				"components": [
					{
						"internalType": "uint256",
						"name": "_value",
						"type": "uint256"
					}
				],
				"internalType": "struct Counters.Counter",
				"name": "",
				"type": "tuple"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "owner",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "operator",
				"type": "address"
			}
		],
		"name": "isApprovedForAll",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "name",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			}
		],
		"name": "ownerOf",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "bytes4",
				"name": "interfaceId",
				"type": "bytes4"
			}
		],
		"name": "supportsInterface",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "symbol",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			}
		],
		"name": "tokenURI",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
]

//temp just for helper tools (faucet)
export const erc20FaucetContractABI = [
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "receipient",
				"type": "address"
			}
		],
		"name": "faucetDrip",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getFaucetBalance",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
];