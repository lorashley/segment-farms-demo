import React from "react";
import Userfront from "@userfront/react";

Userfront.init("xbppgjwb");

const LoginForm = Userfront.build({
  toolId: "lrrrma",
});

export default function LoginUserfront() {
  return <LoginForm />;
}
