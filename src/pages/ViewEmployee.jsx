import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import axiosInstance from '../service/axiosInstance';
import { toast } from 'react-toastify';

const ViewEmployee = () => {
  const[employee , setEmployee] = useState([]);
  console.log(employee);

  const navigate = useNavigate();

  const fetchEmployee=async()=>{
    const response = await axiosInstance.get("http://localhost:8085/getEmployees");
    setEmployee(response.data);
  };

  useEffect(()=>{
    fetchEmployee();
  },[]);

  //to delete employee
  const deleteEmployee =async (id)=>{
      try {
        await axiosInstance.delete("http://localhost:8085/deleteEmp/"+id);
        toast.success("employee deleted successfully");
        fetchEmployee();
      } catch (error) {
        toast.error("employee not deleted");
      }
  }

  // to fetch update file
  const loadEdit = id =>
  {
    navigate(`/updateEmp/${id}`)
  }

  // to fetch indidividual emp
  const viewIndEmp = id =>{
    navigate(`/viewEmp/${id}`);
  }
  return (
    <div>
        <h1>List of Employees</h1>

        {
          employee && employee.length > 0 ? (
            <table style={{width:"90%" , textAlign:"center"}} border="2" cellPadding="10" cellSpacing="0">
              <thead>
                <tr>
                  <th>Id</th>
                  <th>Name</th>
                  <th>Age</th>
                  <th>Department</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {
                  employee.map((emp , i)=>{
                    return (
                      <tr key={i}>
                        <td>{emp.id}</td>
                        <td>{emp.name}</td>
                        <td>{emp.age}</td>
                        <td>{emp.dept}</td>
                        <td>
                          <button onClick={()=>deleteEmployee(emp.id)}>Delete</button>
                          <button onClick={()=>loadEdit(emp.id)}>Edit</button>
                          <button onClick={()=>viewIndEmp(emp.id)}>View</button>
                        </td>
                      </tr>
                    )
                  })
                }
              </tbody>
            </table>
          ):<h1>No data available</h1>
        }
    </div>
  )
}

export default ViewEmployee