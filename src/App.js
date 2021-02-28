import ReactDOM from 'react-dom'
import './App.css';
import Navbar from './Navbar/Navbar';
import About from './About/About';
import Skills from './Skills/Skills';
import FrontPage from './FrontPage/FrontPage';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab, faGithub, faLinkedin, faInstagram, faGoogle } from '@fortawesome/free-brands-svg-icons'
import Education from './Education/Education';
import Projects from './Projects/Projects';
import { fas, faLink, faArrowCircleDown, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import Particles from 'react-particles-js'
import 'bootstrap/dist/css/bootstrap.min.css';
import Contact from './Contact/Contact';
import Footer from './Footer/Footer';

library.add(fab, faGithub, faLinkedin, faInstagram, faGoogle);
library.add(fas, faLink, faArrowCircleDown, faEnvelope)


function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="fullpage">
        <FrontPage />
        <About />
        <Skills />
        <Education />
        <Projects />
        <Contact />
      </div>
    </div>
  );
}

export default App;
