import React, { useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Login = (props) => {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  let navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("http://localhost:5000/api/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email: emailRef.current.value, password: passwordRef.current.value })
    });
    const json = await response.json();
    if (json.success) {
      // redirect
      localStorage.setItem("token", json.authtoken);
      navigate("/");
      props.showAlert(json.message, "success");
    } else {
      props.showAlert(json.error, "danger");
    }
  }

  return (
    <>
      <h1>Log In</h1>
      <form className="card rounded-3 mt-4 p-3 p-md-4 shadow-sm" onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="email " className="form-label">Email address</label>
          <input ref={emailRef} type="email" className="form-control" id="email" name="email" aria-describedby="email" required />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">Password</label>
          <input ref={passwordRef} type="password" name="password" className="form-control" id="password" required />
        </div>
        <button type="submit" className="btn btn-primary">Log In</button>
        <div className="mt-3">
          <span className="text-success">New to iNotebook?</span>
          <Link to="/signup" className="btn btn-success ms-3">Sign Up</Link >
        </div>
      </form>
    </>
  )
}

export default Login;