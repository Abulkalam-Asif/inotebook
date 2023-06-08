import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';

const Signup = (props) => {
  const [credentials, setCredentials] = useState({ name: "", email: "", password: "", cpassword: "" });
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { name, email, password } = credentials;
    const response = await fetch("http://localhost:5000/api/auth/createuser", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, email, password })
    });
    const json = await response.json();
    if (json.success) {
      localStorage.setItem("token", json.authtoken);
      navigate("/");
      props.showAlert(json.message, "success");
    } else {
      props.showAlert(json.error, "danger");
    }
  }
  const handleOnChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  }

  return (
    <>
      <h1>Sign Up</h1>
      <form className="card rounded-3 mt-4 p-3 p-md-4 shadow-sm" onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="name " className="form-label">Name</label>
          <input type="text" className="form-control" id="name" name="name" aria-describedby="name" onChange={handleOnChange} required minLength={3} />
        </div>
        <div className="mb-3">
          <label htmlFor="email " className="form-label">Email address</label>
          <input type="email" className="form-control" id="email" name="email" aria-describedby="email" onChange={handleOnChange} required />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">Password</label>
          <input type="password" name="password" className="form-control" id="password" onChange={handleOnChange} required minLength={5} />
        </div>
        <div className="mb-3">
          <label htmlFor="cpassword" className="form-label">Confirm Password</label>
          <input type="password" name="cpassword" className="form-control" id="cpassword" onChange={handleOnChange} required minLength={5} />
        </div>
        <button type="submit" className="btn btn-success">Sign Up</button>
        <div className="mt-3">
          <span className="text-primary">Already have an account?</span>
          <Link to="/login" className="btn btn-primary ms-3">Log In</Link >
        </div>
      </form>
    </>
  )
}

export default Signup