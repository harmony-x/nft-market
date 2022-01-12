import Head from "next/head";
import { Tab } from '@headlessui/react'
import UserNFT from "../components/UserNFT";

export default function MYNFT() {
  return (
    <div>
      <Head>
        <title>My NFT | Harmony&apos;s NFT Marketplace</title>
        <meta
          name="description"
          content="NFT Marketplace built on Harmony Shard Zero Testnet"
        />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin/>
        <link href="https://fonts.googleapis.com/css2?family=Raleway:wght@100;200;300;400;500;600;700;800;900&display=swap" rel="stylesheet" />
      </Head>
      <section className="text-gray-600 body-font relative">
        <div className="container px-5 py-12 mx-auto">
          <Tab.Group as="div">
          <Tab.List className="mb-8 text-center">
            <Tab className="">
                {({ selected }) => (
              <button
                className={
                  selected ? 'px-4 border-purple-500 border-b-4 font-bold' : 'px-4 border-b-4'
                }
              >
                Created
              </button>
              )}
            </Tab>
            <Tab className="">
                {({ selected }) => (
              <button
                className={
                  selected ? 'px-4 border-purple-500 border-b-4 font-bold' : 'px-4 border-b-4'
                }
              >
                Sold
              </button>
              )}
            </Tab>
          </Tab.List>
          <Tab.Panels>
            <Tab.Panel className="flex flex-wrap -mx-4 -mb-10 text-center">
              {
                [1,2,3,4,5,6].map(item => (
                  <UserNFT key={item} />
                ))
              }
            </Tab.Panel>
            <Tab.Panel className="flex flex-wrap -mx-4 -mb-10 text-center">
              {
                [1,2,3,4,5,6].map(item => (
                  <UserNFT key={item} />
                ))
              }
            </Tab.Panel>
          </Tab.Panels>
        </Tab.Group>
      </div>
    </section>
    </div>
  );
}
