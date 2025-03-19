import React from 'react'
import { Link } from 'react-router-dom'
import burger from "../../assets/svg/burger.svg"
import "./Katalog.scss"
function Katalog() {
  return (
    <div className='katalog'>
        <button>
            <img src={burger} alt="" />
      <Link to="/catalog">Каталог</Link>
        </button>
    </div>
  )
}

export default Katalog
