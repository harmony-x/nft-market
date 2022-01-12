import Link from "next/link";

export default function Header() {
  return (
  <header className="text-gray-600 body-font">
    <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
      <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-10 h-10 text-white p-2 bg-purple-500 rounded-full" viewBox="0 0 24 24">
          <rect width="10" height="10" fill="#fff" x="0" y="0"></rect>
          <rect width="10" height="10" fill="#fff" x="14" y="0"></rect>
          <rect width="10" height="10" fill="#fff" x="0" y="14"></rect>
          <rect width="10" height="10" fill="#fff" x="14" y="14"></rect>
        </svg>
        <span className="ml-3 text-xl">Harmony-X</span>
      </a>
      <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
        <Link href="/">
          <a className="mr-5 hover:text-gray-900">Home</a>
        </Link>
        <Link href="/sell">
          <a className="mr-5 hover:text-gray-900">Sell</a>
        </Link>
        <Link href="/my-nfts">
          <a className="mr-5 hover:text-gray-900">My NFTs</a>
        </Link>
      </nav>
        {/* <Link href="/dashboard"> */}
          {/* <a> */}
            <button className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">Connect
              <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-1" viewBox="0 0 24 24">
                <path d="M5 12h14M12 5l7 7-7 7"></path>
              </svg>
            </button>
          {/* </a>
        </Link> */}
      
    </div>
  </header>
  )
}