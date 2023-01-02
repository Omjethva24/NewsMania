
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import React from 'react'

const NavBar = () => {

  return (
    <nav className="navbar navbar-expand-lg fixed-top navbar-dark bg-dark">
      <div className="container-fluid">
        <Link className="navbar-brand" to="#"><strong>NewsMania </strong> </Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item  "><Link key="home" className="nav-link" aria-current="page" to="/">Home</Link></li>
            <li className="nav-item  "><Link key="business" className="nav-link " aria-current="page" to="/business">business</Link></li>
            <li className="nav-item  "><Link key="entertainment" className="nav-link " aria-current="page" to="/entertainment">entertainment</Link></li>
            <li className="nav-item  "><Link key="general" className="nav-link " aria-current="page" to="/general">general</Link></li>
            <li className="nav-item  "><Link key="health" className="nav-link " aria-current="page" to="/health">health</Link></li>
            <li className="nav-item  "><Link key="science" className="nav-link " aria-current="page" to="/science">science</Link></li>
            <li className="nav-item  "><Link key="sports" className="nav-link " aria-current="page" to="/sports">sports</Link></li>
            <li className="nav-item  "><Link key="technology" className="nav-link " aria-current="page" to="/technology">technology</Link></li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default NavBar