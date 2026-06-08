import { Link } from 'react-router-dom'
import './Home.css'

function Home() {
  return (
    <div className="home">
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <h1>Robert Hendrix</h1>
            <p className="hero-subtitle">Research Projects & Portfolio</p>
            <p className="hero-description">
              Welcome to my research portfolio. Explore my latest projects, publications, and contributions to the field of research.
            </p>
            <div className="hero-buttons">
              <Link to="/projects" className="btn-primary">View Projects</Link>
              <Link to="/about" className="btn-secondary">Learn More</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="featured-projects">
        <div className="container">
          <h2>Featured Research</h2>
          <div className="projects-grid">
            <div className="project-card">
              <div className="project-header">Project One</div>
              <p>Description of your first research project goes here.</p>
              <Link to="/projects">Learn More →</Link>
            </div>
            <div className="project-card">
              <div className="project-header">Project Two</div>
              <p>Description of your second research project goes here.</p>
              <Link to="/projects">Learn More →</Link>
            </div>
            <div className="project-card">
              <div className="project-header">Project Three</div>
              <p>Description of your third research project goes here.</p>
              <Link to="/projects">Learn More →</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="cta">
        <div className="container">
          <h2>Ready to Collaborate?</h2>
          <p>Get in touch to discuss research opportunities and projects.</p>
          <Link to="/contact" className="btn-primary">Contact Me</Link>
        </div>
      </section>
    </div>
  )
}

export default Home
