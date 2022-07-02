import React, { useRef, useEffect } from "react";
import { FaBeer } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";
import { BsFillTelephoneFill } from "react-icons/bs";
//service_8lx7bt6
import emailjs from "@emailjs/browser";
import { client } from "../prismic";
import Head from "next/head";
export async function getServerSideProps() {
  const data = await client.getByType("contattaci");

  return {
    props: {
      data: data.results[0].data,
    },
  };
}

function Contattaci({ data }) {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_98v50nf",
        "template_ivdcnf3",
        form.current,
        "R_XlTsqJtsWe1ZdZq"
      )
      .then(
        (result) => {
          console.log(result);
        },
        (error) => {
          console.log(error);
        }
      );
  };

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
            <div className="contatto-icona">PI</div>
            <div className="contatto-text">
              <p>{data.piva}</p>
            </div>
          </div>
          <form onSubmit={sendEmail} ref={form} className="form-contatti">
            <label>Il tuo nome</label>
            <input type="text" name="from_name" />
            <label>la tua email</label>
            <input type="email" name="user_email" />
            <label>Messaggio</label>
            <textarea name="message" />
            <button type="submit">Invia</button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Contattaci;
