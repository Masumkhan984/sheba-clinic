import React from 'react';
import { Button } from 'react-bootstrap';


const NotFound = () => {
    return (
        <div>
            <h1>404 this page is Not Found</h1>
            <Button>Go Back To Home</Button>
            <img style={{width:"100%",height:"500px"}} src="https://i.ibb.co/bdZ09ww/404.jpg" alt="404" border="0"/>
        </div>
    );
};

export default NotFound;