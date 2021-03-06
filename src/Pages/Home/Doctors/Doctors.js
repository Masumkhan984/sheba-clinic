import React, { useEffect, useState } from 'react';
import { Container, Row, Button } from 'react-bootstrap';
import { useHistory } from 'react-router';
import Doctor from './Doctor';
import "./Doctors.css"


const Doctors = () => {
    const history = useHistory()

    const [doctors, setDoctors] =useState([]);
    useEffect(()=>{
        fetch("https://raw.githubusercontent.com/Masumkhan984/fackData/main/medicalSite/Doctors.json")
        .then(res => res.json())
        .then(data => setDoctors(data))
    },[])

    const handleClick =() =>{
        history.push('/doctorDetails')
    }
    return (
        <div className="doctor-appointment" id="doctors">
        <h1 style={{marginTop:"10px"}}>Experienced Doctors </h1>
        <h4>---------------------</h4>
    <div className="main-Doctor">

        <div className="doctors">
            <Container>
           <Row xs={1} md={4} className="g-4">
            {
                doctors.map(doctor=><Doctor
                key={doctor.id}
                doctor={doctor}></Doctor>).slice(0,4)
            }
           </Row>
           </Container>
           <br/>
           <Button onClick={handleClick} variant="outline-primary">See Our All Doctors---->>> </Button>
        </div>
    </div>
    </div>
    );
};

export default Doctors;