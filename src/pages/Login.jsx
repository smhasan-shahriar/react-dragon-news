import React from 'react';
import NavBar from '../components/NavBar';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div>
            <NavBar></NavBar>
            <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col bg-white p-16 ">
    <div className="text-center">
      <h1 className="text-5xl font-bold">Login now!</h1>
         </div>
    <div className="card flex-shrink-0 w-full max-w-lg bg-base-100">
      <form className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" placeholder="email" name="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" placeholder="password" name="password" className="input input-bordered" required />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary capitalize bg-[#403F3F]">Login</button>
        </div>
      </form>
      <p className='font-semibold mx-auto'>Dont Have an account? <Link to="/register"><span className='text-[#F75B5F]'>Register</span></Link></p>
    </div>
  </div>
</div>
        </div>
    );
};

export default Login;