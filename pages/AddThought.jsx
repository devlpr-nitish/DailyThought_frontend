import React, { useState } from 'react';

const ThoughtSubmissionForm = () => {
  // State to hold the thought input
  const [thought, setThought] = useState('');

  // Function to handle the change in the input field
  const handleChange = (event) => {
    setThought(event.target.value);
  };

  // Function to handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    // For now, we will just log the thought to the console
    if (thought.trim()) {
      console.log('Thought submitted:', thought);
      // You can handle API submission here or just clear the form
      setThought('');
    } else {
      alert('Please write something before submitting.');
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-50">
      <div className="bg-white p-8 rounded-lg shadow-lg w-96">
        <h2 className="text-2xl font-bold text-center text-gray-800">Share Your Thought</h2>
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
    </div>
  );
};

export default ThoughtSubmissionForm;
