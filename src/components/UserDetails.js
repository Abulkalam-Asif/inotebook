import React, { useState, useEffect } from 'react'

const UserDetails = (props) => {
  const [user, setUser] = useState({ name: "", email: "", date: "" });

  useEffect(() => {
    getUserData();
  }, [])


  const getUserData = async () => {
    const response = await fetch("http://localhost:5000/api/auth/getuser", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem("token")
      }
    });
    const { user } = await response.json();
    setUser({ name: user.name, email: user.email, date: user.date });
  }

  return (
    <>
      <div className="container">
        <div>
          <span>Name: </span>
          <span>{user.name}</span>
        </div>
        <div>
          <span>Email: </span>
          <span>{user.email}</span>
        </div>
        <div>
          <span>Created On: </span>
          <span>{user.date}</span>
        </div>
      </div>
    </>
  )
}

export default UserDetails