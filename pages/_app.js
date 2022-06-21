import "../styles/globals.css";
import "locomotive-scroll/src/locomotive-scroll.scss";
import "../styles/index.scss"

import Layout from "../components/Layout";


function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
