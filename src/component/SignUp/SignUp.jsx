import React, { useState } from 'react'
import './SignUp.css'
import { Link, useNavigate } from 'react-router-dom'
import { FaFacebook } from "react-icons/fa";
import { toast } from 'react-toastify';

const SignUp = () => { 
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [name, setName] = useState("")

    const navigate = useNavigate()
    const handleSubmit = () => { 
        if(!email || !password || !name){ 
            toast.success("Fill This Form!")
        }
        else{
            navigate('/Home')
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
            <div className="loginBox1">
                <input type="text" placeholder='Name' className='loginInput' value={name} onChange={(e) => setName(e.target.value)}/>
                <input placeholder="Email" className="loginInput" value={email} onChange={(e) => setEmail(e.target.value)} />
                <input type='password' placeholder="password" className="loginInput" value={password} onChange={(e) => setPassword(e.target.value)} />
                <button className="loginButton" onClick={handleSubmit}><Link className="loginButton">SignUp</Link></button>
                <button className="loginregister"><Link to={'/'} className='signup'>Already Have An Account</Link></button>
            </div>
        </div>
    </div>
</div>
  )
}

export default SignUp
