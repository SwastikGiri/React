import React from 'react'
import { logo } from '../../public/images/image'
import{NavLink} from 'react-router-dom'
import Signin from './Signin'
import { Signup } from '.'

function Header() {
  return (
<div className="relative w-full h-32 bg-slate-900 flex items-center">
  <div className="mx-auto flex w-full items-center justify-between sm:px-6 lg:px-8">
    <div className='w-40 m-5 ml-20'>
      <img style={{height:'100%'}} src={logo} alt="ZAIRZEST" />
    </div>
    <div className="hidden grow items-center justify-end lg:flex mr-20">
      <ul className="ml-12 inline-flex space-x-12  items-end gap-8">
        <li>
          <NavLink
            to='/'
            className="text-xl font-semibold text-white hover:text-orange-600"
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to='#'
            className="text-xl font-semibold text-white hover:text-orange-600"
          >
            About Us
          </NavLink>
        </li>
        <li>
          <NavLink
            to='/signup'
            className="text-xl font-semibold text-white hover:text-orange-600"
          >
            Register
          </NavLink>
        </li>
        <li>
          <NavLink
            to='/signin'
            className="text-xl font-semibold text-white hover:text-orange-600"
          >
            Sign In          
          </NavLink>
        </li>
      </ul>
    </div>
    <div className="lg:hidden">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="white"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        className="h-6 w-6 cursor-pointer"
      >
        <line x1="4" y1="12" x2="20" y2="12"></line>
        <line x1="4" y1="6" x2="20" y2="6"></line>
        <line x1="4" y1="18" x2="20" y2="18"></line>
      </svg>
    </div>
  </div>
</div>

  )
}

export default Header