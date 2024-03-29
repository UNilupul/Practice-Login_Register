import React, { useEffect, useState } from 'react';
import './login.css';
import { Link, useNavigate } from 'react-router-dom';
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
    const navigateTo = useNavigate();

    //login error message
    const [loginStatus, setLoginStatus] = useState('');
    const [statusHolder, setSetSatatusHolder] = useState('message');


    // onCLick let us get what user has input
    const loginUser = (e) => {
        e.preventDefault();

        axios.post('http://localhost:3002/', {
            LoginUsername: loginUsername,
            LoginPassword: loginPassword,
        })
            .then((response) => {
                if (response.data.message || loginUsername == '' || loginPassword == '') {
                    navigateTo('/');
                    setLoginStatus(`Credentials don't exist`);
                }
                else {
                    navigateTo('/dashboard');
                }
            })
    }

    useEffect(() => {
        if (loginStatus !== '') {
            setSetSatatusHolder('showMessage');
            setTimeout(() => {
                setSetSatatusHolder('messages');
            }, 4000);
        }
    }, [loginStatus]);


    // clear form onSubmit
    const onSubmit = () => {
        setLoginUserName('');
        setLoginPassword('');
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

                    <div className='formDiv flex' >
                        <div className='headerDiv'>
                            <img src={logo} alt='Logo Image' />
                            <h3>Welcome Back!</h3>
                        </div>

                        <form className='form grid' action='' onSubmit={onSubmit}>
                            <span className={statusHolder}>{loginStatus}</span>
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