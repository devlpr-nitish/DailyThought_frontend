import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "../pages/Home.jsx";
import Navbar from "../components/Navbar.jsx";
import Thoughts from "../pages/Thoughts.jsx";
import SignUpForm from "../pages/Signup.jsx";
import SignInForm from "../pages/Signin.jsx";
import ThoughtSubmissionForm from "../pages/AddThought.jsx";

function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/signup" element={<SignUpForm/>}/>
        <Route path="/signin" element={<SignInForm/>}/>
        <Route path="/thoughts" element={<Thoughts/>}/>
        <Route path="/add" element={<ThoughtSubmissionForm/>}/>
      </Routes>
    </Router>
  );
}

export default App;
