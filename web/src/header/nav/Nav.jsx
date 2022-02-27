import { useEffect } from 'react'
import navClasses from '../css/nav.module.css'

function Nav() {

    let menuItems;
    let hamburguer;

    useEffect(() => {

        const menuHamburger = document.getElementById('hamburguer')
        const menu = document.getElementById('menu')
        menuItems = menu
        hamburguer = menuHamburger
    
        menuHamburger.addEventListener('click', e => {
            menu.classList.toggle(navClasses.open__menu)
            menuHamburger.classList.toggle(navClasses.hamburguer__menu__close)
        })
    
    }, [])

    const closeMenu = e => {
        menuItems.classList.toggle(navClasses.open__menu)
        hamburguer.classList.toggle(navClasses.hamburguer__menu__close)
    }

  return (
    <nav className={navClasses.nav}>
        <div  id='hamburguer' className={navClasses.hamburguer__menu} >
        </div>
        <ul className={navClasses.menu} id='menu'>
            <li className={navClasses.menu__item}><a href='#main' onClick={closeMenu}>Inicio</a></li>
            <li className={navClasses.menu__item}><a href='#about' onClick={closeMenu}>Sobre mi </a></li>
            <li className={navClasses.menu__item}><a href='#projects' onClick={closeMenu}>Proyectos </a></li>
            <li className={navClasses.menu__item}><a href='#footer' onClick={closeMenu} >Contacto</a></li>
        </ul>
    </nav>
  )
}

export default Nav