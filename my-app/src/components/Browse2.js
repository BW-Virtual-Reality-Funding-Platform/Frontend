
import React, {useEffect, useState, useReducer} from 'react'
import {axiosWithAuth} from '../utils/axiosWithAuth';



const Browse2 = props => {



    const [proyects, setProyects] = useState([])
    const [stop, setStop] = useState(false)

 
    useEffect(() => {
        axiosWithAuth()
            .get(`https://vr-lambdaschool.herokuapp.com/projects`)
            .then(res => {
                setProyects(res.data);
                console.log(res);
            })
            .catch(err => {
                console.log(err.message);
            });
        }, [stop]);




    return (
        <div className="container-fluid">
            <h2 className="m-5">Your Projects:</h2>

            {proyects.map((proyect) =>  
                <div key={proyect.id}  >
                         <ul className="list-group">
                        <li class="list-group-item">Title: {proyect.title} </li>
                        <li class="list-group-item">Description: {proyect.description} </li>
                        <li class="list-group-item">Goal: {proyect.goal_amount}</li>
                        <li class="list-group-item">Currently: {proyect.amount_received} </li>
                        <li class="list-group-item">Completed: {proyect.funding_completed} </li>
                       
                    </ul>
                  
        
                </div>
            )}
        </div>
    );
}


/***************
 EXPORTS
 ***************/
export default Browse2;


