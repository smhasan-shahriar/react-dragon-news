import React from 'react';
import { NavLink, Navigate, useNavigate } from 'react-router-dom';
import userPicture from '../assets/user.png'
import useCustomHook from '../hooks/useCustomHook';

const NavBar = () => {
  const {user, logOut} = useCustomHook()
  const handleLogOut = () => {
    logOut()
    
  }
  
  
  const navigate = useNavigate();
  const handleLoginCLick = () => {
    navigate('/login')
  }
    const navLinks = <>
     <li><NavLink to="/">Home</NavLink></li>
     <li><NavLink to="/about">About</NavLink></li>
     <li><NavLink to="/career">Career</NavLink></li>
    </>
    return (
        <div>
            <div className="navbar bg-base-100 max-w-[1140px] mx-auto">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
       {navLinks}
      </ul>
    </div>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
     {navLinks}
    </ul>
  </div>
  <div className="navbar-end flex gap-4">
    {
      !user ? <>
      <div className="w-10 rounded-full">
          <img src={userPicture}/>
        </div>
  <a onClick={handleLoginCLick} className="btn capitalize bg-[#403F3F] text-white px-6 text-xl font-semibold">Login</a>
      </>:
      <> <a onClick={handleLogOut} className="btn capitalize bg-[#403F3F] text-white px-6 text-xl font-semibold">Log Out</a></>
    }
  
  </div>
</div>
        </div>
    );
};

export default NavBar;