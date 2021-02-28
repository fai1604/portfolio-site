import { Container } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './Contact.css'

const Contact = () => {
    return (  
        <Container id='contact' className='contact-content'> 
            <h1 className='contact-header'>Contact</h1>
            <p className="contact-desc">
                Feel free to drop me an e-mail if you are interested in my work, <br/>or if you just want to say 'Hello!'
            </p>
            <div className="contact-body">
                <a className='contact-social-media-links' href='mailto:mohamadfairuz1604@gmail.com'>
                    <FontAwesomeIcon icon={['fas', 'envelope']} size='6x' />
                </a>
                <br/>
                <br/>
                <br/>
                <p className='contact-desc'>
                    Don't worry, I won't bite :)
                    <div className="contact-social-media">
                        You can also find me via : 
                        <br/>
                        <br/>
                        <a className='contact-social-media-links' href='https://github.com/fai1604'>
                            <FontAwesomeIcon icon={['fab', 'github']} size='3x' />
                        </a>
                        <a className='contact-social-media-links' href='https://linkedin.com/in/fai1604'>
                            <FontAwesomeIcon icon={['fab', 'linkedin']} size='3x' />
                        </a>
                        <a className='contact-social-media-links' href='https://instagram.com/zvfai'>
                            <FontAwesomeIcon icon={['fab', 'instagram']} size='3x' />
                        </a>
                    </div>
                </p>
            </div>
        </Container>
    );
}
 
export default Contact;