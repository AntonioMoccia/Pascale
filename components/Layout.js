import React, { useEffect, useRef, useState } from "react";
import { useRouter } from "next/router";
import Navigation from "./Navigation";
import gsap from "gsap";
import useResizer from "../hooks/useResizer";
import { LocomotiveScrollProvider } from "react-locomotive-scroll";
import Cursor from "./cursor";
import Footer from "./Footer";
import Whatsapp from "./Whatsapp";

function Layout({ children }) {
  const containerRef = useRef(null);
  const { asPath, events } = useRouter();
  const [scroll, setScroll] = useState(true);
  const [isFixed, setIsFixed] = useState(true);
  const { isMobile } = useResizer();
  const [loco, setLoco] = useState(null);

  /* useEffect(()=>{
  if(isMobile){
    document.querySelector('.cursor').style.display='none'
  }else{
    document.querySelector('.cursor').style.display=''
    
  }
},[isMobile]) */
  useEffect(() => {
    if (typeof window == "undefined") return;
    window.addEventListener("mousemove", (e) => {
      gsap.to(".cursor", {
        y: e.clientY,
        x: e.clientX,
      });
    });

    events.on("routeChangeStart", () => {
      if (window.innerWidth > 1023) {
        document.body.style.opacity = 0;
      } else {
      }

      /*      gsap.to('body',{
        opacity:0
      }) */
    });
    events.on("routeChangeComplete", () => {
      if (window.innerWidth > 1023) {
        gsap.to("body", {
          alpha: 1,
          duration: 1.5,
          delay: 0.5,
        });
      } else {
      }
    });
  }, []);

  return (
    <>
      <main>
        <Cursor />
        <Navigation />
        <div ref={containerRef}>{children}</div>
        <Footer />
      </main>
    </>
  );
}

export default Layout;

/* 
const InitScrolling=()=>{
  let scrollinit 
  import('locomotive-scroll').then(LocomotiveModule=>{
    const LocomotiveScroll = LocomotiveModule.default
    scrollinit = new LocomotiveScroll({
      el:containerRef.current,
      smooth:true,
      tablet: { smooth: true },
      smartphone: { smooth: true },
      lerp:0.1,
      multiplier:1,
      getPosition:true,
      resetNativeScroll:true
    })
    scrollinit.on('scroll',(istance)=>{
     // let nav = document.querySelector('.navigation-wrapper')
     const inView = document.querySelectorAll(".is-inview")
   inView.forEach(el=>{
  //     console.log(el.classList.contains("section-footer-text"));
     })
      if(window.innerWidth>1023){
       // console.log(Math.round(istance.scroll.y));
        if(Math.round(istance.scroll.y)===0){
          
            gsap.to(".navigation-wrapper",{
              marginTop:'0%',
              width:"100%",
              marginLeft:"0%",
            
            })
        }
        else{
          gsap.to(".navigation-wrapper",{
            marginTop:'4%',
            width:"90%",
            marginLeft:"5%"
          })
        }
      }else{

      }
    })
  })
  return ()=>{
    if(scrollinit) {
      setLoco(scrollinit)
      scrollinit.scrollTo(0,{duration:0})
      scrollinit.destroy()
  
      setScroll(false)
    }
  }
} */
