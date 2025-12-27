import React ,{useRef} from "react";
import doc from "../images/doc.png"
import "./css/hero.css";
import gsap from 'gsap'
import {useGSAP} from '@gsap/react'
import {Herogsap} from './GSAP/herogsap'

export const Hero = () => {
   const heroRef = useRef(null);

  useGSAP(() => {
    Herogsap();
  }, []);

  return (
    <>
    <div className="hero-container container-fluid py-5"  ref={heroRef}>      
      <div className="container  py-5" >
        <div className="row py-5 mt-5">
          <div className="col-md-6 d-flex justify-content-center align-items-center ">
            <div>
              <h5 className="gsap-1 px-2 py-2 hero-certificate-logo text-center">
                Certified Dialysis Technician
              </h5>
              <div className="home-title-wrapper">
                <div className="gsap-1 home-title-name mt-3">Tajun Shaikh </div>
                <div className="gsap-1  home-title">
                  Delivering Excellence in Patient Care
                </div>
              </div>
              <p className="gsap-1 mt-3 hero-text">Dedicated to providing compassionate, high-quality dialysis care with cutting-edge technical expertise and patient-centered approach.</p>
              <div className="gsap-1hero-buttons d-flex justify-content-start gap-5 mt-5">
                <button className="hero-button-1 px-5 py-3">Get In Touch  </button>
                <button className="hero-button-2 px-5 py-3">View Resume</button>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="container h-100 ">
                <img src={doc} className="rounded h-100 w-100 "/>
            </div>
          </div>
        </div>
      </div>
      </div>

    </>
  );
};
