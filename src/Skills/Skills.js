import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import FullHeight from 'react-full-height'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import './Skills.css'



const Skills = () => {
    
    return ( 
        <FullHeight id='skills' canExceed={true}>
            <Container className='skills-content'>
                <Row>
                    <Col xs={12}>
                        <h1 className='skills-header'>Skills</h1>
                        <p className='skills-desc'>
                            I've started programming in <span className="highlighted">C</span> during my foundation days. Since then,
                            I have worked with various <span className='highlighted'>front-end</span> and <span className='highlighted'>back-end</span> frameworks, 
                            <span className='highlighted'> markup languages </span>
                            and <span className='highlighted'>programming languages</span>.
                            I always have the motivation 
                            to widen my skills and discover new knowledge.
                        </p>
                        <p className="skills-desc">
                            My skills include :
                        </p>
                    </Col>
                </Row>
                <Row>
                    <Col className='skills-category-container' xs={6} md={3}>
                        <FontAwesomeIcon className='skills-category-desc' icon={['fab', 'react']} size='4x' /> 
                    </Col>
                    <Col className='skills-category-container' xs={6} md={3}>
                        <FontAwesomeIcon className='skills-category-desc' icon={['fab', 'bootstrap']} size='4x' />
                    </Col>
                    <Col className='skills-category-container' xs={6} md={3}>
                        <FontAwesomeIcon className='skills-category-desc' icon={['fab', 'npm']} size='4x' />
                    </Col>
                    <Col className='skills-category-container' xs={6} md={3}>
                        <FontAwesomeIcon className='skills-category-desc' icon={['fab', 'node']} size='4x' />
                    </Col>
                </Row>
                <Row>
                    <Col className='skills-category-container' xs={6} md={3}>
                        <FontAwesomeIcon className='skills-category-desc' icon={['fab', 'html5']} size='4x' />
                    </Col>
                    <Col className='skills-category-container' xs={6} md={3}>
                        <FontAwesomeIcon className='skills-category-desc' icon={['fab', 'css3']} size='4x' />
                    </Col>
                    <Col className='skills-category-container' xs={6} md={3}>
                        <FontAwesomeIcon className='skills-category-desc' icon={['fab', 'java']} size='4x' />
                    </Col>
                    <Col className='skills-category-container' xs={6} md={3}>
                        <FontAwesomeIcon className='skills-category-desc' icon={['fab', 'js']} size='4x' />
                    </Col>
                </Row>
            </Container>
        </FullHeight>
    );
}
 
export default Skills;