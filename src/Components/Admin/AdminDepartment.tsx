"use client";
import { swalFire } from "@/Helpers/swalFire";
import { userSession } from "@/Helpers/userSession";
import { AdminWrap } from "@/HOC/AdminWrap";
import { adminAddDepartmentService } from "@/Services";
import { yupResolver } from "@hookform/resolvers/yup";
import { useRouter } from "next/navigation";
import React from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import "@/app/globals.css";


const schema = yup.object().shape({
  name: yup.string().required().min(5).max(35),
});

const AdminDepartment = () => {
  const router=useRouter()
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const UserData = userSession();
  const token = UserData.jwtToken

  const submit = async (data: any) => {
    // console.log(data);
    const res = await adminAddDepartmentService(data,token) 
    if(res?.code==201){
      swalFire("Action",res?.message,"success")
    }else if(res?.code ==401){
      router.push('/login')
    }
    
    else{
      swalFire("Action",res?.message,"error")
    }
    
  };

  return (
    <>
      <div className="row py-3" >
      <h2 className="mb-3 text-center font">Department Management</h2>
        <div className="col-sm-10 mx-auto mt-5 p-5 rounded-3 card">
        <h3 className="mb-3 text-center font">Add New Department</h3>
     
            <form
              onSubmit={handleSubmit(submit)}
              className="d-flex align-items-end"
            >
              <input
                {...register("name")}
                className="form-control me-2 mt-1"
                type="text"
                placeholder="Enter Department Name"
                aria-label="Add"
              />
              <button className="btn btn-main p-2" type="submit">
              Submit
              </button>{" "}
              <br />
            </form>
        {errors.name && <p className="text-danger">{errors.name.message}</p>}
        </div>
      </div>
      <div className="row py-3">
          <div className="col-sm-10 p-3 department mx-auto card">
          <h2 className="my-3 text-center font"> Department List</h2>
          <table className="table" >
            <thead className="thead">
          <tr >
            <th className="thead text-light">#</th>
            <th className="thead text-light">Department Name</th>
            <th className="thead text-light">Actions</th>
          </tr>
        </thead>
        <tbody >
          <tr>
            <td>1</td>
            <td>Cardiology</td>
            <td>
              <button className="btn btn-outline-danger me-2">Del</button>
              <button className="btn btn-outline-info">Edit</button>
            </td>
          </tr>
        </tbody>
      
          </table>
          </div>
        </div>
    </>
  );
};

export default AdminWrap(AdminDepartment);