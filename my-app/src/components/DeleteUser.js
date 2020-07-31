import React, { useState, useEffect, useContext } from "react";
import axios from "axios";

const user = {
  username:'',
  password:''
 }

function DeleteUser(props) {
  const [userData, setuserData] = useState(user);
  console.log(userData)


  const handleClick = (id) => {
    axiosWithAuth()
    .delete(`/users/${id}`).then(res => {
      userData.filter(users => {
        users.id !== id;
      })
      })
      .catch(err => {
        console.log(err)
      })
  };

  useEffect(() => {
    
  }, []);

  return (
    <div>
       
    </div>
  );
}
export default DeleteUser;