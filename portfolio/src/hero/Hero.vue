<template>
   <section class='hero'  id='main'>
            <div class='hero__me'>
                <section class='img__content'>
                    <img src='../assets/me.jpg' alt='image person' />
                </section>
            </div>
            <section class='hero__description'>
                <h1 class='hero__title'>
                    <p class='hero__title_title'>
                        <span>R</span>ODRIGO
                    </p>
                    <p class='hero__description_paragraph'>
                        Desarrollador Backend
                        <span class='logo_hero_language'>
                            <img src='../assets/javascript.svg' alt='logo javascript' />
                        </span>
                    </p>
                    <p class='hero__description_sentence'>
                        🍦 Catador profesional de los helados de vainilla. 🍨
                    </p>
                    <div class='hero__network'>
                        <a 
                            href='https://www.linkedin.com/in/rodrigo-rodriguez-046712181/'
                            target='_blank'
                            class='hero__network_item'
                            >
                            <p>Linkedin</p>
                            <img src='../assets/linkedin.svg' alt='logo linkedin' />
                        </a>
                        <a 
                            href='https://github.com/Rodevp'
                            target='_blank'
                            class='hero__network_item'
                            >
                            <p>Github</p>
                            <img src='../assets/github.svg' alt='logo git' />
                        </a>
                        <a 
                            href='https://twitter.com/rodevp'
                            target='_blank'
                            class='hero__network_item'
                            >
                            <p>Twitter</p>
                            <img src='../assets/twitter.svg' alt='logo twitter' />
                        </a>
                    </div>
                </h1>
            </section>
        </section>
</template>

<style scoped>
.hero {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: var(--background);
    width: 100%;
}

.hero__me {
    display: none;
}

.hero__description {
    width: 90%;
    display: flex;
    flex-direction: column;
    align-items: center;
} 

.hero__title {
    width: 95%;
    padding: 2em 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    font-family: var(--font-title);
}

.hero__title_title {
    font-size: 2rem;
    display: flex;
    align-items: baseline;
    letter-spacing: 0.2em;
    color: var(--white);
}

.hero__title_title span {
    font-size: 5rem;
    color: var(--color-purple-border-card);
    animation: moveLetter 0.2s linear alternate infinite;
}

.hero__description_paragraph {
    font-size: 1rem;
    padding-bottom: 1em;
    display: flex;
    align-items: center;
    font-family: var(--font);
    color: var(--white);
}

.hero__description_paragraph span {
    padding-left: 1em;
}

.hero__description_sentence {
    font-size: 1rem;
    width: 100%;
    padding: 0.5rem 0;
    font-weight: 400;
    letter-spacing: 0.2em;
    margin-bottom: 1rem;
    text-align: center;
    font-family: var(--font);
    color: var(--white);
}

.hero__network {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
}

.hero__network_item {
    width: 60%;
    padding: 1em 0;
    font-size: 0.8rem;
    letter-spacing: 0.2em;
    margin-bottom: 0.5rem;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    text-decoration: none;
    font-family: var(--font);
    color: var(--white);
    background-color: var(--color-purple-ligth);
}

.hero__network_item:hover {
    background-color: var(--background);
}

.hero__network_item img {
    width: 30px;
    height: 20px;
}


@media screen and (min-width: 520px) {
    .hero__title_title {
        font-size: 3.5rem;
    }
    .hero__description_paragraph {
        font-size: 1.4rem;
    }
}

@media screen and (min-width: 620px) {
    
    .hero__title_title {
        font-size: 3.8rem;
    }

    .hero__description_paragraph {
        font-size: 1.6rem;
    }

    .hero__network_item  {
        font-size: 1.2rem;
    }

    .hero__description_sentence {
        font-size: 1.1rem;
        width: 80%;
    }

}

@media screen and (min-width: 720px) {
    
    .hero__title_title {
        font-size: 4rem;
    }

    .hero__title_title span {
        font-size: 5.8rem;
    }

    .hero__network_item  {
        width: 50%;
    }

}

@media screen and (min-width: 920px) {

    .hero {
        flex-direction: row;
    }

    .hero__me {
        display: inline-flex;
        justify-content: center;
        width: 35%;
        height: 300px;
        animation: floatingImage 2s linear alternate infinite;
    }
    
    .img__content {
        width: 220px;
        height: 220px;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 50%;
        background: linear-gradient(90deg, rgba(175,105,205,1) 32%, rgba(128,244,244,1) 100%);
    }

    .img__content img {
        width: 210px;
        height: 210px;
        border-radius: 50%;
        object-fit: contain;
    }

    .hero__description {
        width: 50%;
    }

    .hero__description_paragraph {
        font-size: 1.2rem;
    }
    
    .hero__title_title {
        font-size: 3rem;
    }

    .hero__title_title span {
        font-size: 5rem;
        animation: none;
        transform: rotate(10deg);
    }

    .logo_hero_language {
        height: 55px;
        width: 50px;
        margin-left: 0.5rem;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        transform-origin: center;
        animation: rotateLogo 0.6s linear alternate infinite;
    }

    .logo_hero_language img {
        width: 35px;
        height: 35px;
    }

    .hero__network {
        flex-direction: row;
    }

    .hero__network_item {
        width: 30%;
        flex-direction: column;
        padding: 0.5em 0;
    }

    @keyframes floatingImage {
        0% {
            transform: translateY(-10px);
        }
        100% {
            transform: translateY(0);
        }
    }

    @keyframes rotateLogo {
        0% {
            transform: rotate(-20deg);
        }
        50% {
            transform: rotate(0);
        }
        100% {
            transform: rotate(20deg);
        }
    }

}

@media screen and (min-width: 1020px) {
    
    .hero{
        padding: 2rem 0;
    }

    .hero__me {
        width: 35%;
    }

    .hero__description {
        width: 45%;
    }

    .hero__network_item img {
        width: 32px;
        height: 22px;
    }
}

@media screen and (min-width: 1040px) {
    .hero__me {
        width: 45%;
    }
    .hero__description {
        width: 45%;
    }

    .hero__network_item img {
        width: 35px;
        height: 25px;
    }
}

@keyframes moveLetter {
    0% {
        transform: translateY(-15px) rotate(10deg);
    }
    100% {
        transform: translateY(0) rotate(10deg);
    }    
}
</style>