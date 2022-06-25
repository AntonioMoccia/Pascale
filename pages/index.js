import Head from "next/head";
import {useEffect,useState} from 'react'
import { client } from '../prismic'

export async function getServerSideProps(){
  const data = await client.getByType("home")

  return{
    props:{
      data:data.results[0].data
    }
  }
}

export default function Home({data}) {
  const [homeData,setHomeData] = useState([])

  return (
    <>
    
    <div className="home-wrapper" data-scroll-section>
      <video
              id="video-hero-id"
              className="video"
              autoPlay
              loop
              muted={true}
              playsInline
            >
              <source src={data.video.url} />
      </video>
      <div className="avatar-wrapper">
      <img src={data.avatar.url} className="avatar" />
      </div>
    <div className="text-wrapper">
    <p>
      {data.frase}
    </p>
    </div>

    </div>
  </>
  );
}
