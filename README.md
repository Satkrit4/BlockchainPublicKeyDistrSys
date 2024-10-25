# Blockchain-Based Public Key Distribution System

This project aims to develop a decentralized, secure, and transparent Key Management System using blockchain technology. It enables the generation, revocation, and retrieval of public keys, addressing the limitations of traditional centralized Public key management systems.

## Table of Contents

- [Overview](#overview)
- [Technologies Used](#technologies-used)
- [Key Features](#key-features)
- [System Architecture](#system-architecture)
- [Screenshots](#screenshots)
- [Usage](#usage)
- [Conclusion](#conclusion)
- [References](#references)

## Overview

The Blockchain-Based Key Management System is designed to improve security in Public key management processes by leveraging Ethereum smart contracts for decentralized operations. Users can generate, revoke, and retrieve public keys with cryptographic assurance, reducing risks associated with centralized control.

### Key Objectives:
- Secure key generation and revocation.
- Decentralized control, eliminating a single point of failure.
- Transparent operations using smart contracts.
- User-friendly interaction via a React-based frontend.

## Technologies Used
- **Blockchain Platform:** Ethereum
- **Smart Contract Language:** Solidity
- **Frontend Framework:** React
- **Blockchain Interaction Library:** Web3.js
- **Development Environment:** Hardhat
- **Local Blockchain for Testing:** Ganache

## Key Features
- **Public Key Generation and Revocation:** Users can generate and revoke public keys directly through the Ethereum blockchain.
- **Account Management:** Manage multiple Ethereum accounts using MetaMask.
- **Transaction Transparency:** Every key operation is logged on the blockchain, ensuring immutability and traceability.

## System Architecture

The project consists of:
1. **Smart Contract** (written in Solidity) that handles:
    - Key generation, revocation, and retrieval.
    - Emission of events for transparency.
2. **Frontend Interface** (developed in React) that allows:
    - Account selection via MetaMask.
    - Interaction with the smart contract using Web3.js.
3. **Local Ethereum Network**: Deployed and tested using Hardhat and Ganache.

## Screenshots

1. **Welcome Page:**
   ![Welcome Page](https://github.com/user-attachments/assets/cbbc666e-2e91-473c-9c79-f79678d35d82)
   
3. **MetaMask Interaction:**
   ![Metamaask Interaction](https://github.com/user-attachments/assets/f5a8aec4-490e-497c-b480-009384932c57)

5. **Key Distribution:**
   ![Key Distribution](https://github.com/user-attachments/assets/c6ed0d9d-1fac-4511-a2de-bbe98dc0e4ef)

6. **Ganache Test Environment:**
   ![Ganache Environment](https://github.com/user-attachments/assets/471ba176-18e4-468b-9e6f-2072a54db76e)

7. **Key Revocation:**
   ![Key Revocation](https://github.com/user-attachments/assets/b1a1fd47-fa7b-416a-9d91-683b46b1738a)
   ![Key Revocation](https://github.com/user-attachments/assets/1ba360f4-aafc-4199-9928-ae585594e770)

## Usage

1. **Generate a Public Key:**
    - Select an Ethereum account and click "Generate Key."

2. **Revoke a Key:**
    - If a key exists, you can revoke it by selecting the account and clicking "Revoke Key."

3. **Fetch a Key:**
    - Retrieve the key for any account by entering its address and clicking "Fetch Key."

## Conclusion

This project demonstrates how blockchain technology can be utilized for secure Public key management. By using Ethereum smart contracts, we ensure decentralized, transparent, and tamper-proof key operations. The integration of React for the frontend makes the system accessible and user-friendly.

## References
- [Ethereum Documentation](https://ethereum.org/en/developers/docs/)
- [Solidity Documentation](https://docs.soliditylang.org/en/v0.8.0/)
- [Hardhat Documentation](https://hardhat.org/getting-started/)
- [Ganache Documentation](https://www.trufflesuite.com/ganache)
- [Web3.js Documentation](https://web3js.readthedocs.io/en/v1.3.4/)
- [MetaMask Documentation](https://docs.metamask.io/guide/)
