import React, { useEffect } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useHistory,
} from "react-router-dom";
import Home from "./page/home";
import HomePage from "./page/homepage";
import Login from "./page/login";
import Register from "./page/register";
import PrivateRoute from "./utils/PrivateRoute";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact={true} component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <PrivateRoute path="/home-page" component={HomePage} />
      </Switch>
    </Router>
  );
}
export default App;
