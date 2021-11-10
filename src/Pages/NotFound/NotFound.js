import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './NotFound.css'


const NotFound = () => {
    return (
        <div className="error-page">
            <h1>404 this page is Not Found</h1>
            <Link to="/home"><Button> <h3>←---Go Back To Home</h3></Button></Link>
            {/* <img style={{width:"100%",height:"500px"}} src="" alt="404" border="0"/> */}
        </div>
    );
};

export default NotFound;