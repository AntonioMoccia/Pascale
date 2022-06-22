import React,{useEffect} from 'react'
import Image from 'next/image'
function Index({image,...props}){


    return(
        
        <div className='avatar-home' data-scroll data-scroll-speed="-1">
              <Image className='avatar-home-image' width={500} height={300} src={'/images/avatar1.jpeg'}  />
        </div>
        
    )
}
export default Index