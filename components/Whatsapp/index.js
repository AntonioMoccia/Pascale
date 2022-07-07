import React,{useState,useEffect} from 'react'
import WhatsAppWidget from 'react-whatsapp-widget'
import 'react-whatsapp-widget/dist/index.css'
import {WhatsappWrapper} from './styled'

import { client } from '../../prismic'

const Whatsapp = ()=>{

        const [contact,setContact]=useState([])
        useEffect(async()=>{
            var res = await client.getSingle('contattaci')
            setContact(res.data)
        },[])
    return(
        <div className='whatsapp'>
        <WhatsAppWidget textReplyTime='' phoneNumber = {`+39 ${contact.tel}`} placeholder='Inserisci il messaggio' companyName='Pascale castagne' message='Ciao! 👋🏼  Come posso aiutarti?' sendButton='Invia'/>
        </div>
    )
}

export default Whatsapp