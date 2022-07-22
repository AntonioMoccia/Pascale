import React, { useEffect, useState } from "react";
import Head from "next/head";
import { client } from "../prismic";
import { PrismicRichText } from "@prismicio/react";

export async function getStaticProps() {
  const data = await client.getByType("chi-siamo");

  return {
    props: {
      data: data.results[0].data,
    },
  };
}

function About({ data }) {
  const [loaded,setLoaded]  = useState(false)
  /*useEffect(()=>{
  gsap.fromTo('.chi-siamo-img',{
    transformOrigin:"top",
    scaleY:0
  },{
    scaleY:1,
    duration:0.5
  })
},[])*/
useEffect(()=>{
setLoaded(true)
},[])
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
      <div className="chi-siamo-wrapper" data-scroll-section>
        <div className="chi-siamo-image">
          <img src={data.immagine.url} className="chi-siamo-img" />
        </div>

        <div className="chi-siamo-text">
          {
            loaded && <PrismicRichText field={data.testo} />
          }
          </div>
      </div>
    </>
  );
}

export default About;
