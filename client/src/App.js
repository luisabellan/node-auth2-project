import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import PrivateRoute from "./components/PrivateRoute";
import UsersPage from "./components/UsersPage"

import Login from "./components/Login";
import Signup from "./components/Signup";
import "./App.scss";

function App() {
  return (
    <Router>
      <div className="App">
        <Route exact path="/login" component={Login} />
        <Route exact path="/signup" component={Signup} />
        {/* 
          Build a PrivateRoute component that will 
          display UsersPage when you're authenticated 
        */}
      <PrivateRoute exact path="/users"  component={UsersPage} />

      </div>
    </Router>
  );
}

export default App;
