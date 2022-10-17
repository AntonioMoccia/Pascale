import React,{useEffect,useState} from 'react'
import {FaFacebook,FaInstagram,FaYoutube} from 'react-icons/fa'
import Link from 'next/link'
import {client} from '../prismic'


function Footer() {
const [data,setData] = useState({})
    useEffect(async ()=>{
        const data = await client.getByType('social')
            setData(data.results[0].data);

    },[])

    return (

         <div className='footer-wrapper' >
            <div className='social'>
                <Link href={data.facebook ? data.facebook : "" }>
                <FaFacebook className='facebook' />
                </Link>
                <Link href={data.instagram ? data.instagram : ""}>
                <FaInstagram className='instagram' />
                </Link>
            </div>
            <div className='powered'>
            Powered by Antonio Moccia
            </div>
        </div> 
    )
}

export default Footer
