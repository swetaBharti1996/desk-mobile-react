import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "../pages/home";
import Mobile from "../pages/mobile";

const RouteHandle = () => {
  return (
    <Switch>
      <Route exact strict path="/" component={Home} />
      
      <Route exact strict path="/mobile" component={Mobile} />



    </Switch>
  );
};

export default RouteHandle;
