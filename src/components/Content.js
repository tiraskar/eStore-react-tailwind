import React from 'react'
import Sidebar from './Sidebar'
import Product from './Product'

const Content = () => {
  return (
    <div className='container flex flex-row p-2 '>
      <div className='w-1/6 border-2'>
        <Sidebar />
      </div>
      <div className=''>
        <Product />
      </div>
    </div>
  )
}

export default Content
