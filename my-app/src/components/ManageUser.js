


import React from 'react'

import {Link} from 'react-router-dom'



const ManageUser = () => {




 
    return (
  <div>





<h1>Manage Account</h1>

<Link to={`/updateuser`}><button >Click To Change Login Information</button></Link>
  </div>
  );
    }

export default ManageUser