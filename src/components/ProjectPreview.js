import projects from "../pages/data/projects";

function ProjectPreview() {
  return (
    <>
      <section>
        {projects.map((project, index) => 
          <li key={index}>
            {project.title}
            {project.image}
          </li>
        )}
      </section>
    </>
  )
}

export default ProjectPreview