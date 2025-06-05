import React from "react";
import { Container, Row } from "react-bootstrap";
import "../styles/Footer.css";
import { TbWorld } from "react-icons/tb";
import { FaFacebookF } from "react-icons/fa";

export const Footer = () => {
  return (
    <>
      <footer className='pt-0'>
        <Container>
          <div className='pt-5 pb-5'>
            <Row className='align-items-center'>
              <div className='col-lg-5'>
                <div className='footer-bottom'>
                  <span>
                    © 2024. All rights reserved by
                    <a
                      href='/'
                      className='ps-2 text-decoration-none footer-credit'
                    >
                      Axilthemes
                    </a>
                    .
                  </span>
                </div>
              </div>
              <div className='col-lg-2'>
                <ul className='list-unstyled footer-ul'>
                  <li>
                    <a href='/'>
                      <FaFacebookF />
                    </a>
                  </li>
                  <li>
                    <a href='/'>
                      <TbWorld />
                    </a>
                  </li>
                </ul>
              </div>
              <div className='col-lg-5'>
                <div>
                  <ul className='list-unstyled footer-ul-theme'>
                    <li>
                      <a href='/'>More Themes</a>
                    </li>
                    <li>
                      <a href='/'>Privacy Policy</a>
                    </li>
                  </ul>
                </div>
              </div>
            </Row>
          </div>
        </Container>
      </footer>
    </>
  );
};
