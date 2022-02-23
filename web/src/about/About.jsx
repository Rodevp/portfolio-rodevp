import aboutClasses from './about.module.css'
import imgReact from '../images/logo_react.svg'


function About() {
  return (
    <section className={aboutClasses.about} id='about'>
        <div className={aboutClasses.content__image}>
            <img src={imgReact} alt='image logo of react' />
        </div>
        <section className={aboutClasses.about__description}>
            <h2 className={aboutClasses.about__title}>Sobre Mi 👾</h2>
            <p className={aboutClasses.about__paragraph}>
                Soy un chico de 21 años que lleva en este mundo casi 2 años,
                me he dedicado aprender programación a través de libros, documentación,
                alguno que otro video y de 2 cracks como 
                <a 
                  target='_blank'
                  href="https://www.twitch.tv/search?term=goncypozzo"> Goncy Pozzo</a> y 
                <a 
                  target='_blank'
                  href="https://www.twitch.tv/midudev"> Midudev</a>.
                También soy aficionado a las matematicas🧮, boxeo 🥊 y a programar,
                actualmente programo con Javascript y utilizo React Js ⚛️. 
                Mis intereses no paran, quiero aprender lenguajes como python o GOlang.
                ¡Ojalá podamos trabajar juntos!.
            </p>
        </section>
    </section>
  ) 
}

export default About