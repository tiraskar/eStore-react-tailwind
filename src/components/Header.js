import React from 'react'
import { FaShoppingCart, FaHeart, FaSearch } from 'react-icons/fa'

const Header = () => {
  return (
    <div className='container bg-cyan-200 items-center shadow-md '>
      <div className='flex flex-row mx-auto justify-between  p-2 md:w-[90%] '>
        <div className='text-2xl '>
          <h2>eStore</h2>
        </div>
        <div className='flex flex-row items-center '>
          <div className='items-center'>
            <select name='' id='' className='p-2 bg-slate-500 rounded-l-lg'>
              <option value=''>All</option>
              <option value=''>Men</option>
              <option value=''>Women</option>
              <option value=''>Kidss</option>
            </select>
            <input
              className='w-80 p-2 border-white focus:bg-white'
              type='text'
            />
          </div>
          <button className='bg-slate-500 w-12 p-2 rounded-r-lg'>
            <FaSearch size={24} />
          </button>
        </div>
        <div className='hidden md:flex md:flex-row md:space-x-10 items-center '>
          <div className=' md:space-x-4 '>
            <button className='border-2 border-red-500 px-5 py-1 rounded-lg'>
              Sign Up
            </button>
            <button className='border-2 border-red-500 px-5 py-1 rounded-lg'>
              Sign In
            </button>
          </div>
          <div className='flex flex-row space-x-3'>
            <button>
              <FaHeart size={32} />
            </button>
            <button>
              <FaShoppingCart size={32} />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header
