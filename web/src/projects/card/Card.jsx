import cardClasses from './card.module.css'


function Card({title, desc, gitUrl, demoUrl}) {
    return (
        <div className={cardClasses.card}>
            <h3 className={cardClasses.card_title_card}>
                {title}
            </h3>
            <section className={cardClasses.card_desc}>
                {desc}
            </section>
            <section className={cardClasses.card_links_content}>
                <a
                    href={gitUrl}
                    target='_blank'
                    className={cardClasses.card_btn}
                >
                    Ver Código
                </a>
                <a
                    href={demoUrl}
                    target='_blank'
                    className={cardClasses.card_btn}
                >
                    Ver Demo
                </a>
            </section>
        </div>
    )
}

export default Card