import services from "../data/services.jsx";


export default function MyServices() {
  const servicesEL = services.map((service) => (
    <div className="service" key={service.id}>
      <h3>{service.service}</h3>
      <p>{service.description}</p>
    </div>
  ))

  return (
    <section className="my-services" id="services">
      <h2 className="section__title section__title--services">What I do</h2>
      <div className="services">{servicesEL}</div>
      <a href="#work" className="btn">My Work</a>
    </section>
  )
}
