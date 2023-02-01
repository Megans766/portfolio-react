import projects from "./data/projects"

function ProjectDetails() {
  return (
    <>
      <h1>{projects.title}</h1>
      <p>{projects.description}</p>
      <img src={projects.image} alt='' />
      <button>{projects.repoLink}</button>
      <button>{projects.deploymentLink}</button>
    </>
  )
}

export default ProjectDetails