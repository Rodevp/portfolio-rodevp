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
                            <div key={project.title} className={projectsClasses.vanilla_card}>
                                <div  className={projectsClasses.vanilla_img}>
                                    <img src={project.img} alt='project image' />
                                </div>
                                <h2 className={projectsClasses.vanilla_title_card}>
                                    {project.title}
                                </h2>
                                <section  className={projectsClasses.vanilla_desc}>
                                    {project.desc}
                                </section>
                                <section  className={projectsClasses.vanilla_links_content}>
                                    <a href={project.gitUrl} className={projectsClasses.vanilla_btn}>Ver Código</a>
                                    <a href={project.demoUrl} className={projectsClasses.vanilla_btn}>Ver Demo</a>
                                </section>
                            </div>
                        ))
                    }
                </section>
            </div>
            <div>
                <h2>
                   React Js ⚛️
                </h2>
                <section>
                    
                </section>
            </div>
        </section>
    </section>
  )
}

export default Projects