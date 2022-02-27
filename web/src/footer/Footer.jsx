import classesFooter from './footer.module.css'

function Footer() {

    return (
        <footer className={classesFooter.footer} id='footer'>
            <p className={classesFooter.other}>
                Hecho con react js, Con mucho 💙 para el 🌎
            </p>
            <div className={classesFooter.copy_content}>
                <p>
                    Rodevp 2022
                </p>
            </div>
        </footer>
    )
}

export default Footer