import React, { useEffect } from 'react'
import {useLocomotiveScroll} from 'react-locomotive-scroll'
function Section({children}) {
    const {scroll} = useLocomotiveScroll()
    useEffect(()=>{
       // console.log(scroll);
    },[scroll])
  return (
    <div className='section' >{children}</div>
  )
}

export default Section