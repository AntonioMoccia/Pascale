import React from 'react'
import Link from "next/link";

function NavLink({href,children}) {
  return (
    <Link className="navigation-link" href={href} passHref>
            <a>
            {children}
            </a>
    </Link>
  )
}

export default NavLink