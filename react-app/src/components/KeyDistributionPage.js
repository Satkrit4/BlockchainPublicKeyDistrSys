import React, { useEffect, useState, useRef } from 'react';
import { fetchDataFromBlockchain, generateKeyOnBlockchain, revokeKeyOnBlockchain } from '../blockchainUtils';
import '../App.css';

const KeyDistributionPage = ({ setPage }) => {
  const [keyData, setKeyData] = useState(null);
  const [accounts, setAccounts] = useState([]);
  const [selectedAccount, setSelectedAccount] = useState('');
  const inputAddressRef = useRef();

  useEffect(() => {
    const loadInitialData = async () => {
      try {
        const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
        setAccounts(accounts);
        setSelectedAccount(accounts[0]);
      } catch (error) {
        console.error("Error loading initial data:", error.message);
      }
    };
    loadInitialData();
  }, []);

  const handleAccountChange = (event) => {
    const newAccount = event.target.value;
    setSelectedAccount(newAccount);
  };

  const handleGenerateKey = async () => {
    const newKey = prompt("Enter new key");
    if (newKey) {
      try {
        const receipt = await generateKeyOnBlockchain(newKey);
        console.log('Key generated:', newKey, 'Transaction receipt:', receipt);
      } catch (error) {
        console.error("Error generating key:", error.message);
      }
    }
  };

  const handleRevokeKey = async () => {
    try {
      const receipt = await revokeKeyOnBlockchain();
      console.log('Key revoked', 'Transaction receipt:', receipt);
    } catch (error) {
      console.error("Error revoking key:", error.message);
    }
  };

  const handleFetchKey = async () => {
    const inputAddress = inputAddressRef.current.value;
    if (inputAddress) {
      try {
        const data = await fetchDataFromBlockchain(inputAddress);
        setKeyData(data);
      } catch (error) {
        setKeyData('#');
        console.error(`Error fetching data for address ${inputAddress}:`, error.message);
      }
    }
  };

  return (
    <div className="container">
      <button className="back-button" onClick={() => setPage('home')}>Back to Home</button>
      <h1>Key Distribution</h1>
      <div>
        <label htmlFor="account-select">Select Account:</label>
        <select
          id="account-select"
          value={selectedAccount}
          onChange={handleAccountChange}
        >
          {accounts.map((account) => (
            <option key={account} value={account}>
              {account}
            </option>
          ))}
        </select>
      </div>
      <button onClick={handleGenerateKey}>Generate Key</button>
      <button onClick={handleRevokeKey}>Revoke Key</button>
      <div>
        <input
          type="text"
          ref={inputAddressRef}
          placeholder="Enter address to fetch key"
        />
        <button onClick={handleFetchKey}>Fetch Key</button>
      </div>
      {keyData === '#' && <h2>Key Revoked or Not Generated</h2>}
      {keyData && keyData !== '#' && (
        <div>
          <h2>Key Data:</h2>
          <p>{keyData}</p>
        </div>
      )}
    </div>
  );
};

export default KeyDistributionPage;
