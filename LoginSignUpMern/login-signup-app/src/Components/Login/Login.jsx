import React, { useState } from 'react'
import './Login.css'
import axios from 'axios'
import {useNavigate} from 'react-router-dom'

const Login = ({setPermision}) => {

  const navigate = useNavigate();

  const [loginUser , setLoginUser] = useState({
    email : "",
    password : ""
  })

  const handleLogin = (e) => {
    const {name , value} = e.target;
    setLoginUser({
      ...loginUser , 
      [name] : value
    })
  }

  const logIn = () => {
    const {email , password} = loginUser;

        // validation
        if( email && password)
        {    
          // axios.post(url , data , config);
          axios.post("http://localhost:8000/login" , loginUser)
          .then((res) => {
            console.log(res.data.myLoginData)
            alert(res.data.message)
            setPermision(res.data.myLoginData)
            navigate("/")
        });
    
          // alert("successful")
        }
    
        else
        {
          alert("invalid")
        }
  }

  return (
    <div className="loginpage">
        <h1>Login</h1>
        <input type="text" placeholder='Enter your Email' name='email' value={loginUser.email} onChange={handleLogin} />
        <input type="password" id="" placeholder='Enter your Password' name ='password' value={loginUser.password} onChange={handleLogin} />
        <div className="button" onClick={logIn}>LogIn</div>
        <span>or</span>
        <div className="button" onClick={() => navigate('/signup')}>SignUp</div>
    </div>
  )
}

export default Login
