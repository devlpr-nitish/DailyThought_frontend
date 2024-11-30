import React, { useEffect, useState } from "react";
import Thought from "../components/Thought";
import { Link, useNavigate } from "react-router-dom";
import { IoMdAdd } from "react-icons/io";
import { showErrorToast } from "../utils/toastConfig.js"; // Toast notifications
import Footer from "../components/Footer.jsx";

const MyCollege = () => {
  const [thoughts, setThoughts] = useState([]); // State to hold the thoughts
  const [loading, setLoading] = useState(true); // To handle loading state
  const [error, setError] = useState(""); // To handle errors
  const navigate = useNavigate();

  let college = localStorage.getItem("college");
  const isLoggedIn = localStorage.getItem("token");

  // Format college name
  college = college?.toLowerCase().replace(/\s+/g, "-");

  // Fetch thoughts when the component mounts
  useEffect(() => {
    const fetchThoughts = async () => {
      try {
        const token = localStorage.getItem("token"); // Get token from localStorage
        if (!token) {
          setError("You must be logged in to view your thoughts.");
          setLoading(false);
          return;
        }

        const response = await fetch(
          `https://dailythoughts-backend.onrender.com/api/thoughts/${college}`,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              Authorization: token, // Attach the token in the Authorization header
            },
          }
        );

        // console.log(response);

        if (response.ok) {
          const data = await response.json();
          setThoughts(data.thoughts); // Assuming the API returns a list of thoughts
        } else {
          const errorData = await response.json();
          setError(errorData.message || "Failed to fetch thoughts.");
          showErrorToast(errorData.message || "Failed to fetch thoughts.");
        }
      } catch (error) {
        setError("Something went wrong. Please try again.");
        showErrorToast("Something went wrong. Please try again.");
      } finally {
        setLoading(false);
      }
    };

    fetchThoughts();
  }, [isLoggedIn, college]); // Dependency includes `college` and `isLoggedIn`

  const sortedThoughts = thoughts.sort(
    (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
  );

  return (
    <>
      <div className="min-h-screen">
        <div className="relative text-center p-2">
          <span className="mx-2">
            Your College: {college?.replace(/-/g, " ")}
          </span>
        </div>
        <div className="text-center">
          <button className="ml-4 py-2 px-4 border-2 border-black cursor-pointer mr-4 mt-4">
            <Link to="/add" className="flex justify-center items-center">
              <IoMdAdd className="inline-block mr-2" />
              Add Thoughts
            </Link>
          </button>
        </div>

        <div className="px-10">
          {loading ? (
            <p>Loading thoughts...</p>
          ) : error ? (
            <p className="text-red-500">{error}</p>
          ) : (
            <div>
              {thoughts?.length === 0 ? (
                <p>No thoughts found</p>
              ) : (
                sortedThoughts?.map((thought) => (
                  <Thought
                    key={thought._id}
                    thought={thought}
                    setThoughts={setThoughts} // Pass state updater to handle deletion
                    thoughts={thoughts}
                  />
                ))
              )}
            </div>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default MyCollege;
