import React from 'react'
import './Login.css';
import { loginUrl } from './spotify';

function Login() {
    return (
        <div className='login'>
            
            <img src='https://www.freepnglogos.com/uploads/spotify-logo-png/spotify-icon-marilyn-scott-0.png'></img>
           
            <a href={loginUrl}> LOGIN WITH SPOTIFY</a>
        </div>
    );
}

export default Login;