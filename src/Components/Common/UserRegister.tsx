"use client"
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import Link from 'next/link'
import { FaUser, FaEnvelope, FaLock, FaIdCard, FaStethoscope, FaCalendarAlt, FaTransgender, FaPhone, FaMapMarker, FaTint, FaBookMedical } from 'react-icons/fa'

const schema = yup.object().shape({
  userType: yup.string().oneOf(["doctor", "patient"], "Invalid User type").required("User type is required"),
  name: yup.string().required("Name is required"),
  email: yup.string().email("Invalid email address").required("Email is required"),
  gender: yup.string().required("Gender is required"),
  contact: yup.string().matches(/^[0-9]{10}$/, "Invalid contact number").required("Contact is required"),
  // Conditional fields
  ...yup.lazy((values) => {
    if (values.userType === 'doctor') {
      return yup.object().shape({
        departmentId: yup.string().required("Department ID is required"),
        department: yup.string().required("Department is required"),
        address: yup.string().required("Address is required"),
        availableDays: yup.array().min(1, "Select at least one available day"),
        token: yup.number().required("Token fee is required"),
        specialist: yup.string().required("Specialization is required"),
        experience: yup.number().positive("Experience must be positive").required("Experience is required"),
        qualification: yup.string().required("Qualification is required")
      })
    }
    if (values.userType === 'patient') {
      return yup.object().shape({
        age: yup.number().positive("Age must be positive").required("Age is required"),
        bloodGroup: yup.string().required("Blood group is required"),
        aadharNo: yup.string().matches(/^[0-9]{12}$/, "Invalid Aadhar number").required("Aadhar is required")
      })
    }
    return yup.object()
  })
})

