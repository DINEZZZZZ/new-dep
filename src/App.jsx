
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
        <Route path="/new-dep/signup" element={<SignupForm />} />
        <Route path="/new-dep/signin" element={<SigninForm />} />
        <Route path="/new-dep/Calendar" element={<CalendarView/>}/>
        <Route path="/new-dep/notes" element={<NotesPage/>}/>
        <Route path="/new-dep/safety" element={<SafetyPage/>}/>
        <Route path="/new-dep/facts" element={<Knowledge/>}/>
      </Routes>
    </Router>
  );
}
