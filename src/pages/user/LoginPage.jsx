import React from 'react'
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import toast from 'react-hot-toast';
import { useForm } from "react-hook-form";

export const LoginPage = () => {

  const {
    register,
    handleSubmit,
  formState: { errors },
  } = useForm();

  const navigate = useNavigate();

  const onSubmit = async(data) => {
   try {
    console.log(data,'====data');

  const response = await axios({
    url:'http://localhost:3000/api/users/login',
    method: 'POST',
    data,
    withCredentials: true,
  });
  console.log(response);
toast.success('Login successfully completed !!!')
navigate('/')
   }catch (error) {
    toast.error('Login failed')
    console.log(error);
  }
};
return (
    <div className="hero bg-base-200 py-20">
  <div className="hero-content flex-col lg:flex-row">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold">Login now!</h1>
      <p className="py-6">
        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
        quasi. In deleniti eaque aut repudiandae et a id nisi.
      </p>
    </div>
    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
    <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" {...register("email")} placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" {...register("password")}  placeholder="password" className="input input-bordered" required />
          <label className="label">
            <Link to={'/signup'}>
            Dont have any account?
            </Link>
           
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary" type='submit'>Login</button>
        </div>
      </form>
    </div>
  </div>
</div>
  )
};
