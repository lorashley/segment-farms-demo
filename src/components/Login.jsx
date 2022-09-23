import React, { useState } from "react";
import { Button, Grid, TextField } from "@mui/material";

export default function Login(props) {
  // User Login info
  const database = [
    {
      username: "user1",
      password: "pass1",
    },
    {
      username: "user2",
      password: "pass2",
    },
  ];

  const [showError, setShowError] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    // Prevent page reload
    event.preventDefault();

    // Find user login info
    const userData = database.find((user) => user.username === username);
    if (userData) {
    } else {
      setShowError(true);
    }
  };

  return (
    <Grid container spacing={2}>
      {isSubmitted ? <div>User is successfully logged in</div> : ""}
      <Grid item xs={12}>
        <h2>Login</h2>
        <div className="error" hidden={!showError}>
          Invalid Username or Password
        </div>
      </Grid>
      <Grid item xs={12}>
        <TextField required id="outlined-required" label="Email" />
      </Grid>
      <Grid item xs={12}>
        <TextField
          required
          id="outlined-required"
          label="Password"
          type="password"
        />
      </Grid>
      <Grid item xs={12}>
        <Button variant="contained" type="submit" onClick={handleSubmit}>
          Login
        </Button>
      </Grid>
    </Grid>
  );
}
