import hyphenateWords from "../utilities/hyphenateWords";
import { Link } from "react-router-dom";

function ProjectPreview(props) {
  return (
    <>
        <img src={props.project.image} alt={props.project.title} />
        <section>
              <Link to={hyphenateWords(props.project.title)}>
                <button>View Project</button>
              </Link>
        </section>
    </>
  )
}

export default ProjectPreview