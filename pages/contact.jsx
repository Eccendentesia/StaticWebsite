import React from 'react'
import "./css/contact.css"
import { IoBriefcaseOutline } from 'react-icons/io5'
import { MdCall } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { AiFillInstagram } from "react-icons/ai";
import { SiWhatsapp } from "react-icons/si";

export const Contact = () => {
  return (<>
      <div className="container-fluid py-4" id="contact"  style={{backgroundColor:"#0a0e1afa"}}>
           <div className="container py-5">
              <p style={{fontSize:"50px"}} className="text-center text-white fw-bolder">Get In <span style={{color:"rgba(6, 255, 217, 1 )"}}>Touch</span></p>
              <p className="text-center mb-5" style={{color:"#94a3b8"}}>Interested in connecting? Feel free to reach out for professional opportunities or collaboration</p>
              <div className="row mx-lg-5 mx-sm-2 mb-5 justify-content-center">
                <div className="col-lg-3 col-sm-12">
                      <div className=" px-2  py-4 mb-3 contact-info-card">
                         <span className="ms-2 mb-2 contact-logo" >< MdCall size={20}/></span>
                         <div className="d-inline">
                          <h6 style={{color:"rgba(6, 255, 217, 1 )"}} className="ms-4 mb-1">Phone</h6>
                         <h6 className="text-white ms-4">28736798139</h6>
                         </div>
                      </div>
                </div>
                <div className="col-lg-3 col-sm-12">
                      <div className=" px-2 py-4 mb-3  contact-info-card">
                         <span className="ms-2 mb-2 contact-logo" >< IoBriefcaseOutline size={20}/></span>
                        <div className="d-inline"> 
                          <h6 style={{color:"rgba(6, 255, 217, 1 )"}} className="ms-4 mb-1">Email</h6>
                         <h6 className="text-white ms-4">example@gmail.com</h6>
                         </div>
                      </div>
                </div>
                <div className="col-lg-3 col-sm-12">
                      <div className=" px-2  py-4 mb-3 contact-info-card">
                         <span className="ms-2 mb-2 contact-logo" >< FaLocationDot size={20}/></span>
                         <div className="d-inline">
                          <h6 style={{color:"rgba(6, 255, 217, 1 )"}} className="ms-4 mb-1">Location</h6>
                          <h6 className="text-white ms-4">99 street , carolina</h6>
                         </div>
                      </div>
                </div>
              </div>
              <div style={{maxWidth:"1400px",backgroundColor:"rgba(15, 23, 42, 0.6)" , border:"1px solid rgba(6, 255, 217, 1 )" , borderRadius:"12px"}} className="contact-last d-flex justify-content-center py-5">
                <div style={{width:"500px"}}>
                  <h2 className="text-center text-white">Let's Connect</h2>
                  <p className="contact-card-text text-center mb-3" style={{color:"#94a3b8"}}>Whether you're looking to discuss dialysis care, professional opportunities, or just want to connect, I'm always open to meaningful conversations.</p>
                  <div className="contact-icons d-flex justify-content-center gap-3 my-3">
                      <div  className="d-flex justify-content-center align-items-center contact-button"><AiFillInstagram size={30}/></div>
                      <div  className="d-flex justify-content-center align-items-center contact-button" ><SiWhatsapp size={30}/></div>
                  </div>
                  <div className="mt-4 d-flex justify-content-center ">
                      <div style={{height:"55px" , width:"180px" , backgroundColor:"rgba(6, 255, 217, 1 )" , borderRadius:"10px"}} className="d-flex justify-content-center align-items-center">Send Message</div>
                  </div>
                </div>
              </div>
           </div>
      </div>
    </>)
}
