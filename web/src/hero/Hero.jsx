import heroClasses from './hero.module.css'
import logoJs from '../images/javascript.svg'
import imgMe from '../images/me.jpg'
import imgLinkedin from '../images/linkedin.svg'
import imgGit from '../images/github.svg'
import imgTwitter from '../images/twitter.svg'


function Hero() {

    return (
        <section className={heroClasses.hero}  id='main'>
            <div className={heroClasses.hero__me}>
                <section className={heroClasses.img__content}>
                    <img src={imgMe} alt='image person' />
                </section>
            </div>
            <section className={heroClasses.hero__description}>
                <h1 className={heroClasses.hero__title}>
                    <p className={heroClasses.hero__title_title}>
                        <span>R</span>ODRIGO
                    </p>
                    <p className={heroClasses.hero__description_paragraph}>
                        Desarrollador frontend
                        <span className={heroClasses.logo_hero_language}>
                            <img src={logoJs} alt='logo javascript' />
                        </span>
                    </p>
                    <p className={heroClasses.hero__description_sentence}>
                        🍦 Catador profesional de los helados de vainilla. 🍨
                    </p>
                    <div className={heroClasses.hero__network}>
                        <a 
                            href='https://www.linkedin.com/in/rodrigo-rodriguez-046712181/'
                            target='_blank'
                            className={heroClasses.hero__network_item}
                            >
                            <p>Linkedin</p>
                            <img src={imgLinkedin} alt='logo linkedin' />
                        </a>
                        <a 
                            href='https://github.com/Rodevp'
                            target='_blank'
                            className={heroClasses.hero__network_item}
                            >
                            <p>Github</p>
                            <img src={imgGit} alt='logo git' />
                        </a>
                        <a 
                            href='https://twitter.com/rodevp'
                            target='_blank'
                            className={heroClasses.hero__network_item}
                            >
                            <p>Twitter</p>
                            <img src={imgTwitter} alt='logo twitter' />
                        </a>
                    </div>
                </h1>
            </section>
        </section>
    )
}

export default Hero