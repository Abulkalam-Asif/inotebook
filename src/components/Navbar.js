import React, { useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const Navbar = (props) => {
  let location = useLocation();
  useEffect(() => {
  }, [location]);

  let navigate = useNavigate(null);
  const logOutHandler = () => {
    localStorage.removeItem("token");
    navigate("/login");
    props.showAlert("Logged out successfully", "success");
  }

  return (
    <nav className="navbar navbar-dark bg-dark navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">iNotebook</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className={`nav-link ${location.pathname === "/" ? "active" : ""}`} aria-current="page" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className={`nav-link ${location.pathname === "/about" ? "active" : ""}`} to="/about">About</Link>
            </li>
          </ul>
          {!localStorage.getItem("token") ?
            <form className="d-flex">
              <Link to="/login" className="btn btn-primary me-3">Log In</Link >
              <Link to="/signup" className="btn btn-success">Sign Up</Link >
            </form> :
            <form className="d-flex">
              <button className="btn btn-primary me-3" onClick={logOutHandler}>Log Out</button>
              <Link to="/userdetails" className="btn btn-success">User Details</Link >
            </form>
          }
        </div>
      </div>
    </nav>
  )
}

export default Navbar;