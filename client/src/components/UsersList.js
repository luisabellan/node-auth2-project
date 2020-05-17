import React, { useState } from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";

const initialUser = {
  username: "",
  password: "",
  department: "",
  role:""
};

const UsersList = ({ users, updateUsers }) => {
  // console.log(users);
  const [editing, setEditing] = useState(false);
  const [adding, setAdding] = useState(true);
  const [userToEdit, setUserToEdit] = useState(initialUser);
  const [userToAdd, setUserToAdd] = useState(initialUser);

  const editUser = (user) => {
    setEditing(true);
    setUserToEdit(user);
  };

  const saveEdit = (e, user) => {
    e.preventDefault();
    // Make a put request to save your updated user
    // think about where will you get the id from...
    // where is is saved right now?
    console.log("saveEdit");

    // edit user
    axiosWithAuth()
      .put(`/users/${userToEdit.id}`, userToEdit)
      .then((res) => {
        setUserToEdit(userToEdit);
        editUser(userToEdit);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const deleteUser = (user) => {
    // make a delete request to delete this user
    axiosWithAuth()
      .delete(`/users/${user.id}`)
      .then((res) => {
        console.log(res);
        setEditing(false);
        setUserToEdit({});
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const addUser = (e, user) => {
    e.preventDefault();

    axiosWithAuth()
      .post(`/users/`, userToAdd)
      .then((res) => {
        console.log(res);
        setUserToAdd(userToAdd);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="users-wrap">
      <p>users</p>
      <ul>
        {/* {console.log(users)} */}
        {users.map((user) => (
          <li key={user.id} onClick={() => editUser(user)}>
            <span>
              {" "}
              {user.username}
              <span
                className="delete"
                onClick={(e) => {
                  e.stopPropagation();
                  deleteUser(user);
                }}
              >
                {"  "}DELETE
              </span>{" "}
              {user.user}
            </span>
          </li>
        ))}
      </ul>
      {adding && <button onClick={setAdding(!adding)}>Add a User</button>}
      {editing && (
        <form onSubmit={saveEdit}>
          <legend>edit user</legend>
          <label>
            username:
            <input
              onChange={(e) =>
                setUserToEdit({ ...userToEdit, username: e.target.value })
              }
              value={userToEdit.username}
            />
          </label>
          <label>
            password:
            <input
              onChange={(e) =>
                setUserToEdit({
                  ...userToEdit,
                  password: e.target.value,
                })
              }
              value={userToEdit.password}
            />
          </label>
          <label>
            department:
            <input
              onChange={(e) =>
                setUserToEdit({
                  ...userToEdit,
                  department: e.target.value,
                })
              }
              value={userToEdit.department}
            />
          </label>
          <div className="button-row">
            <button type="submit">save</button>
            <button onClick={() => setEditing(false)}>cancel</button>
          </div>
        </form>
      )}
      <button
        onClick={(props) => {
          localStorage.removeItem("token");
          window.location.replace("/users");
          }
        }
      >
        LOG OUT
      </button>
      <div className="spacer" />
    </div>
  );
};

export default UsersList;
