import React from 'react';
import { Card, Col, Button } from 'react-bootstrap';

const Service = props => {
    const {service_name, img, description, id} = props.service;
    return (
        <div>
         <Col>
            <Card>
                <Card.Img variant="top" src={img}/>
                <Card.Body>
                <Card.Title>{service_name}</Card.Title>
                <Card.Text>{description}</Card.Text>
                <Button>Book Appointment</Button>
                </Card.Body>
            </Card>
            </Col>
        </div>
    );
};

export default Service;