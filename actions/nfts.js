import axios from "axios";
import { ethers } from "ethers";
import { getMarketContract, getNFTContract } from "../hooks/contract";

export const createdNfts = async () => {
  try {
    const nftContract = await getNFTContract();
    const marketContract = await getMarketContract();

    const data = await marketContract.fetchItemsCreated();

    return await Promise.all(
      data.map(async (i) => {
        const tokenUri = await nftContract.tokenURI(i.tokenId);
        const meta = await axios.get(tokenUri);
        let price = ethers.utils.formatUnits(i.price.toString(), "ether");
        let item = {
          price,
          tokenId: i.tokenId.toNumber(),
          seller: i.seller,
          sold: i.sold,
          owner: i.owner,
          image: meta.data.image,
          name: meta.data.name,
          description: meta.data.description,
        };
        return item;
      })
    );
  } catch (error) {
    console.log("Error: ", error);
  }
};


export const purchasedNfts = async () => {
  try {
    const nftContract = await getNFTContract();
    const marketContract = await getMarketContract();

    const data = await marketContract.fetchMyNFTs();

    return await Promise.all(
      data.map(async (i) => {
        const tokenUri = await nftContract.tokenURI(i.tokenId);
        const meta = await axios.get(tokenUri);
        let price = ethers.utils.formatUnits(i.price.toString(), "ether");
        let item = {
          price,
          tokenId: i.tokenId.toNumber(),
          seller: i.seller,
          sold: i.sold,
          owner: i.owner,
          image: meta.data.image,
          name: meta.data.name,
          description: meta.data.description,
        };
        return item;
      })
    );
  } catch (error) {
    console.log("Error: ", error);
  }
};
