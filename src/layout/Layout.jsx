import NavBar from "../sections/navBar/NavBar";
import Hero from "../sections/hero/Hero";
import About from "../sections/about/About";
import Skills from "../sections/skills/Skills";
import Projects from "../sections/projects/Projects";
import Contact from "../sections/contact/Contact";
import Footer from "../sections/footer/Footer";
import SectionsRule from "../components/SectionsRule";

const Layout = () => {
  return (
    <>
      <header>
        <NavBar></NavBar>
      </header>
      <main>
        <Hero></Hero>
        <About></About>
        <Projects></Projects>
        <Skills></Skills>
        <Contact></Contact>
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
