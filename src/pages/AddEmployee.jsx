import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import axiosInstance from '../service/axiosInstance';
import { toast } from 'react-toastify';

const AddEmployee = () => {
  const[formData , setFormData]=useState({
    id:"",
    name:"",
    age:"",
    dept:""
  });

  const navigate = useNavigate();

  const handleInputChange=(e)=>{
      setFormData({...formData , [e.target.name] : e.target.value});
  };

  const handleSubmit =async e=>{
    e.preventDefault();
    try {
      await axiosInstance.post("http://localhost:8085/addEmployee",formData);
      toast.success("Employee data created successfully");
      navigate("/");
    } catch (error) {
      toast.error("Employee data not created");
      console.log(error);
    }
  }
  return (
    <div>
      <h1>Create Employee</h1>
      <form onSubmit={handleSubmit}>
        Employee ID  : <input type='number' placeholder='employee id'
          name='id'
          value={formData.id}
          onChange={handleInputChange}
        />

        <br/>
        <br/>

        Employee Name : <input type='text' placeholder='employee name'
        name='name'
        value={formData.name}
        onChange={handleInputChange}
        />
        <br/>
        <br />
        Employee Age : <input type='number' placeholder='employee age'
        name='age'
        value={formData.age}
        onChange={handleInputChange}
        />
        <br/>
        <br />
         Employee Dept : <input type='text' placeholder='employee dept'
        name='dept'
        value={formData.dept}
        onChange={handleInputChange}
        />
        <br/>
        <br />
        <input type="submit" value="Add Employee"/>
      </form>
      <Link to='/'>Back to Home</Link>
    </div>
  )
}

export default AddEmployee