import About from "./component/About";
import Header from "./component/Header";
import Projects from "./component/Projects";
import Skills from "./component/Skills";

function App() {
  return (
    <div className="bg-gray-900 text-gray-400 max-w-8xl">
      <Header />
      <About />
      <Projects />
      <Skills />
    </div>
  );
}

export default App;
