import React from 'react'
import {FaFacebook,FaInstagram,FaYoutube} from 'react-icons/fa'
function Footer() {
    return (
        <div className='footer-wrapper' data-scroll-section>
            <div className='social'>
                <FaFacebook className='facebook' />
                <FaInstagram className='instagram' />
            </div>
        </div>
    )
}

export default Footer
