import React, { useEffect } from 'react'
import { AiOutlineStar } from 'react-icons/ai'
import { useSelector, useDispatch } from 'react-redux'
import * as actions from '../redux/actions/index'
import { Link } from 'react-router-dom'

const Product = () => {
  const dispatch = useDispatch()
  const {
    product: { products, filteredProduct },
    cart,
  } = useSelector((obj) => obj)

  useEffect(() => {
    // console.log('Cart from reducer:', cart)
  }, [cart])

  const addCartToItem = (data) => {
    dispatch(actions.addCartItem(data))
  }
  useEffect(() => {
    dispatch(actions.getProducts())
  }, [])

  return (
    <div className='container px-5 py-2  bg-cyan-100 '>
      <div className=' grid grid-cols-2 md:grid md:grid-cols-4 space-x-5 mb-2 '>
        {filteredProduct.map((data, index) => (
          <div key={index} className='shadow-lg rounded-lg bg-white mb-5 ml-5'>
            <div className='relative p-4'>
              <img src={data.imageSrc} alt='' className='abs' />
            </div>
            <div className='mx-5 space-y-3  mb-4'>
              {/* <h2 className='text-xl'>{data.name}</h2> */}
              <Link to='/productDetails' state={data} className='text-xl'>
                {data.name}
              </Link>
              <div className='grid grid-flow-col w-1/2'>
                <AiOutlineStar />
                <AiOutlineStar />
                <AiOutlineStar />
                <AiOutlineStar />
                <AiOutlineStar />
              </div>
              <h2> $: {data.price}</h2>
              <button
                onClick={() => addCartToItem(data)}
                className='b-2 bg-blue-600 p-2 text-white rounded-lg hover:text-blue-500 hover:bg-white hover:border-black hover:border-2'
              >
                Add to cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Product
