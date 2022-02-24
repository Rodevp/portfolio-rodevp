import classesFooter from './footer.module.css'

function Footer() {

    return (
        <footer className={classesFooter.footer} id='footer'>
            <div className={classesFooter.network}>
            </div>
            <div className={classesFooter.copy_content}>
                <p>
                    Rodevp 2022
                </p>
            </div>
        </footer>
    )
}

export default Footer