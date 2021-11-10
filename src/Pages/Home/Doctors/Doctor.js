import React from 'react';
import { Card, Col, Container } from 'react-bootstrap';

const Doctor = props => {
    const {name, img, Qualification} = props.doctor
    return (
        <div>
            <Container>
                <Col>
                <Card>
                    <Card.Img variant="top" src={img} style={{ borderRadius:"50%"}} className="rounded"/>
                    <Card.Body>
                    <Card.Title><h4>{name}</h4></Card.Title>
                    <Card.Text>
                       <h6> {Qualification}</h6>
                    </Card.Text>
                    <Card.Text>
                    <i className="fab fa-instagram-square"/><span> </span><i className="fab fa-facebook"/>
                    <span> </span><i className="fab fa-twitter-square"/>
                    <span> </span>
                    <i className="fab fa-linkedin"/>
                    </Card.Text>
                    </Card.Body>
                </Card>
                </Col>
            </Container>
        </div>
    );
};

export default Doctor;