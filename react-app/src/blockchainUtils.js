import Web3 from 'web3';

const web3 = new Web3('http://127.0.0.1:7545');


const contractAddress = `0xb3C84063aeeC73B3E538a2c1dFCa348dC0e3B951`; 
const contractABI =  [
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
				"indexed": false,
				"internalType": "string",
				"name": "key",
				"type": "string"
			}
		],
		"name": "KeyGenerated",
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
			}
		],
		"name": "KeyRevoked",
		"type": "event"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "key",
				"type": "string"
			}
		],
		"name": "generateKey",
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
		"name": "getKey",
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
				"name": "",
				"type": "address"
			}
		],
		"name": "publicKeys",
		"outputs": [
			{
				"internalType": "address",
				"name": "owner",
				"type": "address"
			},
			{
				"internalType": "string",
				"name": "key",
				"type": "string"
			},
			{
				"internalType": "bool",
				"name": "revoked",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "revokeKey",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	}
];


const contract = new web3.eth.Contract(contractABI, contractAddress);


export const fetchDataFromBlockchain = async (address) => {
  try {
    console.log(`Fetching data for address: ${address}`);
    if (!web3.utils.isAddress(address)) {
      throw new Error('Invalid address');
    }
    const key = await contract.methods.getKey(address).call();
    console.log(`Data fetched for address ${address}: ${key}`);
    return key;
  } catch (error) {
    console.error('Error fetching data:', error.message);
    throw error;
  }
};

export const generateKeyOnBlockchain = async (key) => {
  const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
  const account = accounts[0];
  try {
    const gasEstimate = await contract.methods.generateKey(key).estimateGas({ from: account });
    console.log('Gas estimate for generateKey:', gasEstimate);

    const receipt = await contract.methods.generateKey(key).send({ from: account, gas: Number(gasEstimate) });
    console.log('Transaction receipt:', receipt);
    return receipt;
  } catch (error) {
    console.error('Error generating key:', error.message);
    throw error;
  }
};

export const revokeKeyOnBlockchain = async () => {
  const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
  const account = accounts[0];
  try {
    const gasEstimate = await contract.methods.revokeKey().estimateGas({ from: account });
    console.log('Gas estimate for revokeKey:', gasEstimate);

    const receipt = await contract.methods.revokeKey().send({ from: account, gas: Number(gasEstimate) });
    console.log('Transaction receipt:', receipt);
    return receipt;
  } catch (error) {
    console.error('Error revoking key:', error.message);
    throw error;
  }
};