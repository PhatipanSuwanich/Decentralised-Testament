/* eslint-disable prettier/prettier */
import Web3 from "web3";
import validateConnection from "./validateConnection";

class SmartContract {
  constructor(
    // ethNode = 'wss://rinkeby.infura.io/_ws',
    // contractAddr = "0x6c527b7c6bbd2374791998c6abf9f90bca70d015"
  ) {
    // Modern dapp browsers...
    if (window.ethereum) {
      this.web3 = new Web3(window.ethereum);

      try {
        // Request account access if needed
        window.ethereum.enable().then(() => {});
      } catch (err) {
        console.log(err);
      }
    }
    // Legacy dapp browsers, checking if Web3 has been injected by the browser (Mist/MetaMask)
    else if (typeof web3 !== "undefined") {
      // Use Mist/MetaMask's provider
      this.web3 = new Web3(window.web3.currentProvider);
    } else {
      console.log("No web3? You should consider trying MetaMask!");
      // fallback - use your fallback strategy (local node / hosted node + in-dapp id mgmt / fail)
      this.web3 = new Web3(
        new Web3.providers.HttpProvider("https://kovan.infura.io/")
      );
    }

    console.log("web3: ", this.web3);
    // this.contractAddr = contractAddr;
  }

  async loadUserAddress () {
    let accounts = await this.web3.eth.getAccounts()
    console.log('loadUserAddress >> ' + accounts[0])

    return accounts[0]
  }
}

Object.setPrototypeOf(SmartContract.prototype, {...validateConnection})

export default SmartContract;
