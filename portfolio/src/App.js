import Navbar from "./components/Navbar";
import './App.css'
import Header from "./components/Header";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import Education from "./components/Education";
function App() {
  return (
    <div>
       <div className="block">
        <Navbar />
        </div>
        <div className="block">
        <Header />
        </div>
        <div className="block">
        <div id="skill">
        <Skills />
        </div>
        </div>
        <div className="block">
        <div id="projects">
        <Projects />
        </div>
        </div>
        <div className="block">
        <div id="education">
        <Education />
        </div>
        </div>
        {/* <div className="block"> */}
        <div id="footer">
        <Footer />
        </div>
        {/* </div> */}

         
        
    </div>
  );
}

export default App;
