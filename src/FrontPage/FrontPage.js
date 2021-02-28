import { Icon } from '@material-ui/core'
import ReactTypingEffect from 'react-typing-effect';
import Particles from 'react-particles-js'
import FullHeight from 'react-full-height'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Jumbotron from 'react-bootstrap/Jumbotron'
import './FrontPage.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowCircleDown, faArrowCircleUp } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-scroll'


const FrontPage = () => {
    return (  
        <FullHeight id='front-page'> 
            <Container>
                <div className='main-container'>
                    <h1 className="typing-effect">
                        Hi, I'm Fai.
                    </h1>
                    <p className='desc'>
                        A second-year Software Engineering student, 
                        <br/>
                        University of Malaya.
                    </p>
                    <div className="social-media">
                        <a href='https://github.com/fai1604'>
                            <FontAwesomeIcon icon={['fab', 'github']} size='2x' />
                        </a>
                        <a href='https://linkedin.com/in/fai1604'>
                            <FontAwesomeIcon icon={['fab', 'linkedin']} size='2x' />
                        </a>
                        <a href='https://instagram.com/zvfai'>
                            <FontAwesomeIcon icon={['fab', 'instagram']} size='2x' />
                        </a>
                        <a href='mailto:mohamadfairuz1604@gmail.com'>
                            <FontAwesomeIcon icon={['fab', 'google']} size='2x' />
                        </a>
                    </div>
                    
                </div>
            </Container>
        </FullHeight>
    );
}
 
export default FrontPage;