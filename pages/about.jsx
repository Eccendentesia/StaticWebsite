import React ,{useRef} from "react";
import about_data from "../JSON/about_data.json";
import {TbBuildingHospital} from 'react-icons/tb'
import { GiAchievement } from "react-icons/gi";
import { IoPulseSharp } from "react-icons/io5";
import {FaCalendarPlus} from 'react-icons/fa';
import './css/about.css'

import {Aboutgsap} from './GSAP/aboutgsap.jsx'
import gsap from 'gsap'
import {useGSAP} from '@gsap/react'
gsap.registerPlugin(useGSAP)

export const About = () => {
  const aboutRef = useRef(null)
  useGSAP(()=>{
    Aboutgsap()
  },[])
    const iconMap = {
  hospital: TbBuildingHospital,
  experience: FaCalendarPlus,
  skills: IoPulseSharp,
  achievement: GiAchievement
};
  return (
    <>
    <div ref= {aboutRef} className="container-fluid text-white  py-5" style={{backgroundColor:"#0a0e1a"}}>
              <div className="container  py-5 " >
        <h1 className="text-center fw-bolder ">
          About <span style={{color:"rgba(6, 255, 217, 1 )"}}>Me</span>
        </h1>
        <div className="about-gsap d-flex justify-content-center mb-5">
          <p
            className="text-center mt-4"
            style={{ maxWidth: "600px", fontSize: "20px", fontWeight: "600" }}
          >
            Committed to delivering exceptional patient care through technical
            expertise and compassionate service
          </p>
        </div>
        <div className="about-gsap row my-3">
          {about_data.map((item) => {
            const Iconcomp = iconMap[item.logo];
            return (
            <div className="col-lg-3" key={item.id}>
              <div className="about-gsap card py-3 text-white about-card mb-3" style={{backgroundColor:"rgba(15, 23, 42, 0.6)" , borderRadius:"15px"}}>
                <div className="card-body">
                    <div className="card-logo mb-3">
                        <div style={{border:"none" ,width:"60px",height:"60px" , backgroundColor:"rgba(17, 59, 53, 0.5) ",color:"rgba(6, 255, 217, 1 )", borderRadius:"10px"}}
                         className="logo-holder d-flex justify-content-center align-items-center">
                     {Iconcomp  &&  <Iconcomp  size={28} style={{}}/>}
                     </div>
                    </div>
                  <div className="card-title" style={{fontSize:"35px" , fontWeight:"700"}}>{item.title} </div>
                  <div className="card-text">
                    <span style={{color:"rgba(6, 255, 217, 1 )"}}>{item.text}</span>
                    <br />
                      <span style={{color:"#94a3b8"}}> {item.description}</span>
                  </div>
                </div>
              </div>
            </div>
          
          )}
        )}
        </div>
        <div className="about-gsap  d-flex justify-content-center my-5 py-5" >
            <div className=" about-para ">
                <p style={{color:"#94a3b8"}}>As a dedicated Dialysis Technician at Memorial Regional Hospital, I bring together technical expertise and compassionate patient care to deliver 
                    the highest standard of hemodialysis treatment. With over 18 months of hands-on experience, I've successfully administered more than 500 treatments 
                    while maintaining strict adherence to safety protocols and quality standards.</p>
                <p style={{color:"#94a3b8"}}>My passion lies in creating a comfortable and reassuring environment for patients undergoing dialysis, while leveraging the 
                    latest technologies and best practices to ensure optimal outcomes. I'm committed to continuous learning and staying current with advancements in renal
                     care to provide the best possible service to my patients.</p>
            </div>
        </div>
      </div>
     </div>

    </>
  );
};
