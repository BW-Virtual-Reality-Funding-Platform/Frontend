
import React, {useEffect, useState} from 'react'
import {axiosWithAuth} from '../utils/axiosWithAuth';
import "./Box.css";
import { Card, ListGroupItem, ListGroup } from "react-bootstrap";


const Browse2 = props => {

    const [projects, setProjects] = useState([])

    useEffect(() => {
        axiosWithAuth()
            .get(`https://vr-lambdaschool.herokuapp.com/projects`)
            .then(res => {
                setProjects(res.data);
                console.log(res);
            })
            .catch(err => {
                console.log(err.message);
            });
        }, []);
        
    return (
        <div className="grid">
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


