


import React from 'react'

import {Link} from 'react-router-dom'
import {useParams} from 'react-router-dom'


const ManageUser = () => {


    const {userID} = useParams()

 
    return (
  <div >
<h1 >
    Manage Account</h1>

<Link to={`/updateuser/${userID}`}><button >Click To Change Login Information</button></Link>
  </div>
  );
    }

export default ManageUser