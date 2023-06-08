import React, { useRef } from 'react';
import { useNavigate } from 'react-router-dom';

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
      <form className="container mt-4" onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="email " className="form-label">Email address</label>
          <input ref={emailRef} type="email" className="form-control" id="email" name="email" aria-describedby="email" />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">Password</label>
          <input ref={passwordRef} type="password" name="password" className="form-control" id="password" />
        </div>
        <button type="submit" className="btn btn-primary">Log In</button>
      </form>
    </>
  )
}

export default Login;