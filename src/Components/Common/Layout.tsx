'use client'
import React, { useEffect, useState } from 'react';
import { 
  FiHome, 
  FiUsers, 
  FiCalendar, 
  FiFileText, 
  FiPackage, 
  FiSettings, 
  FiBell, 
  FiUserCheck, 
  FiLogOut, 
  FiMenu
} from 'react-icons/fi';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Layout.css';  // Add custom styles for hospital admin
import Image from 'next/image';
import { userSession } from '@/Helpers/userSession';
import { FaHandHoldingMedical, FaUserAlt } from 'react-icons/fa';
import { TbNewSection } from 'react-icons/tb';
import { BiSolidInjection } from 'react-icons/bi';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [sideNav, setSideNav] = useState([]); 
  const [activeMenu, setActiveMenu] = useState('dashboard');
  const [data,setData] = useState([]);
  const userData=userSession();

  const toggleSidebar = () => {
    setSidebarCollapsed(!sidebarCollapsed);
  };

  const adminMenu: any = [
    {
      title: "User List",
      link: "/admin-userlist",
      icon: <FaUserAlt />,
    },
    {
      title: "Department",
      link: "/admin-department",
      icon: <TbNewSection />,
    },
  ];
  const doctorMenu: any = [
    {
      title: "Appointments",
      link: "/doctor-apprequest",
      icon: <BiSolidInjection/>,
    },
  ];
  const patientMenu: any = [
    {
      title: "Appointment",
      link: "/patient-appointment",
      icon: <FaHandHoldingMedical />,
    },
    
  ];

  useEffect(() => {
    if(userData?.userType=='admin'){
      setSideNav(adminMenu)
    }else if(userData?.userType=='patient'){
      setSideNav(patientMenu)
    }
    else if(userData?.userType=='doctor'){
      setSideNav(doctorMenu)
    }
  }, [userData]);

  return (
    <div className="admin-container">
      {/* Sidebar */}
      <div className={`sidebar ${sidebarCollapsed ? 'collapsed' : ''}`}>
        <div className="sidebar-header">
          <h3 className={sidebarCollapsed ? 'd-none' : ''}>Hospital Admin</h3>
          <button onClick={toggleSidebar} className="toggle-btn">
            <FiMenu />
          </button>
        </div>
        <ul className="sidebar-menu">
          {sideNav.map((item:any) => (
            <li 
              key={item.name}
              className={activeMenu === item.name ? 'active' : ''}
              onClick={() => setActiveMenu(item.name)}
            >
              <span className="menu-icon">{item.icon}</span>
              {!sidebarCollapsed && <span className="menu-label">{item.label}</span>}
            </li>
          ))}
        </ul>
        {!sidebarCollapsed && (
          <div className="sidebar-footer">
            <button className="logout-btn">
              <FiLogOut /> Logout
            </button>
          </div>
        )}
      </div>

      {/* Main Content */}
      <div className="main-content">
        {/* Top Navigation */}
        <nav className="top-navbar navbar navbar-expand-lg navbar-light bg-light">
          <div className="container-fluid">
            <div className="d-flex align-items-center">
              <button className="navbar-toggler me-2" onClick={toggleSidebar}>
                <FiMenu />
              </button>
              <span className="navbar-brand">Admin Dashboard</span>
            </div>
            <div className="d-flex align-items-center">
              <div className="notification-icon me-3">
                <FiBell />
                <span className="badge bg-danger"></span>
              </div>
              <div className="user-profile dropdown">
                <button 
                  className="btn dropdown-toggle d-flex align-items-center" 
                  id="dropdownMenuButton1" 
                  data-bs-toggle="dropdown"
                >
                  <div className="avatar me-2">
                    <FiUserCheck />
                  </div>
                  <span className="d-none d-md-inline me-2">Admin</span>
                  <div className="profile-circle me-2">
                    <Image 
                      src="/1.jpg" 
                      alt="Admin Profile" width={36} height={36}
                      className="profile-image"
                    />
                  </div>
                </button>
                <ul className="dropdown-menu dropdown-menu-end">
                  <li><a className="dropdown-item" href="#">Profile</a></li>
                  <li><a className="dropdown-item" href="#">Settings</a></li>
                  <li><hr className="dropdown-divider" /></li>
                  <li><a className="dropdown-item" href="#">Logout</a></li>
                </ul>
              </div>
            </div>
          </div>
        </nav>

        {/* Content Area */}
        <div className="content-area">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Layout;
