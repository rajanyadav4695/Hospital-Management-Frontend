"use client";
import { swalFire } from "@/Helpers/swalFire";
import { userSession } from "@/Helpers/userSession";
import { PatientWrap } from "@/HOC/PatientWrap";
import {
  appoinmentBookService,
  getDepartmentService,
  getdoctByDepartmentIDService,
} from "@/Services";
import { yupResolver } from "@hookform/resolvers/yup";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
const schema = yup.object({
  patientId: yup.string().required(),
  departmentId: yup.string().required(),
  doctorId: yup.string().required(),
  disease: yup.string().required(),
  symptoms: yup.string().required(),
  payment: yup.string().required(),
  appointmentType: yup.string().required(),
  date: yup.string().required(),
  startTime: yup.string().required(),
});
function PatientAppointment() {
  const [departmentarr, detDepartmentArr] = useState([]);
  const [docterArr, setDoctorArr] = useState([]);
  const [slecteddepId, setSelectedDepartmentId] = useState(null);
  const userData = userSession();
  const router = useRouter();

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });
  const fetchDept = async () => {
    const res = await getDepartmentService(userData?.jwtToken);
    detDepartmentArr(res?.data);
  };

  const fetchDoctorByDeptId = async () => {
    const res = await getdoctByDepartmentIDService(
      slecteddepId,
      userData?.jwtToken
    );
    setDoctorArr(res?.data);
  };
  useEffect(() => {
    if (slecteddepId) {
      fetchDoctorByDeptId();
    }
  }, [slecteddepId]);

  useEffect(() => {
    setValue("patientId", userData?.id);
    fetchDept();
  }, []);

  const handleDepDropChange = (e: any) => {
    setSelectedDepartmentId(e?.target?.value);
  };

  const appoinmentBookSubmit = async (data: any) => {
    const res = await appoinmentBookService(userData?.jwtToken, data);
    if (res?.code == 201) {
      swalFire("Appointment ", res.message, "success");
    } else if (res.code == 401) {
      swalFire("Appointment ", res.message, "error");
      router.push("/login");
    } else {
      swalFire("Appointment", res.message, "error");
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit((data) => console.log(data))}>
        <div className="container-fluid loginpage">
          <div className="row">
            <div className="col-sm-2"></div>

            <div
              className="col-sm-8 p-5 rounded m-5"
              style={{
                background: "rgba(255, 255, 255, 0.1)",
                backdropFilter: "blur(10px)",
                border: "1px solid rgba(255, 255, 255, 0.2)",
              }}
            >
              <h3 className="text-center font mb-2"> MAKE AN APPOINTMENT</h3>
              <div className="row">
                <div className="col-sm-6 mb-5">
                  <span className="font">Patient Id</span>
                  <input
                    type="text"
                    {...register("patientId")}
                    className="form-control"
                    placeholder="Enter Your Name"
                  />
                  {errors.patientId && (
                    <p className="text-danger mb-2">
                      {errors.patientId.message}
                    </p>
                  )}

                  <span className="font mb-2 fb">Doctor Id</span>

                  <span className="font mb-2">Department Id</span>
                  <select
                    className="form-control"
                    {...register("doctorId")}
                    onChange={(e: any) => handleDepDropChange(e)}
                  >
                    {docterArr?.map((item: any, index: any) => {
                      return (
                        <option key={index} value={item?.id}>
                          {" "}
                          {item?.name}
                        </option>
                      );
                    })}
                  </select>
                  {errors.doctorId && (
                    <p className="text-danger">{errors.doctorId.message}</p>
                  )}

                  <span className="font mb-2">Disease</span>
                  <input
                    type="text"
                    {...register("disease")}
                    className="form-control"
                    placeholder="Enter Your disease"
                  />
                  {errors.disease && (
                    <p className="text-danger mb-2">{errors.disease.message}</p>
                  )}

                  <span className="font mb-2">Date</span>
                  <input
                    type="date"
                    {...register("date")}
                    className="form-control"
                    placeholder="Enter Your date"
                  />
                  {errors.date && (
                    <p className="text-danger mb-2">{errors.date.message}</p>
                  )}
                  <span className="font mb-2">StartTime</span>
                  <input
                    type="time"
                    {...register("startTime")}
                    className="form-control"
                    placeholder="Enter Your startTime"
                  />
                  {errors.startTime && (
                    <p className="text-danger">{errors.startTime.message}</p>
                  )}
                </div>
                <div className="col-sm-6 mb-5">
                  <span className="font mb-2">Department Id</span>
                  <select
                    className="form-control"
                    {...register("departmentId")}
                    onChange={(e: any) => handleDepDropChange(e)}
                  >
                    {departmentarr?.map((item: any, index: any) => {
                      return (
                        <option key={index} value={item?.id}>
                          {" "}
                          {item?.name}
                        </option>
                      );
                    })}
                  </select>
                  {errors.departmentId && (
                    <p className="text-danger">{errors.departmentId.message}</p>
                  )}

                  <span className="font mb-2">symptoms</span>
                  <input
                    type="text"
                    {...register("symptoms")}
                    className="form-control"
                    placeholder="Enter Your symptoms"
                  />
                  {errors.symptoms && (
                    <p className="text-danger">{errors.symptoms.message}</p>
                  )}
                  <span className="font mb-2">AppointmentType</span>
                  <select
                    {...register("appointmentType")}
                    className="form-control"
                  >
                    <option>General</option>
                    <option>Emergency</option>
                  </select>
                  {errors.appointmentType && (
                    <p className="text-danger">
                      {errors.appointmentType.message}
                    </p>
                  )}
                  <span className="font mb-2">payment</span>
                  <input
                    type="text"
                    {...register("payment")}
                    className="form-control"
                    placeholder="Enter Your payment"
                  />
                  {errors.payment && (
                    <p className="text-danger">{errors.payment.message}</p>
                  )}
                </div>
              </div>

              <button className="btn btn-main btn-rounded w-50 mb-3">
                Make an appointment
              </button>
            </div>

            <div className="col-sm-2"></div>
          </div>
        </div>
      </form>
    </>
  );
}

export default PatientWrap(PatientAppointment);
