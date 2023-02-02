import { useParams } from "react-router-dom"
import findProjects from "../utilities/findProjects"

function ProjectDetails() {
  const { projectDetails } = useParams()
  const project = findProjects(projectDetails)
  return (
    <>
      <h1>{project.title}</h1>
      <p>{project.description}</p>
      <img src={project.image} alt={project.title} />
      <button>
        <a href={project.repoLink}>View the code</a>
      </button>
      <button>
        <a href={project.deploymentLink}>Explore App</a>
      </button>
    </>
  )
}

export default ProjectDetails