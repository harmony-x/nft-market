import NFT from "./NFT"

export default function Marketplace() {
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <h2 className="title-font sm:text-4xl text-3xl font-semibold text-center text-gray-900 mb-12">Marketplace</h2>
        <div className="flex flex-wrap -mx-4 -mb-10 text-center">
          {
            [1,2,3,4,5,6].map(item => (
              <NFT key={item}/>
            ))
          }
        </div>
      </div>
    </section>
  )
}