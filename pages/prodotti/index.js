import React, { useEffect } from "react";
import {client} from '../../prismic'
import Link from 'next/link'
import Head from "next/head";
export async function getServerSideProps(){
  const data = await client.getByType("prodotti",{
    fetchLinks: ['prodotto.title','prodotto.image','prodotto.uid','prodotto.hasDescription'],
  })

  return{
    props:{
      data:data.results[0].data
    }
  }
}

function prodotti({data}) {

  return (
    <>
          <Head>
        <title>{data.metatitle}</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1"
        ></meta>
      </Head>
    <div className="prodotti-wrapper" data-scroll-section>
      {data.slices[0].items.map(({prodotto:{data}},index) => {
        
        
        if(index % 2 !== 0){
          return (
            <Link href={data.hasDescription?`/prodotti/${data.uid}`:""}  >

            <div className="prodotto" style={{
              cursor:data.hasDescription &&  "pointer" 
            }}>
              <div className="prodotto-image" data-scroll-speed='1' data-scroll>
                <img src={data.image.url} />
              </div>
              <div className="prodotto-title"  data-scroll>
                <h1>{data.title}</h1>
              </div>                
            </div>
                 </Link>
          );
          
        }else{
          return(
            <Link href={data.hasDescription?`/prodotti/${data.uid}`:""} >
            <div className="prodotto-reverse" style={{
              cursor:data.hasDescription && "pointer" 
            }} >
              <div className="prodotto-image" data-scroll-speed='-1.2' data-scroll>
                <img src={data.image.url} />
              </div>
              <div className="prodotto-title"  data-scroll>
                <h1>{data.title}</h1>
              </div>
            </div>
          </Link>
          )
        }
        
      })}
    </div>
      </>
  );
}

export default prodotti;
