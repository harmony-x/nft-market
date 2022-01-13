import "../styles/globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { QueryClient, QueryClientProvider } from "react-query";
import { useState } from "react";
import AppDetailsProvider from "../context/AppDetails";

function MyApp({ Component, pageProps }) {
  const [queryClient] = useState(() => new QueryClient());
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <AppDetailsProvider>
          <Header />
          <Component {...pageProps} />
          <Footer />
        </AppDetailsProvider>
      </QueryClientProvider>
    </>
  );
}

export default MyApp;
