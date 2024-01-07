import React from 'react'
import './register.css'
import { Link } from 'react-router-dom';

import video from '../../loginAssets/video.mp4';
import logo from '../../loginAssets/logo.png';

import { FaUserShield } from "react-icons/fa";
import { BsFillShieldLockFill } from "react-icons/bs";
import { AiOutlineSwapRight } from "react-icons/ai";
import { MdMarkEmailRead } from "react-icons/md";

const Register = () => {
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
                                    <input type='email' id='email' placeholder='Enter Email' />
                                </div>
                            </div>
                            <div className='inputDiv'>
                                <label htmlFor='username'>Username</label>
                                <div className='input flex'>
                                    <FaUserShield className='icon' />
                                    <input type='text' id='username' placeholder='Enter Username' />
                                </div>
                            </div>
                            <div className='inputDiv'>
                                <label htmlFor='password'>Password</label>
                                <div className='input flex'>
                                    <BsFillShieldLockFill className='icon' />
                                    <input type='password' id='password' placeholder='Enter Password' />
                                </div>
                            </div>

                            <button type='submit' className='btn'>
                                <span>Register</span>
                                <AiOutlineSwapRight className='icon' />
                            </button>

                            {/* <span className='forgotPassword'>
                                Forgot your password
                                <a href='#'>Click here</a>
                            </span> */}
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Register;