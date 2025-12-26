import React from 'react'
import './css/exp.css'
import { FaRegCircleCheck } from "react-icons/fa6";
import { IoBriefcaseOutline } from "react-icons/io5";

export const Experience  = () => {
  return (<>
      <div className="container-fluid py-5" style={{backgroundColor:"#0a0e1afa"}}>
        <div className="container py-5">
            <h2 className="text-center text-white fw-bolder" style={{fontSize:"50px"}}>Professional <span style={{color:"rgba(6, 255, 217, 1 )"}}>Experience </span></h2>
            <p className="text-center mb-5" style={{color:"#94a3b8"}}>A track record of excellence in dialysis care and patient outcomes</p>
            <div className="row justify-content-center mt-5">
                <div className="exp-card col-lg-6 p-4 my-3 mx-sm-2" >
                    <div className="container " >
                         <div className="row my-4">
                            <div className="col-md-8 d-flex">
                                  <div className="me-2 d-flex justify-content-center align-items-center" style={{backgroundColor:" rgba(17, 59, 53, 0.5)",borderRadius:"15px",width:"55px",color:"rgba(6, 255, 217, 1 )" , height:"55px"}}>< IoBriefcaseOutline size={24}/></div>
                                  <div>
                                    <h2 className="text-white">Dialysis Technician</h2>
                                  <p style={{color:"rgba(6, 255, 217, 1 )"}}>Memorial Regional Hospital</p>
                                  </div>

                            </div>
                            <div className="col-md-4" style={{color:"#94a3b8"}}>
                                <p className="text-end py-0 my-0">June 2023 - Present</p>
                                <p className="text-end py-0 my-0">Hollywood, FL</p>
                                <p className="text-end py-0 my-3"><span className="px-4 py-1" style={{backgroundColor:" rgba(17, 59, 53, 0.5)",color:"rgba(6, 255, 217, 1 )",borderRadius:"20px" }}>Internship</span></p>
                            </div>
                         </div>
                    </div>
                    <div>
                          <ul className="navbar-nav ms-5" style={{color:"#94a3b8"}}>
                            <li className="nav-item mb-3"><FaRegCircleCheck className="me-3 " style={{color:"rgba(6, 255, 217, 1 )"}} size={20}/>Prepare and operate hemodialysis machines for patient treatments</li>
                            <li className="nav-item mb-3"><FaRegCircleCheck className="me-3 " style={{color:"rgba(6, 255, 217, 1 )"}} size={20}/>Monitor patient vital signs and respond to any complications during dialysis</li>
                            <li className="nav-item mb-3"><FaRegCircleCheck className="me-3 " style={{color:"rgba(6, 255, 217, 1 )"}} size={20}/>Maintain sterile environment and ensure compliance with infection control protocols </li>
                            <li className="nav-item mb-3"><FaRegCircleCheck className="me-3 " style={{color:"rgba(6, 255, 217, 1 )"}} size={20}/>Document patient care activities and treatment outcomes in electronic medical records</li>
                            <li className="nav-item mb-3"><FaRegCircleCheck className="me-3 " style={{color:"rgba(6, 255, 217, 1 )"}} size={20}/>Collaborate with nursing staff and nephrologists to optimize patient care</li>
                            <li className="nav-item mb-3"><FaRegCircleCheck className="me-3 " style={{color:"rgba(6, 255, 217, 1 )"}} size={20}/>Educate patients on post-treatment care and dietary restrictions</li>
                          </ul>
                    </div>
                </div>
                 <div className="exp-card col-lg-6 p-4 my-3 mx-sm-3" >
                    <div className="container" >
                         <div className="row my-3">
                            <div className="col-md-8 d-flex">
                                  <div className="me-2 d-flex justify-content-center align-items-center" style={{backgroundColor:" rgba(17, 59, 53, 0.5)",borderRadius:"15px",width:"55px",color:"rgba(6, 255, 217, 1 )" , height:"55px"}}>< IoBriefcaseOutline size={24}/></div>
                                  <div>
                                    <h2 className="text-white">Dialysis Technician</h2>
                                  <p style={{color:"rgba(6, 255, 217, 1 )"}}>Memorial Regional Hospital</p>
                                  </div>

                            </div>
                            <div className="col-md-4" style={{color:"#94a3b8"}}>
                                <p className="text-end py-0 my-0">June 2023 - Present</p>
                                <p className="text-end py-0 my-0">Hollywood, FL</p>
                                <p className="text-end py-0 my-3"><span className="px-4 py-1" style={{backgroundColor:" rgba(17, 59, 53, 0.5)",color:"rgba(6, 255, 217, 1 )",borderRadius:"20px" }}>Internship</span></p>
                            </div>
                         </div>
                    </div>
                    <div>
                          <ul className="navbar-nav ms-5" style={{color:"#94a3b8"}}>
                            <li className="nav-item mb-3"><FaRegCircleCheck className="me-3 " style={{color:"rgba(6, 255, 217, 1 )"}} size={20}/>Prepare and operate hemodialysis machines for patient treatments</li>
                            <li className="nav-item mb-3"><FaRegCircleCheck className="me-3 " style={{color:"rgba(6, 255, 217, 1 )"}} size={20}/>Monitor patient vital signs and respond to any complications during dialysis</li>
                            <li className="nav-item mb-3"><FaRegCircleCheck className="me-3 " style={{color:"rgba(6, 255, 217, 1 )"}} size={20}/>Maintain sterile environment and ensure compliance with infection control protocols </li>
                            <li className="nav-item mb-3"><FaRegCircleCheck className="me-3 " style={{color:"rgba(6, 255, 217, 1 )"}} size={20}/>Document patient care activities and treatment outcomes in electronic medical records</li>
                            <li className="nav-item mb-3"><FaRegCircleCheck className="me-3 " style={{color:"rgba(6, 255, 217, 1 )"}} size={20}/>Collaborate with nursing staff and nephrologists to optimize patient care</li>
                            <li className="nav-item mb-3"><FaRegCircleCheck className="me-3 " style={{color:"rgba(6, 255, 217, 1 )"}} size={20}/>Educate patients on post-treatment care and dietary restrictions</li>
                          </ul>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </>)
}
