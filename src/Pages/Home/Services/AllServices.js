import React, { useEffect, useState } from 'react';
import { Container, Row, Button } from 'react-bootstrap';
import { useHistory } from 'react-router';
import Service from './Service/Service';

const AllServices = () => {
    const [services, setServices] = useState([])
    useEffect(()=>{
        fetch('https://raw.githubusercontent.com/Masumkhan984/fackData/main/medicalSite/Services.json')
        .then(res => res.json())
        .then(data => setServices(data))
    },[])

    return (
        <div id="services">
        <Container>
         <h1 style={{margin:"40px",color:"#545A03"}}>---------Our Services--------</h1>
           <Row xs={1} md={3} className="g-4">
            {
                services.map(service =><Service
                key={service.id}
                service={service}></Service>)
            }
           </Row>
           </Container>
        </div>
    );
};

export default AllServices;