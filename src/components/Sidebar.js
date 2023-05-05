import React from 'react'

const Sidebar = () => {
  return (
    <div className='container'>
      <h2 className='text-2xl  font-bold'>Categories</h2>
      <div className='flex flex-col space-y-3 p-2'>
        <h2>Women</h2>
        <ul>
          <li>Coat</li>
          <li>Jacket</li>
          <li>T-shirt</li>
          <li>Jeans</li>
          <li>High Neck</li>
        </ul>
      </div>
    </div>
  )
}

export default Sidebar