export const UserRegister = () => {
  const [userType, setUserType] = useState('')
  const { register, handleSubmit, formState: { errors }, watch } = useForm({
    resolver: yupResolver(schema),
  })

  const onSubmit = (data: any) => {
    console.log(data)
    // Handle registration logic here
  }

  const currentUserType = watch('userType')

  return (
    <div className="container-fluid min-vh-100 d-flex align-items-center loginpage">
      <div className="row justify-content-center w-100">
        <div className="col-md-8 col-lg-6">
          <div className="card border-0" style={{ background: 'rgba(255, 255, 255, 0.1)', backdropFilter: 'blur(10px)' }}>
            <div className="card-header text-white text-center py-4 border-0" style={{ background: 'rgba(255, 255, 255, 0.2)' }}>
              <h3 className="mb-0">
                <FaUser className="me-2" />
                User Registration
              </h3>
            </div>
            <div className="card-body p-4">
              <form onSubmit={handleSubmit(onSubmit)}>
                {/* User Type Selection */}
                <div className="mb-4">
                  <div className="input-group">
                    <span className="input-group-text" style={{ background: 'rgba(255, 255, 255, 0.2)', border: 'none' }}>
                      <FaUser className="text-white" />
                    </span>
                    <select
                      {...register("userType")}
                      className="form-control bg-transparent text-white"
                      style={{ border: '1px solid rgba(255, 255, 255, 0.2)' }}
                      onChange={(e) => setUserType(e.target.value)}
                    >
                      <option value="">Select User Type</option>
                      <option value="doctor" className="text-dark">Doctor</option>
                      <option value="patient" className="text-dark">Patient</option>
                    </select>
                  </div>
                  {errors.userType && <small className="text-white">{errors.userType.message}</small>}
                </div>

                {/* Common Fields */}
                <div className="mb-4">
                  <div className="input-group">
                    <span className="input-group-text" style={{ background: 'rgba(255, 255, 255, 0.2)', border: 'none' }}>
                      <FaUser className="text-white" />
                    </span>
                    <input
                      {...register("name")}
                      className="form-control bg-transparent text-white"
                      placeholder="Full Name"
                      style={{ border: '1px solid rgba(255, 255, 255, 0.2)' }}
                    />
                  </div>
                  {errors.name && <small className="text-white">{errors.name.message}</small>}
                </div>

                <div className="mb-4">
                  <div className="input-group">
                    <span className="input-group-text" style={{ background: 'rgba(255, 255, 255, 0.2)', border: 'none' }}>
                      <FaEnvelope className="text-white" />
                    </span>
                    <input
                      {...register("email")}
                      className="form-control bg-transparent text-white"
                      placeholder="Email Address"
                      style={{ border: '1px solid rgba(255, 255, 255, 0.2)' }}
                    />
                  </div>
                  {errors.email && <small className="text-white">{errors.email.message}</small>}
                </div>

                <div className="mb-4">
                  <div className="input-group">
                    <span className="input-group-text" style={{ background: 'rgba(255, 255, 255, 0.2)', border: 'none' }}>
                      <FaTransgender className="text-white" />
                    </span>
                    <select
                      {...register("gender")}
                      className="form-control bg-transparent text-white"
                      style={{ border: '1px solid rgba(255, 255, 255, 0.2)' }}
                    >
                      <option value="">Select Gender</option>
                      <option value="male" className="text-dark">Male</option>
                      <option value="female" className="text-dark">Female</option>
                      <option value="other" className="text-dark">Other</option>
                    </select>
                  </div>
                  {errors.gender && <small className="text-white">{errors.gender.message}</small>}
                </div>

                <div className="mb-4">
                  <div className="input-group">
                    <span className="input-group-text" style={{ background: 'rgba(255, 255, 255, 0.2)', border: 'none' }}>
                      <FaPhone className="text-white" />
                    </span>
                    <input
                      {...register("contact")}
                      className="form-control bg-transparent text-white"
                      placeholder="Contact Number"
                      style={{ border: '1px solid rgba(255, 255, 255, 0.2)' }}
                    />
                  </div>
                  {errors.contact && <small className="text-white">{errors.contact.message}</small>}
                </div>

                {/* Doctor Specific Fields */}
                {currentUserType === 'doctor' && (
                  <>
                    <div className="mb-4">
                      <div className="input-group">
                        <span className="input-group-text" style={{ background: 'rgba(255, 255, 255, 0.2)', border: 'none' }}>
                          <FaIdCard className="text-white" />
                        </span>
                        <input
                          {...register("departmentId")}
                          className="form-control bg-transparent text-white"
                          placeholder="Department ID"
                          style={{ border: '1px solid rgba(255, 255, 255, 0.2)' }}
                        />
                      </div>
                      {errors.departmentId && <small className="text-white">{errors.departmentId.message}</small>}
                    </div>

                    <div className="mb-4">
                      <div className="input-group">
                        <span className="input-group-text" style={{ background: 'rgba(255, 255, 255, 0.2)', border: 'none' }}>
                          <FaStethoscope className="text-white" />
                        </span>
                        <input
                          {...register("department")}
                          className="form-control bg-transparent text-white"
                          placeholder="Department"
                          style={{ border: '1px solid rgba(255, 255, 255, 0.2)' }}
                        />
                      </div>
                      {errors.department && <small className="text-white">{errors.department.message}</small>}
                    </div>

                    {/* Add other doctor fields similarly */}
                  </>
                )}

                {/* Patient Specific Fields */}
                {currentUserType === 'patient' && (
                  <>
                    <div className="mb-4">
                      <div className="input-group">
                        <span className="input-group-text" style={{ background: 'rgba(255, 255, 255, 0.2)', border: 'none' }}>
                          <FaCalendarAlt className="text-white" />
                        </span>
                        <input
                          {...register("age")}
                          className="form-control bg-transparent text-white"
                          placeholder="Age"
                          type="number"
                          style={{ border: '1px solid rgba(255, 255, 255, 0.2)' }}
                        />
                      </div>
                      {errors.age && <small className="text-white">{errors.age.message}</small>}
                    </div>

                    <div className="mb-4">
                      <div className="input-group">
                        <span className="input-group-text" style={{ background: 'rgba(255, 255, 255, 0.2)', border: 'none' }}>
                          <FaTint className="text-white" />
                        </span>
                        <select
                          {...register("bloodGroup")}
                          className="form-control bg-transparent text-white"
                          style={{ border: '1px solid rgba(255, 255, 255, 0.2)' }}
                        >
                          <option value="">Select Blood Group</option>
                          <option value="A+" className="text-dark">A+</option>
                          <option value="A-" className="text-dark">A-</option>
                          <option value="B+" className="text-dark">B+</option>
                          <option value="B-" className="text-dark">B-</option>
                          <option value="AB+" className="text-dark">AB+</option>
                          <option value="AB-" className="text-dark">AB-</option>
                          <option value="O+" className="text-dark">O+</option>
                          <option value="O-" className="text-dark">O-</option>
                        </select>
                      </div>
                      {errors.bloodGroup && <small className="text-white">{errors.bloodGroup.message}</small>}
                    </div>

                    {/* Add other patient fields similarly */}
                  </>
                )}

                <button 
                  type="submit" 
                  className="btn btn-light btn-rounded w-100 mb-3"
                  style={{ background: 'rgba(255, 255, 255, 0.2)', border: 'none' }}
                >
                  Register
                </button>

                <div className="text-center text-white">
                  Already have an account? <Link href="/login" className="text-white">Login here</Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
