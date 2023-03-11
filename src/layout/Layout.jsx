import NavBar from "../sections/navBar/NavBar";
import Hero from "../sections/hero/Hero";
import About from "../sections/about/About";
import Skills from "../sections/skills/Skills";
import Projects from "../sections/projects/Projects";
import Contact from "../sections/contact/Contact";
import Footer from "../sections/footer/Footer";
import SectionsRule from "../components/SectionsRule";
import { useSpring, animated } from "react-spring";
import { useInView } from "react-intersection-observer";

const Layout = () => {
  const [refAbout, inViewAbout] = useInView();
  const [refProjects, inViewProjects] = useInView();
  const [refSkills, inViewSkills] = useInView();
  const [refContact, inViewContact] = useInView();

  const propsAbout = useSpring({
    opacity: inViewAbout ? 1 : 0,
    transform: inViewAbout ? "translateY(0)" : "translateY(50px)",
    delay: 100,
  });
  const propsProjects = useSpring({
    opacity: inViewProjects ? 1 : 0,
    transform: inViewProjects ? "translateX(0)" : "translateX(100px)",
  });
  const propsSkills = useSpring({
    opacity: inViewSkills ? 1 : 0,
    transform: inViewSkills ? "translateY(0)" : "translateY(50px)",
  });
  const propsContact = useSpring({
    opacity: inViewContact ? 1 : 0,
    transform: inViewContact ? "translateX(0px)" : "translateX(100px)",
  });

  return (
    <>
      <header>
        <NavBar></NavBar>
      </header>
      <main>
        <Hero></Hero>
        <animated.section id="about" ref={refAbout} style={propsAbout}>
          <About></About>
        </animated.section>
        <animated.section id="projects" ref={refProjects} style={propsProjects}>
          <Projects></Projects>
        </animated.section>
        <animated.section id="skills" ref={refSkills} style={propsSkills}>
          <Skills></Skills>
        </animated.section>
        <animated.section id="contact" ref={refContact} style={propsContact}>
          <Contact></Contact>
        </animated.section>
        <SectionsRule />
        <div className="leftBar"></div>
      </main>
      <footer>
        <Footer></Footer>
      </footer>
    </>
  );
};

export default Layout;
