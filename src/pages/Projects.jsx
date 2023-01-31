import projects from "./data/projects"

function Projects() {
  return (
    <>
    <section>
      {projects.map((project, index) => 
        <li key={index}>
          {project.title}
          {/* {project.image} */}
        </li>
      )}
    </section>
    </>
  )
}

export default Projects