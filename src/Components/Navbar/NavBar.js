import React from 'react'
import './NavBar.css'
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineSearch, AiOutlineShoppingCart, AiOutlineUser } from "react-icons/ai";
function NavBar() {
  return (
      <div className='Navbar'>
          <GiHamburgerMenu className='icon' />
          <div>
              <h1 className='NavBar-Heading'>BALACLAVA</h1>
          </div>
          <div>
              <AiOutlineSearch className='icon' />
              <AiOutlineUser className='icon' />
              <AiOutlineShoppingCart className='icon' />
              
          </div>

    </div>
  )
}

export default NavBar