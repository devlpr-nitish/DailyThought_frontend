import React from "react";
import { MdDelete } from "react-icons/md";

const Thought = () => {
  const deleteThought = () => {};
  
  return (
    <div className="flex flex-col bg-gray-100 m-6 p-2 ">
      <div className="flex justify-between">
        <div className="profile_img flex items-center cursor-pointer w-1/4">
          <div className="px-3 py-2 border-2 h-10 w-10 text-center border-black rounded-full shadow-md">
            ?
          </div>

          <div className="name mx-4 ">anonymous</div>
        </div>
        <div className="">
          <MdDelete
            className="font-bold text-xl cursor-pointer"
            onClick={deleteThought}
          />
        </div>
      </div>

      <div className="thought mt-2">
        <p className="font-bold">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nam,
        </p>
      </div>
    </div>
  );
};

export default Thought;
