import React from 'react';
import './Navbar.css';

const NavBar = ({ setCurrentForm }) => {
  return (
    <header>
      <div className="navBar">
        <div className="logo">
          <i className="fa fa-home"></i>
          Selling 
        </div>
        <nav>
          <ul>
            <li><a href="#" onClick={() => setCurrentForm("main")}>Home</a></li>
            <li><a href="#" onClick={() => setCurrentForm("projects")}>Projects</a></li>
            <li><a href="#" onClick={() => setCurrentForm("about")}>About Us</a></li>
            <li><a href="#" onClick={() => setCurrentForm("contact")}>Contact</a></li>
            <li><a href="#" onClick={() => setCurrentForm("login")}>Login</a></li>
            <li><a href="#" onClick={() => setCurrentForm("PropertyListing")}>PropertyListing</a></li>

            {/* <li><a href="#" onClick={() => setCurrentForm("BecomeAHost")}>Become a Host</a></li> */}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default NavBar;
// import React from "react";
// import { Link } from "react-router-dom";
// import "./NavBar.css";

// const NavBar = ({ setCurrentForm }) => {
//   return (
//     <header className="navBar">
//       <div className="logo">
//         <i className="fa fa-home"></i> Rentlar
//       </div>
//       <nav>
//         <ul>
//           <li><Link to="/">Home</Link></li>
//           <li><Link to="/projects">Projects</Link></li>
//           <li><Link to="/about">About Us</Link></li>
//           <li><Link to="/contact">Contact</Link></li>
//           <li><Link to="/login">Login</Link></li>
//           <li><Link to="/list-property">Become a Host</Link></li>
//         </ul>
//       </nav>
//     </header>
//   );
// };

// export default NavBar;
