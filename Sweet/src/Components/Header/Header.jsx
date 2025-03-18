import React from 'react'
import { Link,useNavigate } from 'react-router-dom'

function Header() {
  return (
    <div>
      header
      <nav>
        <ul>
          <li><Link to="/catalog">Каталог</Link></li>
          <li><Link to="/wholesale">Оптовые продажи</Link></li>
          <li><Link to="/reteil">Продажи в рознице</Link></li>
          <li><Link to="/contacts">Контакты</Link></li>
          <li><Link to="/jobs">Вакансии</Link></li>
          <li><Link to="/reviews">Отзывы</Link></li>
          <li><Link to="/profile">Личный кабинет</Link></li>
        </ul>
      </nav>
    </div>
  )
}

export default Header
