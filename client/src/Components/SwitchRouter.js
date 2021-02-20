import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import CocktailsList from "./CocktailsList";
import Home from "./Home";

export default function SwitchRouter() {
  return (
    <Switch>
      <Route path="/cocktails">
        <CocktailsList />
      </Route>
      <Route path="/">
        <Home />
      </Route>
    </Switch>
  );
}
