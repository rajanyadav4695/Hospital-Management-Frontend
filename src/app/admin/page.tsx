import Layout from '@/Components/Admin/Layout'

import React from 'react'

const page = () => {
  return (
    <div>
         <Layout>
      <div className="container-fluid">
        <div className="row">
          <div className="col-12">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Welcome to Admin Dashboard</h5>
                <p className="card-text">This is your main content area.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
     
    </Layout>
    </div>
  )
}

export default page