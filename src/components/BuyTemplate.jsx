import React from "react";
import { Container, Row } from "react-bootstrap";
import "../styles/BuyTemplate.css";
import { FaGreaterThan } from "react-icons/fa";
import buyTempShape1 from "../assets/bubble-34.png";
import buyTempShape2 from "../assets/line-8.png";
import buyTempLine from "../assets/line-6.png";
export const BuyTemplate = ({
  firstBuyTemp: { items },
  secondBuyTemp: { values },
}) => {
  return (
    <>
      <div className='section-buy' id='buy-template'>
        <Container>
          <div className='text-start'>
            <Row className='align-items-center justify-content-between'>
              <div className=' col-lg-7 col-md-8 col-xl-6'>
                <h2 className='buy-temp-h2'>Why buy the template from us?</h2>
              </div>
              <div className=' col-lg-5 col-xl-4'>
                <p className='temp-p'>
                  Every template is built with such efforts that they are ready
                  to meet all of our clients’ expectations.
                </p>
              </div>
            </Row>
          </div>
          <Row className='align-items-center'>
            {items.map((item, i) => {
              return (
                <div className='col-xl-4 col-lg-6' key={i}>
                  <div className='buy-temp-box text-black'>
                    <div className='buy-temp-heading'>
                      <div className='buy-temp-pic'>
                        <img src={item.img} alt="" />
                      </div>
                      <h5 className='buy-temp-h5 text-start'>
                        {item.h5}
                        <br />
                        {item.br}
                      </h5>
                    </div>
                    <p className='buy-temp-p text-start'>{item.p}</p>
                  </div>
                </div>
              );
            })}
          </Row>
          <Row className='justify-content-center'>
            {values.map((val, i) => {
              return (
                <div className='col-xl-4 col-lg-6 ' key={i}>
                  <div className='h-100 pb-5'>
                    <a
                      href='/'
                      className='text-decoration-none text-black buy-temp-a'
                    >
                      <div className='temp-inner text-start '>
                        <div className='content'>
                          <div className='temp-text-box'>
                            <h4 className='temp-title-h4'>
                              {val.h4}
                              <br />
                              {val.br}
                            </h4>
                            <div className='temp-title-img'>
                              <img src={val.img} alt='No' />
                            </div>
                          </div>
                          <p className='temp-title-p'>{val.p}</p>
                        </div>
                        <div>
                          <span className='temp-btn'>
                            <FaGreaterThan />
                          </span>
                        </div>
                      </div>
                      <ul className='list-unstyled'>
                        <li className='buy-temp-shape1'>
                          <img src={buyTempShape1} alt='NO' />
                        </li>
                        <li className='buy-temp-shape2'>
                          <img src={buyTempShape2} alt='NO' />
                        </li>
                      </ul>
                    </a>
                  </div>
                </div>
              );
            })}
          </Row>
        </Container>
        <div className='line-shape'>
          <img src={buyTempLine} alt=""/>
        </div>
      </div>
    </>
  );
};
