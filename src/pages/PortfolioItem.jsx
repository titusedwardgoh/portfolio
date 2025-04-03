import {useParams} from "react-router-dom"
import projects from "../data/projects"
import React from "react"


export default function PortfolioItem() {

    const { id } = useParams()
    const project = projects.find(proj => proj.id === Number(id))

    React.useEffect(() => {
        window.scrollTo(0, 0);
      }, [])

    return(
        <>
        <section className="intro">
            <h1 className="section__title section__title--intro">
                The <strong>{project.title}</strong>
            </h1>
            <p className="section__subtitle section__subtitle--intro">{project.subtitle}</p>
            <img src= {project.img.src} alt="" className="port__img"/>
        </section> 
        
        <div className="portfolio-item-individual">
            <p>{project.intro}</p>
            <img className="port__img--secondary" src={project.img.src} alt=""/>
            <p>{project.description}</p>
        </div>
        </>
    )
}