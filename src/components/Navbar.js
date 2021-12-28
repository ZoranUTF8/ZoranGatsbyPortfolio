import React from "react";
import logo from "../assets/images/favicon.ico";
import { FaAlignRight } from "react-icons/fa";
import pageLinks from "../constants/links";
import { Link } from "gatsby";

const Navbar = () => {
  return (
    <div className="nav-center">
      <div className="nav-header">
        <Link to="/">
          <img src={logo} alt="logo" />
        </Link>

        <button type="button" className="toggle-btn">
          <FaAlignRight />
        </button>
      </div>
      <div className="nav-links">
        {pageLinks.map((link) => {
          return (
            <Link key={link.id} to={link.url}>
              {link.text}
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Navbar;
