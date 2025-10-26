import React from 'react';

const About = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-800 mb-8 text-center">
          About Us
        </h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          <div>
            <h2 className="text-2xl font-semibold text-gray-700 mb-4">Our Mission</h2>
            <p className="text-gray-600 leading-relaxed">
              We are dedicated to creating innovative solutions that make a difference 
              in people's lives. Our team of experts works tirelessly to deliver 
              high-quality products and services that exceed expectations.
            </p>
          </div>
          <div>
            <h2 className="text-2xl font-semibold text-gray-700 mb-4">Our Vision</h2>
            <p className="text-gray-600 leading-relaxed">
              To be the leading provider of cutting-edge technology solutions, 
              recognized globally for our innovation, reliability, and commitment 
              to customer satisfaction.
            </p>
          </div>
        </div>

        <div className="bg-blue-50 p-8 rounded-lg mb-8">
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex items-start">
              <div className="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 mt-1">
                <span className="text-sm font-bold">1</span>
              </div>
              <div>
                <h3 className="font-semibold text-gray-700">Innovation</h3>
                <p className="text-gray-600 text-sm">We embrace new ideas and technologies</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 mt-1">
                <span className="text-sm font-bold">2</span>
              </div>
              <div>
                <h3 className="font-semibold text-gray-700">Quality</h3>
                <p className="text-gray-600 text-sm">We deliver excellence in everything we do</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 mt-1">
                <span className="text-sm font-bold">3</span>
              </div>
              <div>
                <h3 className="font-semibold text-gray-700">Integrity</h3>
                <p className="text-gray-600 text-sm">We maintain the highest ethical standards</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 mt-1">
                <span className="text-sm font-bold">4</span>
              </div>
              <div>
                <h3 className="font-semibold text-gray-700">Customer Focus</h3>
                <p className="text-gray-600 text-sm">Our customers are at the heart of everything</p>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center">
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">Our Team</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We have a diverse team of professionals who bring unique skills and 
            perspectives to every project. Together, we work towards achieving 
            our common goals and delivering exceptional results.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
