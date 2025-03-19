import React from 'react'
import { Link } from 'react-router-dom'
import man from "../../assets/svg/man.svg"
import "./Profil.scss"
function Profil() {
  return (
    <div className='prof'>
      <button>
        <img src={man} alt="" />
        <Link to="/profile">Личный кабинет</Link>
      </button>
    </div>
  )
}

export default Profil
