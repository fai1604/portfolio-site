import { HashLink } from 'react-router-hash-link'
// import { Grid, makeStyles, Typography, Button } from '@material-ui/core'
import { useState, useRef, useEffect } from 'react'
import { Navbar as Nv } from 'react-bootstrap'
import Nav from 'react-bootstrap/Nav'
import Button from 'react-bootstrap/Button'
import NavLink from 'react-bootstrap/NavLink'
import { Link } from 'react-scroll'
import './Navbar.css'

const Navbar = () => {
    
    return ( 
        <Nv 
            collapseOnSelect
            sticky='top'
            className='nv'
            variant='dark'
            expand='lg'
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
                </Nav>
            </Nv.Collapse>
        </Nv>
    );
}
    
export default Navbar;
