import projects from "./data/projects"

function ProjectDetails() {
  return (
    <>
      <h1>{projects[0].title}</h1>
      <p>{projects[0].description}</p>
      <img src={projects[0].image} alt='' />
      <button>{projects[0].repoLink}</button>
      <button>{projects[0].deploymentLink}</button>
    </>
  )
}

export default ProjectDetails