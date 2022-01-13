export default function NFT({ nft, buyNft }) {
  const { image, name, description, price } = nft;
  return (
    <article className="w-full md:w-1/2 lg:w-1/3 mb-10 px-4">
      <div className="rounded-lg shadow-sm transition-all hover:shadow-md pb-12 border-2 border-purple-100">
        <div className="rounded-t-lg h-64 overflow-hidden">
          <img
            alt="content"
            className="object-cover object-center h-full w-full hover:scale-110 transition-all"
            src={image}
          />
        </div>
        <h3 className="title-font text-2xl font-medium text-gray-900 mt-6 mb-3">
          {name}
        </h3>
        <p className="leading-relaxed text-base">{description}</p>
        <p className="text-lg font-bold mt-6">{price} ETH</p>
        <button
          onClick={() => buyNft(nft)}
          className="flex mx-auto mt-4 text-white bg-purple-500 border-0 py-3 px-6 focus:outline-none hover:bg-purple-600 rounded"
        >
          Buy Now
        </button>
      </div>
    </article>
  );
}
