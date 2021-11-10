import React from 'react';
import { Button } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const Register = () => {
    const {singInUsingGoogle, LogInForm, user} = useAuth();

    //hook form
    const {register, handleSubmit, formState: {errors} } = useForm()
    const onSubmit = data => {
        console.log(data)  }  
    

    //redirect_url
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
        

     <div  className="login-form">
        <h1 className="text-primary">Please Register</h1>

        <div>
                <Button onClick ={handleGoogleLogin} variant="warning"><i className="fab fa-google"/>--Google Register--</Button>
                <br/>
                <br/>
                <p>------------or----------</p>
     </div>
        <form onSubmit={handleSubmit(onSubmit)}>
       <input defaultValue={user.displayName} {...register("name",{required: true })} />

        <input defaultValue={user.email} {...register("email", { required: true })} />

        {errors.email && <span className="error">This field is required</span>}
        <input placeholder="Address" defaultValue="" {...register("address")} />

        <input placeholder="City" defaultValue="" {...register("city")} />
        <input placeholder="phone number" defaultValue="" {...register("phone")} />
        <input type="submit" />
        </form>
       <p> Already Registered ?<Link to="/login">Log in</Link></p>
    </div>
 </div>
    );
};

export default Register;