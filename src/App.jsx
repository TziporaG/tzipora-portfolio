import "./App.css";
import Header from "./components/header/header";
import Nav from "./components/nav/nav";
import Skills from "./components/skills/skills";
import Projects from "./components/projects/projects";
import Contact from "./components/contact/contact";

const App = () => {
  return (
    <div>
      <Nav />
      <Header />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
};

export default App;
