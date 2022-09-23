import * as React from "react";
import Userfront from "@userfront/react";
import { Button, Grid, TextField } from "@mui/material";

Userfront.init("xbppgjwb");

const SignupForm = Userfront.build({
  toolId: "nmmmbr",
});

export default function SignUp(props) {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <SignupForm />
      </Grid>
    </Grid>
  );
}
