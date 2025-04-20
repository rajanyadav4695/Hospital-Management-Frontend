'use client'
import React, { useEffect, useState } from 'react';
import { 
  FiMenu, 
  FiBell, 
  FiUser,
  FiLogOut,
  FiUsers,
  FiPackage,
  FiCalendar
} from 'react-icons/fi';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Layout.css';
import Image from 'next/image';
import { userSession } from '@/Helpers/userSession';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { IoMenu } from 'react-icons/io5';
import { BiFirstAid } from 'react-icons/bi';
import { logout } from '@/Redux/slices/authSlice';
import { useDispatch } from 'react-redux';

interface LayoutProps {
  children: React.ReactNode;
}

interface MenuItem {
  title: string;
  link: string;
  icon: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const dispatch = useDispatch();
  const router = useRouter();
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [activeMenu, setActiveMenu] = useState('');
  const userData = userSession();
  const [sideNav, setSideNav] = useState<MenuItem[]>([]);

  const adminMenu: MenuItem[] = [
    { title: "User List", link: "/admin-userlist", icon: <FiUsers /> },
    { title: "Department", link: "/admin-department", icon: <FiPackage /> },
  ];

  const doctorMenu: MenuItem[] = [
    { title: "Appointments", link: "/doctor-apprequest", icon: <FiCalendar /> },
  ];

  const patientMenu: MenuItem[] = [
    { title: "Appointment", link: "/patient-appointment", icon: <FiCalendar /> },
  ];

  useEffect(() => {
    if (userData?.userType === 'admin') {
      setSideNav(adminMenu);
    } else if (userData?.userType === 'patient') {
      setSideNav(patientMenu);
    } else if (userData?.userType === 'doctor') {
      setSideNav(doctorMenu);
    }
    setActiveMenu(window.location.pathname);
  }, [userData]);

  const handleLogout = () => {
       dispatch(logout());
        router.push('/login')
  };

  const toggleSidebar = () => {
    setSidebarCollapsed(!sidebarCollapsed);
  };

  return (
    <div className="admin-container">
      <div className={`sidebar ${sidebarCollapsed ? 'collapsed' : ''}`}>
        <div className="sidebar-header border-bottom border-1">
          <h4 className='text-light m-3'>
            <span className={sidebarCollapsed ? 'd-none' : ''}>
              <Image src="/dashbord.png" alt='Image' height={25} width={140} className="img-fluid" />
            </span>
          <span onClick={toggleSidebar} className="toggle-btn ms-2">
            <IoMenu />
          </span>
          </h4>
          
        </div>
        
        <ul className="sidebar-menu mx-auto">
          {sideNav.map((item) => (
            <li 
              key={item.title}
              className={activeMenu.includes(item.link) ? 'active' : ''}
            >
              <Link href={item.link} className="menu-link mx-auto">
                <span className="menu-icon me-2">{item.icon}</span>
                {!sidebarCollapsed && <span className="menu-label mt-1">{item.title}</span>}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <div className="main-content">
        <nav className="top-navbar navbar navbar-expand-lg navbar-light bg-light">
          <div className="container-fluid">
            <div className="d-flex align-items-center">
              <button className="navbar-toggler me-2" onClick={toggleSidebar}>
                <FiMenu />
              </button>
              <span className="navbar-brand">
                {userData?.userType?.toUpperCase()} DASHBOARD
              </span>
            </div>
            
            <div className="d-flex align-items-center">
              <div className="notification-icon me-3">
                <FiBell />
                <span className="badge bg-danger"></span>
              </div>
              
              <div className="user-profile dropdown">
                <button 
                  className="btn dropdown-toggle d-flex align-items-center" 
                  data-bs-toggle="dropdown"
                >
                  <div className="profile-circle me-2">
                    <Image 
                      src="/1.jpg" 
                      alt="Profile" 
                      width={36} 
                      height={36}
                      className="profile-image border border-2 rounded-circle"
                    />
                  </div>
                  {!sidebarCollapsed && <span>{userData?.name}</span>}
                </button>
                
                <ul className="dropdown-menu dropdown-menu-end">
                  <li><Link className="dropdown-item" href="/profile">Profile</Link></li>
                  <li><hr className="dropdown-divider" /></li>
                  <li>
                    <button className="dropdown-item" onClick={handleLogout}>
                      Logout
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </nav>

        <div className="content-area">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Layout;

function dispatch(arg0: any) {
  throw new Error('Function not implemented.');
}
