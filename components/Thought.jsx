import React, { useState } from "react";
import { MdDelete } from "react-icons/md";
import { showSuccessToast, showErrorToast } from "../utils/toastConfig.js";
import { AiFillDislike, AiFillLike, AiOutlineDislike, AiOutlineLike } from "react-icons/ai";

const Thought = ({ thought, thoughts, setThoughts }) => {
  // console.log(thought);
  const userId = localStorage.getItem("userId");
  const myThoughtLabel = thought.user == userId.toString();
  const [likes, setLikes] = useState(thought?.likes || []);
  const [dislikes, setDisLikes] = useState(thought?.dislikes || []);
  const [isLiked, setIsLiked] = useState(thought?.likes?.includes(userId) ? true : false);
  const [isDisLiked, setIsDisLiked] = useState(thought?.dislikes?.includes(userId) ? true : false);


  const token = localStorage.getItem("token");

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

  const likeThought = async () => {
    try {
      const response = await fetch(
        `https://dailythoughts-backend.onrender.com/api/thoughts/${thought._id}/like`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            'Authorization': token, // Include token for auth
          },
        }
      );
      const data = await response.json();
      showSuccessToast(data.message);
      const updatedDislike = data.updatedThought.dislikes;
      const updatedlike = data.updatedThought.likes;
      setDisLikes(updatedDislike);
      setLikes(updatedlike);
      setIsLiked(true);
      setIsDisLiked(false);
    } catch (error) {
      showErrorToast("An error occurred while liking the thought!");
      console.error("Error liking thought:", error);
    }
  };

  const dislikeThought = async () => {
    try {
      const response = await fetch(
        `https://dailythoughts-backend.onrender.com/api/thoughts/${thought._id}/dislike`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            'Authorization': token, // Include token for auth
          },
        }
      );
      const data = await response.json();
      showSuccessToast(data.message);
      const updatedDislike = data.updatedThought.dislikes;
      const updatedlike = data.updatedThought.likes;
      setDisLikes(updatedDislike);
      setLikes(updatedlike);
      setIsLiked(false);
      setIsDisLiked(true);
    } catch (error) {
      showErrorToast("An error occurred while disliking the thought!");
      console.error("Error disliking thought:", error);
    }
  };

  return (
    <div
      className={`flex flex-col m-6 p-2 rounded-sm ${
        myThoughtLabel
          ? "bg-black opacity-90 text-white"
          : "bg-white text-black"
      }`}
    >
      <div className="flex justify-between">
        <div className="profile_img flex items-center cursor-pointer w-1/4">
          <div
            className={`px-3 py-2 border-2 h-10 w-10 text-center ${
              myThoughtLabel ? "border-white" : "border-black"
            } rounded-full shadow-md`}
          >
            ?
          </div>
          <div className="name mx-4">
            {thought?.username?.length > 8
              ? thought?.username.slice(0, 8) + "..."
              : thought?.username || "anonymous"}
          </div>
          <div className="">{extractTime12HourFormat(thought.createdAt)}</div>
        </div>

        <div className="flex gap-8 justify-center items-center">

          {myThoughtLabel && (
            <div>
              <MdDelete
                className="font-bold text-xl cursor-pointer text-white"
                onClick={deleteThought}
              />
            </div>
          )}

          <div
            className="cursor-pointer flex justify-between items-center"
            onClick={likeThought}
          >
            {isLiked ? <AiFillLike className="text-xl mr-1" />
             :<AiOutlineLike className="text-xl mr-1" />}
            <p>{likes?.length > 0 ? likes.length : "0"}</p>
          </div>
          <div
            className="cursor-pointer flex justify-between items-center"
            onClick={dislikeThought}
          >
            {isDisLiked ? <AiFillDislike className="text-xl mr-1" />
              :<AiOutlineDislike className="text-xl mr-1" />}
            <p>{dislikes?.length > 0 ? dislikes.length : "0"}</p>
          </div>
        </div>
      </div>

      <div className="thought mt-2">
        <p className="font-bold">{thought.thought}</p>
      </div>
    </div>
  );
};

export default Thought;
