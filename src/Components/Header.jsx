// import React from 'react'
import zidioLogo from '../assets/zidio-logo.png'
// import './Header.css'

const Header = () => {
  return (
    <div className='flex justify-around items-center' >
        <div>
            <img src={zidioLogo} alt="Zidio-logo" className='h-10' />
        </div>
        <div className='flex items-center'>
            <ul className='list-none flex'>
                <li className='mx-5'>Home</li>
                <li className='mx-5'>About</li>
                <li className='mx-5'>Services</li>
                <li className='mx-5'>Contact</li>
            </ul>
            
            <span className='mx-5'>🔍</span>

            <button className='mx-5 px-5 py-3 bg-btColor text-white rounded-md hover:bg-white hover:text-black outline outline-1 outline-btColor'>Get A Quote</button>
        </div>
    </div>
    
  )
}

export default Header