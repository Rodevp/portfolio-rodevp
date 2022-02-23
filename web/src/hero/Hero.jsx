import heroClasses from './hero.module.css'
import logoJs from '../images/js.png'
import imgMe from '../images/me.jpg'

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
                        Desarrolador frontend
                        <span className={heroClasses.logo_hero_language}>
                            <img src={logoJs} alt='logo javascript' />
                        </span>
                    </p>
                </h1>
            </section>
        </section>
    )
}

export default Hero