import * as React from "react";
import { Grid } from "@mui/material";
import SignUp from "../components/SignUp";
import LoginUserfront from "../components/LoginUserfront";

export default function SignIn() {
  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <LoginUserfront />
        </Grid>
        <Grid item xs={6}>
          <SignUp />
        </Grid>
      </Grid>
    </>
  );
}
