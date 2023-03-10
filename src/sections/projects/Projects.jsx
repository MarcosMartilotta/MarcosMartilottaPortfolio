import { StyledProjects } from "./styled-components/projects.styled";
import SectionTitle from "../../components/SectionTitle";
import ProjectCard from "./components/ProjectCard";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const Projects = () => {
  const settings = {
    centerMode: true,
    focusOnSelect: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 1000,
    centerPadding: "50px",
    slidesToShow: 3,
    speed: 2000,
    pauseOnHover: true,
    arrows: false,
    swipeToSlide: true,
    swipe: true,
    touchMove: true,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 0,
          infinite: true,
          centerMode: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 0,
          initialSlide: 0,
          autoplay: false,
          speed: 500,
          arrows: false,
          centerMode: false,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          autoplay: false,
          speed: 500,
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
