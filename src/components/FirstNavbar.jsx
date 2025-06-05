import React, { useEffect, useState } from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import logo1 from "../assets/logo.svg";
import logo2 from "../assets/logo-2.svg";
import "../styles/FirstNavbar.css";
const FirstNavbar = () => {
  const [navState, setNavState] = useState(false);
  const onScroll = () => {
    if (window.scrollY > 30) {
      setNavState(true);
    } else {
      setNavState(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", onScroll);
  }, []);
  return (
    <header>
      <Navbar
        expand='lg'
        className={
          !navState
            ? "bg-body pt-4 bg-transparent nav-nav"
            : " nav-scrolled fixed-top "
        }
      >
        <div className='container'>
          <Navbar.Brand href='#home'>
            <img src={!navState ? logo1 : logo2} alt='None' />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse id='basic-navbar-nav'>
            <Nav className='ms-md-auto ms-sm-0 fw-semibold nav-collapsed-texts '>
              <div className='ms-2 p-3'>
                <Nav.Link className=' link-nav' href='#our-template'>
                  Demo
                </Nav.Link>
              </div>
              <div className='ms-2 p-3'>
                <Nav.Link className=' link-nav' href='#features'>
                  Features
                </Nav.Link>
              </div>
              <div className='ms-2 p-3'>
                <Nav.Link className=' link-nav' href='#buy-template'>
                  Why Us
                </Nav.Link>
              </div>
              <div className='ms-2 p-3'>
                <Nav.Link className=' link-nav' href='#link'>
                  Documentation
                </Nav.Link>
              </div>
              <div className='ms-2 p-3'>
                <Nav.Link className=' link-nav' href='#link'>
                  Support Ticket
                </Nav.Link>
              </div>
            </Nav>
          </Navbar.Collapse>
        </div>
      </Navbar>
    </header>
  );
};

export default FirstNavbar;
