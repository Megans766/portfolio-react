import projects from "../pages/data/projects";
import ProjectPreview from "./ProjectPreview";

function ProjectList() {
  return (
    <>
      <div>
        <h2>Projects</h2>
        <ul>
          <ProjectPreview projects={projects} />
        </ul>
      </div>
    </>
  )
}

export default ProjectList