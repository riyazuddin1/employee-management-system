import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import axiosInstance from '../service/axiosInstance';
import { useAuth } from '../service/AuthContext';

const Login = () => {
  const[username , setUsername] = useState("");
  const[password , setPassword] = useState("");

  const navigate = useNavigate();

     const {login}=useAuth();
    //  console.log(login);

  const handleSubmit =async e => {
    e.preventDefault();
    const formData = {
      username , 
      password
    };
    // console.log(formData);
    try {
       const response = await axiosInstance.post("http://localhost:8085/login",formData);
       
       if(response.status === 200)
       {
        login();
        navigate("/");
       }else{
        alert("Login failed");
       }
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <div>
      <h1>Login</h1>
       <form onSubmit={handleSubmit}>
                        Username : <input type='text' name='username'
                       value={username}
                       onChange={e=>setUsername(e.target.value)}
                       />

                      <br /><br />
                        Password : <input type='password' name='password'
                       value={password}
                       onChange={e=>setPassword(e.target.value)}
                       />

                      <br /><br />


                    <input type='submit' value="Login"/>
      </form>
    </div>
  )
}

export default Login