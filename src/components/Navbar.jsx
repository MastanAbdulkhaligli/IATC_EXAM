import React from "react";
import "./navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="container">
      <div className="logo">
        <Link to="/">Mastan Abdulkhaligli</Link>
      </div>
      <div className="pages">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/cryptos">Cryptos</Link>
          </li>
          <li>
            <Link to="/trends">Trends</Link>
          </li>
          <li>
            <Link to="/taskseven">Task 7</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
