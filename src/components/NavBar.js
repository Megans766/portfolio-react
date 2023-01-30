import { Link } from "react-router-dom";

function NavBar() {
  return(
    <nav>
      <Link to='/'>Megan Smith</Link>
      <ul>
        <li>
          <Link to='/about'>About Me</Link>
        </li>
        <li>
          <Link to='/contact'>Contact</Link>
        </li>
        <li>
          <Link to='/projects'>Projects</Link>
        </li>
        <li>
          <Link to='Resume'>Resume</Link>
        </li>
      </ul>
    </nav>
  )
}

export default NavBar