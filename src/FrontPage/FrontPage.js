import FullHeight from 'react-full-height'
import Container from 'react-bootstrap/Container'
import './FrontPage.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


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