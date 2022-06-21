import React, { useEffect } from "react";
import Link from "next/link";
import Section from "../components/Section";
import Image from 'next/image'
import gsap from 'gsap'

function about() {
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
    <div className="chi-siamo-wrapper">
        <div className="chi-siamo-image" data-scroll-section data-scroll>
    <img src={"/images/avatar1.jpeg"} className="chi-siamo-img"  />
        </div>

      <div className="chi-siamo-text" data-scroll-section data-scroll>
        Dolor excepteur elit velit id voluptate labore tempor ut adipisicing.
        Amet sit dolore in amet anim duis eiusmod non qui ipsum do cillum.
        Ullamco reprehenderit incididunt deserunt mollit deserunt eiusmod est
        cupidatat exercitation duis sit culpa culpa ex. Exercitation pariatur
        elit cillum tempor cupidatat ad eu labore aliqua pariatur. Aliquip
        commodo est sint Lorem. In elit proident eu anim eu ad labore fugiat
        cillum fugiat consectetur aute ad aute. Id consequat elit labore
        occaecat laborum fugiat nulla cillum enim. Tempor irure nostrud aliqua
        id labore aute id cupidatat aute cillum Lorem cupidatat deserunt cillum.
        Deserunt cillum enim cillum sunt pariatur. Sint pariatur pariatur
        commodo tempor occaecat est aliqua. Duis commodo dolore duis id
        voluptate labore ullamco commodo anim irure aliqua ullamco consequat
        aute. Voluptate consequat magna quis ipsum aliqua adipisicing nostrud
        dolor ad ut fugiat velit cupidatat. Consectetur mollit exercitation
        veniam ex sunt. Ad incididunt deserunt ea minim deserunt tempor do.
        Commodo cupidatat do duis labore aliquip est tempor elit eu.
      </div>
    </div>
  );
}

export default about;
