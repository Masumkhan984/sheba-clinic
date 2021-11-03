import React from 'react';
import { Card, Col } from 'react-bootstrap';

const Patient = props => {
    console.log(props.patient)
    const {name, img, Qualification} = props.patient
    return (
        <div>
                <Col>
                <Card>
                    <Card.Img variant="top" src={img} style={{ borderRadius:"50%"}} className="rounded"/>
                    <Card.Body>
                    <Card.Title><h4>{name}</h4></Card.Title>
                    <Card.Text>
                       <h6> {Qualification}</h6>
                    </Card.Text>
                    <Card.Text>
                        
                    </Card.Text>
                    </Card.Body>
                </Card>
                </Col>
        </div>
    );
};

export default Patient;