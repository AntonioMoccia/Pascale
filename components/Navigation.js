import React, { useState, useEffect } from "react";
import Link from "next/link";
import { HiMenuAlt4 } from "react-icons/hi";
import gsap from "gsap";
import { useRouter } from "next/router";
import MenuItem from "./MenuItem";
import useResizer from '../hooks/useResizer'
import {useLocomotiveScroll} from 'react-locomotive-scroll'
import NavLink from "./NavLink";

function Navigation() {
  const [open, setOpen] = useState(false);
  const scroll = useLocomotiveScroll()
 const {isMobile} = useResizer()  
  const router = useRouter();
  const handleToggleMenu = () => {
    setOpen(!open);
  };
  useEffect(()=>{
    if(window.innerWidth<1023){
      setOpen(false)
      document.querySelector(".navigation-content").style.transform='translateY(-100%)'
      const items=document.querySelectorAll('.navigation-item')
      items.forEach(item=>{
        const word=item.children[0].innerText.split('')
        var html=''
        word.forEach(letter=>{
          
           if(letter==" "){
            html+=`<span style="margin-left:10px;" class="letter-mobile-menu">${letter}</span>`
           }else{
            html+=`<span class="letter-mobile-menu">${letter}</span>`
           }
        })
        item.children[0].innerHTML=html
      })
    }else{
      setOpen(false)
      document.querySelector(".navigation-content").style.transform='translateY(0%)'
    }
  },[isMobile])

  useEffect(()=>{
    const items = document.querySelectorAll(".navigation-item")
    items.forEach(item=>{
      item.addEventListener("click",()=>{
        setOpen(false)
      })
    })
  },[])

   useEffect(() => {   
    const tl = gsap.timeline()
    if(window.innerWidth<1024){
      if (open) {
        tl.to(".navigation-content", {
          y: '0%',
          borderBottomLeftRadius:'0%',
          borderBottomRightRadius:'0%'
        });
        tl.to('.letter-mobile-menu',{
          y:'0%',
          stagger:0.02
        })
        tl.to('.burger',{
          color:"black"
        },"-1")
      }else{
        tl.to('.letter-mobile-menu',{
          y:'100%',
          stagger:0.02
        })
        tl.to(".navigation-content", {
          y: '-100%',
          borderBottomLeftRadius:'5%',
          borderBottomRightRadius:'5%'
        },"1");
        tl.to('.burger',{
          color:"white"
        },"-1")
        
      }
    }
  }, [open]); 
  


  return (
    <>
      <div className="navigation-wrapper">
        <div className="logo">
          <NavLink href={'/'}>
            <img alt="logo" className="logo-img" src={"/PascaleLogoBianco.png"} />
          </NavLink>
          
        </div>
        <div className="navigation-content">
          <ul className="navigation-list">
            <NavLink href="/">
              <li className="navigation-item">
                <MenuItem> Home</MenuItem>
              </li>
            </NavLink>
            <NavLink href="/chi-siamo" >
              <li className="navigation-item">
                <MenuItem>Chi siamo</MenuItem>
              </li>
            </NavLink>
            <NavLink href="/prodotti" >
              <li className="navigation-item">
                <MenuItem>Prodotti</MenuItem>
              </li>
            </NavLink>
            <NavLink href="/contattaci" >
              <li className="navigation-item">
                <MenuItem>Contattaci</MenuItem>
              </li>
            </NavLink>
          </ul>
        </div>
        <div className="burger" onClick={handleToggleMenu}>
          <HiMenuAlt4 />
        </div>
      </div>
    </>
  );
}

export default Navigation;
