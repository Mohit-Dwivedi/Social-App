import React, { useState } from 'react'
import './style.css'
import { Link, useNavigate } from 'react-router-dom'
import { FaFacebook } from "react-icons/fa";
import { toast } from 'react-toastify';

const Login = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const navigate = useNavigate()
    const handleSubmit = () => { 
        if(!email || !password){ 
            toast.success("Fill This Form!")
        }
        else{
            navigate("/Home")
        }
    }

  return (
    <div className='login'>
        <div className="loginWrapper">
            <div className="loginLeft">
                <FaFacebook className='face'/>
                <h3 className="loginLogo">Lamasocial</h3>
                <span className="loginDesc">
                    Connect with friend and the worlds around you on Lamasocial.
                </span>
            </div>  
            <div className="loginRight">
                <div className="loginBox">
                    <input placeholder="Email" className="loginInput" value={email} onChange={(e) => setEmail(e.target.value)}/>
                    <input type='password' placeholder="password" className="loginInput" value={password} onChange={(e) => setPassword(e.target.value)}/>
                    <button className="loginButton" onClick={handleSubmit}><Link className="loginButton">Log In</Link></button>
                    <span className="loginForgot">Forgot password?</span>
                    <button className="loginregister"><Link to={'/signup'} className='signup'>Create An New Account</Link></button>
                </div>
            </div>
        </div>
    </div>
  )
}
//1
export default Login