import React, { useEffect, useState } from "react";
import "../styles/HomeCreative.css";
import { ImPlus } from "react-icons/im";
import bigBubble from "../assets/bubble-36.png";
import blueBubble from "../assets/bubble-14.png";
import whiteBubble from "../assets/bubble-37.png";
import purbleBubble from "../assets/bubble-31.png";
import demoSlide1 from "../assets/demo-slide-1.png";
import demoSlide2 from "../assets/demo-slide-2.png";
import demoSlide3 from "../assets/demo-slide-3.png";
import demoSlide4 from "../assets/demo-slide-4.png";
import demoSlide5 from "../assets/demo-slide-5.png";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";
export const HomeCreative = () => {
  const splideOptions = {
    perMove: 1,
    type: "loop",
    rewind: true,
    pagination: true,
    speed: "1000",
    autoplay: "playing",
    arrows: true,
    gap: "2rem",
    interval: 4000,
    classes: {
      pagination: "splide__pagination special-pagination",
    },
  };
  const [count, setCount] = useState(1);
  const [inner, setInner] = useState(1);
  const [elements, setElements] = useState(1);
  useEffect(() => {
    const incrementCount = () => {
      setCount((oldCount) => oldCount + 1);
    };
    const incrementInner = () => {
      setInner((oldInner) => oldInner + 1);
    };
    const incrementElement = () => {
      setElements((oldElement) => oldElement + 1);
    };
    const doSomething = () => {
      return (
        count === 5 ? count : incrementCount(),
        inner === 35 ? inner : incrementInner(),
        elements === 30 ? elements : incrementElement()
      );
    };
    const timer = setTimeout(doSomething(), 20);
    return () => clearTimeout(timer);
  }, [count, inner, elements]);

  return (
    <>
      <div className='creative-home section position-relative '>
        <div className='container'>
          <div className='row justify-content-center '>
            <div className='col-lg-10'>
              <div className='text-center '>
                <h1 className=' creative-title'>
                  Creative Agency, Corporate and Portfolio
                  <span> React JS </span>
                  Template + RTL
                </h1>
                <div className='banner d-flex justify-content-center align-items-center text-center '>
                  <div className='banner-counter'>
                    <span className='span-title'>Demo Website</span>
                    <div className=' count-number'>
                      <span>{count}</span>
                      <span className='sympol'>
                        <ImPlus />
                      </span>
                    </div>
                  </div>
                  <div className='banner-counter'>
                    <span className='span-title'>Inner Page</span>
                    <div className=' count-number'>
                      <span>{inner}</span>
                      <span className='sympol'>
                        <ImPlus />
                      </span>
                    </div>
                  </div>
                  <div className='banner-counter'>
                    <span className='span-title'>Elements</span>
                    <div className=' count-number'>
                      <span>{elements}</span>
                      <span className='sympol'>
                        <ImPlus />
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Splide options={splideOptions} className='pt-4'>
          <SplideSlide>
            <div className='demo-div'>
              <a href='#' className='demo-div'>
                <img className='demo-creative' src={demoSlide1} alt='Image 1' />
              </a>
            </div>
          </SplideSlide>
          <SplideSlide>
            <div className='demo-div'>
              <a href='#' className='demo-div'>
                <img className='demo-creative' src={demoSlide2} alt='Image 2' />
              </a>
            </div>
          </SplideSlide>
          <SplideSlide>
            <div className='demo-div'>
              <a href='#' className='demo-div'>
                <img className='demo-creative' src={demoSlide3} alt='Image 2' />
              </a>
            </div>
          </SplideSlide>
          <SplideSlide>
            <div className='demo-div'>
              <a href='#' className='demo-div'>
                <img className='demo-creative' src={demoSlide4} alt='Image 2' />
              </a>
            </div>
          </SplideSlide>
          <SplideSlide>
            <div className='demo-div'>
              <a href='#' className='demo-div'>
                <img className='demo-creative' src={demoSlide5} alt='Image 2' />
              </a>
            </div>
          </SplideSlide>
        </Splide>
        <ul className='list-unstyled home-ul'>
          <li className='shape-1 shape'>
            <img src={bigBubble} alt='' />
          </li>
          <li className='shape-2 shape'>
            <img src={blueBubble} alt='' />
          </li>
          <li className='shape-3 shape'>
            <img src={whiteBubble} alt='' />
          </li>
          <li className='shape-4 shape'>
            <img src={purbleBubble} alt='' />
          </li>
        </ul>
      </div>
    </>
  );
};
