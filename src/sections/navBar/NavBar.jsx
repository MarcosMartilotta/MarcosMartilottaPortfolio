import NavHamburguer from "./components/NavHamburguer";
import { Nav } from "./styled-components/navBar.styled";
import { useState } from "react";
import { Link } from "react-scroll";

const NavBar = () => {
  const [active, setActive] = useState(false);

  const handleClick = () => {
    setActive(!active);
  };
  return (
    <Nav>
      <ul className={`itemsContainer ${active ? " active" : ""}`}>
        <Link
          to="about"
          spy={true}
          smooth={true}
          offset={-150}
          duration={500}
          onClick={handleClick}
        >
          About
        </Link>
        <Link
          to="projects"
          spy={true}
          smooth={true}
          offset={-150}
          duration={500}
          onClick={handleClick}
        >
          Projects
        </Link>
        <Link
          to="skills"
          spy={true}
          smooth={true}
          offset={-150}
          duration={500}
          onClick={handleClick}
        >
          Skills
        </Link>
        <Link
          to="contact"
          spy={true}
          smooth={true}
          offset={-150}
          duration={500}
          onClick={handleClick}
        >
          Contact
        </Link>
      </ul>
      <NavHamburguer active={active} handleClick={handleClick} />
      <div className={`backGroundItems ${active ? "active" : ""}`}></div>
    </Nav>
  );
};

export default NavBar;
