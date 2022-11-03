import Aos from "aos";
import { useEffect } from "react";
import Header from "../components/Header";
import "../styles/bootstrap.css";
import "../styles/globals.css";
function MyApp({ Component, pageProps }) {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <>
      <Component {...pageProps} />;
    </>
  );
}

export default MyApp;
