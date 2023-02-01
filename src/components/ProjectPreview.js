// import projects from "../pages/data/projects";
import hyphenateWords from "../utilities/hyphenateWords";
import { Link } from "react-router-dom";

function ProjectPreview(props) {
  return (
    <>
        {/* <h1>Projects</h1> */}
        <img src={props.project.image} alt={props.project.title} />
        <section>
          <h2>{props.project.title}</h2>
              <Link to={hyphenateWords(props.project.title)}>
                <button>View Project</button>
              </Link>
        </section>
    </>
  )
}

export default ProjectPreview