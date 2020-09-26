import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "../pages/home";

const RouteHandle = () => {
  return (
    <Switch>
      <Route exact strict path="/" component={Home} />
    </Switch>
  );
};

export default RouteHandle;
