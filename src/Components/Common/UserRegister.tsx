"use client";
import React, { useEffect, useState } from "react";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { getDepartmentService, userAuthRegister } from "@/Services";
import { swalFire } from "@/Helpers/swalFire";
import Link from "next/link";
import { userSession } from "@/Helpers/userSession";

// React Icons
import { FaUser, FaEnvelope, FaPhone, FaTransgender, FaBriefcase, FaGraduationCap, FaMoneyBillWave, FaMapMarkerAlt } from "react-icons/fa";
import { MdOutlineAttachFile } from "react-icons/md";
import { GiDoctorFace } from "react-icons/gi";

const doctorSchema = yup.object().shape({
  name: yup.string().min(2).max(50).required("Name is required"),
  departmentId: yup.string().required("Department is required"),
  specialist: yup.string().min(2).max(100).required("Expertise is required"),
  qualifications: yup.string().min(2).max(100).required("Qualifications are required"),
  contact: yup.string().matches(/\d{10}/, "Contact must be a 10-digit number").required(),
  experience: yup.string().required("Experience is required"),
  fees: yup.number().typeError("Fees must be a number").min(0).required(),
  address: yup.string().min(5).max(200).required("Address is required"),
  gender: yup.string().oneOf(["Male", "Female", "Other"], "Invalid gender").required(),
  email: yup.string().email("Invalid email address").required(),
  profile: yup.mixed().test("fileSize", "File is required", (value: any) => value?.length > 0).required(),
  userType: yup.string().oneOf(["doctor", "patient"], "Invalid User Type").required(),
  availableDays: yup.array().of(
    yup.string().oneOf(["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"])
  ).min(1, "Please select at least one day").required("Required field"),
});

const patientSchema = yup.object().shape({
  name: yup.string().min(2).max(50).required("Name is required"),
  email: yup.string().email("Invalid email address").required(),
  gender: yup.string().oneOf(["Male", "Female", "Other"], "Invalid gender").required(),
  contact: yup.string().matches(/\d{10}/, "Contact must be a 10-digit number").required(),
  age: yup.number().typeError("Age must be a number").min(18).max(100).required(),
  profile: yup.mixed().test("fileSize", "File is required", (value: any) => value?.length > 0).required(),
  userType: yup.string().oneOf(["doctor", "patient"], "Invalid User Type").required(),
});

const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

