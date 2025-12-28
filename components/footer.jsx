import React from 'react'
import "../pages/css/footer.css"
import { FaHeart } from "react-icons/fa";

export const Footer  = () => {
  return (<>
      <div className="container-fluid " style={{backgroundColor:"#0a0e1a"}}>
        <div className="container d-flex justify-content-between py-4" style={{color:"#94a3b8"}}>
            <span className="footer-text">© 2025 Jordan Martinez. All rights reserved.</span>
            <span className="footer-text">Made with <FaHeart style={{color:"rgba(6, 255, 217, 1 )"}} className="mx-1"/> for patient care excellence</span>
            <span className="footer-text">Certified Dialysis Technician</span>
        </div>
      </div>
    </>)
}
