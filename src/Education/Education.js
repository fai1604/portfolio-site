import { useState } from 'react'
import FullHeight from 'react-full-height'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Tab from 'react-bootstrap/Tab'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Toast from 'react-bootstrap/Toast'
import ToastHeader from 'react-bootstrap/ToastHeader'
import ToastBody from 'react-bootstrap/ToastBody'
import Badge from 'react-bootstrap/Badge'
import './Education.css'


const Education = () => {
    

    const [isClicked, setIsClicked] = useState(false)
    
    const clicked = (e) => {
        e.preventDefault();
        setIsClicked(true);
    }

    return ( 
        <FullHeight id='education' canExceed>
            <Container className='education-content'>
                <Row>
                    <Col>
                        <h1 className='education-category-header'>Education</h1>
                        <p className='education-desc'>
                            Follow my education journey! <span className='hidden'>Read it from left to right </span>&#128521;
                        </p>
                    </Col>
                </Row>
                <Row>
                    <Col>
                    <Toast className='education-toast'>
                    <Toast.Header>
                        <strong className="mr-auto">Bachelor's Degree</strong>
                        <small>Sept 2019 - Sept 2023</small>
                    </Toast.Header>
                        <Toast.Body className='education-toast-body'>
                            <Badge variant="primary" className='education-badge'>University of Malaya</Badge>
                            <br/>
                            <Badge variant="success" className='education-badge'>CGPA : 3.39</Badge>
                            <div className='education-badge-p'>
                                <br/>
                                {/* <span className="dot" /> */}
                                <p>
                                    A member of App/Web Division, Developer Students Club, University of Malaya
                                </p>
                                {/* <span className="dot" /> */}
                                <p>
                                    A <em>Pemudahcara Mahasiswa</em> for UM-WOW MHS 20/21
                                </p>
                                {/* <span className="dot" /> */}
                                <p>
                                    Head of Kolej Kediaman Kinabalu's Multimedia Bureau for SUKMUM 2019
                                </p>
                            </div>
                        </Toast.Body>
                    </Toast>
                    </Col>
                    <Col>
                    <Toast className='education-toast'>
                        <Toast.Header>
                            <strong className="mr-auto">Pre-University</strong>
                            <small>June 2018 - April 2019</small>
                        </Toast.Header>
                        <Toast.Body className='education-toast-body'>
                            <Badge variant="primary" className='education-badge'>Center for Foundation Studies in Science, UM</Badge>
                            <br/>
                            <Badge variant="success" className='education-badge'>CGPA : 4.00</Badge>
                            <div className="education-badge-p">
                                <br/>
                                {/* <span className="dot" /> */}
                                <p>
                                    A member of Kolej Kediaman Ungku Aziz's Multimedia Bureau for SUKMUM 2018
                                </p>
                            </div>
                        </Toast.Body>
                    </Toast>
                    </Col>
                    <Col>
                    <Toast className='education-toast'>
                        <Toast.Header>
                        <strong className="mr-auto">High School</strong>
                        <small>Jan 2013 - Nov 2017</small>
                        </Toast.Header>
                        <Toast.Body className='education-toast-body'>
                            <Badge variant="primary" className='education-badge'>Kolej Tun Datu Tuanku Haji Bujang, Miri</Badge>
                            <br/>
                            <Badge variant="success" className='education-badge'>SPM : 6A+, 2A, 1A-</Badge>
                            <div className="education-badge-p">
                                <br/>
                                {/* <span className="dot" /> */}
                                <p>
                                    Represented Sarawak on various programs and competitions, including an olympiad
                                </p>
                                {/* <span className="dot" /> */}
                                <p>
                                    Head of my school's Islamic Students' Association, and a prefect as well
                                </p>
                                {/* <span className="dot" /> */}
                                <p>
                                    One of the top scorers for SPM 2017
                                </p>
                            </div>
                        </Toast.Body>
                    </Toast>
                    </Col>
                </Row>
            </Container>
        </FullHeight>
    );
}
 
export default Education;