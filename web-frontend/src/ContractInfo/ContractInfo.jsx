// Rinkeby Test NFT addresses (for easy reference)
//0xB5fe4FA23d661efA35155bC7661A052A0ef4AE45  common gray
//0xa277Dd3Af4E3ED61636d5B2117658f886BB3d682  uncommon green
//0x0aDA8a96c7c592fd04CC0c71404D02982a9711e3  rare blue
//0x8aA0B84Ca4B0a3FBCb6e7Dea1156f419bd7663B2  epic purple
//0xFB956a542a2eA527B6dd826A80e323718C867dc6  legendary gold
//0x4C019b7aD626fEe05d312AD130cc584bD07056E6  chat bubble
//0xf23183F094C09adD12b7C21cb68733DbfF926309  squiggle line
//0xb32E3dE5E6da9aaC9680393a78eb735e3dbA3aa5  triangle
//0x23283cb354139a3d119DAefc6640a61D9687a48E  star
//0x830821Deb0d2877513E12241eB3f59D2dAE8c5DB  square

//0x9DA7aa4C375bb40F71Ccb75BC74f47A278d9eCde 			FILL MACHINE WITH 5 TEST TOKENS

//0x18d5C20bEa1d40d02642C033bf6C7044Ebd6dFEB			shiny new Emeralds (500 mil balance to ganache3. Faucet has 500k)

//0x86FaA55f6F340F226b651DB81887F9f8742C1B81			FAUCET ADDRESS FOR EMERALDS



export const MachineFactoryContractAddress = "0xC2fDbACF42555C09FE911D0a12Ee4246c173dF46";

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
				"name": "_capsuleContract",
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
			},
			{
				"internalType": "address",
				"name": "_beneficiary",
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
		"name": "getBeneficiary",
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
	}
];

export const MachineFactoryABI = [
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
				"internalType": "bool",
				"name": "signTrue",
				"type": "bool"
			}
		],
		"name": "signEula",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "allMachines",
		"outputs": [
			{
				"internalType": "contract Machine[]",
				"name": "coll",
				"type": "address[]"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "contract Machine",
				"name": "",
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
		"inputs": [
			{
				"internalType": "contract Machine",
				"name": "machineAddress",
				"type": "address"
			}
		],
		"name": "BuyCapsulesByMachineAddress",
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
		"name": "getEulaContentId",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "pure",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getMyMachines",
		"outputs": [
			{
				"internalType": "contract Machine[]",
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
				"internalType": "address",
				"name": "user",
				"type": "address"
			}
		],
		"name": "getuserAcceptEula",
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
		"name": "MachinesByOwner",
		"outputs": [
			{
				"internalType": "contract Machine",
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
			}
		],
		"name": "userAcceptEula",
		"outputs": [
			{
				"internalType": "uint8",
				"name": "",
				"type": "uint8"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
];

export const contractCrateABI = [
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
		"name": "RequestNewRandomNumber",
		"type": "event"
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
				"internalType": "uint256[][]",
				"name": "theList",
				"type": "uint256[][]"
			}
		],
		"name": "ejectNftArray",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getAllAddys",
		"outputs": [
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
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getAllOdds",
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
				"components": [
					{
						"internalType": "uint256",
						"name": "tokenId",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "index",
						"type": "uint256"
					}
				],
				"internalType": "struct Machine.slotInhabitant[]",
				"name": "",
				"type": "tuple[]"
			},
			{
				"internalType": "string[]",
				"name": "",
				"type": "string[]"
			},
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "",
				"type": "string"
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
		"name": "getMachineString",
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
		"name": "getOwner",
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
		"name": "mintChest",
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
				"name": "chestId",
				"type": "uint256"
			}
		],
		"name": "openChest",
		"outputs": [
			{
				"internalType": "bytes32",
				"name": "",
				"type": "bytes32"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "bytes32",
				"name": "",
				"type": "bytes32"
			}
		],
		"name": "openChestCaller",
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
				"internalType": "bytes32",
				"name": "",
				"type": "bytes32"
			}
		],
		"name": "openChestStatus",
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
		"name": "q",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "index",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
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
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "requestStatusIdByNftId",
		"outputs": [
			{
				"internalType": "bytes32",
				"name": "",
				"type": "bytes32"
			}
		],
		"stateMutability": "view",
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