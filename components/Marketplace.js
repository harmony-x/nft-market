import axios from "axios";
import { ethers } from "ethers";
import { useQuery } from "react-query";
import useContracts, {
  getMarketContract,
  getNFTContractAddress,
} from "../hooks/contract";
import NFT from "./NFT";

export default function Marketplace() {
  const contracts = useContracts({});
  const { data, refetch, isSuccess, isLoading } = useQuery("nfts", async () => {
    const { nftContract, marketContract } = await contracts;
    const data = await marketContract.fetchMarketItems();
    return await Promise.all(
      data.map(async (i) => {
        const tokenUri = await nftContract.tokenURI(i.tokenId);
        const meta = await axios.get(tokenUri);
        let price = ethers.utils.formatUnits(i.price.toString(), "ether");
        let item = {
          price,
          tokenId: i.tokenId.toNumber(),
          seller: i.seller,
          owner: i.owner,
          image: meta.data.image,
          name: meta.data.name,
          description: meta.data.description,
        };
        return item;
      })
    );
  });
  const nfts = data ?? [];

  async function buyNft(nft) {
    try {
      const contract = await getMarketContract();

      const price = ethers.utils.parseUnits(nft.price.toString(), "ether");
      const transaction = await contract.createMarketSale(
        getNFTContractAddress(),
        nft.tokenId,
        {
          value: price,
        }
      );
      await transaction.wait();
      await refetch();
    } catch (error) {
      alert("Could not purchase the NFT");
    }
  }

  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <h2 className="title-font sm:text-4xl text-3xl font-semibold text-center text-gray-900 mb-12">
          Marketplace
        </h2>
        <div className="flex flex-wrap -mx-4 -mb-10 text-center">
          {isLoading && (
            <h1 className="w-full -mt-8 px-20 py-10 text-3xl">Loading...</h1>
          )}
          {isSuccess && !nfts.length && (
            <h1 className="w-full -mt-8 px-20 py-10 text-3xl">
              No items in marketplace
            </h1>
          )}
          {nfts.map((nft, idx) => (
            <NFT key={idx} buyNft={buyNft} nft={nft} />
          ))}
        </div>
      </div>
    </section>
  );
}
