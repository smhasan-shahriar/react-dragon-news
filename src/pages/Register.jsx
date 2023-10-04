import React from 'react';
import NavBar from '../components/NavBar';
import { Link } from 'react-router-dom';
import useCustomHook from '../hooks/useCustomHook';

const Register = () => {
  const {createUser} = useCustomHook();
  const handleSignUp = e => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const name = form.get('name');
    const photo = form.get('photo');
    const email = form.get('email');
    const password = form.get('password');
    createUser(email, password)
    .then(result => console.log(result.user))
    .catch(error => console.error(error))

  }
    return (
        <div>
        <NavBar></NavBar>
        <div className="hero min-h-screen bg-base-200">
<div className="hero-content flex-col bg-white  p-16  md:w-[600px]">
<div className="text-center">
  <h1 className="text-5xl font-bold">Register now!</h1>
     </div>
<div className="card flex-shrink-0 w-full max-w-sm bg-base-100">
  <form onSubmit={handleSignUp} className="card-body">
    <div className="form-control">
      <label className="label">
        <span className="label-text">Your Name</span>
      </label>
      <input type="text" placeholder="Name" name="name" className="input input-bordered" required />
    </div>
    <div className="form-control">
      <label className="label">
        <span className="label-text">Photo URL</span>
      </label>
      <input type="text" placeholder="Photo URL" name="photo" className="input input-bordered" required />
    </div>
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
      <button className="btn btn-primary capitalize bg-[#403F3F]">Register</button>
    </div>
  </form>
  <p className='font-semibold mx-auto'>Already Have an account? <Link to="/login"><span className='text-[#F75B5F]'>Login</span></Link></p>
</div>
</div>
</div>
    </div>
    );
};

export default Register;