export default function UserNFT({ nft }) {
  const { image, name, description, price , sold} = nft;
  return (
    <article className="w-full md:w-1/2 lg:w-1/3 mb-10 px-4">
      <div className="rounded-lg shadow-sm transition-all hover:shadow-md pt-12 border-2 border-purple-100">
        <div className="h-40 w-40 mx-auto rounded-full overflow-hidden">
          <img
            alt="content"
            className="object-cover object-center h-40 w-40 mx-auto rounded-full hover:scale-110 transition-all"
            src={image}
          />
        </div>
        <h3 className="title-font text-2xl font-medium text-gray-900 mt-1 mb-3">
          {name}
        </h3>
        <p className="leading-relaxed text-base">{description}</p>
        <p className="text-lg font-bold mt-6 py-6 bg-purple-500 text-purple-100">
          {price} ONE <span className="font-medium">[{sold ? "Sold" : "Available"}]</span>
        </p>
      </div>
    </article>
  );
}
