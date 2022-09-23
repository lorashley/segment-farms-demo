import * as React from "react";
import { Switch, Route } from "wouter";
import Home from "../pages/home";
import SignIn from "../pages/signin";
import FullCart from "../pages/fullCart";

/**
 * The router is imported in app.jsx
 *
 * Our site just has two routes in it–Home and About
 * Each one is defined as a component in /pages
 * We use Switch to only render one route at a time https://github.com/molefrog/wouter#switch-
 */

export default () => (
  <Switch>
    <Route path="/" component={Home} />
    <Route path="/dashboard" component={Home} />
    <Route path="/login" component={SignIn} />
    <Route path="/cart" component={FullCart} />
  </Switch>
);
