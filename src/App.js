import About from "./component/About";
import Contact from "./component/Contact";
import Header from "./component/Header";
import Projects from "./component/Projects";
import Skills from "./component/Skills";

function App() {
  return (
    <div className="bg-gray-900 text-gray-400 max-w-8xl text-sm md:text-md lg:text-lg">
      <Header />
      <About />
      <Projects />
      <Skills />
      <Contact />
    </div>
  );
}

export default App;
