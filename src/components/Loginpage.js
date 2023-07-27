import React, { useState } from "react";

const Loginpage = () => {
  const [username, setusername] = useState("");
  const [password, setpassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const checklogin = () => {
    if (username.trim() === "" || password === "") {
      setErrorMessage("Please fill in both username and password.");
    } else if (username === "admin" && password === "1111") {
      alert("login successful");
      setErrorMessage("");
      setusername("");
      setpassword(""); 
    } else {
      setErrorMessage("Invalid username or password.");
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
            placeholder="Enter username"
            className="cover-label"
            onChange={(e) => setusername(e.target.value)}
          />
          <label className="cover-label">Password</label>
          <input
            type="Password"
            placeholder="Enter password"
            className="cover-label"
            onChange={(e) => setpassword(e.target.value)}
          />
          {errorMessage && <p className="error-message">{errorMessage}</p>}

          <button onClick={checklogin} class="cover-button">
            Login
          </button>
        </form>
      </div>
    </section>
  );
};

export default Loginpage;
