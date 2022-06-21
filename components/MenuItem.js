import React, { useEffect, useState } from 'react'
import RotatingText from './RotatingText'
import useResizer from '../hooks/useResizer'
function MenuItem({children}) {
 const {isMobile} = useResizer()  
  return (
    <>
        {
            isMobile ? (
                <span>{children}</span>
            ):(
                <RotatingText>{children}</RotatingText>
            )
        }
    </>
)
}

export default MenuItem