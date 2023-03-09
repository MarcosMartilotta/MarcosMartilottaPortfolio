import { Card } from "../styled-components/projectCard.styled";

const ProjectCard = ({ number, projectName }) => {
  return (
    <Card>
      <div className="number">{number}.</div>
      <div className="projectName">{projectName}</div>
      <div className="topTrapeze"></div>
      <div className="bottomTrapeze"></div>
    </Card>
  );
};

export default ProjectCard;
