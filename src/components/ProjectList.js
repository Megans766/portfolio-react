import ProjectPreview from "./ProjectPreview";

function ProjectList(props) {
  return (
    <>
      <h1>Projects</h1>
      <ul>
        {props.projects.map(project =>
          <li key={project.title}>
            <ProjectPreview project={project} />
          </li>
        )}
      </ul>
    </>
  )
}

export default ProjectList