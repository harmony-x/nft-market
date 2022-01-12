import Link from "next/link";

export default function Hero() {
  return (
    <section className="text-gray-600 body-font">
      <div className="container mx-auto flex px-5 py-12 lg:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 flex flex-col md:items-start md:text-left mb-16 lg:mb-0 items-center text-center">
          <h1 className="title-font sm:text-5xl text-3xl mb-4 font-semibold text-gray-900">Enter The New World of Digital Art
            {/* <br className="hidden lg:inline-block"/>readymade gluten */}
          </h1>
          <p className="mb-8 leading-relaxed">Discover, collect, sell & research NFTs across this NFT marketplace.</p>
          <div className="flex justify-center">
            <Link href="/sell">
              <a>
                <button className="inline-flex text-white bg-purple-500 border-0 py-2 px-6 focus:outline-none hover:bg-purple-600 rounded text-lg">Sell</button>
              </a>
            </Link>
            <Link href="/">
              <a>
                <button className="ml-4 inline-flex text-gray-700 bg-gray-300 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">Discover</button>
              </a>
            </Link>      
          </div>
        </div>
        <div className="md:w-1/2 w-5/6">
          <img className="object-cover object-center rounded w-full" alt="hero" src="/nft-neon-sign.jpg" />
        </div>
      </div>
    </section>
  )
}