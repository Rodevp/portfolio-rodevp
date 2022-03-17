<template>
  <nav className="nav">
        <div  id='hamburguer' className="hamburguer__menu" >    
        </div>
        <ul className="menu" id='menu'>
            <li className="menu__item"><a href='#main'  @click="closeMenu">Inicio</a></li>
            <li className="menu__item"><a href='#about' @click="closeMenu">Sobre mi </a></li>
            <li className="menu__item"><a href='#projects' @click="closeMenu">Proyectos </a></li>
            <li className="menu__item"><a href='#footer'  @click="closeMenu">Contacto</a></li>
        </ul>
    </nav>
</template>

<script>

export default {

    methods: {
        closeMenu() {
            const hamburguer = document.getElementById('hamburguer')
            const menu = document.getElementById('menu')
            menu.classList.toggle('open__menu')
            hamburguer.classList.toggle('hamburguer__menu__close')
        }
    },

    async mounted() {

        const menuHamburger = document.getElementById('hamburguer')
        const menu = document.getElementById('menu')
    
        menuHamburger.addEventListener('click', e => {
            menu.classList.toggle('open__menu')
            menuHamburger.classList.toggle('hamburguer__menu__close')
        })

    }

}
</script>

<style scoped>
.nav {
    display: flex;
    flex-direction: column;
    padding-top: 1em;
}

.hamburguer__menu {
    width: 30px;
    height: 30px;
    align-self: flex-end;
    position: relative;
    cursor: pointer;
    background-image: url('../assets/menu.png');
}

.hamburguer__menu__close {
    width: 32px;
    height: 32px;
    background-repeat: no-repeat;
    object-fit: contain;
    background-image: url('../assets/marca-x.png')
}

.menu {
    width: 42%;
    display: flex;
    flex-direction: column;
    position: absolute;
    opacity: 0;
    top: 3rem;
    left: 55%;
    align-items: center;
    background-color:  var(--color-cyan);
    overflow: hidden;
    margin-top: 2rem;
}

.open__menu {
    opacity: 1;
    transition: opacity 0.25s linear;
}

.menu__item {
    width: 90%;
    padding: 1em 0;
    margin-left: 1rem;
    font-family: var(--font);
    font-size: 1rem;
    list-style: none;
    color: var(--color-blue);
    cursor: pointer;
    transition: color 1ms;
}

.menu__item a {
    text-decoration: none;
    color: inherit;
    font-family: inherit;
}


@media screen and (min-width: 770px) {

    .nav {
        display: flex;
        align-items: center;
        padding: 0;
        width: 80%;
    }
    
    .hamburguer__menu {
        display: none;
    }
    
    .menu {
        left: 0;
        opacity: 1;
        border-top-left-radius: 0;
        border-bottom-left-radius: 0;
        border-bottom-right-radius: 0;
        transform: none;
        width: 100%;
        height: 100%;
        margin-top: 0;
        top: 0;
        flex-direction: row;
        position: relative; 
        background: none;
    }
    
    .menu__item {
        margin: 0;
        padding: 1em 0;
        font-weight: 400;
        text-align: center;
        font-family: var(--font-title);
        color: var(--color-purple-btn);
    }

}

@media screen and (min-width: 920px) {
    .menu__item {
        font-size: 1.1rem;
    }
}
</style>