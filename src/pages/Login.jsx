import React from 'react';
import NavBar from '../components/NavBar';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import useCustomHook from '../hooks/useCustomHook';

const Login = () => {
  const location = useLocation();
  const navigate = useNavigate()
 
  const {logIn} = useCustomHook()
  const handleLogIn = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget)
    const email = form.get('email');
    const password = form.get('password');
    logIn(email, password)
    .then(result => {
      
      console.log(result.user)
      
     navigate(location?.state ? location?.state : "/")
    
    })
    .catch(error => console.error(error))
  }
    return (
        <div>
            <NavBar></NavBar>
            <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col bg-white p-16 md:w-[600px]">
    <div className="text-center">
      <h1 className="text-5xl font-bold">Login now!</h1>
         </div>
    <div className="card flex-shrink-0 w-full max-w-lg bg-base-100">
      <form onSubmit={handleLogIn} className="card-body">
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
          <button className="btn btn-primary capitalize bg-[#403F3F]"><Link to="/">Login</Link></button>
        </div>
      </form>
      <p className='font-semibold mx-auto'>Do not Have an account? <span className='text-[#F75B5F]'>Register</span></p>
    </div>
  </div>
</div>
        </div>
    );
};

export default Login;