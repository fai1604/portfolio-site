import { Navbar as Nv } from 'react-bootstrap'
import Nav from 'react-bootstrap/Nav'
import NavLink from 'react-bootstrap/NavLink'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { Link } from 'react-scroll'
import './Navbar.css'

const Navbar = () => {
    
    return ( 
        <Nv 
            sticky='top'
            className='nv'
            variant='dark'
            expand='md'
        >
            <Nv.Toggle aria-controls="responsive-navbar-nav" />
            <Nv.Collapse id="responsive-navbar-nav">
                <Nav className='menu'>
                    <NavLink>
                        <Link to='about' smooth={true} spy={true} duration={500} className='nav-link' activeClass='nav-item active'>
                            About
                        </Link>
                    </NavLink>
                    <NavLink>
                        <Link to='skills' smooth={true} spy={true} duration={500} className='nav-link' activeClass='nav-item active'>
                            Skills
                        </Link>
                    </NavLink>
                    <NavLink>
                        <Link to='education' smooth={true} spy={true} duration={500} className='nav-link' activeClass='nav-item active'>
                            Education
                        </Link>
                    </NavLink>
                    <NavLink>
                        <Link to='projects' smooth={true} spy={true} duration={500} className='nav-link' activeClass='nav-item active'>
                            Projects
                        </Link>
                    </NavLink>
                    <NavLink>
                    <Link to='contact' smooth={true} spy={true} duration={500} className='nav-link' activeClass='nav-item active'>
                        Contact
                    </Link>
                    </NavLink>
                </Nav>
            </Nv.Collapse>
        </Nv>
    );
}
    
export default Navbar;
