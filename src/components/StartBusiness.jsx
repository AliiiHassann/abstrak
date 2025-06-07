import React from "react";
import { Container } from "react-bootstrap";
import "../styles/StartBusiness.css";
import bubble1 from "../assets/bubble-12.png";
import bubble2 from "../assets/bubble-16 (1).png";
import bubble3 from "../assets/bubble-13.png";
import bubble4 from "../assets/bubble-14 (1).png";
import bubble5 from "../assets/bubble-16.png";
import bubble6 from "../assets/bubble-15.png";
import bubble7 from "../assets/bubble-16.png";
export const StartBusiness = () => {
  return (
    <>
      <div className='section-business overflow-hidden' id='startBusiness'>
        <Container>
          <div className=''>
            <div className='business-box text-white'>
              <h2>
                Let’s Start <br /> Your Business Today!
              </h2>
              <p>
                Missing something? Just tell us what you need by{" "}
                <a href='/' className='requesting-a'>
                  requesting us here.
                </a>
              </p>
              <a
                href='/'
                className='text-decoration-none text-light buy-now-business'
              >
                Buy Now
              </a>
            </div>
          </div>
        </Container>
        <ul className='list-unstyled'>
          <li className='business-shape1'>
            <img src={bubble1} alt="No" />
          </li>
          <li className='business-shape2'>
            <img src={bubble2} alt="No" />
          </li>
          <li className='business-shape3'>
            <img src={bubble3} alt="No" />
          </li>
          <li className='business-shape4'>
            <img src={bubble4} alt="No" />
          </li>
          <li className='business-shape5'>
            <img src={bubble5} alt="No" />
          </li>
          <li className='business-shape6'>
            <img src={bubble6} alt="No" />
          </li>
          <li className='business-shape7'>
            <img src={bubble7} alt="No" />
          </li>
        </ul>
      </div>
    </>
  );
};
