import React, { useState } from 'react'
import './register.css'
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

import video from '../../loginAssets/video.mp4';
import logo from '../../loginAssets/logo.png';

import { FaUserShield } from "react-icons/fa";
import { BsFillShieldLockFill } from "react-icons/bs";
import { AiOutlineSwapRight } from "react-icons/ai";
import { MdMarkEmailRead } from "react-icons/md";

const Register = () => {
    // useState to hold inputs
    const [email, setEmail] = useState('');
    const [username, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const navigateTo = useNavigate();

    // register error msg
    const [registerStatus, setRegisterStatus] = useState();
    const [statusHolder, setSetSatatusHolder] = useState('message');

    // onCLick let us get what user has input
    const createUser = (e) => {
        e.preventDefault();

        axios.post('http://localhost:3002/register', {
            // create variables to sent through the server
            Email: email,
            Username: username,
            Password: password,
        })
            .then(() => {
                // redirect to login page
                navigateTo('/');

                //clear fileds
                setEmail('');
                setPassword('');
                setUserName('');
            })
            .then(response => {
                console.log('Server response:', response.data);
            })
            .catch(error => {
                console.error('Error sending request:', error);
            });
    }


    return (
        <div>
            <div className='registerPage flex'>
                <div className='container flex'>
                    <div className='videoDiv'>
                        <video src={video} autoPlay muted loop ></video>

                        <div className='textDiv'>
                            <h2 className='title'>Create and Sell Extrodinary Products</h2>
                            <p>Adopt the peace of nature!</p>
                        </div>

                        <div className='footerDiv flex'>
                            <span className='text'>Already have an Account?</span>
                            <Link to={'/'}>
                                <button className='btn'>SignIn</button>
                            </Link>
                        </div>
                    </div>

                    <div className='formDiv flex'>
                        <div className='headerDiv'>
                            <img src={logo} alt='Logo Image' />
                            <h3>Let Us Know You!</h3>
                        </div>

                        <form className='form grid' action=''>
                            <div className='inputDiv'>
                                <label htmlFor='email'>Email</label>
                                <div className='input flex'>
                                    <MdMarkEmailRead className='icon' />
                                    <input type='email' id='email' placeholder='Enter Email' onChange={(event) => {
                                        setEmail(event.target.value);
                                    }} />
                                </div>
                            </div>
                            <div className='inputDiv'>
                                <label htmlFor='username'>Username</label>
                                <div className='input flex'>
                                    <FaUserShield className='icon' />
                                    <input type='text' id='username' placeholder='Enter Username' onChange={(event) => {
                                        setUserName(event.target.value);
                                    }} />
                                </div>
                            </div>
                            <div className='inputDiv'>
                                <label htmlFor='password'>Password</label>
                                <div className='input flex'>
                                    <BsFillShieldLockFill className='icon' />
                                    <input type='password' id='password' placeholder='Enter Password' onChange={(event) => {
                                        setPassword(event.target.value);
                                    }} />
                                </div>
                            </div>

                            <button type='submit' className='btn' onClick={createUser}>
                                <span>Register</span>
                                <AiOutlineSwapRight className='icon' />
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Register;