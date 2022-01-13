import "../styles/globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { QueryClient, QueryClientProvider } from "react-query";
import { useState } from "react";

function MyApp({ Component, pageProps }) {
  const [queryClient] = useState(() => new QueryClient());
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Header />
        <Component {...pageProps} />
        <Footer />
      </QueryClientProvider>
    </>
  );
}

export default MyApp;
