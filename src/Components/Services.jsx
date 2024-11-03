import React from 'react';
import Stats from './stats';
import logo1 from '../assets/ser1.png';
import logo2 from '../assets/ser2.png';
import logo3 from '../assets/ser3.png';
import logo4 from '../assets/ser4.png';
import logo5 from '../assets/ser5.png';
import logo6 from '../assets/ser6.png';
import logo7 from '../assets/ser7.png';
import logo8 from '../assets/ser8.png';
import backgroundImage from '../assets/bg.png'; // Correct image import

const Services = () => {
  // Event handler for stats click
  const handleStatClick = (heading) => {
    alert(`You clicked on: ${heading}`);
    // You can implement more complex logic here if needed
  };

  return (
    <div>
      <h1>Service Page</h1>
      
      {/* Banner Section */}
      <div
        className="relative h-[400px] bg-cover bg-center flex items-center justify-center"
        style={{
          backgroundImage: `url(${backgroundImage})`,
        }}
      >
        <div className="absolute inset-0 bg-black opacity-60"></div> {/* Dark overlay */}

        <div className="relative z-10 text-center text-white">
          <h1 className="text-4xl font-bold">Our Services</h1>
          <div className="flex justify-center space-x-2 mt-4">
            <a href="/" className="text-white hover:underline">Home</a>
            <span>&gt;</span>
            <span className="text-gray-300">Services</span>
          </div>
        </div>
      </div>

      {/* What We Provide Section */}
      <div className="text-center py-8">
        <h2 className="text-3xl font-bold">What We Provide?</h2>
        <p className="text-xl mt-2">
          Provide Interactive IT Solution & Business Services
        </p>
      </div>

      {/* Stats components */}
      <div className="bg-gray-50 py-12">  {/* Added background color */}
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 px-4">
          <Stats 
            logo={logo1}
            heading={"Business Growth"} 
            text={'Boost your business with strategies to reach new markets, optimize operations, and increase profits.'}
            onClick={() => handleStatClick("Business Growth")} // Add event handler
          />
          <Stats 
            logo={logo2}
            heading={"Marketing Strategy"} 
            text={'Maximize your brand presence and engage with your target audience through effective marketing strategies.'}
            onClick={() => handleStatClick("Marketing Strategy")} // Add event handler
          />
          <Stats 
            logo={logo3}
            heading={"Financial Consulting"} 
            text={'Optimize financial planning and management for sustainable business growth.'}
            onClick={() => handleStatClick("Financial Consulting")} // Add event handler
          />
          <Stats 
            logo={logo4}
            heading={"Technology Solutions"} 
            text={'Implement cutting-edge technology solutions to streamline operations and improve efficiency.'}
            onClick={() => handleStatClick("Technology Solutions")} // Add event handler
          />
          <Stats 
            logo={logo5}
            heading={"Data Analytics"} 
            text={'Leverage data to make informed decisions and gain insights into your business performance.'}
            onClick={() => handleStatClick("Data Analytics")} // Add event handler
          />
          <Stats 
            logo={logo6}
            heading={"Cybersecurity"} 
            text={'Protect your business from cyber threats with our comprehensive security solutions.'}
            onClick={() => handleStatClick("Cybersecurity")} // Add event handler
          />
          <Stats 
            logo={logo7}
            heading={"Customer Service"} 
            text={'Enhance customer satisfaction with improved service delivery and support systems.'}
            onClick={() => handleStatClick("Customer Service")} // Add event handler
          />
          <Stats 
            logo={logo8}
            heading={"Cloud Computing"} 
            text={'Take advantage of cloud technologies to scale your business and reduce IT costs.'}
            onClick={() => handleStatClick("Cloud Computing")} // Add event handler
          />
        </div>
      </div>

      {/* Subscribe Section */}
      <div className="bg-blue-500 text-white py-12 mt-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Get Latest Update from ZIDIO</h2>
          <p className="text-lg mb-6">Stay Connected with Us</p>
          <div className="flex justify-center">
            <input 
              type="email" 
              placeholder="Enter your Email" 
              className="w-full max-w-xs px-4 py-2 text-black rounded-l-md focus:outline-none" 
            />
            <button className="bg-red-500 hover:bg-red-600 px-6 py-2 text-white rounded-r-md">
              Subscribe
            </button>
          </div>
        </div>
      </div>

    </div>
  );
};

export default Services;
