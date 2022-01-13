import { useQuery } from "react-query";
import useContracts from "../hooks/contract";
import NFT from "./NFT";

export default function Marketplace() {
  const contracts = useContracts({});
  const { data, refetch, isSuccess } = useQuery("nfts", async () => {
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
    /* needs the user to sign the transaction, so will use Web3Provider and sign it */
    const signer = await getSigner();
    const contract = new ethers.Contract(nftmarketaddress, Market.abi, signer);

    /* user will be prompted to pay the asking process to complete the transaction */
    const price = ethers.utils.parseUnits(nft.price.toString(), "ether");
    const transaction = await contract.createMarketSale(
      nftaddress,
      nft.tokenId,
      {
        value: price,
      }
    );
    await transaction.wait();
    await refetch();
  }

  if (isSuccess && !nfts.length)
    return <h1 className="px-20 py-10 text-3xl">No items in marketplace</h1>;

  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <h2 className="title-font sm:text-4xl text-3xl font-semibold text-center text-gray-900 mb-12">
          Marketplace
        </h2>
        <div className="flex flex-wrap -mx-4 -mb-10 text-center">
          {nfts.map((nft, idx) => (
            <NFT key={idx} buyNft={buyNft} nft={nft} />
          ))}
        </div>
      </div>
    </section>
  );
}
