import React from "react";
import { Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../styles/OurTemplates.css";
import line from "../assets/line-4.png";
import bubble35 from "../assets/bubble-35.png";
export const OurTemplates = ({ ourTemplate: { items } }) => {
  return (
    <>
      <div className=' section-template' id='our-template'>
        <Container>
          <Row className='align-items-center justify-content-between '>
            <div className='col-xl-6 col-lg-7'>
              <h2 className='template-h2'>
                Our templates are just ready to use
              </h2>
            </div>
            <div className='col-xl-4 col=lg-5 '>
              <p className='template-p'>
                You will love all of the features in our Template. 100%
                guaranteed satisfaction.
              </p>
            </div>
          </Row>
          <div className='pt-4'>
            <Row>
              {items.map((item, i) => {
                return (
                  <div className='col-md-6' key={i}>
                    <div className='template-pics'>
                      <a href='/'>
                        <span className='template-span'>
                          <img src={item.img} />
                        </span>
                        <h2 className='title'>{item.h2}</h2>
                      </a>
                    </div>
                  </div>
                );
              })}
            </Row>
          </div>
        </Container>
        <ul className='list-unstyled shape-ul '>
          <li className='first-shape'>
            <img src={bubble35} />
          </li>
          <li className='second-shape'>
            <img src={line} />
          </li>
        </ul>
      </div>
    </>
  );
};
