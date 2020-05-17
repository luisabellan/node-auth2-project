import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import PrivateRoute from "./components/PrivateRoute";
import UsersPage from "./components/UsersPage"

import Login from "./components/Login";
<<<<<<< HEAD
=======
import Signup from "./components/Signup";
>>>>>>> ccdafec87a22e47606d9e960c0d2fa7742aea5fd
import "./App.scss";

function App() {
  return (
    <Router>
      <div className="App">
<<<<<<< HEAD
        <Route exact path="/" component={Login} />
=======
        <Route exact path="/login" component={Login} />
        <Route exact path="/signup" component={Signup} />
>>>>>>> ccdafec87a22e47606d9e960c0d2fa7742aea5fd
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
