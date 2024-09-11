import React from 'react';
import Title from '../components/Title';

const About = () => {
  return (
    <div className="about-us-container px-8 ">
      <div className="mt-12 flex flex-col lg:flex-row items-center ">
      <div className="max-w-7xl mx-auto text-start">
        <h1 className=" mb-8 text-center"><Title className text1="ABOUT" text2="US" /></h1>
        <p className="text-lg leading-8 mb-8 mx-auto max-w-3xl">
          Welcome to <span className="font-semibold">[Your Store Name]</span>, where we believe in providing high-quality products that meet your needs and exceed your expectations. Founded in <span className="font-semibold">[Year]</span>, we have been committed to delivering an exceptional shopping experience for our customers. Our wide range of products, from <span className="font-semibold">[Category 1]</span> to <span className="font-semibold">[Category 2]</span>, is carefully curated to ensure that you find exactly what you’re looking for.
        </p>
        <p className="text-lg leading-8 mb-8 mx-auto max-w-3xl">
          Our mission is to offer the best products at competitive prices while providing top-notch customer service. We believe in transparency, integrity, and customer satisfaction. Our team works tirelessly to ensure that every purchase you make from us is a positive experience.
        </p>
        <p className="text-lg leading-8 mb-8 mx-auto max-w-3xl">
          Thank you for choosing <span className="font-semibold">[Your Store Name]</span> as your trusted shopping destination. We look forward to serving you and helping you find the perfect products for your needs.
        </p>
        
      </div>
          <div className="lg:w-1/2 lg:ml-12 mt-10 lg:mt-0">
            <img 
              src="https://wp.inews.co.uk/wp-content/uploads/2022/06/SEI_111935973.jpg?resize=640,360&strip=all&quality=90" 
              alt="Our Values" 
              className="w-full h-auto rounded-lg shadow-xl transform hover:scale-105 transition-transform duration-300 ease-in-out"
            />
          </div>
        </div>
    </div>
  );
};

export default About;
