import Web3 from "web3";
import provider from "./provider";

var web3;

if (typeof window.web3 !== "undefined") {
  // Use Mist/MetaMask's provider.
  web3 = new Web3(window.web3.currentProvider);
} else {
  if (provider.connected) {
    web3 = new Web3(provider);
  } else {

    // const infura = `https://kovan.infura.io/v3/${process.env.REACT_APP_INFURA_KEY}`;
    const infura = `https://mainnet.infura.io/v3/${process.env.REACT_APP_INFURA_KEY}`;
    // process.env.NODE_ENV === "development"
    //   ? "https://kovan.infura.io/v3/${process.env.REACT_APP_INFURA_KEY}"
    //   : `https://mainnet.infura.io/v3/${process.env.REACT_APP_INFURA_KEY}`;
    web3 = new Web3(new Web3.providers.HttpProvider(infura));
  }
}
export default web3;
