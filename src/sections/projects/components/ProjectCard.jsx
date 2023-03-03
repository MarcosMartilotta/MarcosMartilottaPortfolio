import { Card } from "../styled-components/projectCard.styled";

const ProjectCard = ({ number, projectName }) => {
  return (
    <Card>
      <div>{number}</div>
      <div>{projectName}</div>
    </Card>
  );
};

export default ProjectCard;
