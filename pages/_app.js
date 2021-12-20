import "../styles/globals.css";
import Header from "../layouts/header";
import Footer from "../layouts/footer";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}

export default MyApp;
