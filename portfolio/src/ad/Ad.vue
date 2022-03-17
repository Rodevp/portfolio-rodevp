<template>
  <section class='ad'>
        <p class='ad_paragraph'>
            <span class='left'>¡</span>
                Te ayudo a que tus ideas cobren vida con el código
            <span class='right'>!</span>
        </p>
    </section>
</template>

<style scoped>
    .ad {
    display:flex;
    align-items: center;
    justify-content: center;
    padding: 1.5em 0;
}

.ad_paragraph {
    font-size: 1.7rem;
    width: 90%;
    padding: 1em 0;
    font-family: var(--font);
    text-align: center;
    color: var(--white);
}

.left, .right {
    font-size: 2.5rem;
    color: var(--color-purple);
}

@media screen and (min-width: 720px) {
    .ad_paragraph {
        font-size: 1.8rem;
        padding: 1.5em 0;
    }

    .left, .right { 
        font-size: 2.8rem;
    }
}

@media screen and (min-width: 920px) {
    .ad_paragraph {
        font-size: 2rem;
        padding: 2em 0;
    }

    .left, .right { 
        font-size: 2.2rem;
    }

}

@media screen and (min-width: 1020px) {
    .ad_paragraph {
        font-size: 2.1rem;
        padding: 2.8em 0;
    }
}


@media screen and (min-width: 1020px) {
    .ad_paragraph {
        width: 80%;
    }
}
</style>
