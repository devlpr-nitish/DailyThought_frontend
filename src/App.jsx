import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "../pages/Home.jsx";
import Navbar from "../components/Navbar.jsx";
import MYThoughts from "../pages/MYThoughts.jsx";
import SignUpForm from "../pages/Signup.jsx";
import SignInForm from "../pages/Signin.jsx";
import ThoughtSubmissionForm from "../pages/AddThought.jsx";
import Footer from "../components/Footer.jsx";
import MyCollege from "../pages/MyCollege.jsx";

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen pb-16 mb-16"> {/* Add padding bottom to prevent content from being hidden by footer */}
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<SignUpForm />} />
          <Route path="/signin" element={<SignInForm />} />
          <Route path="/my-thoughts" element={<MYThoughts />} />
          <Route path="/my-college" element={<MyCollege />} />
          <Route path="/add" element={<ThoughtSubmissionForm />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
