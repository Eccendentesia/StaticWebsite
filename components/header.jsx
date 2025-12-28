import React , {useState , useEffect} from "react";
import { LuHeartPulse } from "react-icons/lu";

export const Header = () => {
   const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`navbar navbar-expand-lg fixed-top   ${scrolled ? "header-nav-scrolled" : "header-nav"}`}>
      <div className="container">
        <a className="fw-bold nav-link logo-name"  href="#hero">
          <LuHeartPulse  className="me-3" size={38}/>
          Tajun <span className="">Shaikh</span>
        </a>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
          <ul className="navbar-nav gap-lg-4 ">
            <li className="nav-item">
              <a className="nav-link text-white" href="#hero">Home</a>
            </li>

            <li className="nav-item">
              <a className="nav-link text-white" href="#about">About</a>
            </li>

            <li className="nav-item">
              <a className="nav-link text-white" href="#experience">Experience</a>
            </li>

            <li className="nav-item">
              <a className="nav-link text-white" href="#contact">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
