import React, { useRef, useEffect } from "react";
import { FaBeer } from "react-icons/fa";
import {AiOutlineMail} from 'react-icons/ai'
import {BsFillTelephoneFill} from 'react-icons/bs'
//service_8lx7bt6
import emailjs from "@emailjs/browser";
import {client} from '../prismic'

export async function getServerSideProps(){
  const data = await client.getByType("contattaci")

  return{
    props:{
      data:data.results[0].data
    }
  }
}



function Contattaci({data}) {
  /*     const templateParams = {
        name: 'James',
        notes: 'Check this out!'
    }; */

  /* emailjs.send('<YOUR_SERVICE_ID>','<YOUR_TEMPLATE_ID>', templateParams, '<YOUR_PUBLIC_KEY>')
        .then((response) => {
           console.log('SUCCESS!', response.status, response.text);
        }, (err) => {
           console.log('FAILED...', err);
        });*/



  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_8lx7bt6",
        "template_d4jofju",
        form.current,
        "user_UdXUyuJokIsW4SyplhL0Q"
      )
      .then(
        (result) => {

        },
        (error) => {}
      );
  };

  return (
    <div className="contattaci-wrapper" data-scroll-section>
      <div className="contattaci-media-container">
        <img src="/images/avatar1.jpeg" className="contattaci-media" />
      </div>
      <div className="contatti-container">
        <div className="contatto">
          <div className="contatto-icona">
            <BsFillTelephoneFill />
          </div>
          <div className="contatto-text">
              <p>{data.tel}</p>
          </div>
        </div>
        <div className="contatto">
          <div className="contatto-icona">
            <AiOutlineMail />
          </div>
          <div className="contatto-text">
            <p>{data.email}</p>
          </div>
        </div>
        <div className="contatto">
          <div className="contatto-icona">
            PI
          </div>
          <div className="contatto-text">
  <p>{data.piva}</p>
          </div>
        </div>
        <form onSubmit={()=>{}/* sendEmail */} ref={form} className="form-contatti">
          <label>Il tuo nome</label>
          <input type="text"  name="from_name" />
          <label>la tua email</label>
          <input
            type="email"
            name="user_email"
          />
          <label>Messaggio</label>
          <textarea  name="message" />
          <button type="submit">Invia</button>
        </form>
      </div>
    </div>
  );
}

export default Contattaci;
