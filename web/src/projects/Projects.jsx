import Card from './card/Card'
import projectsClasses from './project.module.css'
import { vanilla } from './data.js'

function Projects() {

    const vanillaProjects = [...vanilla]

    return (
        <section className={projectsClasses.projects}>
            <h2 className={projectsClasses.projects__title}>
                Experiencia
            </h2>
            <section className={projectsClasses.projects__wrapper}>
                <div className={projectsClasses.projects__vanilla}>
                    <h2 className={projectsClasses.projects__vanilla_title}>
                        <p>Html</p>
                        <p>Css</p>
                        <p>Javascript</p>
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
                        React Js ⚛️
                    </h2>
                    <section className={projectsClasses.projects__react}>
                        <Card
                            title={'Prueba'}
                            img={'ye ye'}
                            gitUrl={'a'}
                            demoUrl={'a'}
                            desc={'a'}
                        />
                    </section>
                </div>
            </section>
        </section>
    )
}

export default Projects