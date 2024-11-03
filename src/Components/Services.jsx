// import React from 'react'
import { FaCloud, FaLaptopCode, FaMobileAlt, FaShieldAlt } from 'react-icons/fa'
import aboutImg from '../assets/aboutimg.png';

const Services = () => {
  return (
    <div className=" bg-gray-100">
      {/* Body Top Bar */}
      {/* <div className="relative bg-blue-600 text-white py-16 text-center">
        <h1 className="text-4xl font-bold">Services</h1>
        <p className="mt-4">Home &gt; Services</p>
      </div> */}
      
      <div>
        <div className="bg-gradient-to-r from-sky-500 to-indigo-500">
          <div
            className="bg-cover bg-center min-h-[60vh] rounded-bl-full"
            style={{
              backgroundImage: `url(${aboutImg})`, 
              backgroundSize: 'auto 100%', 
              backgroundPosition: 'right',  
              backgroundRepeat: 'no-repeat',
            }}
          >
            <div className="container mx-auto">
              <div className="relative">
                <div className="text-white p-4 rounded-md absolute top-44 space-y-6">
                  <div className="text-5xl font-bold">Services</div>
                  <div className="border w-52 text-center p-2 text-xl rounded-md">
                    Home {location.pathname || " "} 
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Main container */}
      <div className="container mx-auto mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* Service 1 */}
        <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
          <FaCloud className="text-4xl text-blue-500 mb-4" />
          <h3 className="text-2xl font-bold mb-2">Cloud Services</h3>
          <p className="text-gray-700 mb-4">
            Deliver scalable cloud solutions to enhance your business's
            flexibility and efficiency.
          </p>
          <button className="text-blue-500 font-bold">Learn More →</button>
        </div>

        {/* Service 2 */}
        <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
          <FaShieldAlt className="text-4xl text-blue-500 mb-4" />
          <h3 className="text-2xl font-bold mb-2">Cyber Security</h3>
          <p className="text-gray-700 mb-4">
            Safeguard your digital assets with tailored cybersecurity solutions.
          </p>
          <button className="text-blue-500 font-bold">Learn More →</button>
        </div>

        {/* Service 3 */}
        <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
          <FaMobileAlt className="text-4xl text-blue-500 mb-4" />
          <h3 className="text-2xl font-bold mb-2">Digital Marketing</h3>
          <p className="text-gray-700 mb-4">
            Boost your online presence with tailored digital marketing
            strategies.
          </p>
          <button className="text-blue-500 font-bold">Learn More →</button>
        </div>

        {/* Service 4 */}
        <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
          <FaLaptopCode className="text-4xl text-blue-500 mb-4" />
          <h3 className="text-2xl font-bold mb-2">Web Development</h3>
          <p className="text-gray-700 mb-4">
            Design and build responsive, high-performance websites using the
            latest technologies.
          </p>
          <button className="text-blue-500 font-bold">Learn More →</button>
        </div>
    </div>
    </div>
  )
}

export default Services