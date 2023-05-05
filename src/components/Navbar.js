import React from 'react'

const Navbar = () => {
  return (
    <div className='container bg-slate-500  group '>
      <ul className='flex flex-row space-x-10 ml-20 p-2 text-xl text-white '>
        {navLinks.map((nav, index) => (
          <li key={index} className='hover:text-red-500'>
            {nav.nav}
          </li>
        ))}
      </ul>
    </div>
  )
}
export default Navbar

const navLinks = [
  { nav: 'Home' },
  { nav: 'Men' },
  { nav: 'Women' },
  { nav: 'Kids' },
  { nav: 'Best Seller' },
]
