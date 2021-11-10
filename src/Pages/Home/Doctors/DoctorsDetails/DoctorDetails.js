import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';

import Doctor from '../Doctor';

const DoctorDetails = () => {


    const [doctors, setDoctors] =useState([]);
    useEffect(()=>{
        fetch("https://raw.githubusercontent.com/Masumkhan984/fackData/main/medicalSite/Doctors.json")
        .then(res => res.json())
        .then(data => setDoctors(data))
    },[])
    return (
        <div className="doctor-appointment" id="doctors">
        <h1 style={{marginTop:"10px"}}>Experienced Doctors </h1>
        <h4>---------------------</h4>
        <div className="doctors">
            <Container>
           <Row xs={1} md={3} className="g-4">
            {
                doctors.map(doctor=><Doctor
                key={doctor.id}
                doctor={doctor}></Doctor>)
            }
           </Row>
           </Container>
        </div>
    </div>
    );
};

export default DoctorDetails;