export const UserRegister = () => {
  const [department, setDepartment] = useState([]);
  const [userType, setUserType] = useState("patient");
  const isDoctor = userType === "doctor";
  const userData = userSession();
  const token = userData?.token || null;


  const getDepartment = async () => {
    const result = await getDepartmentService();
    console.log(result);
    setDepartment(result?.data);
  };
  console.log(department, "department");
  

  useEffect(() => {
    getDepartment();
  }, []);

  const schema: any = isDoctor ? doctorSchema : patientSchema;
  const {
    register,
    handleSubmit,
    formState: { errors },
  }: any = useForm({
    resolver: yupResolver(schema),
  });

  const registerFunction = async (data: any) => {
    const formData = new FormData();
    if (data.availableDays) {
      data.availableDays.forEach((day: any) => {
        formData.append("availableDays", day);
      });
    }

    for (const key in data) {
      if (key !== "availableDays" && key !== "profile") {
        formData.append(key, data[key]);
      }
    }
    //Append the other fields to the formData   formData.append("name", data.name);
    formData.append("email", data.email);
    formData.append("contact", data.contact);
    formData.append("gender", data.gender);
    formData.append("age", data.age);
    formData.append("userType", data.userType);
    formData.append("departmentId", data.departmentId);
    formData.append("specialist", data.specialist);
    formData.append("qualifications", data.qualifications);
    formData.append("experience", data.experience);
    formData.append("fees", data.fees);
    formData.append("address", data.address);

    if (data.profile && data.profile[0]) {
      formData.append("profile", data.profile[0]);
    }

    const res = await userAuthRegister(formData);
    swalFire("Auth", res.message, res?.code === 201 ? "success" : "error");
  };

  return (
    <div className="container-fluid min-vh-100 d-flex align-items-center loginpage">
      <div className="col-lg-6 mx-auto text-light m-3 rounded-3 p-5 card border-2" style={{ background: 'rgba(255, 255, 255, 0.1)', backdropFilter: 'blur(10px)' }}>
        <h3 className="font mx-auto">Registration</h3>
        <form onSubmit={handleSubmit(registerFunction)}>
          <div className="mb-4">
            <label className="me-2 font"><b>Register as:</b></label>
            <select
              {...register("userType")}
              className="form-select rounded-0 text-dark myform-select d-inline-block mt-1 mb-3 fb"
              value={userType}
              onChange={(e) => setUserType(e.target.value)}
            >
              <option value="doctor">Doctor</option>
              <option value="patient">Patient</option>
            </select>
            {errors.userType && <div className="text-danger fw-bold">{errors.userType?.message}</div>}
          </div>

          {/* Patient Form */}
          {userType === "patient" && (
  <div className="row">
    <div className="col-md-6 mb-4 input-group w-50">
      <span className="input-group-text"><FaUser className="font fb"/></span>
      <input {...register("name")} className="form-control fb" placeholder="Enter your name" />
      {errors.name && <div className="text-danger fw-bold">{errors.name.message}</div>}
    </div>

    <div className="col-md-6 mb-4 input-group w-50">
      <span className="input-group-text"><FaEnvelope className="font fb"/></span>
      <input {...register("email")} className="form-control fb" placeholder="Enter your email" />
      {errors.email && <div className="text-danger fw-bold">{errors.email.message}</div>}
    </div>

    <div className="col-md-6 mb-4 input-group w-50">
      <span className="input-group-text"><FaTransgender className="font fb"/></span>
      <select {...register("gender")} className="form-control bg-transparent font fb">
        <option value="">Select Gender</option>
        <option value="Male">Male</option>
        <option value="Female">Female</option>
        <option value="Other">Other</option>
      </select>
      {errors.gender && <div className="text-danger fw-bold">{errors.gender.message}</div>}
    </div>

    <div className="col-md-6 mb-4 input-group w-50">
      <span className="input-group-text"><FaPhone className="font"/></span>
      <input {...register("contact")} className="form-control fb" placeholder="Enter contact number" />
      {errors.contact && <div className="text-danger fw-bold">{errors.contact.message}</div>}
    </div>

    <div className="col-md-6 mb-4 input-group w-50">
      <span className="input-group-text font">Age</span>
      <input {...register("age")} className="form-control fb" type="number" placeholder="Enter your age" />
      {errors.age && <div className="text-danger fw-bold">{errors.age.message}</div>}
    </div>

    <div className="col-md-6 mb-4 input-group w-50">
      <span className="input-group-text"><MdOutlineAttachFile className="font"/></span>
      <input {...register("profile")} className="form-control fb" type="file" />
      {errors.profile && <div className="text-danger fw-bold">{errors.profile.message}</div>}
    </div>

    <div className="col-12 mb-4">
      <Link href="/login" className="text-decoration-none font small">Already have an Account?</Link>
    </div>

    <div className="col-12">
      <input type="submit" value="Register" className="btn btn-main btn-rounded w-100 mb-3" />
    </div>
  </div>
)}


          {/* Doctor Form */}
          {userType === "doctor" && (
            <>
              <div className="row">
                <div className="col-md-6 mb-4 input-group w-50">
                  <span className="input-group-text"><FaUser className="font"/></span>
                  <input {...register("name")} className="form-control fb" placeholder="Enter your name" />
                </div>

                <div className="col-md-6 mb-4 input-group w-50">
                  <span className="input-group-text"><GiDoctorFace className="font"/></span>
                  <select {...register("departmentId")} className="form-control font fb">
                    <option value="">Select Department</option>
                    {department.map((item:any, idx)=>{
                      return <option key={idx} value={item?.id}>{item?.name}</option>
                     })}
                  </select>
                  {errors.departmentId && (
                      <div className="text-danger fw-bold">
                        {errors.departmentId?.message}
                      </div>
                    )}
                </div>

                <div className="col-md-6 mb-4 input-group w-50">
                  <span className="input-group-text"><FaBriefcase className="font"/></span>
                  <input {...register("specialist")} className="form-control fb" placeholder="Specialization" />
                </div>

                <div className="col-md-6 mb-4 input-group w-50">
                  <span className="input-group-text"><FaGraduationCap className="font"/></span>
                  <input {...register("qualifications")} className="form-control fb" placeholder="Qualifications" />
                </div>

                <div className="col-md-6 mb-4 input-group w-50">
                  <span className="input-group-text"><FaPhone className="font"/></span>
                  <input {...register("contact")} className="form-control fb" placeholder="Contact number" />
                </div>
                <div className="col-md-6 mb-4 input-group w-50">
                  <span className="input-group-text"><FaTransgender className="font"/></span>
                  <select {...register("gender")} className="form-control fb">
                    <option value="">Select Gender</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Other">Other</option>
                  </select>
                </div>

                <div className="col-md-6 mb-4 input-group w-50">
                  <span className="input-group-text font">Yrs</span>
                  <input {...register("experience")} className="form-control fb" type="number" placeholder="Experience" />
                </div>

                <div className="col-md-6 mb-4 input-group w-50">
                  <span className="input-group-text"><FaMoneyBillWave className="font"/></span>
                  <input {...register("fees")} className="form-control fb" type="number" placeholder="Fees" />
                </div>

                <div className="col-md-6 mb-4 input-group w-50">
                  <span className="input-group-text"><FaMapMarkerAlt className="font"/></span>
                  <input {...register("address")} className="form-control fb" placeholder="Address" />
                </div>

                <div className="col-md-6 mb-4 input-group w-50">
                  <span className="input-group-text"><FaEnvelope className="font"/></span>
                  <input {...register("email")} className="form-control fb" placeholder="Email" />
                </div>

                <div className="col-md-6 mb-4 input-group">
                  <span className="input-group-text"><MdOutlineAttachFile className="font"/></span>
                  <input {...register("profile")} className="form-control fb" type="file" />
                </div>

                

                <div className="col-md-12 mb-4 font">
                  {days.map((day, index) => (
                    <label className="me-2" key={index}>
                      <input type="checkbox" {...register("availableDays")} value={day} className="me-1" />
                      {day}
                    </label>
                  ))}
                  {errors.availableDays && <div className="text-danger fw-bold">{errors.availableDays.message}</div>}
                </div>
              </div>
              <input type="submit" value="Register" className="btn btn-main btn-rounded w-100 mb-3" />
            </>
          )}
        </form>
      </div>
    </div>
  );
};
