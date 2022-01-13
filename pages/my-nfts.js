import Head from "next/head";
import { Tab } from "@headlessui/react";
import UserNFT from "../components/UserNFT";
import useContracts from "../hooks/contract";
import { useQuery } from "react-query";
import { createdNfts } from "../actions/nfts";

export default function MYNFT() {
  const {
    data: createdData,
    isSuccess,
    isLoading,
  } = useQuery("nfts-created", async () => await createdNfts());
  console.log(createdData);
  const created = createdData ?? [];
  const sold = created.filter((i) => i.sold);

  return (
    <div>
      <Head>
        <title>My NFT | Harmony&apos;s NFT Marketplace</title>
        <meta
          name="description"
          content="NFT Marketplace built on Harmony Shard Zero Testnet"
        />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Raleway:wght@100;200;300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </Head>
      <section className="text-gray-600 body-font relative">
        <div className="container px-5 py-12 mx-auto">
          <Tab.Group as="div">
            <Tab.List className="mb-8 text-center">
              <Tab className="">
                {({ selected }) => (
                  <span
                    className={
                      selected
                        ? "px-4 border-purple-500 border-b-4 font-bold"
                        : "px-4 border-b-4"
                    }
                  >
                    Created
                  </span>
                )}
              </Tab>
              <Tab className="">
                {({ selected }) => (
                  <span
                    className={
                      selected
                        ? "px-4 border-purple-500 border-b-4 font-bold"
                        : "px-4 border-b-4"
                    }
                  >
                    Sold
                  </span>
                )}
              </Tab>
            </Tab.List>
            <Tab.Panels>
              <Tab.Panel className="flex flex-wrap -mx-4 -mb-10 text-center">
                {isLoading && (
                  <div className="w-full flex justify-center items-center">
                    Loading...
                  </div>
                )}
                {isSuccess && created.length === 0 && (
                  <div className="w-full flex justify-center items-center">
                    You have not created any NFTs yet.
                  </div>
                )}
                {created.map((nft, idx) => (
                  <UserNFT key={idx} nft={nft} />
                ))}
              </Tab.Panel>
              <Tab.Panel className="flex flex-wrap -mx-4 -mb-10 text-center">
                {isLoading && (
                  <div className="w-full flex justify-center items-center">
                    Loading...
                  </div>
                )}
                {isSuccess && sold.length === 0 && (
                  <div className="w-full flex justify-center items-center">
                    You have not sold any NFTs yet.
                  </div>
                )}
                {sold.map((nft, idx) => (
                  <UserNFT key={idx} nft={nft} />
                ))}
              </Tab.Panel>
            </Tab.Panels>
          </Tab.Group>
        </div>
      </section>
    </div>
  );
}
