import Layout from '@/Components/Common/Layout'
import PatientAppointment from "@/Components/Patient/Appointment"
import React from 'react'

const page = () => {
  return (
    <div>
        <Layout>
        <PatientAppointment/>
        </Layout>
    </div>
  )
}

export default page