import React from 'react'
import {client} from '../../prismic'

export async function getServerSideProps({query}){

    const data = await client.getByUID("prodotto",query.uid)

    return{
        props:{
            data:data.data
        }
    }
}


const Prodotto=({data})=>{
    return (
        <div className="prodotto-wrapper" data-scroll-section>
        <img src={data.image.url} className="prodotto-image" />    
        <h1 className="prodotto-title">{data.title}</h1>
        <p className="prodotto-description">
            {data.description[0].text}
        </p>
        </div>
    )
}

export default Prodotto