import React from "react";
import { client } from "../../prismic";
import Head from "next/head";
export async function getServerSideProps({ query }) {
  const data = await client.getByUID("prodotto", query.uid);

  return {
    props: {
      data: data.data,
    },
  };
}

const Prodotto = ({ data }) => {
  return (
    <>
      <Head>
        <title>{data.metatitle}</title>
        <meta name="description" content={`${data.metadescription}`} />
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1"
        ></meta>
      </Head>
      <div className="prodotto-wrapper" >
        <img src={data.image.url} className="prodotto-image" />
        <h1 className="prodotto-title">{data.title}</h1>
        <p className="prodotto-description">{data.description[0].text}</p>
      </div>
    </>
  );
};

export default Prodotto;
