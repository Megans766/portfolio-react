// import projects from "./data/projects"
import { useParams } from "react-router-dom"
import findProjects from "../utilities/findProjects"

function ProjectDetails() {
  const { projectDetails } = useParams()
  console.log(projectDetails);
  const project = findProjects(projectDetails)
  console.log(project);
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