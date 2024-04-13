
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./components/LandingPages/LandingPage";
import Home from "./components/Home";
import SignupForm from "./components/SigninSignup/SignUp";
import SigninForm from "./components/SigninSignup/SignIn";

import CalendarView from "./components/clander/ClanderView";
import NotesPage from "./components/Notes/Notes";
import SafetyPage from "./components/clander/Safty";
import Knowledge from "./components/Footer/Knowledge";





export function App() {


  return (
    <Router >
      <Routes>
        <Route path="/new-dep/" element={<LandingPage />} />
        <Route path="/new-dep/home" element={<Home/>}/>
        <Route path="/signup" element={<SignupForm />} />
        <Route path="/signin" element={<SigninForm />} />
        <Route path="/Calendar" element={<CalendarView/>}/>
        <Route path="/notes" element={<NotesPage/>}/>
        <Route path="/safety" element={<SafetyPage/>}/>
        <Route path="/facts" element={<Knowledge/>}/>
      </Routes>
    </Router>
  );
}
