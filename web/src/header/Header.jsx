import Nav from './nav/Nav.jsx'
import headerClasses from './css/header.module.css'
import logo from '../images/logo_rodevp.png'

function Header() {

  return (
    <header className={headerClasses.header}>
        <div className={headerClasses.content__img}>
            <img src={logo} alt="image of logo" />
        </div>
        <div className={headerClasses.content__nav} id='content_nav'>
            <Nav />
        </div>
    </header>
  )
}

export default Header