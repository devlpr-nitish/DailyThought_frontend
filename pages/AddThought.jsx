import React, { useState } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { showSuccessToast, showErrorToast } from '../utils/toastConfig.js'; // Adjust path if needed
import { useNavigate } from 'react-router-dom';

const ThoughtSubmissionForm = () => {
  // State to hold the thought input
  const [thought, setThought] = useState('');
  const navigate = useNavigate();

  // Function to handle the change in the input field
  const handleChange = (event) => {
    setThought(event.target.value);
  };

  // Function to handle form submission
  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const token = localStorage.getItem('token'); // Get token from localStorage

      if (!token) {
        showErrorToast('You must be logged in to share a thought.');
        setTimeout(() => {
          navigate('/signin');
        }, 1500);
        return;
      }

      const response = await fetch('http://localhost:3000/api/thoughts/add', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': token, // Send token directly without "Bearer" prefix
        },
        body: JSON.stringify({ thought }),
      });
      
      
      if (response.ok) {
        setThought(''); // Clear the input field
        showSuccessToast('Your thought has been submitted!');
      } else {
        const errorData = await response.json();
        showErrorToast(errorData.message || 'Failed to submit thought.');
      }
    } catch (error) {
      console.error('Error:', error);
      showErrorToast('Something went wrong. Please try again.');
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-50">
      <div className="bg-white p-8 rounded-lg shadow-lg w-96">
        <h2 className="text-2xl font-bold text-center text-gray-800">
          Share Your Thought
        </h2>
        <form onSubmit={handleSubmit} className="mt-4">
          {/* Thought input */}
          <textarea
            value={thought}
            onChange={handleChange}
            rows="4"
            className="w-full p-2 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-800"
            placeholder="Type your thought here..."
          />
          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-gray-800 text-white py-2 rounded-md hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500"
          >
            Submit
          </button>
        </form>
      </div>
      <ToastContainer />
    </div>
  );
};

export default ThoughtSubmissionForm;
