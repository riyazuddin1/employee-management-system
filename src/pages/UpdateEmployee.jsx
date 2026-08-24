import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom';
import axiosInstance from '../service/axiosInstance';
import { toast } from 'react-toastify';

const UpdateEmployee = () => {
   const[id , setId] = useState("");
   const[name , setName] = useState("");
   const[age , setAge] = useState("");
   const[dept , setDept] = useState("");



  const navigate = useNavigate();

  const {eid} = useParams();

  // fetch the data and display the data in the input fields
  useEffect( ()=>{

    async function fetchData()
    {
      const res =  await axiosInstance.get("http://localhost:8085/getEmpById/"+eid);
      //  console.log(res.data);
      const data = res.data;
      setId(data.id);
      setName(data.name);
      setAge(data.age);
      setDept(data.dept);
     
    }
    fetchData();
       
  },[])



  const handleSubmit =async e=>{
    e.preventDefault();
    try {
      const formData = {
        id,
        name,
        age,
        dept
      }
      await axiosInstance.put("http://localhost:8085/updateEmployee",formData);
      toast.success("Employee data updated successfully");
      navigate("/");
    } catch (error) {
      toast.error("Employee data not updated");
      console.log(error);
    }
  }
  return (
    <div>
       <h1>Update Employee</h1>
      <form onSubmit={handleSubmit}>
        Employee ID  : <input type='number' placeholder='employee id'
          name='id'
          value={id}
          onChange={(e)=>setId(e.target.value)}
          readOnly
        />

        <br/>
        <br/>

        Employee Name : <input type='text' placeholder='employee name'
        name='name'
        value={name}
       onChange={(e)=>setName(e.target.value)}
        />
        <br/>
        <br />
        Employee Age : <input type='number' placeholder='employee age'
        name='age'
        value={age}
       onChange={(e)=>setAge(e.target.value)}
        />
        <br/>
        <br />
         Employee Dept : <input type='text' placeholder='employee dept'
        name='dept'
        value={dept}
       onChange={(e)=>setDept(e.target.value)}
        />
        <br/>
        <br />
        <input type="submit" value="Update Employee"/>
      </form>

      <Link to="/">Back to Home</Link>
    </div>
  )
}

export default UpdateEmployee