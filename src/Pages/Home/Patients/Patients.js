import React, { useEffect, useState } from 'react';
import { Container, Row, Button } from 'react-bootstrap';
import Patient from './Patient';
import { Controller, useForm } from "react-hook-form";
import "./Patients.css"


const Patients = () => {
    const { register, handleSubmit, watch, control, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);
  
    console.log(watch("example"))


    const [patients, setPatients] =useState([]);
    useEffect(()=>{
        fetch("https://raw.githubusercontent.com/Masumkhan984/fackData/main/medicalSite/Doctors.json")
        .then(res => res.json())
        .then(data => setPatients(data))
    },[])
    return (
        <div className="doctor-appointment" id="doctors">
        <h1 style={{marginTop:"10px"}}>Experienced Doctors </h1>
        <h4>---------------------</h4>
    <div className="main-patient">
        <div className="form">
         <form onSubmit={handleSubmit(onSubmit)}>
                <h1>Book Your Appointment</h1>
                <span>Name : </span>
                <input defaultValue="" {...register("example")} />
                <br/>
                <br/>
                <span>Address: </span>
                <input defaultValue="" {...register("example")} />
                <br/>
                <br/>
                <span>Your age : </span>
                <input type="number" {...register("age", { min: 18, max: 99 })} />

            <br/>
            <br/>
            <span>Problem : </span>
            <Controller
                name="firstName"
                control={control}
                defaultValue=""
                render={({ field }) => <input {...field} />}
            />
                <br/>
                <br/>
                <span>Gender : </span>
                <select {...register("gender")}>
                <option value="female"> female </option>
                <option value="male">male</option>
                <option value="other">other</option>
            </select>
                <br/>
                <br/>
                {errors.exampleRequired && <span>This field is required</span>}
               <Button>Book Your Appointment</Button>
        </form>
        </div>
        <div className="patients">
            <Container>
           <Row xs={1} md={3} className="g-4">
            {
                patients.map(patient=><Patient
                key={patient.id}
                patient={patient}></Patient>).slice(0,3)
            }
           </Row>
           </Container>
           <Button variant="outline-primary">See Our All Doctors---->>> </Button>
        </div>
    </div>
    </div>
    );
};

export default Patients;