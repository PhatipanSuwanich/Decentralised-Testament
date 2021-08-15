pragma solidity ^0.6.0;

import "https://github.com/OpenZeppelin/openzeppelin-contracts/blob/v3.1.0/contracts/math/SafeMath.sol";

contract Testament {
    using SafeMath for uint256;
    
    uint256 private countLogs = 0;
    
    struct Testament {
        uint256 estate;       //กองมรดก
        uint256 startDate;    //วันที่สร้างพินัยกรรม
        uint256 completeDate; //เวลาส่งต่อมรดก
    }
    
    struct transaction {
        address owner;        //เจ้าของมรดก
        uint256 estate;       //กองมรดก
        uint256 startDate;    //วันที่สร้างพินัยกรรม
        uint256 completeDate; //เวลาส่งต่อมรด
        address legatee;      //ผู้รับมรดก
    }
    
    mapping (address => mapping (address => Testament)) public MyTestament;
    // mapping (uint256 => transaction[]) public logs;
    transaction[] public logs;
    
    function setMyLastWill(address receiver,uint8 completeDate) public payable{
        
        require(msg.value > 0,"amount should more than 0");
        
        // uint256 year = 31556926;
        // uint256 hour = 3600;
        uint256 minute = 60;
        Testament memory currentTestament;
        currentTestament.estate = MyTestament[msg.sender][receiver].estate.add(msg.value);
        currentTestament.startDate = now;
        currentTestament.completeDate = now.add(minute.mul(completeDate));
        
        // MyTestament[tx.origin] = currentTestament;
        MyTestament[msg.sender][receiver] = currentTestament;
        
        setTransaction(msg.sender,currentTestament.estate,currentTestament.startDate,currentTestament.completeDate,receiver);
    }
    
    function setTransaction(address owner,uint256 estate,uint256 startDate,uint256 completeDate,address legatee) private {
        transaction memory currentTransaction;
        currentTransaction.owner = owner;
        currentTransaction.estate = estate;
        currentTransaction.startDate = startDate;
        currentTransaction.completeDate = completeDate;
        currentTransaction.legatee = legatee;
        
        logs.push(currentTransaction);
        countLogs = countLogs.add(1);
    }
    
    function ownerWithdraws(address receiver,uint256 withdrow_amount) public returns (uint256 remainingBalance){
        require(MyTestament[msg.sender][receiver].estate > withdrow_amount,"amount to withdrow is not enough!");
        MyTestament[msg.sender][receiver].estate = MyTestament[msg.sender][receiver].estate.sub(withdrow_amount);
        msg.sender.transfer(withdrow_amount);
        
        remainingBalance = MyTestament[msg.sender][receiver].estate;
    }
    
    function legateeWithdraws(address owner,uint256 withdrow_amount) public returns (uint256 remainingBalance){
        require(MyTestament[owner][msg.sender].completeDate <= now,"Today, the date that can be inherited is not yet due.!");
        require(MyTestament[owner][msg.sender].estate >= withdrow_amount,"amount to withdrow is not enough!");
        MyTestament[owner][msg.sender].estate = MyTestament[owner][msg.sender].estate.sub(withdrow_amount);
        msg.sender.transfer(withdrow_amount);
        
        remainingBalance = MyTestament[owner][msg.sender].estate;
    }
    
    function cancellationMyLastWillTestament(address receiver) public returns (uint256 remainingBalance){
        require(MyTestament[msg.sender][receiver].estate > 0,"You do not own this will.");
        uint256 max_amount = MyTestament[msg.sender][receiver].estate;
        MyTestament[msg.sender][receiver].estate = MyTestament[msg.sender][receiver].estate.sub(max_amount);
        MyTestament[msg.sender][receiver].startDate = 0;
        MyTestament[msg.sender][receiver].completeDate = 0;
        
        msg.sender.transfer(max_amount);
        remainingBalance = MyTestament[msg.sender][receiver].estate;
    }
    
    function getContractBalance() public view returns(uint256){
        return address(this).balance;
    }
    
    function getTotalLogs() public view returns(uint256){
        return countLogs;
    }
}