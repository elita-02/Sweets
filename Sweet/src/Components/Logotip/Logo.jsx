import React from 'react'
import logo from "../../assets/img/logo.png"
import "./Logotip.scss"
import { Link } from 'react-router-dom'

function Logo() {
  return (
    <div className='Logo'>
       <Link to="catalog">
         <img src={logo} alt="" />
      </Link>
    </div>
  )
}

export default Logo
