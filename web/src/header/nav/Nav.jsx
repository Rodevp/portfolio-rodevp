import { useEffect } from 'react'
import navClasses from '../css/nav.module.css'
import menuHamburgerImage from '../../images/menu.png'

function Nav() {

    useEffect(() => {

        const menuHamburger = document.getElementById('hamburguer')
    
        const menu = document.getElementById('menu')
    
        menuHamburger.addEventListener('click', e => {
            menu.classList.toggle(navClasses.open__menu)
            console.log(menu)
            console.log('click')
    
        })
    
    }, [])

  return (
    <nav className={navClasses.nav}>
        <img src={menuHamburgerImage} alt='image of menu' id='hamburguer' width='30px' />
        <ul className={navClasses.menu} id='menu'>
            <li className={navClasses.menu__item}><a href='#main'>Inicio</a></li>
            <li className={navClasses.menu__item}><a href='#about'>Sobre mi </a></li>
            <li className={navClasses.menu__item}><a href='#projects'>Proyectos </a></li>
            <li className={navClasses.menu__item}><a href='#footer'>Contacto</a></li>
        </ul>
    </nav>
  )
}

export default Nav