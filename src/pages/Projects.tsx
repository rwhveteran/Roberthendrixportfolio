import './Projects.css'

interface Project {
  id: number
  title: string
  description: string
  tags: string[]
  date: string
  link?: string
}

const projects: Project[] = [
  {
    id: 1,
    title: 'Research Project Alpha',
    description: 'Description of your first research project. Include key findings, methodologies, and impact.',
    tags: ['Research', 'Technology', 'Innovation'],
    date: '2024',
    link: '#',
  },
  {
    id: 2,
    title: 'Research Project Beta',
    description: 'Description of your second research project. Highlight the significance and outcomes.',
    tags: ['Analysis', 'Data Science', 'Research'],
    date: '2024',
    link: '#',
  },
  {
    id: 3,
    title: 'Research Project Gamma',
    description: 'Description of your third research project. Explain the methodology and conclusions.',
    tags: ['Research', 'Collaboration', 'Publication'],
    date: '2023',
    link: '#',
  },
  {
    id: 4,
    title: 'Research Project Delta',
    description: 'Description of your fourth research project. Detail the research question and findings.',
    tags: ['Data', 'Technology', 'Impact'],
    date: '2023',
    link: '#',
  },
]

function Projects() {
  return (
    <div className="projects">
      <section className="projects-header">
        <div className="container">
          <h1>Research Projects</h1>
          <p>Explore my research work and contributions</p>
        </div>
      </section>

      <section className="projects-list">
        <div className="container">
          <div className="projects-grid">
            {projects.map((project) => (
              <div key={project.id} className="project-item">
                <div className="project-date">{project.date}</div>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="project-tags">
                  {project.tags.map((tag) => (
                    <span key={tag} className="tag">{tag}</span>
                  ))}
                </div>
                {project.link && (
                  <a href={project.link} className="project-link">Read More →</a>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Projects
