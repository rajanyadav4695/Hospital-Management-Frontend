"use client"
import React from 'react'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { FaEnvelope } from 'react-icons/fa'  // Import an icon from react-icons

const schema = yup
  .object()
  .shape({
    email: yup.string().email("Invalid email address").required("Email is required"),
  })

export const ForgetPassword = () => {
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema),
  })

  return (
    <div className="row login-row px-3 my-bg-color1 loginpage">
      <div className="col-md-5 mx-auto border border-1 rounded-3 p-5 m-5" style={{ background: 'rgba(255, 255, 255, 0.1)', backdropFilter: 'blur(10px)' }}>
        <h3 className='mb-4 fw-bold text-center'>Reset Your Password</h3>
        <form onSubmit={handleSubmit((d) => console.log(d))}>
          <div className='mb-2'>
            {/* Label for email */}
            <label htmlFor="email" className="form-label ">Email Address</label>
            <div className="input-group">
              {/* Icon inside input */}
              <div className="input-group-text text-danger" style={{ background: 'rgba(255, 255, 255, 0.4)', border: 'none' }}>
                <FaEnvelope />
              </div>
              <input
                {...register("email")}
                className='form-control p-2 text-dark rounded-0'
                placeholder='Enter Your email'
                type="text"
                id="email"
                style={{ background: 'rgba(255, 255, 255, 0.4)', border: 'none' }}
              />
            </div>
            {/* Display error message */}
            {errors.email && <div className="text-danger fw-bold">{errors.email?.message}</div>}
          </div>
          <input
            type="submit"
            value="Reset Password"
            className='btn btn-main btn-rounded w-100 mb-3'
          />
        </form>
      </div>
    </div>
  )
}
