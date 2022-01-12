import Head from "next/head";
import { create as ipfsHttpClient } from 'ipfs-http-client';
import { useState } from "react";
const client = ipfsHttpClient('https://ipfs.infura.io:5001/api/v0');

export default function Home() {
  const [file, setFile] = useState(false);
  const [fileLoader, setFileLoader] = useState(false);
  const [formInput, updateFormInput] = useState({ price: '', name: '', description: '' });
  async function onChange(e) {
    const file = e.target.files[0]
    setFileLoader(true)
    try {
      const added = await client.add(
        file,
        {
          progress: (prog) => console.log(`received: ${prog}`)
        }
      )
      const url = `https://ipfs.infura.io/ipfs/${added.path}`
      setFile(url)
      setFileLoader(false)
    } catch (error) {
      console.log('Error uploading file: ', error)
      setFileLoader(false)
    }  
  };
  return (
    <div>
      <Head>
        <title>Sell | Harmony&apos;s NFT Marketplace</title>
        <meta
          name="description"
          content="NFT Marketplace built on Harmony Shard Zero Testnet"
        />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
        <link href="https://fonts.googleapis.com/css2?family=Raleway:wght@100;200;300;400;500;600;700;800;900&display=swap" rel="stylesheet" />
      </Head>
      <section className="text-gray-600 body-font relative">
        <div className="container px-5 py-12 mx-auto flex justify-center">
          <div className=" bg-white rounded-lg p-8 flex flex-col  md:w-4/5 w-full border-2 border-purple-500 relative z-10 shadow-md">
            <h2 className="text-gray-900 text-lg sm:text-3xl mb-4 font-semibold title-font">Create and sell digital asset</h2>
            <p className="leading-relaxed mb-5 text-gray-600">Fill the form with details of your NFT so it can be listed on the homepage for people to buy.</p>
            <form>
            <div className="relative mb-4">
              <label htmlFor="name" className="leading-7 text-sm text-gray-600">Asset name</label>
              <input type="text" id="name" name="name" className="w-full bg-white rounded border border-gray-300 focus:border-purple-500 focus:ring-2 focus:ring-purple-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              onChange={e => updateFormInput({ ...formInput, name: e.target.value })} required />
            </div>
            <div className="relative mb-4">
              <label htmlFor="price" className="leading-7 text-sm text-gray-600">Asset price in ETH</label>
              <input type="number" id="price" name="price" className="w-full bg-white rounded border border-gray-300 focus:border-purple-500 focus:ring-2 focus:ring-purple-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" 
              onChange={e => updateFormInput({ ...formInput, price: e.target.value })} required/>
            </div>
            <div className="relative mb-4">
              <label htmlFor="description" className="leading-7 text-sm text-gray-600">Asset description</label>
              <textarea id="description" name="description" className="w-full bg-white rounded border border-gray-300 focus:border-purple-500 focus:ring-2 focus:ring-purple-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
              onChange={e => updateFormInput({ ...formInput, description: e.target.value })} required>
              </textarea>
            </div>
            <div className="relative mb-4 flex items-center">
              <label htmlFor="image" className="w-fit leading-7 text-sm bg-purple-400 hover:bg-indigo-dark text-white font-bold py-2 px-4 cursor-pointer inline-flex items-center">
                Asset Image
                <svg fill="#FFF" height="18" viewBox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0 0h24v24H0z" fill="none"/>
                  <path d="M9 16h6v-6h4l-7-7-7 7h4zm-4 2h14v2H5z"/>
                </svg>
              </label>
              <input type="file" id="image" name="image" className="cursor-pointer absolute block opacity-0 pin-r pin-t"
              onChange={onChange} required />
            </div>
            <div style={{backgroundImage: `${file ? `url(${file})` : ''}`}} className={`w-20 h-20 ${file ? '' : 'bg-gray-500'} flex justify-center items-center rounded-full mb-4 bg-center bg-cover bg-no-repeat`}>
              {fileLoader && <div className="flex justify-center items-center">
                <div className="spinner-border animate-spin inline-block w-6 h-6 text-purple-500 border-2 rounded-full" role="status">
                  <span className="visually-hidden">Loading...</span>
                </div>
              </div>}
            </div>
            <button className="text-white bg-purple-500 border-0 py-2 px-6 focus:outline-none hover:bg-purple-600 rounded text-lg">List Asset</button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
