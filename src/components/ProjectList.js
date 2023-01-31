import projects from "./data/projects"

function ProjectList() {
  return (
    <>
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

export default ProjectList