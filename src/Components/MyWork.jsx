import projects from "../data/projects.jsx";
import React from "react"
import {Link} from "react-router-dom"

const MyWork = React.forwardRef((props, ref) => {
  const portfolioEL = projects.map((proj) => {
    return (
      <Link to={`/mywork/${proj.id}`} key={proj.id} className="portfolio__item">
        <img
          src={proj.img.src}
          alt={`Portfolio Item ${proj.id}`}
          className="portfolio__img"
        />
        </Link>
    )
  })

  return (
    <section className="my-work" id="work" ref={ref}>
      <h2 className="section__title">My work</h2>
      <p className="section__subtitle" ></p>
      <div className="portfolio" >{portfolioEL}</div>
    </section>
  )
})

MyWork.displayName = "MyWork"

export default MyWork;
