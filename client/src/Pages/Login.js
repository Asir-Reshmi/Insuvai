import React from 'react';
import Navbar from '../components/Navbar';
import Login from '../components/login';
import RegistrationForm from '../components/register';

function Loginform(){
    return(
        <div>
            <Navbar/>
           
            <h1>This is Loginpage</h1>
            <Login/>
            <br></br>
            <br></br>
            < RegistrationForm/>
        </div>
    );
}
export default Loginform;