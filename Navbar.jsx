import { Link } from "react-router-dom";
import styled from "./navbar.module.css";
import { useState } from "react";

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className={styled.header}>
      <div className={styled.logo}>Metal Gate</div>
      <button className={styled.toggle} onClick={() => setOpen(!open)}>
        ☰
      </button>
      <nav className={`${styled.nav} ${open ? styled.show : ""}`}>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About Us</Link></li>
          <li><Link to="/ContactUs">Contact Us</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
