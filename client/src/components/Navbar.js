import React from "react";
import { Link, useParams } from "react-router-dom";
import classNames from "classnames";
import { IoFilter } from "react-icons/io5";
import { IoIosSearch } from "react-icons/io";

const Navbar = () => {
  const { type } = useParams();
  return (
    <nav className="bg-gray-100 border-b-gray-200 border-b-2">
      <div className="flex items-center justify-between">
        <div className="flex space-x-4 ml-5">
          <Link to={"/your"}>
            <h1
              className={classNames("py-3 px-1 text-lg", {
                "border-b-red-600 border-b-2": type == "your",
              })}
            >
              Your
            </h1>
          </Link>
          <Link to={"/all"}>
            <h1
              className={classNames("py-3 px-1 text-lg", {
                "border-b-red-600 border-b-2": type == "all",
              })}
            >
              All
            </h1>
          </Link>
          <Link to={"/blocked"}>
            <h1
              className={classNames("py-3 px-1 text-lg", {
                "border-b-red-600 border-b-2": type == "blocked",
              })}
            >
              Blocked
            </h1>
          </Link>
        </div>
        <div className="flex-row flex justify-center items-center">
          <div className="mr-3 text-gray-700 hover:text-gray-500 cursor-pointer">
            <IoIosSearch className="text-xl" />
          </div>
          <div className="text-gray-700 bg-gray-300 hover:text-gray-500 cursor-pointer mr-4 px-2 py-1 rounded-lg flex-row flex justify-center items-center">
            <IoFilter />
            <h1 className="text-lg ml-2">Filter</h1>
          </div>
        </div>
      </div>
    </nav>
  );
};

const NavItem = ({ label }) => {
  return (
    <div className="text-grey hover:text-gray-300 cursor-pointer">{label}</div>
  );
};

export default Navbar;
