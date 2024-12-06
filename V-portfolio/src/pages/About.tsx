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
          <div className="flex-1 bg-[#ECACA8] h-100 rounded-[80px] flex flex-col justify-between shadow-2xl p-8 ">
            {/* Text section */}
            <div className="flex flex-col pl-8 ">
              <h1 className="text-4xl font-semibold text-white">About Me</h1>
              <div className="text-lg text-white mt-4 text-justify">
              My name is Vincel Marie Olaes, 21 years old, 4th year in college taking a
              course of BS Computer Science. At the moment, I am also currently working in
              BPO industry to support my financial needs and somehow want to start a career
              at an early age.
              I aspire to be a Web Designer. Arts and making design has been one of my
              interest that I think I want to pursue after graduating at the same time, I aiming
              for a higher position at my current job right now.
              I’m quick to adapt to new technologies, have a strong command of English,
              and come prepared with my own equipment and fast internet connection if
              there will be am opportunity in the future to have a work from home set-up.

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
