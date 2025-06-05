import React from "react";
import { Container, Row } from "react-bootstrap";
import "../styles/Features.css";
import featureShape1 from "../assets/circle-1 (1).png";
import featureShape2 from "../assets/line-3 (1).png";
import featureShape3 from "../assets/bubble-5 (1).png";
export const Features = ({ features: { items } }) => {
  return (
    <>
      <div className='section-features' id='features'>
        <Container>
          <div className='text-start'>
            <Row className='align-items-center justify-content-around '>
              <div className='col-lg-8 col-md-8'>
                <h2 className='feature-h2'>We have Impressive Features</h2>
              </div>
              <div className=' col-lg-4 '>
                <p className='feature-p'>
                  You will love all of the features in our Template. 100%
                  guaranteed satisfaction.
                </p>
              </div>
            </Row>
          </div>
          <Row>
            {items.map((item, i) => {
              return (
                <div className='col-xl-4 col-md-6 ' key={i}>
                  <div className='feature-box'>
                    <div className='feature-icon'>
                      <img src={item.img} alt='Feature' />
                    </div>
                    <div className='text-white feature-text'>
                      <h5 className='feature-box-h5'>
                        {item.h5}
                        <br />
                        {item.br}
                      </h5>
                      <p className='feature-box-p'>{item.paragraph}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </Row>
        </Container>
        <ul className='list-unstyled shape-ul'>
          <li className='shape-li feature-shape-1'>
            <img src={featureShape1} alt='No' />
          </li>
          <li className='shape-li feature-shape-2'>
            <img src={featureShape2} alt='No' />
          </li>
          <li className='shape-li feature-shape-3'>
            <img src={featureShape3} alt='No' />
          </li>
        </ul>
      </div>
    </>
  );
};
