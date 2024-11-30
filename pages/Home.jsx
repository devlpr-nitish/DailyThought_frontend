import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { IoMdClose } from "react-icons/io";
import { IoMdAdd } from "react-icons/io";
import Footer from "../components/Footer";

const Home = () => {
  // State to control modal visibility
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [college, setCollege] = useState(null);
  const isLoggedIn = localStorage.getItem("token");

  const collegeSelected = localStorage.getItem("college");

  const navigate = useNavigate();
  // Function to open the modal
  const openModal = () => {
    setIsModalOpen(true);
  };

  // Function to close the modal
  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleSumit = (e) => {
    e.preventDefault();
    setCollege(college);

    localStorage.setItem("college", college);

    navigate("/thoughts");
  };

  console.log(localStorage.getItem("college"));
  return (
    <>
      <div className="h-screen flex justify-center items-center">
        <div className="text-center">
          <p className="text-4xl">
            People sharing their daily thoughts without identity,{" "}
          </p>
          <p className="">let's share </p>
          <p className="text-7xl font-bold">? What's U'r thought </p>
          {isLoggedIn ? (
            <button className="py-2 px-4 border-2 border-black cursor-pointer mr-4 mt-4">
              <Link to="/add" className="">
                {" "}
                <IoMdAdd className="inline-block mr-2" />
                Add thoughts
              </Link>
            </button>
          ) : (
            <button className="py-2 px-4 border-2 border-black cursor-pointer mr-4 mt-4">
              <Link to="signin">SIGN IN</Link>
            </button>
          )}

          <button
            // onClick={openModal}
            className="py-2 px-4 border-2 text-white bg-black border-black cursor-pointer"
          >
            <Link to="/my-college">Thoughts</Link>
          </button>
        </div>

        {/* Modal */}
        {isModalOpen && (
          <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex justify-center items-center z-50">
            <div className="bg-white p-6 rounded-lg shadow-lg w-96">
              <form onSubmit={handleSumit}>
                {/* College Select */}
                <div className="mb-4">
                  <label
                    className="block text-sm font-medium text-gray-700"
                    htmlFor="college"
                  >
                    College
                  </label>
                  <select
                    id="college"
                    value={college}
                    onChange={(e) => setCollege(e.target.value)}
                    className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:ring-2 focus:ring-gray-500"
                  >
                    <option value="">Select your college</option>
                    <option value="college1">College 1</option>
                    <option value="college2">College 2</option>
                    <option value="college3">College 3</option>
                    <option value="college4">College 4</option>
                  </select>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full bg-gray-800 text-white py-2 rounded-md hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500"
                >
                  Submit
                </button>
              </form>
            </div>

            <div className="flex justify-center">
              <button
                onClick={closeModal}
                className=" text-white py-2 px-4 cursor-pointer"
              >
                <IoMdClose />
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Home;
