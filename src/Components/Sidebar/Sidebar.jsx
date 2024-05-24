import "../Sidebar/Sidebar.css";
import React,{useState} from 'react';
import { NavLink } from "react-router-dom";
import { GoHomeFill } from "react-icons/go";
import { FaBook } from "react-icons/fa";
import { IoPerson } from "react-icons/io5";
import { MdAdd } from "react-icons/md";
import { PiSquaresFourBold } from "react-icons/pi";
import Home from "../../Pages/Home/Home";

const Sidebar = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };
    return (
      <div className={`wrapper ${isSidebarOpen ? "sidebar-open" : ""}`}>
        <aside id="sidebar" className={isSidebarOpen ? "expand" : ""}>
          <div className="d-flex">
            <button
              className="toggle-btn"
              type="button"
              onClick={toggleSidebar}
            >
              <PiSquaresFourBold size={28} style={{ color: "white" }} />
            </button>
            <div className="sidebar-logo">
              <NavLink  to="/">
                My Libaray
              </NavLink>
            </div>
          </div>
          <ul className="sidebar-nav">
            <li className="sidebar-item">
            <NavLink to="/" className="sidebar-link">
            <GoHomeFill size={18} />{" "}
                <span style={{ marginLeft: "10px" }}>Home</span>
              </NavLink>
            </li>
            <li className="sidebar-item">
            <NavLink to="/books" className="sidebar-link">
            <FaBook size={18} />{" "}
                <span style={{ marginLeft: "10px" }}>Books</span>
              </NavLink>
            </li>
            <li className="sidebar-item">
            <NavLink  to="/author" className="sidebar-link">
            <IoPerson size={20} />{" "}
                <span style={{ marginLeft: "10px" }}>Author</span>
              </NavLink>
            </li>
            <li className="sidebar-item">
              <a
                href="#"
                className="sidebar-link collapsed has-dropdown"
                data-bs-toggle="collapse"
                data-bs-target="#auth"
                aria-expanded="false"
                aria-controls="auth"
              >
                <MdAdd size={24} />
                <span style={{ marginLeft: "10px" }}>Add Details</span>
              </a>
              <ul
                id="auth"
                className="sidebar-dropdown list-unstyled collapse"
                data-bs-parent="#sidebar"
              >
                <li className="sidebar-item">
                <NavLink  to="/createbook" className="sidebar-link" >
                Add Book
              </NavLink>
                </li>
                <li className="sidebar-item">
                <NavLink  to="/createauthor" className="sidebar-link" >
                Add Author
              </NavLink>
                </li>
              </ul>
            </li>
          </ul>
        </aside>
        <div className="space main p-3">
          
        </div>
      </div>
    );
};

export default Sidebar;