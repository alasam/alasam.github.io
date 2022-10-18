import About from "./components/About";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Skills from "./components/Skills";
import Socials from "./components/Socials";

function App() {
  return (
    <div>
      <Navbar />
      <Socials />
      <Home />
      <About />
      <Skills />
    </div>
  );
}

export default App;
