import React, { useEffect, useState } from "react";
import { client } from "../../prismic";
import Link from "next/link";
import Head from "next/head";
import gsap from "gsap";
import {RichText} from 'prismic-reactjs'
export async function getStaticProps() {
  /*  const data = await client.getByType("prodotti",{
    fetchLinks: ['prodotto.title','prodotto.image','prodotto.uid','prodotto.hasDescription'],
  })
 */
  const data = await client.getAllByType("prodotto");
  
  return {
    props: {
      data: [...data],
    },
  };
}

function Prodotti({ data }) {

  const [loaded,setLoaded] = useState(false)
  useEffect(()=>{
    setLoaded(true)
  },[])
  return (
    <>
      <Head>
        <title>Pascale castagne - Prodotti</title>
        <meta name="description" content="I nostri prodotti" />
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1"
        ></meta>
      </Head>
      <div className="prodotti-wrapper" >
        {
        data.map((prod) => {
          return (
            <div className="prodotto-wrapper" key={prod.data.id}>
              <img src={prod.data.image.url} className="prodotto-image" />
              <h1 className="prodotto-title">{prod.data.title}</h1>
              <p className="prodotto-description">{
                loaded && <RichText render={prod.data.description} />
              }</p>
            </div>
          );
        })
        }
        {/* data.slices[0].items.map(({prodotto:{data}},index) => {
        
        
        if(index % 2 !== 0){
          return (
            <Link href={data.hasDescription?`/prodotti/${data.uid}`:""}  >
            <div className="prodotto" style={{
              cursor:data.hasDescription &&  "pointer" 
            }}  onMouseOver={()=>{
              if(data.hasDescription){
                document.querySelector('.cursor').innerText='Show more'
                gsap.to('.cursor',{
                  scale:1.2
                }) 
              }
          }}
            onMouseOut={()=>{
              document.querySelector('.cursor').innerText=''
              gsap.to('.cursor',{
                scale:1
              })
            }}>
              <div className="prodotto-image" data-scroll-speed='1' data-scroll>
                <img src={data.image.url} />
              </div>
              <div className={data.hasDescription ? 'link-product prodotto-title' : 'prodotto-title'}  data-scroll>
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
            }} onMouseOver={()=>{
              if(data.hasDescription){
                document.querySelector('.cursor').innerText='Show more'
                gsap.to('.cursor',{
                  scale:1.2
                }) 
              }
          }}
            onMouseOut={()=>{
              document.querySelector('.cursor').innerText=''
              gsap.to('.cursor',{
                scale:1
              })
            }}>
              <div className="prodotto-image" data-scroll-speed='-1.2' data-scroll>
                <img src={data.image.url} />
              </div>
              <div className={data.hasDescription ? 'link-product prodotto-title' : 'prodotto-title'}  data-scroll>
                <h1>{data.title}</h1>
              </div>
            </div>
          </Link>
          )
        }
        
      }) */}
      </div>
    </>
  );
}

export default Prodotti;
