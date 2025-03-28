// UserLogin.tsx
"use client"
import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';


const schema = yup.object().shape({
  userType: yup.string().oneOf(['admin', 'doctor', 'patient'], 'Invalid user type').required('User  type is required'),
  email: yup.string().email('Invalid email').required('Email is required'),
  password: yup.string().min(6, 'Password must be at least 6 characters').required('Password is required'),
});




export const Userlogin: React.FC = () => {
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data: any) => {
    console.log(data);
    // Handle login logic here
  };

  return (
    <div className="container mt-5">
      <h1 className='text-center fw-bold '>User Login</h1>
      <div className="row">
        <div className="col-8 mx-auto border border-1 p-5">
           <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-3">
        <label htmlFor="userType" className="form-label">User  Type</label>
          <select {...register("userType")} className={`form-select loginf ${errors.userType ? 'is-invalid' : ''}`}>
            <option value="">Select User Type</option>
            <option value="admin">Admin</option>
            <option value="doctor">Doctor</option>
            <option value="patient">Patient</option>
          </select>
          {errors.userType && <div className="invalid-feedback">{errors.userType.message}</div>}
        </div>

        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email</label>
          <input
            type="email"
            {...register("email")}
            className={`form-control loginf ${errors.email ? 'is-invalid' : ''}`}
          />
          {errors.email && <div className="invalid-feedback">{errors.email.message}</div>}
        </div>

        <div className="mb-3">
          <label htmlFor="password" className="form-label">Password</label>
          <input
            type="password"
            {...register("password")}
            className={`form-control loginf ${errors.password ? 'is-invalid' : ''}`}
          />
          {errors.password && <div className="invalid-feedback">{errors.password.message}</div>}
        </div>
        <div className="mt-3">
        <a href="/forget-password">Forgot Password?</a>
      </div>

        <button type="submit" className="btn btn-primary">Login</button>
      </form>
      
        </div>
      </div>
     

      
    </div>
  );
};

