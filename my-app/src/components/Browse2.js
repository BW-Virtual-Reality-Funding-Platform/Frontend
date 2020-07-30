
import React, {useEffect, useState, useReducer} from 'react'
import {axiosWithAuth} from '../utils/axiosWithAuth';
import {Link} from 'react-router-dom'


const Browse2 = props => {



    const [projects, setProyects] = useState([])
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
        }, []);




    return (
        <div className="container-fluid">
            <h2 className="m-5">Your Projects:</h2>

            {projects.map((project) =>  
                <div key={project.project_id}  >
                         <ul className="list-group">
                        <li class="list-group-item">Title: {project.title} </li>
                        <li class="list-group-item">Description: {project.description} </li>
                        <li class="list-group-item">Goal: {project.goal_amount}</li>
                        <li class="list-group-item">Currently: {project.amount_received} </li>
                        <li class="list-group-item">Completed: {project.funding_completed} </li>
                        <Link to={`/updateproject/${project.project_id}`}><button >UPDATE</button></Link>
                        
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


