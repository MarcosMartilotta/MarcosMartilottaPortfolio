import { StyledProjects } from "./styled-components/projects.styled";
import SectionTitle from "../../components/SectionTitle";
import ProjectCard from "./components/ProjectCard";

const Projects = () => {
  return (
    <StyledProjects>
      <div className="titleContainer">
        <SectionTitle title="Projects" />
      </div>
      <div className="projectsContainer">
        <ProjectCard number="1" projectName="El valor justo" />
        <ProjectCard number="2" projectName="ClimApp" />
        <ProjectCard number="3" projectName="Mp4 Player" />
        <ProjectCard number="4" projectName="ToDoList" />
      </div>
    </StyledProjects>
  );
};

export default Projects;
