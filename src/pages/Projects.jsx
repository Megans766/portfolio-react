import projects from "./data/projects"
import ProjectList from "../components/ProjectList"

function Projects() {
  return (
    <div>
      <ul>
        <ProjectList projects={projects} />
      </ul>
    </div>
  )
}

export default Projects