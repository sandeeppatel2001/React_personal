import React, { useState } from "react";
import classes from "./Login.module.css";
const LoginOverlay = (props) => {
  const [username, setUsername] = useState("");
  //   const [password, setPassword] = useState("");

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handleLogin = () => {
    // You can implement your login logic here.
    console.log("Username: " + username);
    // console.log("Password: " + password);
    props.item(username);
  };

  return (
    <div className={classes.LoginOverlay}>
      <div>
        <label>Username:</label>
        <textarea
          type="detail"
          value={username}
          placeholder="Research Content"
          onChange={handleUsernameChange}
        />
      </div>

      <button onClick={handleLogin}>Submite</button>
    </div>
  );
};

export default LoginOverlay;
