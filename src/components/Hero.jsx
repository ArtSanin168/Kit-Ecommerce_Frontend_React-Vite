import React from 'react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <div className="relative overflow-hidden">
  <div className="flex flex-col sm:flex-row border border-gray-400 shadow-lg">
    {/* Image Left Section */}
    <div className="flex-1 relative transform transition-transform duration-700 slide-in-left">
      <img 
        src="https://img.chelseafc.com/image/upload/f_auto,w_1440,c_fill,g_faces,q_90/editorial/news/2022/10/05/Third_Kit_Launch_Article_Hero_2880x1620.jpg" 
        alt="Hero Image" 
        className="w-full h-full object-cover transform transition-transform duration-500 hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-40"></div>
    </div>

    {/* Image Right Section */}
    <div className="flex-1 relative transform transition-transform duration-700 slide-in-right">
      <img 
        src="https://assets.goal.com/images/v3/bltec28ecddab56e0ac/City_home_22_(2).jpg?auto=webp&format=pjpg&width=3840&quality=60" 
        alt="Hero Image" 
        className="w-full h-full object-cover transform transition-transform duration-500 hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-40"></div>
    </div>

    {/* Centered SHOP NOW Button */}
    <Link to="/collection">
    <div className="absolute inset-0 flex justify-center items-end p-8 transform transition-transform duration-700">
     <button className="px-6 py-3 border border-white text-white text-lg font-medium rounded-lg transform transition-transform duration-300 hover:scale-105 shadow-lg">
       SHOP NOW
     </button>
    </div></Link>

  </div>
</div>

  );
};

export default Hero;
