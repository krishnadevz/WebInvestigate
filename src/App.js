import React from "react";
import Home from "./components/Home";
import About from "./components/About";
import BestPract from "./components/BestPract";
import Performance from "./components/Performance";
import Seo from "./components/Seo";
import { Route, Switch } from "react-router-dom";
import Navigation from "./components/Navigation";
export default function App() {
  return (
    <div className="app">
      <Navigation />
      <Switch>
        <Route path="/pract" component={BestPract} />
        <Route path="/performance" component={Performance} />
        <Route path="/seo" component={Seo} />
        <Route path="/about" component={About} />
        <Route exact path="/" component={Home} />
      </Switch>
    </div>
  );
}
