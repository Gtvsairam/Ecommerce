import React from 'react'
import Head from './Head'
import Navbar from './Navbar'
import Search from './Search'
import './Header.css'

// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

// import { solid  } from '@fortawesome/fontawesome-svg-core/import.macro' 


const Header = ({CartItem}) => {
  return (
    <>
      <Head />
      <Search CartItem={CartItem} />
      <Navbar />
    </>
  )
}

export default Header