import React, { useEffect } from "react";
import Link from "next/link";
import Section from "../components/Section";
import Image from 'next/image'
import gsap from 'gsap'
import {client} from '../prismic'

export async function getServerSideProps(){
  const data = await client.getByType("chi-siamo")

  return{
    props:{
      data:data.results[0].data
    }
  }
}


function about({data}) {
/*useEffect(()=>{
  gsap.fromTo('.chi-siamo-img',{
    transformOrigin:"top",
    scaleY:0
  },{
    scaleY:1,
    duration:0.5
  })
},[])*/
  return (
    <div className="chi-siamo-wrapper" data-scroll-section>
        <div className="chi-siamo-image"  >
    <img src={data.immagine.url} className="chi-siamo-img"  />

        </div>

      <div className="chi-siamo-text" >
       {data.testo[0].text}
      </div>
    </div>
  );
}

export default about;
