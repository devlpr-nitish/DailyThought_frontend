import React from "react";
import Thought from "../components/Thought";
import { IoMdClose } from "react-icons/io";
import { Link, useNavigate } from "react-router-dom";
import { IoMdAdd } from "react-icons/io";

const Thoughts = () => {
  const college = localStorage.getItem("college");
  const navigate = useNavigate();
  const isLoggedIn = localStorage.getItem("isLoggedIn");

  const removeCollege = () => {
    localStorage.removeItem("college");
    navigate("/");
  };
  return (
    <div>
      <div className=" relative text-center p-2">
        <span className="mx-2">Your College {college}</span>
        {!isLoggedIn && (
          <IoMdClose
            className="inline-block cursor-pointer font-bold text-xl"
            onClick={removeCollege}
          />
        )}
      </div>
      <div className="text-center">
        <button className="ml-4 py-2 px-4 border-2 border-black cursor-pointer mr-4 mt-4">
          <Link to="/add" className="flex justify-center items-center">
            <IoMdAdd className="inline-block mr-2" />
            Add thoughts
          </Link>
        </button>
      </div>

      <div className="px-10">
        <Thought />
        <Thought />
      </div>
    </div>
  );
};

export default Thoughts;
