// SPDX-License-Identifier: MIT
pragma solidity ^0.8.7;

contract Transaction {

    // we have the transaction counter here
    uint256 transactionCounter;


    // whichever event we want is here
    event Transfer(address from , address receiver , uint amount , string message , uint256 timestamp , string keyword);

    // the object structure
    struct TransferStruct
    {
        address sender;
        address receiver;
        uint amount;
        string message;
        uint256 timestamp;
        string keyword;
    }

    // to store all transactions 
    TransferStruct[] transactions;

    // event done => for completing the transaction
    function completeTransfer(address payable receiver , uint amount , string memory message , string memory keyword ) public {
        
        // increament transaction number
        transactionCounter += 1;

        // push data into array
        transactions.push(TransferStruct(msg.sender , receiver , amount , message , block.timestamp , keyword));

        // transfering the amount
        emit Transfer(msg.sender, receiver, amount, message, block.timestamp, keyword);

    }

    // fetch all transactions
    function getAllTransactions() public view returns (TransferStruct[] memory)
    {
        // return transactions;
    }

    // fetch no of transactions
    function getTransactionCount() public view returns (uint256)
    {
        // return transactionCounter;
    }

}