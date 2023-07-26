import React, { useState } from "react";

const Loginpage = () => {
  const [username, setusername] = useState("");
  const [password, setpassword] = useState("");

  const checklogin = () => {
    if (username === "admin" && password === "1111") {
      alert("login successful");
    } else {
      alert("invaliduser");
    }
  };

  return (
    <section class="container" id="login">
      <div className="cover-card">
        <h1 class="cover-title">Login</h1>
        <form action="" className="cover-group">
            <label className="cover-label">Username</label>
            <input
              type="text"
              placeholder="username"
              className="cover-label"
              onChange={(e) => setusername(e.target.value)}
            />
            <label className="cover-label">Password</label>
            <input
              type="Password"
              placeholder="password"
              className="cover-label"
              onChange={(e) => setpassword(e.target.value)}
            />

            <button onClick={checklogin} class="cover-button">
              Login
            </button>
      
        </form>
      </div>
    </section>
  );
};

export default Loginpage;
