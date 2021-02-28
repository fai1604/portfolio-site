import FullHeight from 'react-full-height'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import './About.css'


const About = () => {
   
    return ( 
        <FullHeight id='about' canExceed={true}>
            <Container className='about-content'>
                <Row className='about-content-container'>
                    <Col>
                        <h1 className='about-header'>About Me</h1>
                        <p className='about-desc'>
                            <br/>
                            My name is <span className="highlighted">Mohamad Fairuz</span> and I am a second-year <span className="highlighted">Computer Science</span> student in University of Malaya, 
                            majoring in <span className="highlighted">Software Engineering</span>.
                            <br/>
                            <br/>
                            I was born, raised and currently living in <span className="highlighted">Miri, Sarawak</span>.
                            <br/>
                            <br/>
                            I am currently focusing on <span className="highlighted">front-end web development</span> and I plan to be a full-stack web developer
                            after I graduate <span className="highlighted">(expected graduation : Sept 2023)</span>
                            <br/>
                            <br/>
                            I see myself as a <span className="highlighted">team-player</span>, <span className="highlighted">chill</span> and <span className="highlighted">simple</span> individual.
                        </p>
                    </Col>
                </Row>
            </Container>
        </FullHeight>
            
    );
}
 
export default About;