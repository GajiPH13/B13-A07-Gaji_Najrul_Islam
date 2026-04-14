import React from "react";
import { NavLink } from "react-router";
import NavLogo from "../../assets/logo.png";
import '../../../src/index.css'
const NavBar = () => {
  const links = (
    <>
      <li>
        <NavLink
          to={"/"}
          className={({ isActive }) =>
           `px-4 py-2 ${isActive ? " bg-amber-600" : "bg-transparent"
          }` 
        }
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to={"/timeline"}
          className={({ isActive }) =>
            isActive ? "text-green-500 border border-green-500" : "bg-transparent"
          }
        >
          Timeline
        </NavLink>
      </li>
      <li>
        <NavLink
          to={"/stats"}
          className={({ isActive }) =>
            isActive ? "text-green-500 border border-green-500" : " "
          }
        >
          Stats
        </NavLink>
      </li>
    </>
  );
  return (
    <div>
      <div className="navbar bg-base-100 shadow-sm px-20">
        <div className="navbar-start bg-transparent">
          <div className="dropdown">
            <div
              tabIndex={0}
              role="button"
              className=" lg:hidden"
            ></div>
            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              {links}
            </ul>
          </div>
          <img src={NavLogo} alt=""  />
        </div>
        <div className="navbar-end hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            {links}
            </ul>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
