import React from "react";
import {Link} from "react-router-dom";

function Navbar() {
  return (
    <div className="container">
      <nav class="navbar navbar-expand-lg border-bottom bg-body-tertiary" style={{backgroundColor:"#fff"}}>
        <div class="container p-2">
          <Link class="navbar-brand" to="/">
            <img src="media/images/logo.svg" alt="logo" style={{width:"25%"}}/>
          </Link>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <Link class="nav-link active" aria-current="page" to="signup">
                  Signup
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link active" to="about">
                    About
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link active" to="product">
                  Product
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link active" to="pricing">
                    Pricing
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link active" to="support">
                    Support
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
