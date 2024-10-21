// import React from 'react'
import zidioLogo from '../assets/zidio-logo.png'
// import './Header.css'

const Header = () => {
  return (
    <div className='sticky top-0 bg-white flex justify-around items-center h-28' >
        <div>
            <img src={zidioLogo} alt="Zidio-logo" className='h-10' />
        </div>
        <div className='flex items-center'>
            <ul className='list-none flex'>
                <li className='mx-5 hover:text-btColor cursor-pointer'>Home</li>
                <li className='mx-5 hover:text-btColor cursor-pointer'>About</li>
                <li className='mx-5 hover:text-btColor cursor-pointer'>Services</li>
                <li className='mx-5 hover:text-btColor cursor-pointer'>Contact</li>
            </ul>
            
            <span className='mx-5 cursor-pointer'>🔍</span>

            <button className='mx-5 px-8 py-3 bg-btColor text-white rounded-md hover:bg-white hover:text-black outline outline-1 outline-btColor'>Get A Quote</button>
        </div>
    </div>
    
  )
}

export default Header