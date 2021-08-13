/* eslint-disable prettier/prettier */
import Web3 from "web3";
import ContractAbi from "../abi/testament.json";
import validateConnection from "./validateConnection";

class SmartContract {
  constructor() {
    if (window.ethereum) {
      // Modern dapp browsers...
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
  }

  async init() {
    const netId = await this.getNetID();
    if ("Rinkeby" == netId.name) {
      this.contractAddr = "0xB1c945a57f41B4f9A5c8eD2035F6E785980448e7";
    }
    this.contract = new this.web3.eth.Contract(ContractAbi, this.contractAddr);
    console.log("Methods: ", this.contract.methods);
  }

  async getContractBalance() {
    return this.web3.utils.fromWei(
      await this.contract.methods.getContractBalance().call(),
      "ether"
    );
  }

  async getNetID() {
    let netId = await this.web3.eth.net.getId();
    let network = "";
    let warning = "";
    console.log("netId: " + netId);
    switch (netId) {
      case 1:
        network = "Mainnet";
        warning = "please switch your network to Rinkeby";
        break;
      case 2:
        network = "Deprecated Morden";
        warning = "please switch your network to Rinkeby";
        break;
      case 3:
        network = "Ropsten";
        warning = "please switch your network to Rinkeby";
        break;
      case 4:
        network = "Rinkeby";
        break;
      case 42:
        network = "Kovan";
        break;
      default:
        network = "Unknown";
        warning = "please switch your network to Rinkeby";
    }

    console.log("result: ", netId, network, warning);
    return {
      netId: netId,
      name: network,
      warning: warning,
    };
  }

  async loadUserAddress() {
    let accounts = await this.web3.eth.getAccounts();
    console.log("loadUserAddress >> " + accounts[0]);

    return accounts[0];
  }
}

Object.setPrototypeOf(SmartContract.prototype, { ...validateConnection });

export default SmartContract;
