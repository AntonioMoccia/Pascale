import React, { useEffect } from "react";
import {client} from '../../prismic'
import Link from 'next/link'
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

  const Prodotti = [
    {
      title: "Castagne fresche",
      img: "/images/avatar1.jpeg",
    },
    {
      title: "Castagne secche in guscio",
      img: "/images/avatar1.jpeg",
    },
    {
      title: "Castagne secche sgusciate",
      img: "/images/avatar1.jpeg",
    },
  ];

  return (
    <div className="prodotti-wrapper" data-scroll-section>
      {data.slices[0].items.map(({prodotto:{data}},index) => {


         if(index % 2 !== 0){
          return (
            <Link href={data.hasDescription?`/prodotti/${data.uid}`:""} >
            <div className="prodotto">
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
            <div className="prodotto-reverse">
              <div className="prodotto-image" data-scroll-speed='-1.2' data-scroll>
                <img src={data.image.url} />
              </div>
              <div className="prodotto-title"  data-scroll>
                <h1>{data.title}</h1>
              </div>
            </div>
          )
        }
 
      })}
    </div>
  );
}

export default prodotti;
