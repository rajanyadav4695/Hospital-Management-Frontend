import Layout from '@/Components/Common/Layout'
import React from 'react'

const page = () => {
  return (
    <div>
        <Layout>
            <div className='flex flex-col items-center justify-center h-screen'>
                <h1 className='text-2xl font-bold'>Patient Appointment</h1>
                <p className='mt-4 text-gray-600'>This is the Patient Appointment page.</p>
            </div>
        </Layout>
    </div>
  )
}

export default page