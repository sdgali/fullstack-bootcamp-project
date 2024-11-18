import React from "react";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm">
      <div className="container"> 
        <a className="navbar-brand fw-bold d-flex align-items-center" href="#">
          <img
            src="/Logo.png"
            alt="Logo"
            className="img-fluid"
            style={{ width: "160px", marginRight: "118px" }} 
          />
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
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav lg-auto me-5">
            <li className="nav-item">
              <a className="nav-link text-dark" href="#">
                Pricing
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-dark" href="#">
                Integrations
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-dark" href="#">
                Features
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-dark" href="#">
                Dashboard Templates
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-dark" href="#">
                Resources
              </a>
            </li>
          </ul>
          <div style={{margin:'0 120px'}}>
          <button className="btn btn-outline-primary me-2">Login</button>
          <button className="btn btn-primary">Start Free Trial →</button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
