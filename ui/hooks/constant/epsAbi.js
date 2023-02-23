export const epsAbi = 
[
    {
        "inputs": [],
        "stateMutability": "nonpayable",
        "type": "constructor"
    },
    {
        "inputs": [],
        "name": "CannotDelegatedATokenYouDontOwn",
        "type": "error"
    },
    {
        "inputs": [],
        "name": "CannotDeleteValidDelegation",
        "type": "error"
    },
    {
        "inputs": [],
        "name": "CannotRevokeAllForRegisterAdminHierarchy",
        "type": "error"
    },
    {
        "inputs": [],
        "name": "HotAddressIsLockedAndCannotBeDelegatedTo",
        "type": "error"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "requiredLevel",
                "type": "uint256"
            }
        ],
        "name": "IncorrectAdminLevel",
        "type": "error"
    },
    {
        "inputs": [],
        "name": "IncorrectProxyRegisterFee",
        "type": "error"
    },
    {
        "inputs": [],
        "name": "InvalidDelegation",
        "type": "error"
    },
    {
        "inputs": [],
        "name": "InvalidERC20Payment",
        "type": "error"
    },
    {
        "inputs": [],
        "name": "OnlyParticipantOrAuthorisedSubDelegate",
        "type": "error"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "sent",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "required",
                "type": "uint256"
            }
        ],
        "name": "ToMuchETHForPendingPayments",
        "type": "error"
    },
    {
        "inputs": [],
        "name": "UnknownAmount",
        "type": "error"
    },
    {
        "inputs": [],
        "name": "UnrecognisedEPSAPIAmount",
        "type": "error"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "usageType",
                "type": "uint256"
            }
        ],
        "name": "UsageTypeAlreadyDelegated",
        "type": "error"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": false,
                "internalType": "address",
                "name": "cold",
                "type": "address"
            }
        ],
        "name": "AllDelegationsRevokedForCold",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": false,
                "internalType": "address",
                "name": "hot",
                "type": "address"
            }
        ],
        "name": "AllDelegationsRevokedForHot",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "address",
                "name": "hot",
                "type": "address"
            },
            {
                "indexed": true,
                "internalType": "address",
                "name": "cold",
                "type": "address"
            },
            {
                "indexed": false,
                "internalType": "address",
                "name": "targetAddress",
                "type": "address"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "tokenId",
                "type": "uint256"
            },
            {
                "indexed": false,
                "internalType": "bool",
                "name": "tokenDelegation",
                "type": "bool"
            },
            {
                "indexed": false,
                "internalType": "uint8[]",
                "name": "usageTypes",
                "type": "uint8[]"
            },
            {
                "indexed": false,
                "internalType": "uint40",
                "name": "startDate",
                "type": "uint40"
            },
            {
                "indexed": false,
                "internalType": "uint40",
                "name": "endDate",
                "type": "uint40"
            },
            {
                "indexed": false,
                "internalType": "uint16",
                "name": "providerCode",
                "type": "uint16"
            },
            {
                "indexed": false,
                "internalType": "enum IEPSDelegationRegister.DelegationClass",
                "name": "delegationClass",
                "type": "uint8"
            },
            {
                "indexed": false,
                "internalType": "uint96",
                "name": "subDelegateKey",
                "type": "uint96"
            },
            {
                "indexed": false,
                "internalType": "bytes",
                "name": "data",
                "type": "bytes"
            },
            {
                "indexed": false,
                "internalType": "enum IEPSDelegationRegister.DelegationStatus",
                "name": "status",
                "type": "uint8"
            }
        ],
        "name": "DelegationMade",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": false,
                "internalType": "address",
                "name": "delegationKey",
                "type": "address"
            }
        ],
        "name": "DelegationPaid",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": false,
                "internalType": "address",
                "name": "hot",
                "type": "address"
            },
            {
                "indexed": false,
                "internalType": "address",
                "name": "cold",
                "type": "address"
            },
            {
                "indexed": false,
                "internalType": "address",
                "name": "delegationKey",
                "type": "address"
            }
        ],
        "name": "DelegationRevoked",
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
                "indexed": false,
                "internalType": "uint256",
                "name": "value",
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
                "name": "bypassAddress_",
                "type": "address"
            }
        ],
        "name": "addLockBypassAddress",
        "outputs": [],
        "stateMutability": "nonpayable",
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
                "internalType": "address",
                "name": "queryAddress_",
                "type": "address"
            },
            {
                "internalType": "address",
                "name": "contractAddress_",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "usageType_",
                "type": "uint256"
            },
            {
                "internalType": "bool",
                "name": "erc1155_",
                "type": "bool"
            },
            {
                "internalType": "uint256",
                "name": "id_",
                "type": "uint256"
            },
            {
                "internalType": "bool",
                "name": "includeSecondary_",
                "type": "bool"
            },
            {
                "internalType": "bool",
                "name": "includeRental_",
                "type": "bool"
            }
        ],
        "name": "beneficiaryBalanceOf",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "balance_",
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
                "name": "collection_",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "tokenId_",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "usageType_",
                "type": "uint256"
            },
            {
                "internalType": "bool",
                "name": "includeSecondary_",
                "type": "bool"
            },
            {
                "internalType": "bool",
                "name": "includeRental_",
                "type": "bool"
            }
        ],
        "name": "beneficiaryOf",
        "outputs": [
            {
                "internalType": "address",
                "name": "primaryBeneficiary_",
                "type": "address"
            },
            {
                "internalType": "address[]",
                "name": "secondaryBeneficiaries_",
                "type": "address[]"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "decimals",
        "outputs": [
            {
                "internalType": "uint8",
                "name": "",
                "type": "uint8"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "cold_",
                "type": "address"
            },
            {
                "internalType": "address",
                "name": "delegationKey_",
                "type": "address"
            }
        ],
        "name": "delegationFromColdExists",
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
                "name": "hot_",
                "type": "address"
            },
            {
                "internalType": "address",
                "name": "delegationKey_",
                "type": "address"
            }
        ],
        "name": "delegationFromHotExists",
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
                "name": "",
                "type": "address"
            }
        ],
        "name": "delegationMetadata",
        "outputs": [
            {
                "internalType": "address",
                "name": "collection",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "tokenId",
                "type": "uint256"
            },
            {
                "internalType": "bytes",
                "name": "data",
                "type": "bytes"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "delegationKey_",
                "type": "address"
            }
        ],
        "name": "deleteExpired",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "hot_",
                "type": "address"
            },
            {
                "internalType": "address",
                "name": "collection_",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "usageType_",
                "type": "uint256"
            },
            {
                "internalType": "bool",
                "name": "includeSecondary_",
                "type": "bool"
            },
            {
                "internalType": "bool",
                "name": "includeRental_",
                "type": "bool"
            }
        ],
        "name": "getAddresses",
        "outputs": [
            {
                "internalType": "address[]",
                "name": "addresses_",
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
                "name": "cold_",
                "type": "address"
            }
        ],
        "name": "getAllForCold",
        "outputs": [
            {
                "components": [
                    {
                        "internalType": "address",
                        "name": "hot",
                        "type": "address"
                    },
                    {
                        "internalType": "address",
                        "name": "cold",
                        "type": "address"
                    },
                    {
                        "internalType": "enum IEPSDelegationRegister.DelegationScope",
                        "name": "scope",
                        "type": "uint8"
                    },
                    {
                        "internalType": "enum IEPSDelegationRegister.DelegationClass",
                        "name": "class",
                        "type": "uint8"
                    },
                    {
                        "internalType": "enum IEPSDelegationRegister.DelegationTimeLimit",
                        "name": "timeLimit",
                        "type": "uint8"
                    },
                    {
                        "internalType": "address",
                        "name": "collection",
                        "type": "address"
                    },
                    {
                        "internalType": "uint256",
                        "name": "tokenId",
                        "type": "uint256"
                    },
                    {
                        "internalType": "uint40",
                        "name": "startDate",
                        "type": "uint40"
                    },
                    {
                        "internalType": "uint40",
                        "name": "endDate",
                        "type": "uint40"
                    },
                    {
                        "internalType": "bool",
                        "name": "validByDate",
                        "type": "bool"
                    },
                    {
                        "internalType": "bool",
                        "name": "validBilaterally",
                        "type": "bool"
                    },
                    {
                        "internalType": "bool",
                        "name": "validTokenOwnership",
                        "type": "bool"
                    },
                    {
                        "internalType": "bool[25]",
                        "name": "usageTypes",
                        "type": "bool[25]"
                    },
                    {
                        "internalType": "address",
                        "name": "key",
                        "type": "address"
                    },
                    {
                        "internalType": "uint96",
                        "name": "controlInteger",
                        "type": "uint96"
                    },
                    {
                        "internalType": "bytes",
                        "name": "data",
                        "type": "bytes"
                    },
                    {
                        "internalType": "enum IEPSDelegationRegister.DelegationStatus",
                        "name": "status",
                        "type": "uint8"
                    }
                ],
                "internalType": "struct IEPSDelegationRegister.DelegationReport[]",
                "name": "",
                "type": "tuple[]"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "hot_",
                "type": "address"
            }
        ],
        "name": "getAllForHot",
        "outputs": [
            {
                "components": [
                    {
                        "internalType": "address",
                        "name": "hot",
                        "type": "address"
                    },
                    {
                        "internalType": "address",
                        "name": "cold",
                        "type": "address"
                    },
                    {
                        "internalType": "enum IEPSDelegationRegister.DelegationScope",
                        "name": "scope",
                        "type": "uint8"
                    },
                    {
                        "internalType": "enum IEPSDelegationRegister.DelegationClass",
                        "name": "class",
                        "type": "uint8"
                    },
                    {
                        "internalType": "enum IEPSDelegationRegister.DelegationTimeLimit",
                        "name": "timeLimit",
                        "type": "uint8"
                    },
                    {
                        "internalType": "address",
                        "name": "collection",
                        "type": "address"
                    },
                    {
                        "internalType": "uint256",
                        "name": "tokenId",
                        "type": "uint256"
                    },
                    {
                        "internalType": "uint40",
                        "name": "startDate",
                        "type": "uint40"
                    },
                    {
                        "internalType": "uint40",
                        "name": "endDate",
                        "type": "uint40"
                    },
                    {
                        "internalType": "bool",
                        "name": "validByDate",
                        "type": "bool"
                    },
                    {
                        "internalType": "bool",
                        "name": "validBilaterally",
                        "type": "bool"
                    },
                    {
                        "internalType": "bool",
                        "name": "validTokenOwnership",
                        "type": "bool"
                    },
                    {
                        "internalType": "bool[25]",
                        "name": "usageTypes",
                        "type": "bool[25]"
                    },
                    {
                        "internalType": "address",
                        "name": "key",
                        "type": "address"
                    },
                    {
                        "internalType": "uint96",
                        "name": "controlInteger",
                        "type": "uint96"
                    },
                    {
                        "internalType": "bytes",
                        "name": "data",
                        "type": "bytes"
                    },
                    {
                        "internalType": "enum IEPSDelegationRegister.DelegationStatus",
                        "name": "status",
                        "type": "uint8"
                    }
                ],
                "internalType": "struct IEPSDelegationRegister.DelegationReport[]",
                "name": "",
                "type": "tuple[]"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "hot_",
                "type": "address"
            },
            {
                "internalType": "address",
                "name": "cold_",
                "type": "address"
            },
            {
                "internalType": "address",
                "name": "targetAddress_",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "tokenId_",
                "type": "uint256"
            },
            {
                "internalType": "bool",
                "name": "tokenDelegation_",
                "type": "bool"
            },
            {
                "internalType": "uint96",
                "name": "controlInteger_",
                "type": "uint96"
            },
            {
                "internalType": "uint40",
                "name": "startDate_",
                "type": "uint40"
            },
            {
                "internalType": "uint40",
                "name": "endDate_",
                "type": "uint40"
            }
        ],
        "name": "getDelegationKey",
        "outputs": [
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            }
        ],
        "stateMutability": "pure",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "delegationKey_",
                "type": "address"
            }
        ],
        "name": "getDelegationRecord",
        "outputs": [
            {
                "components": [
                    {
                        "internalType": "address",
                        "name": "hot",
                        "type": "address"
                    },
                    {
                        "internalType": "uint96",
                        "name": "controlInteger",
                        "type": "uint96"
                    },
                    {
                        "internalType": "address",
                        "name": "cold",
                        "type": "address"
                    },
                    {
                        "internalType": "uint40",
                        "name": "startDate",
                        "type": "uint40"
                    },
                    {
                        "internalType": "uint40",
                        "name": "endDate",
                        "type": "uint40"
                    },
                    {
                        "internalType": "enum IEPSDelegationRegister.DelegationStatus",
                        "name": "status",
                        "type": "uint8"
                    }
                ],
                "internalType": "struct IEPSDelegationRegister.DelegationRecord",
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
                "name": "hot_",
                "type": "address"
            }
        ],
        "name": "getHotAddressLockDetails",
        "outputs": [
            {
                "components": [
                    {
                        "internalType": "uint40",
                        "name": "lockStart",
                        "type": "uint40"
                    },
                    {
                        "internalType": "uint40",
                        "name": "lockEnd",
                        "type": "uint40"
                    }
                ],
                "internalType": "struct IEPSDelegationRegister.LockDetails",
                "name": "",
                "type": "tuple"
            },
            {
                "internalType": "address[]",
                "name": "",
                "type": "address[]"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "includeLegacy",
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
                "name": "receivedAddress_",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "level_",
                "type": "uint256"
            },
            {
                "internalType": "uint96",
                "name": "key_",
                "type": "uint96"
            }
        ],
        "name": "isLevelAdmin",
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
                "name": "hot_",
                "type": "address"
            },
            {
                "internalType": "address",
                "name": "cold_",
                "type": "address"
            },
            {
                "internalType": "address",
                "name": "collection_",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "usageType_",
                "type": "uint256"
            },
            {
                "internalType": "bool",
                "name": "includeSecondary_",
                "type": "bool"
            },
            {
                "internalType": "bool",
                "name": "includeRental_",
                "type": "bool"
            }
        ],
        "name": "isValidDelegation",
        "outputs": [
            {
                "internalType": "bool",
                "name": "isValid_",
                "type": "bool"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "lockAddress",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint40",
                "name": "unlockDate_",
                "type": "uint40"
            }
        ],
        "name": "lockAddressUntilDate",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "lockRewardRate",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "hot_",
                "type": "address"
            },
            {
                "internalType": "address",
                "name": "cold_",
                "type": "address"
            },
            {
                "internalType": "address[]",
                "name": "targetAddresses_",
                "type": "address[]"
            },
            {
                "internalType": "uint256",
                "name": "tokenId_",
                "type": "uint256"
            },
            {
                "internalType": "bool",
                "name": "tokenDelegation_",
                "type": "bool"
            },
            {
                "internalType": "uint8[]",
                "name": "usageTypes_",
                "type": "uint8[]"
            },
            {
                "internalType": "uint40",
                "name": "startDate_",
                "type": "uint40"
            },
            {
                "internalType": "uint40",
                "name": "endDate_",
                "type": "uint40"
            },
            {
                "internalType": "uint16",
                "name": "providerCode_",
                "type": "uint16"
            },
            {
                "internalType": "enum IEPSDelegationRegister.DelegationClass",
                "name": "delegationClass_",
                "type": "uint8"
            },
            {
                "internalType": "uint96",
                "name": "subDelegateKey_",
                "type": "uint96"
            },
            {
                "internalType": "bytes",
                "name": "data_",
                "type": "bytes"
            }
        ],
        "name": "makeDelegation",
        "outputs": [],
        "stateMutability": "payable",
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
        "stateMutability": "pure",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "sender_",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "erc20Value_",
                "type": "uint256"
            },
            {
                "internalType": "bytes",
                "name": "data_",
                "type": "bytes"
            }
        ],
        "name": "onTokenTransfer",
        "outputs": [],
        "stateMutability": "payable",
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
        "name": "pendingPayments",
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
                "name": "bypassAddress_",
                "type": "address"
            }
        ],
        "name": "removeLockBypassAddress",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "cold_",
                "type": "address"
            },
            {
                "internalType": "uint96",
                "name": "subDelegateKey_",
                "type": "uint96"
            }
        ],
        "name": "revokeAllForCold",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "revokeAllForHot",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "delegationKey_",
                "type": "address"
            },
            {
                "internalType": "uint96",
                "name": "subDelegateKey_",
                "type": "uint96"
            }
        ],
        "name": "revokeRecord",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "participant2_",
                "type": "address"
            }
        ],
        "name": "revokeRecordOfGlobalScopeForAllUsages",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "rewardRate",
        "outputs": [
            {
                "internalType": "uint88",
                "name": "",
                "type": "uint88"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "rewardRateLocked",
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
        "name": "rewardToken",
        "outputs": [
            {
                "internalType": "contract IOAT",
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
                "internalType": "uint8",
                "name": "decimals_",
                "type": "uint8"
            },
            {
                "internalType": "uint256",
                "name": "balance_",
                "type": "uint256"
            }
        ],
        "name": "setDecimalsAndBalance",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "string",
                "name": "ensName_",
                "type": "string"
            }
        ],
        "name": "setENSName",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "ensReverseRegistrar_",
                "type": "address"
            }
        ],
        "name": "setENSReverseRegistrar",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "setLegacyOff",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "registerFee_",
                "type": "uint256"
            },
            {
                "internalType": "address",
                "name": "erc20_",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "erc20Fee_",
                "type": "uint256"
            }
        ],
        "name": "setRegisterFees",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "rewardToken_",
                "type": "address"
            },
            {
                "internalType": "uint88",
                "name": "rewardRate_",
                "type": "uint88"
            }
        ],
        "name": "setRewardTokenAndRate",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "treasuryAddress_",
                "type": "address"
            }
        ],
        "name": "setTreasuryAddress",
        "outputs": [],
        "stateMutability": "nonpayable",
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
        "stateMutability": "pure",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "totalSupply",
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
                "name": "to",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "amount",
                "type": "uint256"
            }
        ],
        "name": "transfer",
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
        "name": "unlockAddress",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint40",
                "name": "lockAtTime_",
                "type": "uint40"
            }
        ],
        "name": "unlockAddressUntilTime",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "contract IERC20",
                "name": "token_",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "amount_",
                "type": "uint256"
            }
        ],
        "name": "withdrawERC20",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "amount_",
                "type": "uint256"
            }
        ],
        "name": "withdrawETH",
        "outputs": [
            {
                "internalType": "bool",
                "name": "success_",
                "type": "bool"
            }
        ],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "stateMutability": "payable",
        "type": "receive"
    }
];