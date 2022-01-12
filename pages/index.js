import Head from "next/head";
import Hero from "../components/Hero";
import Marketplace from "../components/Marketplace";

export default function Home() {
  return (
    <div>
      <Head>
        <title>HarmonyX | Harmony&apos;s NFT Marketplace</title>
        <meta
          name="description"
          content="NFT Marketplace built on Harmony Shard Zero Testnet"
        />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin/>
        <link href="https://fonts.googleapis.com/css2?family=Raleway:wght@100;200;300;400;500;600;700;800;900&display=swap" rel="stylesheet" />
      </Head>
      <Hero />
      <Marketplace />
    </div>
  );
}
