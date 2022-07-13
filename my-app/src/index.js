import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import "./index.css";
/* import App from "./App"; */
import Loading from "./pages/Loading";
import Home from "./pages/Home";
import Final from "./pages/Final";

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/homepage" component={Home}/>
      <Route path="/loadingpage" component={Loading}/>
      <Route path="/finalpage" component={Final}/>
      <Redirect from="/" to="/homepage" />
    </Switch>
  </BrowserRouter>,

document.getElementById("root")
);
