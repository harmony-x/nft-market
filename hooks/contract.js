import { ethers } from "ethers";
import Web3Modal from "web3modal";
import NFT from "../artifacts/contracts/NFT.sol/NFT.json";
import Market from "../artifacts/contracts/Market.sol/NFTMarket.json";

const getUrl = (chainId) => {
  switch (chainId) {
    case 1666700000:
      return "https://api.s0.b.hmny.io";
    default:
      throw new Error("Invalid network");
  }
};

const getMarketContractAddress = (chainId = 1666700000) => {
  switch (chainId) {
    case 1666700000:
      return "0x2617b7048C96a5348762D9Aa241E345fcc5193f8";
    default:
      throw new Error("Invalid network");
  }
};

export const getNFTContractAddress = (chainId = 1666700000) => {
  switch (chainId) {
    case 1666700000:
      return "0x84DD6c803601780fFC0719Be04e2A9C7b49Db241";
    default:
      throw new Error("Invalid network");
  }
};

export const getSigner = async () => {
  const web3Modal = new Web3Modal();
  const connection = await web3Modal.connect();
  const provider = new ethers.providers.Web3Provider(connection);
  const signer = provider.getSigner();
  return signer;
};

export const getNFTContract = async () => {
  const signer = await getSigner();
  const contract = new ethers.Contract(
    getNFTContractAddress(),
    NFT.abi,
    signer
  );
  return contract;
};

export const getMarketContract = async () => {
  const signer = await getSigner();
  const contract = new ethers.Contract(
    getMarketContractAddress(),
    Market.abi,
    signer
  );
  return contract;
};

const useContracts = async ({ getRequest = true }) => {
  //   Once connected to the network, we can use signer for all!
  const appDetails = {
    chainId: 1666700000,
    address: "", // TODO: Add address
  };
  const address = appDetails.address;
  if (getRequest) {
    const provider = new ethers.providers.JsonRpcProvider({
      url: getUrl(appDetails.chainId),
    });
    const nftContract = new ethers.Contract(
      getNFTContractAddress(appDetails.chainId),
      NFT.abi,
      provider
    );
    const marketContract = new ethers.Contract(
      getMarketContractAddress(appDetails.chainId),
      Market.abi,
      provider
    );
    return { address, nftContract, marketContract };
  } else {
    /* needs the user to sign the transaction, so will use Web3Provider and sign it */
    const signer = await getSigner();
    const nftContract = new ethers.Contract(
      getNFTContractAddress(appDetails.chainId),
      NFT.abi,
      signer
    );
    const marketContract = new ethers.Contract(
      getNFTContractAddress(appDetails.chainId),
      Market.abi,
      signer
    );
    return { address, nftContract, marketContract };
  }
};

export default useContracts;
