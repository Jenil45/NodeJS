import React, { useState } from 'react'
import './Signup.css'
import axios from 'axios'
import {useNavigate} from 'react-router-dom'

const Signup = () => {

  const navigate = useNavigate()

  const [user , setUser] = useState({
      name : "",
      email : "",
      password : "",
      cpassword : ""
  });

  const handleChange = (e) => {
    const {name , value} = e.target;
    // console.log(name , ...value)
    setUser({
      ...user ,
      [name] : value
    })
    console.log(user);
  }

  // set register back end 
  const register = () => {
    const {name , email , password , cpassword} = user;

    // validation
    if(name && email && password && (password===cpassword))
    {    
      // axios.post(url , data , config);
      axios.post("http://localhost:8000/signup" , user).then((res) => {
        alert(res.data.message)
        navigate('/login')
      });

      // alert("successful")
    }

    else
    {
      alert("invalid")
    }
  }

  return (
    <div className="signuppage">
        <h1>SignUp</h1>
        <input type="text" name='name' value={user.name} placeholder='Enter your Name'  onChange={handleChange} />
        <input type="text" name='email' value={user.email} placeholder='Enter your Email' onChange={handleChange} />
        <input type="password" name="password" value={user.password} id="" placeholder='Enter your Password' onChange={handleChange} />
        <input type="password" name="cpassword" value={user.cpassword} id="" placeholder='Re-Enter your Password' onChange={handleChange} />
        <div className="button" onClick={register}>Register</div>
        <span>or</span>
        <div className="button" onClick={() => navigate('/login')}>Login</div>
    </div>
  )
}

export default Signup
