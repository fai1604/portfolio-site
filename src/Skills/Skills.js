import { Button, Grid, makeStyles, Typography } from '@material-ui/core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useState } from 'react'
import FullHeight from 'react-full-height'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import './Skills.css'



const Skills = () => {

    const [clickLanguage, setClickLanguage] = useState(true)
    const [clickTechnologies, setClickTechnologies] = useState(false)

    const handleClick = (e) => {
        setClickLanguage(!clickLanguage)
        setClickTechnologies(!clickTechnologies)
    }
    
    return ( 
        <FullHeight id='skills' canExceed={true}>
            <Container className='skills-content'>
                <Row>
                    <Col xs={12}>
                        <h1 className='skills-header'>Skills</h1>
                        <p className='skills-desc'>
                            I've started programming in C during my foundation days. Since then,
                            I have worked with various front-end and back-end frameworks, markup languages
                            and programming languages.
                            I always have the motivation 
                            to widen my skills and discover new knowledge.
                        </p>
                    </Col>
                    <Col className='skills-category-container' xs={6} lg={3}>
                        <h5 className='skills-category-header'>Frameworks</h5>
                            <div >
                                <FontAwesomeIcon className='skills-category-desc' icon={['fab', 'react']} size='4x' /> 
                                {/* React */}
                                <br/>
                                <FontAwesomeIcon className='skills-category-desc' icon={['fab', 'bootstrap']} size='4x' />
                                {/* Bootstrap */}
                            </div>
                    </Col>
                    <Col className='skills-category-container' xs={6} lg={3}>
                        <h5 className='skills-category-header'>Runtime Environment</h5>
                            <div>
                                <FontAwesomeIcon className='skills-category-desc-odd' icon={['fab', 'npm']} size='4x' />
                                {/* npm */}
                                <br/>
                                <FontAwesomeIcon className='skills-category-desc-odd' icon={['fab', 'node']} size='4x'/>
                                {/* Node.js */}
                            </div>
                    </Col>
                    <Col className='skills-category-container' xs={6} lg={3}>
                        <h5 className='skills-category-header'>Markup Languages</h5>
                            <div>
                                <FontAwesomeIcon className='skills-category-desc' icon={['fab', 'html5']} size='4x' />
                                {/* HTML */}
                                <br/>
                            <FontAwesomeIcon className='skills-category-desc' icon={['fab', 'css3']} size='4x' />
                                {/* CSS */}
                            </div>
                    </Col>
                    <Col className='skills-category-container' xs={6} lg={3}>
                        <h5 className='skills-category-header'>Programming Languages</h5>
                            <div>
                            <FontAwesomeIcon className='skills-category-desc-odd' icon={['fab', 'java']} size='4x' />
                                {/* Java */}
                            <br/>
                            <FontAwesomeIcon className='skills-category-desc-odd' icon={['fab', 'js']} size='4x' />
                                {/* JavaScript */}
                            </div>  
                    </Col>
                </Row>
            </Container>
        </FullHeight>
    );
}
 
export default Skills;