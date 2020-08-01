
import React, {useEffect, useState} from 'react'
import {axiosWithAuth} from '../utils/axiosWithAuth';
import "./Box.css";
import { Card, ListGroupItem, ListGroup, Button } from "react-bootstrap";
import {useParams} from 'react-router-dom';
import {Link} from 'react-router-dom'



const Browse2 = (props) => {

    const [projects, setProjects] = useState([])
    const [deleted, setDeleted] = useState(false)
    
const userId = useParams()

    
    



    useEffect(() => {
        axiosWithAuth()
        .get(`https://vr-lambdaschool.herokuapp.com/${props.userInfo.id}/projects `)
            .then(res => {
                setProjects(res.data);
                console.log(userId)
                console.log(res);
            })
            .catch(err => {
                console.log(err.message);
            });
        }, [deleted]);

        const deleteProject = (id) => {
            axiosWithAuth()
              .delete(`https://vr-lambdaschool.herokuapp.com/projects/${id}`)
              .then(res => {
                  console.log(res.data)
                setDeleted(res.data)
                setDeleted(deleted);
              });
          };



    return (
        <div className="grid">blablablsa
            <h2 className="m-5">Your Projects:</h2>

            {projects.map((project) =>  
                <div key={project.id}  >
                <Card style={{ width: '30rem' }} className="box">
                    <Card.Img variant="top" src = {project.img_url} />
                    <Card.Body>
                    <Card.Title>{project.title}</Card.Title>
                    {/* <Card.Text>{card.text}</Card.Text> */}
                </Card.Body>
                    <ListGroup className="list-group-flush">
                    <ListGroupItem>{project.description}</ListGroupItem>
                    <ListGroupItem>{project.goal_amount}</ListGroupItem>
                    <ListGroupItem>{project.amount_received}</ListGroupItem>
                    <ListGroupItem>{project.funding_completed}</ListGroupItem>
                    <Link to={`/${props.userInfo.id}/updateproject/${project.project_id}`}><button >UPDATE</button></Link>
                    <Button onClick={() => {deleteProject(project.project_id)}}>Delete Project</Button>
                </ListGroup>
                
                </Card>
                </div>
            )}
        </div>
    );
}


/***************
 EXPORTS
 ***************/
export default Browse2;



