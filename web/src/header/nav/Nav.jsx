import { useEffect } from 'react'
import navClasses from '../css/nav.module.css'
import menuHamburgerImage from '../../images/menu.png'

function Nav() {

    useEffect(() => {
        const menuHamburger = document.getElementById('hamburguer')
        const menu = document.getElementById('menu')

        menuHamburger.addEventListener('click', e => {
            menu.classList.toggle(navClasses.open__menu)
        })

    }, [])

  return (
    <nav className={navClasses.nav}>
        <img src={menuHamburgerImage} alt='image of menu' id='hamburguer' />
        <ul className={navClasses.menu} id='menu'>
            <li className={navClasses.menu__item}>Inicio</li>
            <li className={navClasses.menu__item}>Sobre mi</li>
            <li className={navClasses.menu__item}>Proyectos</li>
            <li className={navClasses.menu__item}>Contacto</li>
        </ul>
    </nav>
  )
}

export default Nav