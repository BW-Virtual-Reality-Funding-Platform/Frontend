import React, { useState, useEffect, useContext } from "react";
import axios from "axios";


function DeleteUser(props) {
  const [button, setButton] = useState(false);
  const [userData, setuserData] = useState();


  const handleClick = (id) => {
    axiosWithAuth()
    .delete(`/users/${id}`).then(res => {
      
      });
  };

  useEffect(() => {
    
  }, []);

  console.log(props);

  return (
    <div>
       
    </div>
  );
}
export default DeleteUser;