import React from "react";

const TermsAndConditions = () => {
  return (
    <div className="p-6 bg-gray-100 text-gray-800">
      <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-md">
        <h1 className="text-3xl font-bold mb-6">Terms and Conditions</h1>
        <p className="mb-4">
          Welcome! Please read the following terms and conditions carefully before using this platform.
        </p>
        <h2 className="text-2xl font-semibold mt-6 mb-4">1. Responsibility</h2>
        <p className="mb-4">
          By using this platform, you agree that you are solely responsible for your actions, thoughts, and contributions. 
          The admin is <strong>not responsible</strong> for any thoughts, opinions, or content you share here.
        </p>
        <h2 className="text-2xl font-semibold mt-6 mb-4">2. Privacy and Data Protection</h2>
        <p className="mb-4">
          The admin will <strong>not disclose or share any user's data</strong> without explicit consent unless required by law.
          We prioritize user privacy and ensure that your personal information remains confidential.
        </p>
        <h2 className="text-2xl font-semibold mt-6 mb-4">3. Agreement</h2>
        <p className="mb-4">
          Before signing up or using this platform, ensure you understand and agree that you bear full responsibility 
          for all your interactions and engagements on this platform.
        </p>
        <h2 className="text-2xl font-semibold mt-6 mb-4">4. Acceptance</h2>
        <p className="mb-4">
          By continuing to use this platform, you accept these terms and conditions in full. 
          If you do not agree, you must cease using this platform immediately.
        </p>
        <p className="mt-6 italic text-gray-600">
          These terms may be updated periodically, so please review them regularly.
        </p>
      </div>
    </div>
  );
};

export default TermsAndConditions;
