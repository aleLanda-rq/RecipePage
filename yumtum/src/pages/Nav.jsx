import React from 'react'
// import logo from '../images/YumTum.png';
import{BsSearch} from "react-icons/bs";



function Nav() {
  return (
    <nav>
        <h4 className='logo'>YumTum Receipes</h4>
        <ul className='navLinks'>
            <li className='links'>Home</li>
            <li className='links'>Savory</li>
            <li className='links'>Baked</li>
            <li className='links'>Healthy</li>
        </ul>
      <input type="text" placeholder='Search...' /><button className='searchbtn'><BsSearch/></button>
    </nav>
  )
}

export default Nav
