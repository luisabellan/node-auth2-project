import React, { useState, useEffect } from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";
import UsersList from "./UsersList";


const UsersPage = () => {
  const [usersList, setUsersList] = useState([]);
  // fetch your colors data from the server when the component mounts

  useEffect(() => {
    // make a GET request to fetch the users data 
    axiosWithAuth()
      .get("/users")
      .then(res => {
  //      console.log(res);
         // set that data to the usersList state property
        setUsersList(res.data);

      })
      .catch(err => {
        console.log(err);
      });
  });
 

  return (
    <>
      
      <UsersList users={usersList} updateUsers={setUsersList} />
   

    </>
  );
};

export default UsersPage;
