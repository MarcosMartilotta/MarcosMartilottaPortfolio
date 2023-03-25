import { Card } from "../styled-components/projectCard.styled";
import trapeze from "../assets/trapeze.png";
import triangle from "../assets/triangle.png";

const ProjectCard = ({ number, projectName, pageLink, repoLink, preview }) => {
  return (
    <Card>
      <div className="preview">
        <img src={preview} alt="Preview of the web site" />
      </div>
      <div className="number">{number}.</div>
      <div className="projectName">{projectName}</div>
      <div className="topTrapeze"></div>
      <div className="bottomTrapeze"></div>
      <div className="background">
        <div className="linksContainer">
          <a href={pageLink} target="_blank">
            Website
          </a>
          <a href={repoLink} target="_blank">
            View Repository
          </a>
        </div>
        <img src={triangle} alt="background triangle of the card" />
        <img src={trapeze} alt="background trapeze of the card" />
      </div>
    </Card>
  );
};

export default ProjectCard;
