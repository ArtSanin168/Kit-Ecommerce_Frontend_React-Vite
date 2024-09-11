import React from 'react';
import Title from '../components/Title';

const Contact = () => {
  return (
    <div className="contact-us-container px-6 py-10 ">
      <div className="max-w-7xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
        <h1 className=" mb-6 text-center py-6 bg-blue-50">
        <Title className text1="CONTACT" text2="US" />
        </h1>

        <div className="flex flex-col lg:flex-row lg:space-x-8 p-6">
          {/* Image Section */}
          <div className="flex justify-center items-center lg:w-1/2 mb-6 lg:mb-0">
            <img
              src="https://phantom-marca.unidadeditorial.es/8d39260a0da698e5054a4b7790da7a71/resize/828/f/jpg/assets/multimedia/imagenes/2023/06/27/16878766261872.jpg"
              alt="Contact Us"
              className="w-full h-auto object-cover max-w-md rounded-lg shadow-xl transition-transform duration-300 hover:scale-105"
            />
          </div>

          {/* Contact Information */}
          <div className="flex flex-col lg:w-1/2 lg:space-y-6 mb-6 lg:pl-8">
            <h2 className="text-3xl font-bold text-blue-600 mb-6">Get in Touch</h2>
            <p className="text-lg mb-4">
              <strong>Email:</strong> support@yourstore.com
            </p>
            <p className="text-lg mb-4">
              <strong>Phone:</strong> +123 456 7890
            </p>
            <p className="text-lg mb-4">
              <strong>Address:</strong> 123 E-commerce St., Shopville, CA 98765
            </p>
            <p className="text-lg mb-4">
              <strong>Business Hours:</strong> Monday - Friday: 9:00 AM - 6:00 PM
            </p>

            {/* Social Media Links */}
            <div className="mt-8">
              <h3 className="text-2xl font-semibold mb-4">Follow Us</h3>
              <div className="flex space-x-6">
                <a
                  href="#"
                  className="text-blue-600 hover:text-blue-800 flex items-center space-x-2 transition-colors duration-300"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fill="currentColor"
                    className="bi bi-facebook"
                    viewBox="0 0 16 16"
                  >
                    <path d="M5.625 16V8.5H3V6h2.625V4.375C5.625 2.281 6.969 1 9.25 1c1.043 0 1.938.078 2.188.113V3.5h-1.5c-1.125 0-1.344.531-1.344 1.313V6H11.5l-.625 2.5H8.594V16H5.625z" />
                  </svg>
                  <span className="text-lg font-medium">Facebook</span>
                </a>
                <a
                  href="#"
                  className="text-blue-400 hover:text-blue-600 flex items-center space-x-2 transition-colors duration-300"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fill="currentColor"
                    className="bi bi-twitter"
                    viewBox="0 0 16 16"
                  >
                    <path d="M5.026 15c6.038 0 9.341-5 9.341-9.334v-.427a6.68 6.68 0 0 0 1.64-1.707 6.657 6.657 0 0 1-1.884.518A3.293 3.293 0 0 0 15.447.243a6.57 6.57 0 0 1-2.084.794 3.286 3.286 0 0 0-2.397-1.034c-1.813 0-3.29 1.468-3.29 3.28 0 .258.03.51.085.751A9.325 9.325 0 0 1 1.11.6a3.291 3.291 0 0 0-.446 1.652c0 1.14.582 2.147 1.47 2.735a3.304 3.304 0 0 1-1.49-.41v.042c0 1.593 1.132 2.923 2.633 3.222a3.32 3.32 0 0 1-1.485.057c.419 1.312 1.635 2.267 3.077 2.293a6.586 6.586 0 0 1-4.862 1.357 9.313 9.313 0 0 0 5.034 1.476" />
                  </svg>
                  <span className="text-lg font-medium">Twitter</span>
                </a>
                <a
                  href="#"
                  className="text-pink-600 hover:text-pink-800 flex items-center space-x-2 transition-colors duration-300"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fill="currentColor"
                    className="bi bi-instagram border-2 border-pink-500 rounded"
                    viewBox="0 0 16 16"
                  >
                    <path d="M8 3.325a4.674 4.674 0 1 0 0 9.349 4.674 4.674 0 0 0 0-9.349zm0 7.725a3.051 3.051 0 1 1 0-6.102 3.051 3.051 0 0 1 0 6.102z" />
                    <path d="M12.354 2.5a.563.563 0 1 1 0-1.126.563.563 0 0 1 0 1.126zM8 4.674a3.326 3.326 0 1 0 0 6.652 3.326 3.326 0 0 0 0-6.652zm0 5.449a2.123 2.123 0 1 1 0-4.245 2.123 2.123 0 0 1 0 4.245z" />
                  </svg>
                  <span className="text-lg font-medium">Instagram</span>
                </a>
                <a
                  href="#"
                  className="text-red-600 hover:text-red-800 flex items-center space-x-2 transition-colors duration-300"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fill="currentColor"
                    className="bi bi-youtube"
                    viewBox="0 0 16 16"
                  >
                    <path d="M8.051 1.999C3.451 1.999 0 3.242 0 7.999s3.451 6 8.051 6c4.6 0 8.05-1.243 8.05-6S12.651 1.999 8.051 1.999zM6.5 10.398V5.602l4.252 2.4L6.5 10.398z" />
                  </svg>
                  <span className="text-lg font-medium">YouTube</span>
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Contact;
