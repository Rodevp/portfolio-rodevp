import adClasses from './ad.module.css'

function Ad() {
  return (
    <section className={adClasses.ad}>
        <p className={adClasses.ad_paragraph}>
            <span className={adClasses.left}>¡</span>
                Te ayudo a que tus ideas cobren vida con el código
            <span className={adClasses.right}>!</span>
        </p>
    </section>
  )
}

export default Ad