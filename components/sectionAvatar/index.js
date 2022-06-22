import React,{useEffect} from 'react'

function Index({image,...props}){


    return(
        
        <div className='avatar-home' data-scroll data-scroll-speed="-5">
              <img className='avatar-home-image'  src={'/images/avatar1.jpeg'}  />
        </div>
        
    )
}
export default Index