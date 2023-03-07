import { HamburguerContainer } from "../styled-components/hamburguer.styled";
const NavHamburguer = ({ active, handleClick }) => {
  return (
    <HamburguerContainer className={active ? "active" : ""}>
      <div onClick={handleClick} className="hamburguerIcon">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </HamburguerContainer>
  );
};

export default NavHamburguer;
