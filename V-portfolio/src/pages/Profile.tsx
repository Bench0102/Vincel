import React from "react";
import Navbar from "./components/Navbar";
import profile from "../assets/448675700_2212414622432462_7531735515101671072_n.jpg"

const Profile: React.FC = () => {
  return (
    <div className="bg-[#FFD2CE] min-h-screen flex flex-col">
        <div className="sticky top-0 z-50 mb-10">
            <Navbar />
        </div>  

        <div className="flex flex-col md:flex-row items-center md:items-start p-8 space-y-6 md:space-y-0 md:space-x-2">

      {/* Left Panel - Image Container */}
      <div className="flex flex items-center justify-center mr-8">
        <div className="w-48 h-48 md:w-64 md:h-64 bg-[#E2CCB2] rounded-full flex items-center justify-center shadow-lg">
          <img
            src={profile} 
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
          I have experience in customer support, where I assisted customers with their concerns and helped resolve issues. I also served as the former secretary of the General Student Council (GSC), where I was involved in organizing activities and managing communication. Additionally, I handled various admin tasks and worked on basic system development, where I learned to improve and maintain simple systems.
          </p>
        </div>

        {/* Two Divs Below */}
        <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
          <div className="flex-1 p-6 bg-[#E8A49A] text-[#5A3D3A] rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-2">Languages :</h3>
            <p>
              English <br /> Tagalog
            </p>
          </div>
          <div className="flex-1 p-6 bg-[#E8A49A] text-[#5A3D3A] rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-2">About me :</h3>
            <p>
            21 years old <br />
            Libra <br />
            Love listening to
            music <br />
            Can communicate
            well. <br />
            Interested in Web
            Desig
            </p>
          </div>
          <div className="flex-1 p-6 bg-[#E8A49A] text-[#5A3D3A] rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-2">Experiences :</h3>
            <p>
              Customer Support <br />
              Former Secretary of CSC <br />
              Admin Task <br />
              Basic System Development
            </p>
          </div>
        </div>
      </div>
    </div>
    </div>
    
  );
};

export default Profile;
