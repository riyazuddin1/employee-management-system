import React from 'react'
import "./navbar.css";
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../service/AuthContext';

const NavbarComp = () => {

  const navigate = useNavigate();
  const{logout} = useAuth();
  const logoutUser=()=>{
      logout();
      navigate("/login")
  }
  return (
     <section className='navComp'>
      <article>

        <div className="logo">
          <h2>Employee</h2> 
        </div>
        <div className="menuLinks">
          <Link to="/addEmp" >Add Student</Link>
          <Link to="/register" >Register</Link>
          <Link to="/login" >Login</Link>
          <button onClick={logoutUser}>Logout</button>
        </div>
      </article>

     </section>
  )
}

export default NavbarComp