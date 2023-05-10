import React, { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { AiOutlineStar } from 'react-icons/ai'
import { useDispatch, useSelector } from 'react-redux'
import * as actions from '../redux/actions/cardAction'

const ProductDetails = () => {
  const dispatch = useDispatch()
  const { cart } = useSelector((obj) => obj)
  const [qty, setQty] = useState(1)

  const location = useLocation()
  const item = location.state
  const { name, imageSrc, price } = item

  const cartUpdate = (product) => {
    // console.log(product, qty)
    let temProduct = { ...product, quantity: parseInt(qty) }
    dispatch(actions.addCartItem(temProduct))
  }
  useEffect(() => {
    console.log(cart)
  }, [cart])
  return (
    <div className='container mt-2  w-full h-full'>
      <div className='flex flex-row mx-auto bg-slate-100 mt-10 p-3 shadow-lg w-1/2 rounded-lg'>
        <div className='w-1/2'>
          <img src={imageSrc} alt='' className='rounded-l-lg' />
        </div>
        <div className='flex flex-col w-1/2  space-y-5'>
          <h2 className='text-3xl'>{name}</h2>

          <h2 className='text-2xl '>
            Price: <span className='text-green-400'>${price}</span>
          </h2>

          <div className='flex flex-row  space-x-5'>
            <AiOutlineStar />
            <AiOutlineStar />
            <AiOutlineStar />
            <AiOutlineStar />
            <AiOutlineStar />
          </div>

          <p className=''>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptate
            consequatur dolores, iure accusamus pariatur minus libero! Veniam,
            porro iste. Corrupti incidunt quos similique commodi cum!
          </p>
          <div className='flex flex-row  space-x-4'>
            <input
              type='number'
              min={1}
              value={qty}
              onChange={(e) => setQty(e.target.value)}
              className=''
            />
            <button
              onClick={() => cartUpdate(item)}
              className='px-3 py-2 border-2 border-black bg-green-500 text-black rounded-lg hover:bg-white'
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductDetails
