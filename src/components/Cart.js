import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { AiOutlinePlus, AiOutlineMinus, AiOutlineDelete } from 'react-icons/ai'
import * as actions from '../redux/actions/cardAction'
const tableHead = ['Image', 'Price', 'Quantity', 'Total']
const Cart = () => {
  const dispatch = useDispatch()
  const { cart } = useSelector((obj) => obj)

  const updateCart = (product, op) => {
    let tempProduct = { ...product }
    if (op === 'add') tempProduct.quantity = 1
    else tempProduct.quantity = -1

    dispatch(actions.addCartItem(tempProduct))
  }

  return (
    <div className='container mx-auto'>
      <table className=' bg-white w-auto mx-auto'>
        <thead className=''>
          <tr className=''>
            {tableHead.map((header, index) => (
              <th key={index}>{header}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {cart.item.map((data, index) => (
            <tr key={index} className='justify-center text-center border-b-2'>
              <td className='px-24 py-2  '>
                <img
                  src={data.imageSrc}
                  alt='Product'
                  className='w-20 object-cover rounded  '
                />
              </td>
              <td className='px-20 py-2 '>${data.price}</td>
              <td className='px-20 py-2 space-x-3'>
                <button onClick={() => updateCart(data, 'add')}>
                  <AiOutlinePlus />
                </button>
                <input
                  type='number'
                  value={data.quantity}
                  disabled
                  className='w-10'
                />
                <button
                  onClick={() =>
                    data.quantity <= 0 ? null : updateCart(data, 'sub')
                  }
                >
                  <AiOutlineMinus />
                </button>
              </td>
              <td className='px-20 py-2 '>${data.itemTotal}</td>
              <button
                onClick={() => dispatch(actions.removerCartItem(data))}
                className='border-2 mt-10 px-2 py-2 border-red-500 bg-red-500 text-black rounded-lg hover:bg-white hover:text-red-500'
              >
                <AiOutlineDelete />
              </button>
            </tr>
          ))}
        </tbody>
      </table>
      <div className='flex flex-row bg-yellow-100 p-4 justify-between items-center px-64 mx-auto w-[90%]'>
        <Link
          to='/'
          className='bg-green-400 p-2 border-2 text-black rounded-lg hover:bg-white hover:border-green-600
          '
        >
          Continue Shopping
        </Link>
        <div className='text-3xl'>
          <h2 className='font-bold'>
            Grand Total: ${parseInt(cart.itemPriceTotal).toFixed(2)}
          </h2>
        </div>
        <div>
          <button className='border-2 border-blue-400 bg-blue-400 p-2 rounded-lg hover:bg-white '>
            Proceed to Checkout
          </button>
        </div>
      </div>
    </div>
  )
}

export default Cart
