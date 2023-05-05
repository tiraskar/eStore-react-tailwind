import React from 'react'
import imagedata from '../utils/imagedata'

const Product = () => {
  return (
    <div className='container px-5 py-2 '>
      <div className='grid grid-cols-4 space-x-5 mb-2 '>
        {imagedata.map((data, index) => (
          <div key={index} className='shadow-lg rounded-lg bg-cyan-100 mb-5'>
            <div className='p-5'>
              <img src={data.pic} alt='' />
            </div>
            <h2>Name: {data.name}</h2>
            <h2>Star: {data.star}</h2>
            <h2>Price: {data.price}</h2>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Product
