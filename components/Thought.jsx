import React from "react";
import { MdDelete } from "react-icons/md";
import { showSuccessToast, showErrorToast } from "../utils/toastConfig.js";

const Thought = ({ thought, thoughts, setThoughts }) => {
  console.log(thought);
  const userId = localStorage.getItem("userId");
  const myThoughtLabel = thought.user == userId.toString();

  const extractTime12HourFormat = (dateString) => {
    const date = new Date(dateString);

    // Ensure the date is valid
    if (isNaN(date.getTime())) {
      return "Invalid date";
    }

    // Extract hours, minutes, and seconds
    let hours = date.getHours();
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const seconds = String(date.getSeconds()).padStart(2, "0");

    // Determine AM or PM
    const ampm = hours >= 12 ? "PM" : "AM";

    // Convert to 12-hour format
    hours = hours % 12;
    hours = hours ? hours : 12; // Hour '0' should be '12'

    // Return time in 12-hour format (HH:MM:SS AM/PM)
    return `${String(hours).padStart(2, "0")}:${minutes}:${seconds} ${ampm}`;
  };

  const deleteThought = async () => {
    try {
      // Retrieve the JWT token from localStorage
      const token = localStorage.getItem("token");

      if (!token) {
        showErrorToast("No authentication token found!");
        return;
      }

      const response = await fetch(
        `https://dailythoughts-backend.onrender.com/api/thoughts/${thought._id}`,
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
            Authorization: token,
          },
        }
      );

      if (response.ok) {
        showSuccessToast("Thought deleted successfully!");

        // Update the thoughts state in the parent component
        setThoughts(thoughts.filter((t) => t._id !== thought._id));
      } else {
        showErrorToast(`Failed to delete thought: ${response.statusText}`);
      }
    } catch (error) {
      showErrorToast("An error occurred while deleting the thought!");
      console.error("Error deleting thought:", error);
    }
  };

  return (
    <div className={`flex flex-col m-6 p-2 rounded-sm ${myThoughtLabel ? "bg-black opacity-90 text-white" :"bg-white text-black"}`}>
      <div className="flex justify-between">
        <div className="profile_img flex items-center cursor-pointer w-1/4">
          <div className={`px-3 py-2 border-2 h-10 w-10 text-center ${myThoughtLabel ? "border-white" : "border-black" } rounded-full shadow-md`}>
            ?
          </div>
          <div className="name mx-4">anonymous</div>
          <div className="">{extractTime12HourFormat(thought.createdAt)}</div>
        </div>

        {myThoughtLabel && (
          <div>
            <MdDelete
              className="font-bold text-xl cursor-pointer text-white"
              onClick={deleteThought}
            />
          </div>
        )}
      </div>
      <div className="thought mt-2">
        <p className="font-bold">{thought.thought}</p>
      </div>
    </div>
  );
};

export default Thought;
