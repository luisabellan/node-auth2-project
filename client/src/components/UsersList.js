import React, { useState } from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";

const initialUser = {
  username: "",
  password: "",
<<<<<<< HEAD
  department: "",
=======
  department: ""
>>>>>>> ccdafec87a22e47606d9e960c0d2fa7742aea5fd
};

const UsersList = ({ users, updateUsers }) => {
  // console.log(users);
  const [editing, setEditing] = useState(false);
  const [adding, setAdding] = useState(true);
  const [userToEdit, setUserToEdit] = useState(initialUser);
  const [userToAdd, setUserToAdd] = useState(initialUser);

<<<<<<< HEAD
=======

  const logout = () => {
   

    console.log("logout")
    
    // logout user 
    axiosWithAuth()    
      .put(`/users/logout}`)
       .then(res => {
        setUserToEdit(userToEdit);
       logout()
        
      }) 
      .catch(err => {
        console.log(err);
      });
  }

>>>>>>> ccdafec87a22e47606d9e960c0d2fa7742aea5fd
  const editUser = user => {
    setEditing(true);
    setUserToEdit(user);
    
  };


  const saveEdit = (e, user) => {
    e.preventDefault();
    // Make a put request to save your updated user
    // think about where will you get the id from...
    // where is is saved right now?
    console.log("saveEdit")
    
    // edit user 
    axiosWithAuth()    
<<<<<<< HEAD
      .put(`/api/users/${userToEdit.id}`, userToEdit)
=======
      .put(`/users/${userToEdit.id}`, userToEdit)
>>>>>>> ccdafec87a22e47606d9e960c0d2fa7742aea5fd
      .then(res => {
        setUserToEdit(userToEdit);
       editUser(userToEdit)
        
      })
      .catch(err => {
        console.log(err);
      });
  };

  const deleteUser = user => {
    // make a delete request to delete this user
    axiosWithAuth()
<<<<<<< HEAD
    .delete(`/api/users/${user.id}`)
=======
    .delete(`/users/${user.id}`)
>>>>>>> ccdafec87a22e47606d9e960c0d2fa7742aea5fd
    .then(res => {
      console.log(res);
      setEditing(false)
      setUserToEdit({})

    })
    .catch(err => {
      console.log(err);
    });
  };

<<<<<<< HEAD
  const addUser = (e,user) => {
  e.preventDefault()
   
    axiosWithAuth()
    .post(`/users/`, userToAdd)
    .then(res => {
      console.log(res);
      setUserToAdd(userToAdd);

    })
    .catch(err => {
      console.log(err);
    });
  };
=======
>>>>>>> ccdafec87a22e47606d9e960c0d2fa7742aea5fd

  return (
    <div className="users-wrap">
      <p>users</p>
      <ul>
         {/* {console.log(users)} */}
        {users.map(user => (
          <li key={user.id} onClick={() => editUser(user)}>
            <span> {user.username} 
              <span className="delete" onClick={e => {
                    e.stopPropagation();
                    deleteUser(user)
                  }
                }>
<<<<<<< HEAD
                  x
=======
                {"  "}DELETE
>>>>>>> ccdafec87a22e47606d9e960c0d2fa7742aea5fd
              </span>{" "}
              {user.user}
            </span>
            
          </li>
        ))}
      </ul>
      {adding && (
        <button onClick={setAdding(!adding)}>Add a User</button>
      )}
      {editing && (
        <form onSubmit={saveEdit}>
          <legend>edit user</legend>
          <label>
            username:
            <input
              onChange={e =>
                setUserToEdit({ ...userToEdit, username: e.target.value })
              }
              value={userToEdit.username}
            />
          </label>
<<<<<<< HEAD
          <label>
=======
           <label>
>>>>>>> ccdafec87a22e47606d9e960c0d2fa7742aea5fd
            password:
            <input
              onChange={e =>
                setUserToEdit({
                  ...userToEdit,
                  password: e.target.value 
                })
              }
              value={userToEdit.password}
            />
<<<<<<< HEAD
          </label>
          <div className="button-row">
            <button  type="submit">save</button>
            <button onClick={() => setEditing(false)}>cancel</button>
          </div>
        </form>
      )}
      <div className="spacer" />
      {/* stretch - build another form here to add a user */}
      
      {!adding && (

      <form className="myForm" onSubmit={addUser}>
          <legend>add user</legend>
          <label>
            username:
            <input
              onChange={e =>
                setUserToAdd({
                   ...userToAdd, 
                   username: e.target.value })}
              
              value={userToAdd.username}
            />
          </label>
          <label>
            password:
            <input
              onChange={e =>
                setUserToAdd({
                  ...userToAdd,
                  password: e.target.value 
                })
              }
              value={userToAdd.password}
            />
          </label>
          <div className="button-row">
            <button  type="submit">add</button>
          </div>
        </form>
      )}
=======
          </label> 
          <label>
            department:
            <input
              onChange={e =>
                setUserToEdit({
                  ...userToEdit,
                  department: e.target.value 
                })
              }
              value={userToEdit.department}
            />
          </label> 
          <div className="button-row">
            <button  type="submit">save</button>
            <button onClick={() => setEditing(false)}>cancel</button>
          </div>
        </form>
      )}
      <button onClick={(props) => {
        localStorage.removeItem('token')
        window.location.replace("/users")

      }
        }>LOG OUT</button>
      <div className="spacer" />

      {/* stretch - build another form here to add a user */}
      
      
>>>>>>> ccdafec87a22e47606d9e960c0d2fa7742aea5fd
      

    </div>
  );
};

export default UsersList;
