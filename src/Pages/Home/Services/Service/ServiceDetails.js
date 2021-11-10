import React, { useEffect, useState } from 'react';
import { Card, Button, Container } from 'react-bootstrap';
import { useParams } from 'react-router';
import './ServiceDetails.css'

const ServiceDetails = () => {
    const {serviceId} = useParams();
    const [services, setServices] = useState([])
    const [service, setService] = useState([])
    useEffect(()=>{
        fetch("https://raw.githubusercontent.com/Masumkhan984/fackData/main/medicalSite/Services.json")
        .then(res => res.json())
        .then(data =>{
            setServices(data);
            const oneService = services.find(service => service.id == serviceId)
            setService(oneService)
        })
    },[services])
    return (
    <div>
                   {
           service && 
        <Container className="details">
        <div className="half">
            <div>
            <h2>{service.name} Schedule</h2>
                <div className="schedule">
                    <div className="schedule-book">
                        <h3> {service.name} </h3>
                        <p> Our {service.name} doctors the best health care as well as clinical service with outstanding personal service.</p>
                        <p><i class="fas fa-location-arrow"></i> Tupac Amaru 200 - Lima</p>
                        <h6>(Call Us Any Time for Your Appointment)</h6>
                        <h6><i class="fas fa-phone-alt"></i> +088 01770709984</h6>
                    </div>
                    <div className="schedule-book">
                        <table class="table">
                        <thead>
                            <tr>
                            <th scope="col">{service.name} Days</th>
                            <th scope="col">Schedule</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                            <th scope="row">Thursday</th>
                            <td>09:00 - 0{service.id}:00</td>
                            </tr>
                            <tr>
                            <th scope="row">Friday</th>
                            <td>09:00 - 1{service.id}:00</td>
                            </tr>
                            <tr>
                            <th scope="row">Saturday</th>
                            <td>09:00 - 0{service.id}:00</td>
                            </tr>
                        </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
        <div className="half">

           <Card className="text-center">
            <Card.Header><h2>Special {service.name} Service</h2></Card.Header>
            <Card.Body>
                <img src={service.img} style={{width:"100%"}} alt=""/>
                <Card.Title>{service.name}</Card.Title>
                <Card.Text>
                
                <p> {service.description} Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </Card.Text>
            </Card.Body>
            </Card>
     
        </div>
        <div></div>
        </Container>       }
    </div>
    );
};

export default ServiceDetails;