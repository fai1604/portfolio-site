import FullHeight from 'react-full-height'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Tab from 'react-bootstrap/Tab'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Card from 'react-bootstrap/Card'
import './Projects.css'

const Projects = () => {
    
    const projects = [
        {
            img: '../quote.png',
            name: 'Quote Generator',
            components: 'HTML, CSS, JavaScript',
            desc: 'A simple quote generator app. Just enter your name, click submit and receive a quote just for you!',
            link: 'https://fai1604.github.io/quotes-app/',
            glink: 'https://github.com/fai1604/quotes-app'
        },
        {
            img: '../cookingmeow.png',
            name: 'CookingMeow',
            components: 'HTML, CSS, JavaScript, Bootstrap, Express.js, MongoDB',
            desc: 'A website I created for me to submit cooking recipes for people to read.',
            link: 'cookingmeow.herokuapp.com',
            glink: 'https://github.com/fai1604/CookingMeow'
        }
    ]
    
    return (  
        <FullHeight id='projects'>
            <Container className='projects-content'>
                <Row>
                    {projects.map((project) => (
                        <Col>
                            <Card>
                                <Card.Body>
                                    <Card.Title>{project.name}</Card.Title>
                                    <Card.Subtitle className="mb-2 text-muted">{project.components}</Card.Subtitle>
                                    <Card.Text>
                                    {project.desc}
                                    </Card.Text>
                                    <Card.Link href={project.link}>Link</Card.Link>
                                    <Card.Link href={project.glink}>Github</Card.Link>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </Container>
        </FullHeight>
    );
}
 
export default Projects;