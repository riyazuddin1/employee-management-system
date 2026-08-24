import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom';
import axiosInstance from '../service/axiosInstance';

const ViewIndividualEmp = () => {
      const[id , setId] = useState("");
   const[name , setName] = useState("");
   const[age , setAge] = useState("");
   const[dept , setDept] = useState("");



  const navigate = useNavigate();

  const {vid} = useParams();

  // fetch the data and display the data in the input fields
  useEffect( ()=>{

    async function fetchData()
    {
      const res =  await axiosInstance.get("http://localhost:8085/getEmpById/"+vid);
      //  console.log(res.data);
      const data = res.data;
      setId(data.id);
      setName(data.name);
      setAge(data.age);
      setDept(data.dept);
     
    }
    fetchData();
       
  },[])

  return (
    <div>
        <h1>View Employee Details</h1>
        <h2>Employee ID : {id}</h2>
        <h2>Employee name : {name}</h2>
        <h2>Employee age : {age}</h2>
        <h2>Employee Department : {dept}</h2>

        <Link to="/">Back to Home</Link>
    </div>
  )
}

export default ViewIndividualEmp