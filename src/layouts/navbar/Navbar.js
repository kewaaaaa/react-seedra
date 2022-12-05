import React from 'react'
import style from './navbar.module.scss'
import {Link} from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className={style.navbar}>
      <div className={`${style.logo} container`}>
        <img src="./assets/logo/Logo.png" alt="" />
      </div>
      <ul>
        <li>
          <Link>Programs</Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar