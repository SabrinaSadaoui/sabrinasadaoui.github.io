import "./Navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [Mobile, setMobile] = useState(false);
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 600) {
        setMobile(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <a href="#" onClick={() => setMobile(false)}>
          <svg
            version="1.1"
            id="logoNav"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            viewBox="0 0 201.4 180.5"
            width="100%"
            height="100%"
          >
            <polyline
              id="cadreRose"
              stroke="var(--main-color)"
              fill="none"
              className="st0"
              points="25.9,90.4 25.9,15.4 175.9,15.4 175.9,165.4 100.9,165.4 "
            />
            <path
              id="s-sab"
              className="st1"
              fill="var(--white)"
              d="M46.2,76.2V64.9c2,1.7,4.3,3,6.7,3.9c2.4,0.9,4.8,1.3,7.3,1.3c1.4,0,2.7-0.1,3.8-0.4
	c1.1-0.3,2-0.6,2.7-1.1c0.7-0.5,1.3-1,1.6-1.6c0.4-0.6,0.5-1.3,0.5-2c0-1-0.3-1.9-0.8-2.6c-0.6-0.8-1.3-1.5-2.3-2.2
	c-1-0.7-2.1-1.3-3.5-1.9c-1.3-0.6-2.8-1.2-4.3-1.9c-4-1.6-6.9-3.7-8.8-6C46.9,48,46,45.1,46,41.7c0-2.6,0.5-4.9,1.6-6.8
	c1.1-1.9,2.5-3.5,4.3-4.7c1.8-1.2,3.9-2.1,6.3-2.7c2.4-0.6,4.9-0.9,7.6-0.9c2.6,0,5,0.2,7,0.5c2,0.3,3.9,0.8,5.6,1.5v10.6
	c-0.8-0.6-1.8-1.1-2.8-1.6s-2-0.8-3.1-1.1c-1.1-0.3-2.1-0.5-3.2-0.7c-1-0.1-2-0.2-3-0.2c-1.3,0-2.5,0.1-3.5,0.4
	c-1.1,0.2-2,0.6-2.7,1c-0.7,0.4-1.3,1-1.7,1.6C58.2,39.3,58,40,58,40.8c0,0.8,0.2,1.6,0.7,2.3c0.4,0.7,1.1,1.3,1.9,1.9
	c0.8,0.6,1.8,1.2,3,1.8c1.2,0.6,2.5,1.2,4,1.8c2,0.8,3.8,1.7,5.5,2.7c1.6,1,3,2,4.1,3.2c1.2,1.2,2,2.6,2.6,4.1
	c0.6,1.5,0.9,3.3,0.9,5.4c0,2.8-0.5,5.2-1.6,7.1c-1.1,1.9-2.5,3.5-4.4,4.7c-1.8,1.2-4,2-6.4,2.6c-2.4,0.5-5,0.8-7.7,0.8
	c-2.8,0-5.4-0.2-7.9-0.7C50.2,77.9,48,77.2,46.2,76.2z"
            />
            <path
              id="a-sab"
              className="st1"
              fill="var(--white)"
              d="M164.2,79h-12.9l-3.7-11.7H129L125.3,79h-12.8l19.1-52.4h14L164.2,79z M144.9,58.3l-5.6-17.6
	c-0.4-1.3-0.7-2.9-0.9-4.7h-0.3c-0.1,1.5-0.4,3.1-0.9,4.6l-5.7,17.8H144.9z"
            />
            <path
              id="s-sad"
              className="st2"
              fill="var(--main-color)"
              d="M34.7,132.2l8-8c0.2,2.7,0.9,5.1,2,7.5c1.1,2.3,2.5,4.3,4.2,6.1c1,1,2,1.8,2.9,2.4
	c0.9,0.6,1.8,1,2.7,1.1c0.8,0.2,1.6,0.2,2.3,0c0.7-0.2,1.3-0.5,1.8-1.1c0.7-0.7,1.1-1.5,1.3-2.5c0.2-0.9,0.1-2-0.1-3.2
	c-0.2-1.2-0.6-2.4-1.1-3.8c-0.5-1.4-1.1-2.8-1.7-4.4c-1.6-4-2.3-7.5-2-10.5c0.3-3.1,1.7-5.8,4-8.2c1.9-1.9,3.8-3.1,5.9-3.7
	c2.1-0.6,4.2-0.7,6.4-0.2c2.2,0.4,4.3,1.3,6.4,2.6c2.1,1.3,4.1,2.9,6,4.8c1.9,1.9,3.4,3.6,4.6,5.3c1.2,1.7,2.2,3.3,2.9,5l-7.5,7.5
	c-0.2-1-0.5-2-0.9-3.1c-0.4-1-0.9-2-1.4-3c-0.5-1-1.1-1.9-1.8-2.7c-0.6-0.8-1.3-1.6-2-2.3c-0.9-0.9-1.8-1.7-2.8-2.2s-1.8-1-2.6-1.2
	c-0.8-0.2-1.6-0.2-2.3-0.1c-0.7,0.2-1.4,0.5-1.9,1.1c-0.6,0.6-1,1.3-1.1,2.1c-0.2,0.8-0.2,1.7,0,2.7c0.2,1,0.4,2.1,0.9,3.4
	c0.4,1.2,0.9,2.6,1.6,4.1c0.8,2,1.5,4,1.9,5.8c0.5,1.8,0.7,3.6,0.6,5.2s-0.4,3.3-1,4.8c-0.7,1.5-1.7,3-3.2,4.5c-2,2-4.1,3.3-6.2,3.9
	c-2.1,0.6-4.2,0.7-6.4,0.2c-2.1-0.5-4.3-1.4-6.3-2.7c-2.1-1.4-4.1-3-6-4.9c-2-2-3.7-4-5.1-6.1C36.4,136.2,35.3,134.2,34.7,132.2z"
            />
            <path
              id="a-sad"
              className="st1"
              fill="var(--white)"
              d="M164.2,154h-12.9l-3.7-11.7H129l-3.7,11.7h-12.8l19.1-52.4h14L164.2,154z M144.9,133.3l-5.6-17.6
	c-0.4-1.3-0.7-2.9-0.9-4.7h-0.3c-0.1,1.5-0.4,3.1-0.9,4.6l-5.7,17.8H144.9z"
            />
          </svg>
        </a>
      </div>
      <ul className={Mobile ? "navbar-nav-mobile" : "navbar-nav"}>
        <li className="nav-item navbar-section">
          <a href="#parcoursSection" onClick={() => setMobile(false)}>
            Parcours
          </a>
        </li>
        <li className="nav-item navbar-section">
          <a href="#projectsSection" onClick={() => setMobile(false)}>
            Projets
          </a>
        </li>
        <li className="nav-item navbar-social">
          <a
            onClick={() => setMobile(false)}
            href="https://www.linkedin.com/in/sabrina-sadaoui-38bb18129/"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon icon={faLinkedin} size="2x" />
          </a>
        </li>
      </ul>
      <button className="nav-burger" onClick={() => setMobile(!Mobile)}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          id="burger-icon"
          viewBox="0 0 448 512"
          width="100%"
          height="100%"
        >
          <path
            fill="var(--white)"
            d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"
          />
        </svg>
      </button>
    </nav>
  );
}
