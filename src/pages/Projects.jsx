import projects from "./data/projects"

function Projects() {
  return (
    <>
    <h1>Projects</h1>
    <section>
      {projects.map((project, index) => 
        <li key={index}>
          {project.title}
          {project.image}
          <button>Check it out</button>
        </li>
      )}
    </section>
    </>
  )
}

export default Projects