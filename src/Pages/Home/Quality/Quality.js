import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import img from '../../../images/Quality/Quality.jpg';
import QualityDetails from './QualityDetails/QualityDetails';
import './Quality.css';

const Quality = () => {
    const [services, setServices] = useState([])
    useEffect(()=>{
        fetch("https://raw.githubusercontent.com/Masumkhan984/fackData/main/clinicServices.json")
        .then(res => res.json())
        .then(data =>setServices(data))
    },[])
    return (
        <Container>
            <h1 style={{margin:"20px", color:"#954535"}}>Best Qualities Of Our Clinic</h1>
        <div className="Quality">
            <div className="text-section">
                <Row xs={2} md={2} className="g-4">
                    {
                    services.map(Quality=><QualityDetails
                    key={Quality.id}
                    Quality={Quality}></QualityDetails>)}
               </Row>
            </div>
            <div className="img-section">
                    <img src={img} alt="" width="100%"/> 
            </div>
        </div>
      </Container>
    );
};

export default Quality;