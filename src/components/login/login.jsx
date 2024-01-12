import React, { useState } from 'react';
import './login.css';
import { Link } from 'react-router-dom';
import axios from 'axios';

import video from '../../loginAssets/video.mp4';
import logo from '../../loginAssets/logo.png';

import { FaUserShield } from "react-icons/fa";
import { BsFillShieldLockFill } from "react-icons/bs";
import { AiOutlineSwapRight } from "react-icons/ai";

const Login = () => {
    // useState to store inputs
    const [loginUsername, setLoginUserName] = useState('');
    const [loginPassword, setLoginPassword] = useState('');


    // onCLick let us get what user has input
    const loginUser = () => {
        event.preventDefault();

        axios.post('http://localhost:3002/', {
            LoginUsername: loginUsername,
            LoginPassword: loginPassword,
        })
        .then((response) => {
            console.log(response);
        })
    }


    return (
        <div>
            <div className='loginPage flex'>
                <div className='container flex'>
                    <div className='videoDiv'>
                        <video src={video} autoPlay muted loop ></video>

                        <div className='textDiv'>
                            <h2 className='title'>Create and Sell Extrodinary Products</h2>
                            <p>Adopt the peace of nature!</p>
                        </div>

                        <div className='footerDiv flex'>
                            <span className='text'>Don't have an Account?</span>
                            <Link to={'register'}>
                                <button className='btn'>SignUp</button>
                            </Link>
                        </div>
                    </div>

                    <div className='formDiv flex'>
                        <div className='headerDiv'>
                            <img src={logo} alt='Logo Image' />
                            <h3>Welcome Back!</h3>
                        </div>

                        <form className='form grid' action=''>
                            <span className='showMessage'>Login status will go here</span>
                            <div className='inputDiv'>
                                <label htmlFor='username'>Username</label>
                                <div className='input flex'>
                                    <FaUserShield className='icon' />
                                    <input type='text' id='username' placeholder='Enter Username' onChange={(event) => {
                                        setLoginUserName(event.target.value);
                                    }} />
                                </div>
                            </div>
                            <div className='inputDiv'>
                                <label htmlFor='password'>Password</label>
                                <div className='input flex'>
                                    <BsFillShieldLockFill className='icon' />
                                    <input type='password' id='password' placeholder='Enter Password' onChange={(event) => {
                                        setLoginPassword(event.target.value);
                                    }} />
                                </div>
                            </div>

                            <button type='submit' className='btn' onClick={loginUser}>
                                <span>Login</span>
                                <AiOutlineSwapRight className='icon' />
                            </button>

                            <span className='forgotPassword'>
                                Forgot your password
                                <a href='#'>Click here</a>
                            </span>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login;