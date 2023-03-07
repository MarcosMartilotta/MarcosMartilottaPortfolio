import NavHamburguer from "./components/NavHamburguer";
import { Nav } from "./styled-components/navBar.styled";
import { useState } from "react";
const NavBar = () => {
  const [active, setActive] = useState(false);

  const handleClick = () => {
    setActive(!active);
  };
  return (
    <Nav>
      <ul className={`itemsContainer ${active ? " active" : ""}`}>
        <li onClick={handleClick}>About</li>
        <li onClick={handleClick}>Projects</li>
        <li onClick={handleClick}>Skills</li>
        <li onClick={handleClick}>Contact</li>
      </ul>
      <NavHamburguer active={active} handleClick={handleClick} />
      <div className={`backGroundItems ${active ? "active" : ""}`}></div>
    </Nav>
  );
};

export default NavBar;
