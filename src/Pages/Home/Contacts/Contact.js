import React from 'react';
import { Card, Container } from 'react-bootstrap';
import img from '../../../images/img/hospital.jpg';
import './Contact.css'

const Contact = () => {

    return (
        <Container>
    <div className="contact" id="contact">
         <div className="contact-form">
            <img src={img} alt="" style={{width:"100%"}}/>
         </div>
        <div>
            <Card className="contact-text">
            <Card.Body>
                <img src="https://i.ibb.co/MMnDSBj/map.jpg" style={{width:"100%"}} alt="map" border="0"/>
                <br/>
                <br/>
                <Card.Title><h4>Address :</h4></Card.Title>
                <h6>1200, North Basir Para Thakurgaon.</h6>
                <br/>
                <Card.Title><h4>Phone Number :</h4></Card.Title>
                <h6>++088 01770709984</h6>
                <br/>
                <Card.Title><h4>Gmail :</h4></Card.Title>
                <h6>masumBillah@gmail.com</h6>
            </Card.Body>
            </Card>
         </div>
     </div>
        </Container>
    );
};

export default Contact;