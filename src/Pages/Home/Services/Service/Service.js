import React from 'react';
import { Card, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Service = props => {
    const {name, img, description, id} = props.service;
    return (
        <div>
         <Col>
            <Card>
                <Card.Img variant="top" src={img}/>
                <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Card.Text>{description}</Card.Text>
                <Link to={`/serviceDetails/${id}`}><Button>Book Appointment</Button></Link>
                </Card.Body>
            </Card>
            </Col>
        </div>
    );
};

export default Service;