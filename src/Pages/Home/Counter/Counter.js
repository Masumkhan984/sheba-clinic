import React from 'react';
import { Container, Button } from 'react-bootstrap';
import CountUp from 'react-countup';
import './Counter.css'

const Counter = () => {
    return (
        <>
        <h1>______________________</h1>
        <div className="main">
            <Container className="count">
            <div>
                <h1>Over 55,100 patients trust us</h1>
                <Button variant="outline-warning">Make An Appointment</Button>
            </div>
            <div>
                <div className="half">
                <div style={{padding:"10px"}}>
                <h4><u>Years of Experienced:</u></h4>
                <h1><CountUp end={50} duration={5}/></h1>
                </div>
                <div  style={{padding:"10px"}}>
                <h4><u>Numbers of Doctors:</u></h4>
                <h1><CountUp start={60} end={100} duration={8}/></h1>
                </div>
                </div>
                <div className="half">
                <div  style={{padding:"10px"}}>
                <h4><u>Numbers of Nurse:</u></h4>
                <h1><CountUp start={100} end={200} duration={10}/></h1>
                </div>
                <div  style={{padding:"10px"}}>
                <h4><u>Numbers of Staffs:</u></h4>
                <h1><CountUp start={60} end={300} duration={10}/></h1>
                </div>
                </div>
            </div> 
         </Container>
        </div>
    </>
    );
};

export default Counter;