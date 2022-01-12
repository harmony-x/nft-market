export default function UserNFT() {
  return (
      <article className="w-full md:w-1/2 lg:w-1/3 mb-10 px-4">
        <div className="rounded-lg shadow-sm transition-all hover:shadow-md pt-12 border-2 border-purple-100">
          <div className="h-40 w-40 mx-auto rounded-full overflow-hidden">
            <img alt="content" className="object-cover object-center h-40 w-40 mx-auto rounded-full hover:scale-110 transition-all" src="/nft-neon-sign.jpg"/>
          </div>
          <h3 className="title-font text-2xl font-medium text-gray-900 mt-1 mb-3">Skull crushers</h3>
          <p className="leading-relaxed text-base">We will destroy this internet.</p>
          <p className="text-lg font-bold mt-6 py-6 bg-purple-500 text-purple-100">1 ETH</p>
        </div>
      </article>
  )
}