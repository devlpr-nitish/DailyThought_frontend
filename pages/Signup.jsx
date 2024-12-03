import React, { useState } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { showSuccessToast, showErrorToast } from '../utils/toastConfig.js'; // Adjust the path as needed
import { Link, useNavigate } from 'react-router-dom';

const SignUpForm = () => {
  const [username, setUsername] = useState('');
  const [college, setCollege] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const colleges = [
    // Engineering & Technology
    "IIT Bombay", "IIT Delhi", "IIT Kanpur", "IIT Kharagpur", "IIT Madras", "IIT Roorkee",
    "NIT Trichy", "NIT Surathkal", "NIT Warangal", "NIT Calicut",
    "BITS Pilani", "DTU", "VIT University, Vellore", "IIIT Hyderabad", "PEC Chandigarh", 
    "MIT Manipal", "Shiv Nadar University", "University of Pune", "Amity University", "Manipal Institute of Technology", 
    "Anna University", "Sardar Vallabhbhai National Institute of Technology (SVNIT), Surat", "PSG Tech, Coimbatore",
  
    // Medical
    "AIIMS, Delhi", "PGIMER, Chandigarh", "CMC Vellore", "KEM Hospital and Medical College, Mumbai",
    "JIPMER, Puducherry", "All India Institute of Medical Sciences (AIIMS) Bhopal", "Christian Medical College, Ludhiana",
    "Institute of Liver and Biliary Sciences (ILBS), Delhi", "NIMHANS, Bangalore", "King George's Medical University (KGMC), Lucknow",
  
    // Business
    "IIM Ahmedabad", "IIM Bangalore", "IIM Calcutta", "IIM Lucknow", "XLRI Jamshedpur", "FMS Delhi", 
    "SP Jain Institute of Management", "Indian School of Business (ISB), Hyderabad", "Symbiosis Institute of Business Management (SIBM), Pune",
    "MDI Gurgaon", "Indian Institute of Foreign Trade (IIFT), Delhi", "Jamnalal Bajaj Institute of Management Studies (JBIMS), Mumbai", 
    "Goa Institute of Management (GIM)", "Xavier Institute of Management, Bhubaneswar (XIMB)", "TA Pai Management Institute (TAPMI), Manipal",
  
    // Law
    "NLSIU Bangalore", "NALSAR Hyderabad", "NLU Delhi", "National Law University Jodhpur", 
    "National Law University Odisha", "WBNUJS Kolkata", "National Law University Bangalore (NLSIU)",
    "National Institute of Technology, Patna - Law Department", "Faculty of Law, University of Delhi",
  
    // Arts and Humanities
    "JNU Delhi", "BHU Varanasi", "University of Delhi", "Tata Institute of Social Sciences (TISS), Mumbai", 
    "Jamia Millia Islamia, Delhi", "St. Xavier's College, Mumbai", "Presidency University, Kolkata", 
    "Mount Carmel College, Bangalore", "Christ University, Bangalore", "St. Stephen's College, Delhi", 
    "Loyola College, Chennai", "Hindu College, Delhi", "Lady Shri Ram College for Women, Delhi", 
    "Miranda House, Delhi", "Ashoka University", "Symbiosis College of Arts and Commerce",
  
    // Science and Research
    "TIFR Mumbai", "IISc Bangalore", "Institute of Chemical Technology (ICT), Mumbai", 
    "Indian Statistical Institute (ISI), Kolkata", "Indian Institute of Astrophysics (IIA), Bangalore",
    "National Institute of Pharmaceutical Education and Research (NIPER), Mohali", 
    "Bose Institute, Kolkata", "Saha Institute of Nuclear Physics, Kolkata",
  
    // Other Notable Colleges
    "Shri Ram College of Commerce (SRCC), Delhi", "Zakir Husain Delhi College", "Hindu College, Delhi", 
    "Delhi University (DU)", "Miranda House, Delhi", "Hansraj College, Delhi", "St. Xavier's College, Mumbai",
    "Fergusson College, Pune", "St. Xavier's College, Kolkata", "St. Joseph's College, Bangalore", 
    "Mithibai College, Mumbai", "KJ Somaiya College, Mumbai", "Symbiosis International University, Pune",
    "Banasthali Vidyapith", "NIT Durgapur", "National Institute of Design (NID), Ahmedabad", "Srishti Institute of Art, Design and Technology, Bangalore",
    "Shivaji University, Kolhapur", "Banaras Hindu University, Varanasi", "University of Calcutta, Kolkata",
    "Aligarh Muslim University (AMU), Aligarh", "Jamia Millia Islamia, Delhi", "Tata Memorial Centre, Mumbai",
    "Loyola College, Chennai", "Ranchi University", "Kolkata University", "Mumbai University","Gulzar Group Of Institutes",
    "Punjab Agricultural University",
    "Guru Nanak Dev Engineering College",
    "Dayanand Medical College and Hospital",
    "Christian Medical College",
    "Chandigarh University",
    "Lovely professional University",
    "SCD Government College",
    "Arya College",
    "PCTE Group of Institutes"
  ];
  

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('https://dailythoughts-backend.onrender.com/api/users/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, college, password }),
      });

      if (response.ok) {
        const data = await response.json();
        showSuccessToast('Sign-up successful!');
        // console.log('Response:', data);
        setTimeout(()=>{
          navigate('/signin');
        },1500)
      } else {
        const errorData = await response.json();        
        showErrorToast(errorData.error.errors?.username?.message || errorData.error.errors?.password?.message || 'Something went wrong');
      }
    } catch (error) {
      console.error('Error:', error);
      showErrorToast('Unable to connect to the server.');
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center">
      <div className="bg-white p-8 rounded-lg shadow-md w-96">
        <h2 className="text-2xl font-bold text-black text-center mb-6">Sign Up</h2>
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
                {/* Map through the colleges array to create options */}
                {colleges.map((college, index) => {
                    const value = college.toLowerCase().replace(/\s+/g, '-'); // Convert to hyphenated value
                    return (
                        <option key={index} value={value}>
                            {college}
                        </option>
                    );
                })}
            </select>
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
            Sign Up
          </button>
          {/* Terms and Conditions */}
          <div className="text-sm text-gray-600 mt-6">
            By signing up, you agree to our{' '}
            <Link to="/terms-conditions" className="text-blue-600 hover:underline">
              Terms and Conditions
            </Link>.
          </div>
        </form>
      </div>
      <ToastContainer />
    </div>
  );
};

export default SignUpForm;
