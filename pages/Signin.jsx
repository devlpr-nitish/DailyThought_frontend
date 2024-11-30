import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { showSuccessToast, showErrorToast } from "../utils/toastConfig.js"; // Adjust the path as needed

const SignInForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:3000/api/users/signin", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
      });

      if (response.ok) {
        const data = await response.json();
        // Store the token in local storage
        localStorage.setItem("token", data.token);
        localStorage.setItem("college", data.user.college);
        localStorage.setItem("userId", data.user._id);

        showSuccessToast("Sign-in successful!");
        setTimeout(() => {
          navigate("/");
        },1500); // Redirect to home or another page
      } else {
        const errorData = await response.json();
        showErrorToast(errorData.message || "Invalid credentials");
      }
    } catch (error) {
      console.error("Error:", error);
      showErrorToast("Unable to connect to the server.");
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center">
      <div className="bg-white p-8 rounded-lg shadow-md w-96">
        <h2 className="text-2xl font-bold text-black text-center mb-6">
          Sign In
        </h2>
        <form onSubmit={handleSubmit}>
          {/* Username */}
          <div className="mb-4">
            <label
              className="block text-sm font-medium text-gray-700"
              htmlFor="username"
            >
              Username
            </label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:ring-2 focus:ring-gray-500"
              placeholder="Enter your username"
            />
          </div>

          {/* Password */}
          <div className="mb-6">
            <label
              className="block text-sm font-medium text-gray-700"
              htmlFor="password"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:ring-2 focus:ring-gray-500"
              placeholder="Enter your password"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-black text-white py-2 rounded-md hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500"
          >
            Sign In
          </button>
        </form>

        <div className="mt-4 text-center">
          Don't have an account?{" "}
          <Link to="/signup" className="text-blue-950 underline">
            Sign Up
          </Link>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default SignInForm;
