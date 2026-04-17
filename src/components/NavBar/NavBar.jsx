import React from "react";
import { NavLink } from "react-router";
import NavLogo from "../../assets/logo.png";
import '../../../src/index.css'
import homeIcon from '../../assets/Vector.png'
import clockIcon from '../../assets/Clock.png'
import chartIcon from '../../assets/ChartLine.png'
import { GiHamburgerMenu } from "react-icons/gi";
const NavBar = () => {
  const links = (
    <>
      <li className="mr-1">
        <NavLink
          to={"/"}
          className={({ isActive }) =>
           `btn  ${isActive ? "border-3 border-b-[#244D3F] text-[#244D3F]" : "bg-transparent"
          }` 
        }
        >
          <img className="text-gray-200" src={homeIcon} alt=""  />Home
        </NavLink>
      </li>
      <li className="mr-1">
        <NavLink
          to={"/timeline"}
          className={({ isActive }) =>
           `btn  ${isActive ? "border-3  border-b-[#244D3F] text-[#244D3F]" : "bg-transparent"
          }` }
        >
          <img src={clockIcon} alt=""  />Timeline
        </NavLink>
      </li>
      <li>
        <NavLink
          to={"/stats"}
          className={({ isActive }) =>
            `btn ${isActive ? "border-3 border-b-[#244D3F] text-[#244D3F]" : "bg-transparent"
          }` 
          }
        >
          <img src={chartIcon} alt=""  />Stats
        </NavLink>
      </li>
    </>
  );
  return (
    <div>
      <div className="navbar bg-base-100 shadow-sm sm:px-10 md:px-20 fixed top-0 left-0 w-full z-50">
        <div className="navbar-start bg-transparent">
          <div className="dropdown">
            <div
              tabIndex={0}
              role="button"
              className=" lg:hidden"
            >
              <GiHamburgerMenu />
            </div>
            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              {links}
            </ul>
          </div>
          <p className="ml-4 sm:ml-3"><img src={NavLogo} alt=""  /></p>
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
