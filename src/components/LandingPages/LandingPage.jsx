import React from 'react';
import './LandingPage.css'
import logimg from '../../assets/logimg.jpg'
import { Link } from 'react-router-dom';

const LandingPage = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-4">Welcome to our App!</h1>
        <img src={logimg} alt="" />
        <p className="text-lg mb-6">Choose to explore !</p>
        <div className="flex flex-col md:flex-row gap-4">
          <Link to="/new-dep/signup" className="button signup">
            Sign Up
          </Link>
          <Link to="/new-dep/signin" className="button signin">
            Sign In
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
