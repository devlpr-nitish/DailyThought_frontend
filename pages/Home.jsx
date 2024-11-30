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

      </div>

      <div>
        
      </div>

      <Footer />
    </>
  );
};

export default Home;
