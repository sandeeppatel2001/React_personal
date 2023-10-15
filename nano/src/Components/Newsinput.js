import React, { useState } from "react";
import classes from "./Login.module.css";
const Newsinput = (props) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleLogin = () => {
    // You can implement your login logic here.
    console.log("Heading: " + username);
    console.log("Content: " + password);
    props.fun([username, password]);
  };

  return (
    <div style={{ margin: "3%" }} className={classes.LoginOverlay}>
      <h2>Login</h2>
      <div>
        {/* <label>Heading:</label> */}
        <textarea
          style={{ height: "25px", marginBottom: "2%" }}
          type="text"
          value={username}
          onChange={handleUsernameChange}
          placeholder="Enter your Heading Here"
        />
      </div>
      <div>
        {/* <label>Content</label> */}
        <textarea
          type="password"
          value={password}
          onChange={handlePasswordChange}
          placeholder="Enter your Content Here"
        />
      </div>
      <button onClick={handleLogin}>Submite</button>
    </div>
  );
};

export default Newsinput;
