import Card from './card/Card'
import projectsClasses from './project.module.css'
import logoHtml from '../images/html.svg'
import logoCss from '../images/css.svg'
import logoJS from '../images/javascript.svg'
import logoReact from '../images/logo_react.svg'
import { vanilla, react } from './data.js'

function Projects() {

    const vanillaProjects = [...vanilla]

    return (
        <section className={projectsClasses.projects} id='projects'>
            <h2 className={projectsClasses.projects__title}>
                Proyectos
            </h2>
            <section className={projectsClasses.projects__wrapper}>
                <div className={projectsClasses.projects__vanilla}>
                    <h2 className={projectsClasses.projects__vanilla_title}>
                        <p>Html <span className={projectsClasses.logo_language}>
                                <img src={logoHtml} alt='logo html' /></span>
                        </p>
                        <p>Css <span className={projectsClasses.logo_language}>
                            <img src={logoCss} alt='logo css' /></span>
                        </p>
                        <p>Javascript <span className={projectsClasses.logo_language}>
                            <img src={logoJS} alt='logo js' /></span>
                        </p>
                    </h2>
                    <section className={projectsClasses.projects__js}>
                        {
                            vanillaProjects.map(project => (
                                <Card
                                    key={project.title}
                                    title={project.title}
                                    img={project.img}
                                    gitUrl={project.gitUrl}
                                    demoUrl={project.demoUrl}
                                    desc={project.desc}
                                />
                            ))
                        }
                    </section>
                </div>
                <div className={projectsClasses.projects__react}>
                    <h2 className={projectsClasses.projects__react_title} >
                        React Js 
                        <span className={projectsClasses.logo_language_react}>
                            <img src={logoReact} alt='logo react' />
                        </span>
                    </h2>
                    <section className={projectsClasses.projects__react}>
                        {
                            react.map(project => (
                                <Card
                                    key={project.title}
                                    title={project.title}
                                    img={project.img}
                                    gitUrl={project.gitUrl}
                                    demoUrl={project.demoUrl}
                                    desc={project.desc}
                                />
                            ))
                        }
                    </section>
                </div>
            </section>
        </section>
    )
}

export default Projects