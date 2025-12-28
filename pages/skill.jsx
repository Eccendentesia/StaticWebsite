import React from 'react'
import "./css/skill.css"
import { GiAchievement } from "react-icons/gi";
import { IoPulseSharp } from "react-icons/io5";
import { GoDotFill } from "react-icons/go";
import { FiShield } from "react-icons/fi";
import { MdPeopleAlt } from "react-icons/md";
import { FaHeartbeat } from "react-icons/fa";

export const Skills  = () => {
  return (<>
      <div className="container-fluid py-5" id="skill" style={{backgroundColor:"#0a0e1a"}}>
        <div className="container my-5">
            <h1 className="text-white skill-name fw-bolder text-center mb-3" style={{fontSize:"50px"}}> Skills & <span style={{color:"rgba(6, 255, 217, 1 )"}}>Expertize</span></h1>
            <p className="text-center mb-5 " style={{color:"#94a3b8"}}>Comprehensive knowledge and hands-on experience across all aspects of dialysis care</p>
            <div className="row">
                <div className="col-lg-6 mb-4">
                    <div className="card" style={{ backgroundColor:"rgba(15, 23, 42, 0.6)" , borderRadius:"20px"}}>
                        <div className="skill-card-header d-flex gap-4 px-5 mt-5">
                               <span className="d-flex justify-content-center align-items-center" style={{height:"50px" ,width:"50px" , backgroundColor:" rgba(17, 59, 53, 0.5)" , color:"rgba(6, 255, 217, 1 )" ,borderRadius:"10px"}}><IoPulseSharp size={25}/></span>
                               <h3 className="text-white">Technical Skills</h3>
                        </div>
                        <div className="skill-cards d-flex px-5 my-3">
                            <ul className="navbar-nav left" style={{color:"#94a3b8"}}>
                                 <li className="nav-item mb-2"> <GoDotFill className="me-3" style={{color:"rgba(6,255,217,1)"}}/>Hemodialysis Machine Operation</li>
                                 <li className="nav-item mb-2"> <GoDotFill className="me-3" style={{color:"rgba(6,255,217,1)"}}/>Water Treatment Systems</li>
                                 <li className="nav-item mb-2"> <GoDotFill className="me-3" style={{color:"rgba(6,255,217,1)"}}/>Equipment Maintenance</li>
                            </ul>
                            <ul className="navbar-nav right" style={{color:"#94a3b8"}}>
                                  <li className="nav-item mb-2"> <GoDotFill className="me-3" style={{color:"rgba(6,255,217,1)"}}/>Vascular Access Cannulation</li>
                                 <li className="nav-item mb-2"> <GoDotFill className="me-3" style={{color:"rgba(6,255,217,1)"}}/>Patient Vital Monitoring</li>
                                 <li className="nav-item mb-2"> <GoDotFill className="me-3" style={{color:"rgba(6,255,217,1)"}}/>Electronic Medical Records</li>
                            </ul>
                        </div>
                    </div>
                </div>
                 <div className="col-lg-6 mb-4">
                    <div className="card" style={{ backgroundColor:"rgba(15, 23, 42, 0.6)" , borderRadius:"20px"}}>
                        <div className="skill-card-header d-flex gap-4 px-5 mt-5">
                               <span className="d-flex justify-content-center align-items-center" style={{height:"50px" ,width:"50px" , backgroundColor:" rgba(17, 59, 53, 0.5)" , color:"rgba(6, 255, 217, 1 )" ,borderRadius:"10px"}}><FaHeartbeat size={25}/></span>
                               <h3 className="text-white">Clinal expertise</h3>
                        </div>
                        <div className="skill-cards d-flex px-5 my-3">
                            <ul className="navbar-nav left" style={{color:"#94a3b8"}}>
                                 <li className="nav-item mb-2"> <GoDotFill className="me-3" style={{color:"rgba(6,255,217,1)"}}/>Hemodialysis Machine Operation</li>
                                 <li className="nav-item mb-2"> <GoDotFill className="me-3" style={{color:"rgba(6,255,217,1)"}}/>Water Treatment Systems</li>
                                 <li className="nav-item mb-2"> <GoDotFill className="me-3" style={{color:"rgba(6,255,217,1)"}}/>Equipment Maintenance</li>
                            </ul>
                            <ul className="navbar-nav right" style={{color:"#94a3b8"}}>
                                  <li className="nav-item mb-2"> <GoDotFill className="me-3" style={{color:"rgba(6,255,217,1)"}}/>Vascular Access Cannulation</li>
                                 <li className="nav-item mb-2"> <GoDotFill className="me-3" style={{color:"rgba(6,255,217,1)"}}/>Patient Vital Monitoring</li>
                                 <li className="nav-item mb-2"> <GoDotFill className="me-3" style={{color:"rgba(6,255,217,1)"}}/>Electronic Medical Records</li>
                            </ul>
                        </div>
                    </div>
                </div>
                 <div className="col-lg-6 mb-4">
                    <div className="card" style={{ backgroundColor:"rgba(15, 23, 42, 0.6)" , borderRadius:"20px"}}>
                        <div className="skill-card-header d-flex gap-4 px-5 mt-5">
                               <span className="d-flex justify-content-center align-items-center" style={{height:"50px" ,width:"50px" , backgroundColor:" rgba(17, 59, 53, 0.5)" , color:"rgba(6, 255, 217, 1 )" ,borderRadius:"10px"}}>< MdPeopleAlt size={25}/></span>
                               <h3 className="text-white">patients Care</h3>
                        </div>
                        <div className="skill-cards d-flex px-5 my-3">
                            <ul className="navbar-nav left" style={{color:"#94a3b8"}}>
                                 <li className="nav-item mb-2"> <GoDotFill className="me-3" style={{color:"rgba(6,255,217,1)"}}/>Hemodialysis Machine Operation</li>
                                 <li className="nav-item mb-2"> <GoDotFill className="me-3" style={{color:"rgba(6,255,217,1)"}}/>Water Treatment Systems</li>
                                 <li className="nav-item mb-2"> <GoDotFill className="me-3" style={{color:"rgba(6,255,217,1)"}}/>Equipment Maintenance</li>
                            </ul>
                            <ul className="navbar-nav right" style={{color:"#94a3b8"}}>
                                  <li className="nav-item mb-2"> <GoDotFill className="me-3" style={{color:"rgba(6,255,217,1)"}}/>Vascular Access Cannulation</li>
                                 <li className="nav-item mb-2"> <GoDotFill className="me-3" style={{color:"rgba(6,255,217,1)"}}/>Patient Vital Monitoring</li>
                                 <li className="nav-item mb-2"> <GoDotFill className="me-3" style={{color:"rgba(6,255,217,1)"}}/>Electronic Medical Records</li>
                            </ul>
                        </div>
                    </div>
                </div>
                 <div className="col-lg-6 mb-4">
                    <div className="card" style={{ backgroundColor:"rgba(15, 23, 42, 0.6)" , borderRadius:"20px"}}>
                        <div className="skill-card-header d-flex gap-4 px-5 mt-5">
                               <span className="d-flex justify-content-center align-items-center" style={{height:"50px" ,width:"50px" , backgroundColor:" rgba(17, 59, 53, 0.5)" , color:"rgba(6, 255, 217, 1 )" ,borderRadius:"10px"}}><FiShield size={25}/></span>
                               <h3 className="text-white">Compilance and safety</h3>
                        </div>
                        <div className="skill-cards d-flex px-5 my-3">
                            <ul className="navbar-nav left" style={{color:"#94a3b8"}}>
                                 <li className="nav-item mb-2"> <GoDotFill className="me-3" style={{color:"rgba(6,255,217,1)"}}/>Hemodialysis Machine Operation</li>
                                 <li className="nav-item mb-2"> <GoDotFill className="me-3" style={{color:"rgba(6,255,217,1)"}}/>Water Treatment Systems</li>
                                 <li className="nav-item mb-2"> <GoDotFill className="me-3" style={{color:"rgba(6,255,217,1)"}}/>Equipment Maintenance</li>
                            </ul>
                            <ul className="navbar-nav right" style={{color:"#94a3b8"}}>
                                  <li className="nav-item mb-2"> <GoDotFill className="me-3" style={{color:"rgba(6,255,217,1)"}}/>Vascular Access Cannulation</li>
                                 <li className="nav-item mb-2"> <GoDotFill className="me-3" style={{color:"rgba(6,255,217,1)"}}/>Patient Vital Monitoring</li>
                                 <li className="nav-item mb-2"> <GoDotFill className="me-3" style={{color:"rgba(6,255,217,1)"}}/>Electronic Medical Records</li>
                            </ul>
                        </div>
                    </div>
                </div>
               
            </div>
            <div className="my-4 d-flex justify-content-center align-items-center">
                <h6 className="px-3 py-2 text-center " style={{border:"0.5px solid rgba(6, 255, 217, 1 )",color:"rgba(6, 255, 217, 1 )",borderRadius:"40px" , maxWidth:"350px" , backgroundColor:" rgba(17, 59, 53, 0.5)"}}><GiAchievement className="me-3" size={25}/>Certifications & Credentials</h6>
            </div>
            <div className="row mx-lg-5 mx-sm-1">
                <div className="col-lg-4">
                     <div className="card mb-2 py-4 px-4" style={{ backgroundColor:"rgba(15, 23, 42, 0.6)" , borderRadius:"15px"}}>
                        <div className="d-flex justify-content-center align-items-center  my-3">
                            <span className="d-flex justify-content-center align-items-center" style={{height:"50px" ,width:"50px" , backgroundColor:" rgba(17, 59, 53, 0.5)" , color:"rgba(6, 255, 217, 1 )" ,borderRadius:"10px"}}><IoPulseSharp size={25}/></span>
                        </div>
                        <h5 className="text-center text-white"> Certified Clinical Hemodialysis Technician (CCHT)  </h5>
                        <p className="text-center" style={{color:"#94a3b8"}}>Nephrology Nursing Certification Commission</p>
                        <div className="d-flex justify-content-center align-items-center  my-2">
                             <p className="text-end py-0 my-2"><span className="px-4 py-1" style={{backgroundColor:" rgba(17, 59, 53, 0.5)",color:"rgba(6, 255, 217, 1 )",borderRadius:"20px" }}>2025</span></p>
                        </div>
                     </div>
                </div>
                <div className="col-lg-4">
                     <div className="card mb-2 py-4 px-4" style={{ backgroundColor:"rgba(15, 23, 42, 0.6)" , borderRadius:"15px"}}>
                        <div className="d-flex justify-content-center align-items-center  my-3">
                            <span className="d-flex justify-content-center align-items-center" style={{height:"50px" ,width:"50px" , backgroundColor:" rgba(17, 59, 53, 0.5)" , color:"rgba(6, 255, 217, 1 )" ,borderRadius:"10px"}}><IoPulseSharp size={25}/></span>
                        </div>
                        <h5 className="text-center text-white">BLS Healthcare Provider </h5>
                        <p className="text-center" style={{color:"#94a3b8"}}>Nephrology Nursing Certification Commission</p>
                        <div className="d-flex justify-content-center align-items-center  my-2">
                             <p className="text-end py-0 my-2"><span className="px-4 py-1" style={{backgroundColor:" rgba(17, 59, 53, 0.5)",color:"rgba(6, 255, 217, 1 )",borderRadius:"20px" }}>2025</span></p>
                        </div>
                     </div>
                </div>
                <div className="col-lg-4">
                     <div className="card mb-2 py-4 px-4" style={{ backgroundColor:"rgba(15, 23, 42, 0.6)" , borderRadius:"15px"}}>
                        <div className="d-flex justify-content-center align-items-center  my-3">
                            <span className="d-flex justify-content-center align-items-center" style={{height:"50px" ,width:"50px" , backgroundColor:" rgba(17, 59, 53, 0.5)" , color:"rgba(6, 255, 217, 1 )" ,borderRadius:"10px"}}><IoPulseSharp size={25}/></span>
                        </div>
                        <h5 className="text-center text-white">Infection Prevention & Control </h5>
                        <p className="text-center" style={{color:"#94a3b8"}}>Nephrology Nursing Certification Commission</p>
                        <div className="d-flex justify-content-center align-items-center  my-2">
                             <p className="text-end py-0 my-2"><span className="px-4 py-1" style={{backgroundColor:" rgba(17, 59, 53, 0.5)",color:"rgba(6, 255, 217, 1 )",borderRadius:"20px" }}>2025</span></p>
                        </div>
                     </div>
                </div>
            </div>
        </div>
      </div>
    </>)
}

