import { StyledProjects } from "./styled-components/projects.styled";
import SectionTitle from "../../components/SectionTitle";
import ProjectCard from "./components/ProjectCard";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import climApp from "./assets/climApp.jpeg";
import fairPrice from "./assets/fairPrice.jpeg";
import mp4Player from "./assets/reproductorVideos.jpg";
import todoList from "./assets/ToDoList.jpg";

const Projects = () => {
  const settings = {
    centerMode: true,
    focusOnSelect: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 1000,
    centerPadding: "30px",
    slidesToShow: 3,
    slidesToScroll: 1,
    speed: 2000,
    pauseOnHover: true,
    swipeToSlide: true,
    swipe: true,
    touchMove: true,
    arrows: false,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          centerMode: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
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
          slidesToScroll: 1,
          autoplay: false,
          speed: 500,
          centerMode: false,
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
          <ProjectCard
            number="1"
            projectName="El valor justo"
            pageLink="https://deluxe-lollipop-24649a.netlify.app/"
            repoLink="https://github.com/MarcosMartilotta/fairPrice"
            preview={fairPrice}
          />
          <ProjectCard
            number="2"
            projectName="ClimApp"
            pageLink="https://marcosmartilotta.github.io/climApp/"
            repoLink="https://github.com/MarcosMartilotta/climApp"
            preview={climApp}
          />
          <ProjectCard
            number="3"
            projectName="Mp4 Player"
            pageLink="https://marcosmartilotta.github.io/reproductor_mp4/"
            repoLink="https://github.com/MarcosMartilotta/reproductor_mp4"
            preview={mp4Player}
          />
          <ProjectCard
            number="4"
            projectName="ToDoList"
            pageLink="https://marcosmartilotta.github.io/ToDoList/"
            repoLink="https://github.com/MarcosMartilotta/ToDoList"
            preview={todoList}
          />
        </Slider>
      </div>
    </StyledProjects>
  );
};

export default Projects;
