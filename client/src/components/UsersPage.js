import React, { useState, useEffect } from "react";
<<<<<<< HEAD
import { axiosWithAuth } from '../utils/axiosWithAuth';
import UsersList from "./UsersList";

const UsersPage = () => {
  const [usersList, setUsersList] = useState([]);

  useEffect(() => {
    // make a GET request to fetch the users data
=======
import { axiosWithAuth } from "../utils/axiosWithAuth";
import UsersList from "./UsersList";


const UsersPage = () => {
  const [usersList, setUsersList] = useState([]);
  // fetch your colors data from the server when the component mounts

  useEffect(() => {
    // make a GET request  fetch the users data 
>>>>>>> ccdafec87a22e47606d9e960c0d2fa7742aea5fd
    axiosWithAuth()
      .get("/users")
      .then(res => {
  //      console.log(res);
        setUsersList(res.data);

      })
      .catch(err => {
        console.log(err);
      });
  });
  // set that data to the usersList state property

  return (
    <>
<<<<<<< HEAD
      <UsersList users={usersList} updateUsers={setUsersList} />
=======
      
      <UsersList users={usersList} updateUsers={setUsersList} />
   
>>>>>>> ccdafec87a22e47606d9e960c0d2fa7742aea5fd

    </>
  );
};

export default UsersPage;
