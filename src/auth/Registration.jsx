import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import axiosInstance from '../service/axiosInstance';

const Registration = () => {
  const[formData , setFormData] = useState({
    firstName:"",
    lastName:"",
    username:"",
    password:"",
    confirmPassword:""
  });

  const navigate = useNavigate();

  const handleSubmit = async e => {
    e.preventDefault();
    // console.log(formData);
    if(formData.password !== formData.confirmPassword)
    {
      alert("Password not matched");
      return;
    }

    try{
       const response = await axiosInstance.post("http://localhost:8085/register",formData);

       if(response.status === 201)
       {
        navigate("/login");
       }else{
        alert("Registration Failed");
       }
    }
    catch(error)
    {
        console.log(error);
    }
  }

  const handleChange = e => {
     setFormData({...formData , [e.target.name] : e.target.value});
  }
  return (
    <div>
      <h1>Registration</h1>
     
 <form onSubmit={handleSubmit}>

        FirstName : <input type='text' name='firstName'
                       value={formData.firstName}
                       onChange={handleChange}
                       />

                      <br /><br />

                       LastName : <input type='text' name='lastName'
                       value={formData.lastName}
                       onChange={handleChange}
                       />

                      <br /><br />

                        Username : <input type='text' name='username'
                       value={formData.username}
                       onChange={handleChange}
                       />

                      <br /><br />
                        Password : <input type='password' name='password'
                       value={formData.password}
                       onChange={handleChange}
                       />

                      <br /><br />

                        Confirm Password : <input type='text' name='confirmPassword'
                       value={formData.confirmPassword}
                       onChange={handleChange}
                       />

                      <br /><br />

                    <input type='submit' value="Register"/>
      </form>
    </div>
  )
}

export default Registration;



