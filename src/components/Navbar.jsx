import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='flex flex-wrap items-center text-xl gap-60 justify-center mb-4'>
        <NavLink
        to="/">
            Home
        </NavLink>

        <NavLink
        to="/pastes">
            All Notes
        </NavLink>
    </div>
  )
}

export default Navbar