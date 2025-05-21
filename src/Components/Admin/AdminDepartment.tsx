"use client";
import { swalFire } from "@/Helpers/swalFire";
import { userSession } from "@/Helpers/userSession";
import { AdminWrap } from "@/HOC/AdminWrap";
import {
  adminAddDepartmentService,
  getDepartmentService,
  deleteDepartmentService,
  updateDepartmentService,
} from "@/Services";
import { yupResolver } from "@hookform/resolvers/yup";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import "@/app/globals.css";

// Schema validation
const schema = yup.object().shape({
  name: yup.string().required("Department name is required").min(5).max(35),
});

const AdminDepartment = () => {
  const router = useRouter();
  const [departments, setDepartments] = useState([]);
  const [editMode, setEditMode] = useState(false);
  const [currentDept, setCurrentDept] = useState(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const UserData = userSession();
  const token = UserData?.jwtToken;

  // Fetch departments
  const fetchDepartments = async () => {
    const res = await getDepartmentService(token);
    if (res?.code === 200) {
      setDepartments(res.data);
    } else if (res?.code === 401) {
      router.push("/login");
    } else {
      swalFire("Error", res?.message || "Failed to fetch departments", "error");
    }
  };

  useEffect(() => {
    fetchDepartments();
  }, []);

  // Submit for add or update
  const submit = async (data: any) => {
    if (editMode && currentDept) {
      const res = await updateDepartmentService(currentDept.id, data, token);
      if (res?.code === 200) {
        swalFire("Updated", res.message, "success");
        reset();
        setEditMode(false);
        setCurrentDept(null);
        fetchDepartments();
      } else {
        swalFire("Error", res.message, "error");
      }
    } else {
      const res = await adminAddDepartmentService(data, token);
      if (res?.code === 201) {
        swalFire("Success", res?.message, "success");
        reset();
        fetchDepartments();
      } else if (res?.code === 401) {
        router.push("/login");
      } else {
        swalFire("Error", res?.message, "error");
      }
    }
  };

  // Delete handler
  const handleDelete = async (id: string) => {
    const res = await deleteDepartmentService(id, token);
    if (res?.code === 200) {
      swalFire("Deleted", res.message, "success");
      fetchDepartments();
    } else {
      swalFire("Error", res.message, "error");
    }
  };

  // Edit handler
  const handleEdit = (dept: any) => {
    setEditMode(true);
    setCurrentDept(dept);
    reset({ name: dept.name });
  };

  return (
    <>
      <div className="row py-3">
        <h2 className="mb-3 text-center font">Department Management</h2>
        <div className="col-sm-10 mx-auto mt-5 p-5 rounded-3 card">
          <h3 className="mb-3 text-center font">
            {editMode ? "Edit Department" : "Add New Department"}
          </h3>

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
              {editMode ? "Update" : "Submit"}
            </button>
            {editMode && (
              <button
                type="button"
                className="btn btn-secondary ms-2"
                onClick={() => {
                  setEditMode(false);
                  setCurrentDept(null);
                  reset();
                }}
              >
                Cancel
              </button>
            )}
          </form>
          {errors.name && (
            <p className="text-danger">{errors.name.message}</p>
          )}
        </div>
      </div>

      <div className="row py-3">
        <div className="col-sm-10 p-3 department mx-auto card">
          <h2 className="my-3 text-center font">Department List</h2>
          <table className="table">
            <thead className="thead">
              <tr>
                <th className="thead text-light">#</th>
                <th className="thead text-light">Department Name</th>
                <th className="thead text-light">Actions</th>
              </tr>
            </thead>
            <tbody>
              {departments.length > 0 ? (
                departments.map((dept: any, index: any) => (
                  <tr key={dept.id || index}>
                    <td>{index + 1}</td>
                    <td>{dept.name}</td>
                    <td>
                      <button
                        className="btn btn-outline-danger me-2"
                        onClick={() => handleDelete(dept.id)}
                      >
                        Del
                      </button>
                      <button
                        className="btn btn-outline-info"
                        onClick={() => handleEdit(dept)}
                      >
                        Edit
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={3}>No departments available</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default AdminWrap(AdminDepartment);
