import React from 'react'
import { Link,useNavigate } from 'react-router-dom'
import Logo from '../Logotip/Logo'
import Katalog from '../Catalog/Katalog'
import Profil from '../Profile/Profil'
import "./Header.scss"
function Header() {
  return (
    <div className='header container'>
      <Logo/>
          <Katalog/>
      <nav>
        <ul>
          <li><Link to="/wholesale">Оптовые продажи</Link></li>
          <li><Link to="/reteil">Продажи в рознице</Link></li>
          <li><Link to="/contacts">Контакты</Link></li>
          <li><Link to="/jobs">Вакансии</Link></li>
          <li><Link to="/reviews">Отзывы</Link></li>
        </ul>
      </nav>
          <Profil/>
    </div>
  )
}

export default Header
