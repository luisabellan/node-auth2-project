import React, {useState} from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";
import cookie from "js-cookie"
import jwt from "jsonwebtoken"
import axios from "axios"
import './Login.scss'

 // make a post request to retrieve a token from the api
  // when you have handled the token, navigate to the UsersPage route
 

const Login = (props) => {

  const [credentials, setCredentials] = useState({})
  const[status, setStatus] = useState("") 



  
  const login = e => {
    e.preventDefault();
    const payload = credentials
    setStatus("")

    // add in our login api call
    axios
      .post("http://localhost:5000/api/login", payload, {withCredentials:true})
    .then((res) => {
      //console.log(res);
      localStorage.setItem("token", res.data.payload);
     const decoded = jwt.decode(cookie.get("token"))

				setStatus(`Logged in as ${decoded}`)
      // nice for UX, auto redirect to the main dash
      props.history.push("/users");
    })
    .catch(err => {
      console.log(err);
    });
   
  };
  
  const handleChange = e => {
    setCredentials({
  
        ...credentials,
        [e.target.name]: e.target.value,
      
    });
  };
  
    return (
      <div className="form">
        <form onSubmit={login}>
        <h1>Login</h1>
			{status && <p>{status}</p>}
          <div className="username"><label>username:<input
            type="text"
            className="username"
            name="username"
            value={credentials.username}
            onChange={handleChange}
          /></label></div>

          <div className="password">

            <label>password:<input
                type="password"
                className="password"

                name="password"
                value={credentials.password}
                onChange={handleChange}
              />
            </label>
          </div>

          <div className="button">
            <button>Log in</button>
          </div>

          <br />
          <a href="../signup">Register</a>

        </form>
      </div>
    );
  }


export default Login;
