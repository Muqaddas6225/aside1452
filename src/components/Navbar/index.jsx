import React, { useState , useEffect }  from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import NavDropdown from 'react-bootstrap/NavDropdown';

import {Link} from 'react-router-dom'

import { AsideLogo } from '../../assests/images';


import '../../styles/navbar/Navbar.scss'


const NavbarSection = () => {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [color, setColor] = useState(false);
    
    useEffect(() => {
      window.addEventListener("scroll", backgrounColor);
    })

    const backgrounColor = () => {
        if(window.scrollY > 0){
          setColor(true);
        }
        else{
          setColor(false);
        }
    }
  
  return (
    <section id='navbar-section' className= {color ? "navbar1" : "navbar2"}>
       <div className='container'>
       <Navbar expand="lg">
        <div className='container'>

        {/* <div className='nav-content'> */}
        <Navbar.Brand href='/'>
          <img src= {AsideLogo} alt='AsideLogo' />
        </Navbar.Brand>
        <div className="hamburger" variant="primary" onClick={handleShow}>
                  <div class="line line1"></div>
                  <div class="line line2"></div>
                  <div class="line line3"></div>
              </div> 
        <Navbar.Collapse id="basic-navbar-nav" className='navList'>
          <Nav className="list">
            <Nav.Link className='item' ><Link to='/' >Home</Link></Nav.Link>

            <NavDropdown title="Market" id="basic-nav-dropdown" >

              <NavDropdown.Item className='item' href="#action/3.1">
                <Link to='marketInvest' >Market Invest</Link>
              </NavDropdown.Item>

              <NavDropdown.Item href="#action/3.2">
                <Link to='secondaryMarket' >Secondary Market Page</Link>  
              </NavDropdown.Item>

            </NavDropdown>

            <Nav.Link className='item'><Link to='community' >Community</Link></Nav.Link>
            <Nav.Link className='item'><Link to='individualListing' >Individual Listing</Link></Nav.Link>
          </Nav>

          <div className='nav-button'>
          <Button variant='outline-success'>

          <NavDropdown title="Aside Base" id="basic-nav-dropdown" >

            <NavDropdown.Item className='item' href="#action/3.1">
            <Link to='marketInvest' >market Invest</Link>
            </NavDropdown.Item>

            <NavDropdown.Item href="#action/3.2">
            <Link to='secondaryMarketPage' >Secondary Market</Link>  
            </NavDropdown.Item>

        </NavDropdown>

          </Button>
         
          <Button variant="outline-success">Access</Button>

          </div>
        </Navbar.Collapse>
        {/* </div> */}

        </div>
    </Navbar>

    

      <Offcanvas placement='top' show={show} onHide={handleClose} backdrop="static" id="aside-offcanvas" >
        <Offcanvas.Header closeButton>
          <Offcanvas.Title> <img src= {AsideLogo} alt='AsideLogo' /></Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
        <Navbar id="basic-navbar-nav" className='navList'>
          <Nav className="list">
            <Nav.Link className='item' onClick={handleClose} ><Link to='/' >Home</Link></Nav.Link>

            <NavDropdown title="Market" id="basic-nav-dropdown" >

              <NavDropdown.Item className='item' href="#action/3.1" onClick={handleClose}>
                <Link to='marketInvest' >Market Invest</Link>
              </NavDropdown.Item>

              <NavDropdown.Item href="#action/3.2" onClick={handleClose}>
                <Link to='secondaryMarket' >Secondary Market Page</Link>  
              </NavDropdown.Item>

            </NavDropdown>

            <Nav.Link className='item' onClick={handleClose}><Link to='community' >Community</Link></Nav.Link>
            <Nav.Link className='item' onClick={handleClose}><Link to='individualListing' >Individual Listing</Link></Nav.Link>
          </Nav>
          <div className='nav-button'>
          <Button variant='outline-success'>

              <NavDropdown title="Aside Base" id="basic-nav-dropdown" >

                <NavDropdown.Item className='item' href="#action/3.1" onClick={handleClose}>
                <Link to='marketInvest' >Aside Base</Link>
                </NavDropdown.Item>

                <NavDropdown.Item href="#action/3.2" onClick={handleClose}>
                <Link to='secondaryMarketPage' >Aside Base</Link>  
                </NavDropdown.Item>

            </NavDropdown>

          </Button>
         
          <Button variant="outline-success" onClick={handleClose}>Access</Button>

          </div>
        </Navbar>
        </Offcanvas.Body>
      </Offcanvas>
      </div>
      
    </section>
  )
}

export default NavbarSection;
