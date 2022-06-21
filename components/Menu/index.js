import React,{useState, useRef, useEffect} from 'react'
import {HiOutlineMenuAlt3} from 'react-icons/hi'
import ClickAwayListener from '@material-ui/core/ClickAwayListener'
import {
LinkMenu,
Logo,
Nav,
MenuIcon
} from './Styled'
import {NavDropdown} from 'react-bootstrap'

function Menu({services}) {
const [isOpened,setIsOpened]=useState(false)
const [isFixed,setIsFixed]=useState(false)

const menuRef=useRef()

const Operation=()=>{
    if(menuRef.current){
      
        if(document.getElementById('root').getBoundingClientRect().top<0){
            setIsFixed(true)
        }
        else{
            setIsFixed(false)
        }
    }
    else {
        
    }

}
/*
window.addEventListener('wheel',(e)=>{
    Operation()

})
window.addEventListener('scroll',(e)=>{
    Operation()
    if(document.querySelector('.dropdown-menu') && document.querySelector('.dropdown-menu').classList.contains('show')){
        document.querySelector('.dropdown-menu').classList.remove('show')
    }
})*/





    return (
<ClickAwayListener onClickAway={()=>{
    setIsOpened(false)
}}>

<Nav 
isOpened={isOpened} 
isFixed={isFixed} 
ref={menuRef}

>

                <Logo href="/" onClick={()=>{
                        setIsOpened(false)
                    }}>
                    <h1>Logo</h1>
                </Logo>

            <ul className='nav-list-link'>
                <li>
                    <LinkMenu href="/" onClick={()=>{
                        setIsOpened(false)
                    }}>
                    <p className='nav-link'>Home</p>
                    </LinkMenu>
                </li>
                <li>
                    <LinkMenu href="/about" onClick={()=>{
                        setIsOpened(false)
                    }}>
                    <p className='nav-link'>Chi sono</p>
                    </LinkMenu>
                </li>
                    <li>
                    <NavDropdown
                            id="nav-dropdown-dark-example"
                            title="SERVIZI"
                            menuVariant="white"
                            color='white'
                            className='navdropdown'
            >
                <div className='inner-drop-down'>
                    {
/*                        services.body[0].items.map(serve=>(
                            <LinkMenu key={serve.servizio.id} to={`${serve.servizio.uid}`} onClick={()=>{
                                setIsOpened(false)
                                    if(document.querySelector('.dropdown-menu').classList.contains('show')){
                                        document.querySelector('.dropdown-menu').classList.remove('show')
                                    }
                    }}>
                                {serve.servizio.slug}
                            </LinkMenu>

                        ))*/
                    }
                    </div>
            </NavDropdown>
            </li>

                <li>
                    <LinkMenu href="/contact" onClick={()=>{
                        setIsOpened(false)
                    }}>
                    <p className='nav-link'>Contattami</p>
                    </LinkMenu>
                </li>

            </ul>


            <MenuIcon className='burger' onClick={()=>{
                setIsOpened(!isOpened)
            }}>
                <HiOutlineMenuAlt3 className='burger' />
            </MenuIcon>

        </Nav>

        </ClickAwayListener>
        )
}

export default Menu
