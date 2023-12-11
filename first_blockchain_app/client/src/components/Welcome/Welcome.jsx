import "./Welcome.css";
import { SiEthereum } from "react-icons/si";
import { BsInfoCircle } from "react-icons/bs";
import { useContext, useState } from "react";
import { Loader } from "../index";
import { TransactionContext } from "../../context/TransactionContext";

const InputTag = ({ value, onHandleChange, placeHolder, name, type }) => {
  return (
    <input
      type={type}
      placeholder={placeHolder}
      value={value}
      onChange={(e) => onHandleChange(e, name)}
      name={name}
      className="inputMorph white-glassmorphism"
    />
  );
};

const Welcome = () => {
  const {
    connectWallet,
    conncetedAccount,
    formData,
    sendTransaction,
    onHandleChange,
  } = useContext(TransactionContext);

  const handleSubmit = (e) => {
    const { addressTo, amount, keyword, message } = formData;

    e.preventDefault();
    if (!addressTo || !amount || !keyword || !message) {
      return;
    }

    sendTransaction(addressTo, amount, keyword, message);
  };

  return (
    <div className="welcome">
      <div className="w-left">
        <div className="wl-content">
          <h1>
            Send Crypto <br /> across the world
          </h1>
          <p>
            Explore the crypto world. Buy and sell cryptocurrencies easily on
            Krypto.
          </p>
          {!conncetedAccount && (
            <button onClick={connectWallet} className="w-btn">
              Connect Wallet
            </button>
          )}

          {/* cards */}
          <div className="cardgrp">
            <div className="card card1">Reliability</div>
            <div className="card ">Security</div>
            <div className="card card2">Ethereum</div>
            <div className="card card3">Web3.0</div>
            <div className="card ">Low Fees</div>
            <div className="card card4">Blockchain</div>
          </div>
        </div>
      </div>
      <div className="w-right">
        <div className="wr-image white-glassmorphism eth-card">
          <div className="wr-i-content">
            <div className="circleLogo">
              <div className="circle">
                <SiEthereum fontSize={21} />
              </div>
              <BsInfoCircle fontSize={17} color="#fff" />
            </div>
            <div className="info">
              <p>Address</p>
              <p className="wallet">Ethereum</p>
            </div>
          </div>
        </div>
        <div className="wr-form blue-glassmorphism">
          <InputTag
            value={formData.addressTo}
            onHandleChange={onHandleChange}
            placeHolder={"Address to..."}
            type={"text"}
            name={"addressTo"}
          />
          <InputTag
            value={formData.amount}
            onHandleChange={onHandleChange}
            placeHolder={"Amount"}
            type={"number"}
            name={"amount"}
          />
          <InputTag
            value={formData.keyword}
            onHandleChange={onHandleChange}
            placeHolder={"Keyword here"}
            type={"text"}
            name={"keyword"}
          />
          <InputTag
            value={formData.message}
            onHandleChange={onHandleChange}
            placeHolder={"Message"}
            type={"text"}
            name={"message"}
          />

          <div className="line"></div>
          {/* {1 === 1 ? (
            <Loader />
          ) : ( */}
          <button onClick={handleSubmit} className="submitBtn">
            Send Now
          </button>
          {/* )} */}
        </div>
      </div>
    </div>
  );
};

export default Welcome;
