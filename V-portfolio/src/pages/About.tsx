import React from 'react';
import cat from '/Users/bench/OneDrive/Dokumen/GitHub/Vincel/V-portfolio/src/assets/Screenshot_2024-12-05_212905-removebg-preview.png';
import Navbar from "./components/Navbar";

const About: React.FC = () => {
  return (
    <div className="bg-[#FFD2CE] min-h-screen flex flex-col">
      {/* Sticky Navbar */}
      <div className="sticky top-0 z-50">
        <Navbar />
      </div>

      {/* Main Content Section */}
      <div className="flex justify-center items-center flex-grow">
        <div className="flex items-center justify-between w-10/12 max-w-6xl">
          {/* Left panel (Image) */}
          <div className="flex-1 flex justify-center">
            <img
              src={cat} // Image on the left side
              alt="Cat"
              className="w-1/2 object-cover shadow-xl rounded-xl" // Image size and cover
            />
          </div>

          {/* Right panel (Text and container with shadow) */}
          <div className="flex-1 bg-[#ECACA8] h-96 rounded-[80px] flex flex-col justify-between shadow-2xl p-8">
            {/* Text section */}
            <div className="flex flex-col pl-8 mt-20">
              <h1 className="text-4xl font-semibold text-white">About Me</h1>
              <p className="text-lg text-white mt-4">
                I am a passionate developer with experience in frontend technologies like React, TypeScript, and more. I enjoy creating engaging and dynamic user experiences.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
