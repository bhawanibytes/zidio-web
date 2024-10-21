// import React from 'react'
import { FaMapMarkerAlt, FaEnvelope, FaClock, FaFacebook, FaTwitter, FaLinkedin, FaYoutube } from 'react-icons/fa';
const AnnouncementBar = () => {
  return (
    // <div>AnnouncementBar</div>
    <div className="bg-blue-600 text-white py-2">
      <div className="mx-[10%] flex justify-between">
        {/* Left Side: Location and Email */}
        <div className="flex items-center">
          <div className="flex items-center">
            {/* Google Maps link */}
            <FaMapMarkerAlt className="mr-1" />
            <a href="https://maps.app.goo.gl/eX64X9H8dPkDuoVVA" target="_blank" className="hover:underline">
              Bengaluru, India
            </a>
          </div>
          <div className="flex items-center ml-6">
            {/* Email link */}
            <FaEnvelope className="mr-1" />
            <a href="mailto:support@zidio.in" className="hover:underline">
              Support
            </a>
          </div>
        </div>

        {/* Right Side: Time and Social Media */}
        <div className="flex items-center">
          <div className="flex items-center">
            <FaClock className="mr-1" />
            <span className='mr-4'>9.00 am - 5.30 pm</span>
          </div>
          <div className="flex items-center space-x-2">
            <FaFacebook className="hover:text-gray-300" />
            <FaTwitter className="hover:text-gray-300" />
            <FaLinkedin className="hover:text-gray-300" />
            <FaYoutube className="hover:text-gray-300" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default AnnouncementBar