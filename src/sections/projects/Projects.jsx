import { StyledProjects } from "./styled-components/projects.styled";
import SectionTitle from "../../components/SectionTitle";
import ProjectCard from "./components/ProjectCard";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const images = [
  "https://via.placeholder.com/200x200",
  "https://via.placeholder.com/200x200",
  "https://via.placeholder.com/200x200",
  "https://via.placeholder.com/200x200",
  "https://via.placeholder.com/200x200",
  "https://via.placeholder.com/200x200",
];

const Projects = () => {
  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2500,
    centerPadding: "50px",
    slidesToShow: 3,
    speed: 2500,
    pauseOnHover: true,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
          initialSlide: 2,
          autoplay: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          autoplay: false,
        },
      },
    ],
  };

  return (
    <StyledProjects>
      <div className="titleContainer">
        <SectionTitle title="Projects" />
      </div>
      <div className="projectsContainer">
        <Slider {...settings}>
          <ProjectCard number="1" projectName="El valor justo" />
          <ProjectCard number="2" projectName="ClimApp" />
          <ProjectCard number="3" projectName="Mp4 Player" />
          <ProjectCard number="4" projectName="ToDoList" />
        </Slider>
      </div>
    </StyledProjects>
  );
};

export default Projects;
