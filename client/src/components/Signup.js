import React, { useState } from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";

import './Signup.scss'

// make a post request to retrieve a token from the api
// when you have handled the token, navigate to the UsersPage route

const initialUser = {
  username: "",
  password: "",
  department: "",
  role:""
};

const Signup = (props) => {

  const [credentials, setCredentials] = useState({})

  const [editing, setEditing] = useState(false);
  const [adding, setAdding] = useState(true);
  const [userToAdd, setUserToAdd] = useState(initialUser);



  const addUser = (e, user) => {
    e.preventDefault()

    axiosWithAuth()
      .post(`/register/`, userToAdd)
      .then(res => {
        console.log(res);
        setUserToAdd(userToAdd);
        
     
        // nice for UX, auto redirect to the main dash
        props.history.push("/signin");

      })
      .catch(err => {
        console.log(err);
      });
  };





/* 

    // add in our login api call
    axiosWithAuth()
    .post("/login", credentials)
    .then(res => {
      console.log(res);
      localStorage.setItem("token", res.data.payload);
     
      // nice for UX, auto redirect to the main dash
      props.history.push("/users");
    })
    .catch(err => {
      console.log(err);
    });
    */
  
  
  const handleChange = e => {
    setCredentials({
  
        ...credentials,
        [e.target.name]: e.target.value,
      
    });
  };
  
  return (

    <form className="myForm" onSubmit={addUser}>
      <legend>add user</legend>
      <label>
        username:
              <input
          onChange={e =>
            setUserToAdd({
              ...userToAdd,
              username: e.target.value
            })}

          value={userToAdd.username}
        />
      </label>
      <label>
        password:
              <input
          onChange={e => setUserToAdd({
              ...userToAdd,
              password: e.target.value
            })
          }
          value={userToAdd.password}
        />
      </label>
      <label>
        department:
              <input onChange={e => setUserToAdd({
              ...userToAdd,
              department: e.target.value
            })
          }
          value={userToAdd.department}
        />
      </label>
      <label>
        role:
              <input onChange={e => setUserToAdd({
              ...userToAdd,
              role: e.target.value
            })
          }
          value={userToAdd.role}
        />
      </label>
      <div className="button-row">
        <button type="submit">add</button>
      </div>
    </form>
  )

}

export default Signup;

