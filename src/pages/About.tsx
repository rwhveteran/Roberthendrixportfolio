import './About.css'

function About() {
  return (
    <div className="about">
      <section className="about-hero">
        <div className="container">
          <h1>About Robert Hendrix</h1>
          <p className="intro">Researcher, Developer, and Innovator</p>
        </div>
      </section>

      <section className="about-content">
        <div className="container">
          <div className="about-grid">
            <div className="about-text">
              <h2>Welcome</h2>
              <p>
                I'm a passionate researcher with expertise in multiple domains. This portfolio showcases my research projects, publications, and contributions to the scientific community.
              </p>
              <p>
                With a background in [Your Field], I focus on [Your Research Focus]. My work aims to [Your Research Goals].
              </p>
            </div>
            <div className="about-highlights">
              <h2>Highlights</h2>
              <ul className="highlights-list">
                <li>✓ [Achievement or Certification]</li>
                <li>✓ [Achievement or Certification]</li>
                <li>✓ [Achievement or Certification]</li>
                <li>✓ [Achievement or Certification]</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="expertise">
        <div className="container">
          <h2>Expertise</h2>
          <div className="skills-grid">
            <div className="skill-item">
              <h3>Research</h3>
              <p>Specialized research methodology and data analysis</p>
            </div>
            <div className="skill-item">
              <h3>Technology</h3>
              <p>Advanced tools and technologies in my field</p>
            </div>
            <div className="skill-item">
              <h3>Collaboration</h3>
              <p>Working with teams and institutions</p>
            </div>
            <div className="skill-item">
              <h3>Publications</h3>
              <p>Peer-reviewed publications and presentations</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default About
