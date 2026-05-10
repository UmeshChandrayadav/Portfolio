import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Certificates from "./components/Certificates";
import Footer from "./components/Footer";
import Resume from "./components/Resume";

function App() {
  return (
    <div className="min-h-screen text-gray-900 bg-gradient-to-br from-slate-100 via-blue-50 to-cyan-100 overflow-x-hidden">

      <Navbar />
      <Home />
      <Skills />
      <Projects />
      <Resume/>
      <Certificates />
      <Footer />

    </div>
  );
}

export default App;