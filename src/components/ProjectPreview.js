import projects from "../pages/data/projects";

function ProjectPreview() {
  return (
    <>
      <section>
        {projects.map((project, index) => 
          <li key={index}>
            {project.title}
            {project.image}
            <button>View Project</button>
          </li>
        )}
      </section>
    </>
  )
}

export default ProjectPreview