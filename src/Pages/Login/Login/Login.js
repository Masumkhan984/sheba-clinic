import React from 'react';
import { Button, Container, Card } from 'react-bootstrap';
import { Link, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

import "./Login.css"

const Login = () =>{
    const {singInUsingGoogle} = useAuth();
    const location = useLocation();

    const history = useHistory()
    const redirect_url = location.state?.from || '/home'
    const handleGoogleLogin = () =>{
        singInUsingGoogle()
          .then(result =>{
        history.push(redirect_url);
    });
    }
  
return (
   <div className="login">
     <div>
       <Container>
       <div style={{textAlign:'center'}}>
       <Button onClick ={handleGoogleLogin} variant="warning"><i className="fab fa-google"/>--Google SingIn--</Button>
       <p>------------or----------</p>
       </div>
        <h1 className="text-primary">Please LogIn</h1>
      <Card style={{ width: '38rem' }}>
       <form style={{margin:'30px'}}>
         <div className="row mb-3">
           <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">Email</label>
            <div className="col-sm-10">
               <input  type="email" className="form-control" id="inputEmail3" required/>
            </div>
        </div>
         <div className="row mb-3">
            <label htmlFor="inputPassword3" className="col-sm-2 col-form-label">Password</label>
            <div className="col-sm-10">
            <input type="password" className="form-control" id="inputPassword3" required/>
            </div>
         </div>

         <div className="row mb-3">
            <div className="col-sm-10 offset-sm-2">
            <p>Do You Want to Create A <Link to="/register">New Account</Link> ?</p>
            </div>
        </div>
       <button type="submit" className="btn btn-primary">Sign in</button>
        </form>
            </Card>
            </Container>
            </div>
        </div>
    );
};

export default Login;