import projects from "../pages/data/projects";
import hyphenateWords from "./hyphenateWords";

function findProjects(string) {
  const title = projects.filter(project => {
    return hyphenateWords(project.title) === string
  })
  return title
}

export default findProjects

