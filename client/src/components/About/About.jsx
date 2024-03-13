import React from "react";
// import img1 from "../../assets/about.jpeg";
import "./About.css"; // Import your CSS file

const About = () => {
  return (
    <div className="relative bg-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="absolute inset-0 bg-cover bg-center">
        <div className="absolute inset-0 opacity-50"></div>
      </div>
      <div className="relative max-w-7xl mx-auto py-32 px-4 sm:px-6 lg:px-8">
        <div className="relative z-10 animate-text">
          <h2 className="text-5xl font-extrabold tracking-tight text-white sm:text-4xl">
            About Us
          </h2>
          <p className="mt-4 max-w-3xl text-xl text-white p">
            Welcome to <span className="text-blue-700">NxtGenDGNS</span>. We're
            dedicated to guiding your health journey with personalized test
            recommendations. Our team combines medical expertise and
            cutting-edge technology to provide accurate and up-to-date advice.
            Trust us for reliable information, prioritizing your privacy and
            ensuring you make informed decisions about your health.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
