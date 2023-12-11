import { React, useEffect, createContext, useState } from "react";
import { ethers } from "ethers";
import { contractABI, contractAddress } from "../utils/constants";

export const TransactionContext = createContext();

const { ethereum } = window;

const getEthereumContract = () => {
  const provider = new ethers.providers.JsonRpcProvider(
    "http://127.0.0.1:8545"
  );
  const signer = provider.getSigner();
  const transactionContract = new ethers.Contract(
    contractAddress,
    contractABI,
    signer
  );

  return transactionContract;
};

export const TransactionProvider = ({ children }) => {
  const [formData, setFormData] = useState({
    addressTo: "",
    amount: "",
    keyword: "",
    message: "",
  });

  const onHandleChange = (e, name) => {
    setFormData((prev) => ({ ...prev, [name]: e.target.value }));
  };

  const [conncetedAccount, setConncetedAccount] = useState();

  const checkIfWalletIsConnected = async () => {
    // try {
    //   if (!ethereum) {
    //     alert("Please install metamask");
    //   }

    //   const accounts = await ethereum.request({ method: "eth_accounts" });
    //   if (accounts) {
    //     setConncetedAccount(accounts[0]);
    //     console.log(accounts[0]);
    //     // getAllTransactions();
    //   } else {
    //     console.log("No account found");
    //   }
    // } catch (error) {
    //   console.log(error);
    //   throw new Error(error);
    // }

    setConncetedAccount("0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266");
  };

  //   connect to wallet
  const connectWallet = async () => {
    // try {
    //   if (!ethereum) return alert("Please install metamask");

    //   const accounts = await ethereum.request({
    //     method: "eth_requestAccounts",
    //   });
    //   setConncetedAccount(accounts[0]);
    //   console.log(conncetedAccount);
    // } catch (error) {
    //   console.log(error);
    // }

    setConncetedAccount("0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266");
  };

  const sendTransaction = async () => {
    try {
      if (!ethereum) {
        return alert("Please install metamask");
      }
      const transactionContract = getEthereumContract();
    } catch (error) {
      console.log(error);
      throw Error(error);
    }
  };

  useEffect(() => {
    checkIfWalletIsConnected();
  }, []);

  return (
    <TransactionContext.Provider
      value={{
        connectWallet,
        conncetedAccount,
        formData,
        sendTransaction,
        onHandleChange,
      }}
    >
      {children}
    </TransactionContext.Provider>
  );
};
