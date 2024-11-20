import React, { useState } from "react";
import { ethers } from "ethers";

const App = () => {
  const [account, setAccount] = useState(null);
  const [balance, setBalance] = useState("0.00");
  const [recipient, setRecipient] = useState("");
  const [amount, setAmount] = useState("");
  const [status, setStatus] = useState("");

  // Connect to wallet
  const connectWallet = async () => {
    if (!window.ethereum) {
      alert("MetaMask is required to use this DApp!");
      return;
    }

    try {
      const provider = new ethers.BrowserProvider(window.ethereum);
      const accounts = await provider.send("eth_requestAccounts", []);
      setAccount(accounts[0]);
      await fetchBalance(accounts[0]);
    } catch (error) {
      console.error("Failed to connect wallet:", error);
    }
  };

  // Fetch account balance
  const fetchBalance = async (address) => {
    try {
      const provider = new ethers.BrowserProvider(window.ethereum);
      const balance = await provider.getBalance(address);
      // setBalance(ethers.formatEther(balance));
      setBalance(ethers.utils.formatEther(balance))
    } catch (error) {
      console.error("Failed to fetch balance:", error);
    }
  };

  // Send ETH
  const sendEth = async () => {
    if (!account || !recipient || !amount) {
      alert("All fields are required!");
      return;
    }

    try {
      const recAddress = document.getElementById("address").value
      const amount  = document.getElementById("amount").value
      const provider = new ethers.BrowserProvider(window.ethereum);
      const signer = await provider.getSigner();

      setStatus("Sending transaction...");
      const tx = await signer.sendTransaction({
        // to: recipient,
        to: recAddress,
        value: ethers.parseEther(amount),
      });

      await tx.wait();
      setStatus("Transaction successful!");
      await fetchBalance(account);
    } catch (error) {
      console.error("Failed to send ETH:", error);
      setStatus("Transaction failed.");
    }
  };

  return (
    <div style={{ fontFamily: "Arial, sans-serif", padding: "20px" }}>
      <h1>Ethereum DApp</h1>
      {!account ? (
        <button onClick={connectWallet} style={styles.button}>
          Connect Wallet
        </button>
      ) : (
        <div>
          <p>Connected Account: {account}</p>
          <p>Balance: {balance} ETH</p>

          <h3>Send ETH</h3>
          <input
            type="text"
            placeholder="Recipient Address"
            value={recipient}
            id="recAddress"
            required
            onChange={(e) => setRecipient(e.target.value)}
            style={styles.input}
          />
          <input
            type="text"
            id="amount"
            placeholder="Amount in ETH"
            value={amount}
            required
            onChange={(e) => setAmount(e.target.value)}
            style={styles.input}
          />
          <button onClick={sendEth} style={styles.button}>
            Send
          </button>
          <p>{status}</p>
        </div>
      )}
    </div>
  );
};

const styles = {
  button: {
    padding: "10px 20px",
    backgroundColor: "#4CAF50",
    color: "white",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    fontSize: "16px",
  },
  input: {
    display: "block",
    margin: "10px 0",
    padding: "10px",
    width: "100%",
    maxWidth: "300px",
    border: "1px solid #ccc",
    borderRadius: "5px",
  },
};

export default App;
