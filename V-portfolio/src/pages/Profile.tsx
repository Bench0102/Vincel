import React from "react";
import Navbar from "./components/Navbar";

const Profile: React.FC = () => {
  return (
    <div className="bg-[#FFD2CE] min-h-screen flex flex-col">
        <div className="sticky top-4 z-50 mb-6">
            <Navbar />
        </div>  

        <div className="flex flex-col md:flex-row items-center md:items-start p-8 space-y-6 md:space-y-0 md:space-x-2">

      {/* Left Panel - Image Container */}
      <div className="flex-1 flex items-center justify-center">
        <div className="w-48 h-48 md:w-64 md:h-64 bg-[#E2CCB2] rounded-full flex items-center justify-center shadow-lg">
          <img
            src="https://via.placeholder.com/150" // Replace with your image URL
            alt="Profile"
            className="w-44 h-44 md:w-60 md:h-60 object-cover rounded-full"
          />
        </div>
      </div>

      {/* Right Panel - Content */}
      <div className="flex-1 space-y-6">
        {/* Text Box */}
        <div className="p-6 bg-[#E2CCB2] text-[#5A3D3A] rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold mb-4">Profile Information</h2>
          <p className="text-lg">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
            lacinia odio vitae vestibulum vestibulum. Curabitur ut libero nec
            nunc faucibus interdum.
          </p>
        </div>

        {/* Two Divs Below */}
        <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
          <div className="flex-1 p-6 bg-[#E8A49A] text-[#5A3D3A] rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-2">Section 1</h3>
            <p>
              Fusce at nisi eget dolor rhoncus facilisis. Mauris id ex non urna
              sodales varius.
            </p>
          </div>
          <div className="flex-1 p-6 bg-[#E8A49A] text-[#5A3D3A] rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-2">Section 2</h3>
            <p>
              Aliquam erat volutpat. Aenean semper orci non ante volutpat, id
              interdum nisi ornare.
            </p>
          </div>
        </div>
      </div>
    </div>
    </div>
    
  );
};

export default Profile;
