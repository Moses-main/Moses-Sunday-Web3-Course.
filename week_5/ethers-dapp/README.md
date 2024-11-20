# Ethereum DApp with ethers.js

This project demonstrates a simple decentralized application (DApp) using ethers.js. Users can connect their Ethereum wallet (e.g., MetaMask), view their account balance, and send ETH to other addresses.

---

## Features
- **Connect Wallet**: Connect to an Ethereum wallet via MetaMask.
- **View Balance**: Retrieve and display the wallet's ETH balance.
- **Send ETH**: Input a recipient address and ETH amount to send transactions.

---

## Technologies
- **React**: Frontend framework for building the user interface.
- **ethers.js**: Library for interacting with the Ethereum blockchain.
- **MetaMask**: Ethereum wallet for connecting to the DApp.

---

## Setup Instructions

### 1. Clone the Repository
```bash
githttps://github.com/Moses-main/Moses-Sunday-Web3-Course..git


cd week_5/ethers-dapp
```


### 2.Install Dependencies

``npm install``

### 3.Run the Development Server

``npm run dev``


### 4.Open in Browser
```
visit http://localhost:5173 to access Dapp
```

---
## Architechture
#### Components

App.jsx: Main React component that handles wallet connection, balance retrieval, and ETH transfers.

### State Management

#### React Hooks:
- useState: Manage state for account, balance, recipient, and transaction status.
- useEffect: Fetch balance whenever the connected account changes.

### Blockchain Interaction

#### ethers.js:
- ethers.BrowserProvider: Connect to MetaMask and retrieve blockchain data.
- getBalance: Fetch the ETH balance of the connected account.
- sendTransaction: Create and send ETH transactions.

---
### How to Use
1. #### Connect Wallet
- Click the "Connect Wallet" button
- Approve the connection request in MetaMask.
2. ### View Balance
- After connecting, your wallet address and balance will be displayed
3. ### Send ETH
- Enter the recipient address and tha amount of ETH
- Click "Send ETH" to initiate the transaction.
- Wait for confirmation



---
### License

This project is licensed under the MIT License