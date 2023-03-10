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
  });
  const propsProjects = useSpring({
    opacity: inViewProjects ? 1 : 0,
    transform: inViewProjects ? "translateY(0)" : "translateY(50px)",
  });
  const propsSkills = useSpring({
    opacity: inViewSkills ? 1 : 0,
    transform: inViewSkills ? "translateY(0)" : "translateY(50px)",
  });
  const propsContact = useSpring({
    opacity: inViewContact ? 1 : 0,
    transform: inViewAbout ? "translateY(0)" : "translateY(50px)",
  });

  return (
    <>
      <header>
        <NavBar></NavBar>
      </header>
      <main>
        <Hero></Hero>
        <animated.div ref={refAbout} style={propsAbout}>
          <About></About>
        </animated.div>
        <div ref={refProjects} style={propsProjects}>
          <Projects></Projects>
        </div>
        <div ref={refSkills} style={propsSkills}>
          <Skills></Skills>
        </div>
        <div ref={refContact} style={propsContact}>
          <Contact></Contact>
        </div>
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
