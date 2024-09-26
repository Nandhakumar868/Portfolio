import AboutMe from "./components/AboutMe";
import Contact from "./components/Contact";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Skills from "./components/Skills";
import WorkExperience from "./components/WorkExperience";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="bg-background">
      <div style={{ backgroundImage: "url()", backgroundPosition: "50% 50%" }}>
        <Navbar />
        <Hero />
      </div>
      <Skills />
      <WorkExperience />
      <AboutMe />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
