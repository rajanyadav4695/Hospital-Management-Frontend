"use client"
import React from 'react'
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import Link from 'next/link';
import { userAuthLogin } from '@/Services';
import { swalFire } from '@/Helpers/swalFire';
import { FaUser, FaEnvelope, FaLock, FaUserAlt} from 'react-icons/fa';
import { useDispatch } from 'react-redux';
import { useRouter } from 'next/navigation';
import { login } from '@/Redux/slices/authSlice';

export const Userlogin = () => {
  const dispatch=useDispatch();
  const router=useRouter();
  const schema = yup
  .object()
  .shape({
    userType: yup.string().oneOf(["admin", "doctor", "patient"], "Invalid User type").required("User type is required"),
    email: yup.string().email("Invalid email address").required("Email is required"),
    password: yup.string().required("Password is required").matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,16}$/, "Password must contain at least one uppercase letter, one lowercase letter, one number and one special character"),
  });
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema),
  });

  const LoginFunction = async (data: any) => {
    const res = await userAuthLogin(data)
    if (res?.code == 200) {
      swalFire("Auth", res.message, "success")
      dispatch(login(res?.data));
      if(res?.data?.userType=='admin'){
        router.push('/admin-userlist')  
      }else if(res?.data?.userType=='doctor'){
        router.push('/doctor-userlist')  
      }
      else if(res?.data?.userType=='patient'){
        router.push('/patient-appointment')  
      }
    } else {
      swalFire("Auth", res.message, "error")
    }
  }



  return (
    <>
    <div className="container-fluid min-vh-100 d-flex align-items-center loginpage">
      <div className="row justify-content-center w-100 ">
        <div className="col-md-6 col-lg-4">
          <div className="card border-2" style={{ background: 'rgba(255, 255, 255, 0.1)', backdropFilter: 'blur(10px)' }}>
            <div className="card-header text-white text-center py-4 border-0" style={{ background: 'rgba(255, 255, 255, 0.2)' }}>
              <h3 className="mb-0 font">
                <FaUserAlt className="me-2" />
                User Login
              </h3>
            </div>
            <div className="card-body p-4">
              <form onSubmit={handleSubmit((d) => LoginFunction(d))}>
                {/* User Type Select */}
                <div className="mb-4 position-relative">
                  <div className="input-group">
                    <span className="input-group-text" style={{ background: 'rgba(255, 255, 255, 0.2)', border: 'none' }}>
                      <FaUser className="font" />
                    </span>
                    <select
                      {...register("userType")}
                      className="form-control bg-transparent font"
                      style={{ border: '1px solid rgba(255, 255, 255, 0.2)' }}
                    >
                      <option value="admin" className="text-dark">Admin</option>
                      <option value="patient" className="text-dark">Patient</option>
                      <option value="doctor" className="text-dark">Doctor</option>
                    </select>
                  </div>
                  {errors.userType && (
                    <small className="text-white">{errors.userType.message}</small>
                  )}
                </div>

                {/* Email Input */}
                <div className="mb-4">
                  <div className="input-group">
                    <span className="input-group-text" style={{ background: 'rgba(255, 255, 255, 0.2)', border: 'none' }}>
                      <FaEnvelope className="font" />
                    </span>
                    <input
                      {...register("email")}
                      className="form-control bg-transparent font"
                      placeholder="Email address"
                      type="email"
                      style={{ border: '1px solid rgba(255, 255, 255, 0.2)' }}
                    />
                  </div>
                  {errors.email && (
                    <small className="text-danger">{errors.email.message}</small>
                  )}
                </div>

                {/* Password Input */}
                <div className="mb-4">
                  <div className="input-group">
                    <span className="input-group-text" style={{ background: 'rgba(255, 255, 255, 0.2)', border: 'none' }}>
                      <FaLock className="font" />
                    </span>
                    <input
                      {...register("password")}
                      className="form-control bg-transparent font"
                      placeholder="Password"
                      type="password"
                      style={{ border: '1px solid rgba(255, 255, 255, 0.2)' }}
                    />
                  </div>
                  {errors.password && (
                    <small className="text-danger">{errors.password.message}</small>
                  )}
                </div>

                {/* Submit Button */}
                <button 
                  type="submit" 
                  className="btn btn-main btn-rounded w-100 mb-3"
                >
                  Login
                </button>

                {/* Links */}
                <div className="d-flex justify-content-between mt-3">
                  <Link 
                    href="/forget-password" 
                    className="text-decoration-none font small"
                  >
                    Forgot Password?
                  </Link>
                  <Link 
                    href="/reset-password" 
                    className="text-decoration-none font small"
                  >
                    Reset Password
                  </Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};