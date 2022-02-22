import cardClasses from './card.module.css'


function Card({img, title, desc, gitUrl, demoUrl}) {
    return (
        <div className={cardClasses.card}>
            <div className={cardClasses.card_img}>
                <img src={img} alt='project image' />
            </div>
            <h2 className={cardClasses.card_title_card}>
                {title}
            </h2>
            <section className={cardClasses.card_desc}>
                {desc}
            </section>
            <section className={cardClasses.card_links_content}>
                <a
                    href={gitUrl}
                    className={cardClasses.card_btn}
                >
                    Ver Código
                </a>
                <a
                    href={demoUrl}
                    className={cardClasses.card_btn}
                >
                    Ver Demo
                </a>
            </section>
        </div>
    )
}

export default Card