import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import './bootstrap.min.css';

function Header(){
    return(
        <header>
        <div className = "container-fluid">
          <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <a className="navbar-brand" >Customer Information Management</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
  
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                  <Link className="nav-link" to={"/create-customer"}>Create Customer <span class="sr-only">(current)</span></Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to={"/customer"}>Customers List</Link>
                </li>
              </ul>
            </div>
          </nav>
          </div>
        </header>
    );

   
}

export default Header;