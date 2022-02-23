import classesFooter from './footer.module.css'
import logoLinkedin from '../images/linkedin.png'
import logoTwitter from '../images/twitter.png'
import logoGit from '../images/git.png'

function Footer() {

    return (
        <footer className={classesFooter.footer} id='footer'>
            <div className={classesFooter.network}>
                <a 
                    href='https://www.linkedin.com/in/rodrigo-rodriguez-046712181'
                    target='_blank'
                    className={classesFooter.network_item}
                >
                    <img src={logoLinkedin} alt='logo linkedin' />
                </a>
                <a 
                    href='https://twitter.com/rodevp'
                    target='_blank'
                    className={classesFooter.network_item}
                >
                    <img src={logoTwitter} alt='logo twitter' />
                </a>
                <a
                    href='https://github.com/Rodevp'
                    target='_blank'
                    className={classesFooter.network_item}
                >
                    <img src={logoGit} alt='logo github' />
                </a>
            </div>
            <div className={classesFooter.copy_content}>
                <p>
                    Rodevp 2022
                </p>
            </div>
        </footer>
    )
}

export default Footer