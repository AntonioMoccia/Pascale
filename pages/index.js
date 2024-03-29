import Head from "next/head";
import {useEffect,useState} from 'react'
import { client } from '../prismic'
import {RichText} from 'prismic-reactjs'
export async function getStaticProps(){
  const data = await client.getByType("home")
  return{
    props:{
      data:data.results[0].data
    }
  }
}

export default function Home({data}) {
  const [homeData,setHomeData] = useState(false)
useEffect(()=>{
  console.log(data);
  setHomeData(true)
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
    <div className="section">
    <div className="section-avatar" >       
     <div className='avatar-home'>
            <img className='avatar-home-image' alt={data.avatar.alt} src={data.avatar.url}  />
      </div>
    </div>
       {/*
      <div className="video-wrapper"   >

          <video
          id="video-hero-id"
          className="video-hero"
          autoPlay
          loop
          muted={true}
          playsInline
          >
          <source src={data.video.url} />
        </video> 
      </div>
        */}
          </div>


    <div className="section-footer" >
      <p className="section-footer-text"  >
    {
      homeData && <RichText render={data.frase} />
    }        
      </p>
    </div>
    <div className="section-avatar" >       
     <div className='avatar-home'>
            <img className='avatar-home-image' alt={data.avatar.alt}  src={data.avatar.url}  />
      </div>
    </div>
  </>
  );
}
