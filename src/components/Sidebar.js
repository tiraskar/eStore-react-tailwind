import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import * as actions from '../redux/actions/index'

const Sidebar = () => {
  const dispatch = useDispatch()
  const { product } = useSelector((obj) => obj)
  const [categoryFilter, setCategoryFilter] = useState([])

  const [filter, setFilter] = useState({})

  useEffect(() => {
    dispatch(actions.getProductCategories())
  }, [])

  const applyFilter = (item) => {
    let tempFilter = {
      ...filter,
      categoryId: item.map((x) => x.Id),
    }
    setFilter(tempFilter)

    tempFilter.categoryId.length > 0
      ? dispatch(actions.applyFilter(tempFilter, product))
      : dispatch(actions.applyFilter(null, product))

    // if (tempFilter.categoryId.length > 0) {
    //   dispatch(actions.applyFilter(tempFilter, product))
    // } else {
    //   dispatch(actions.applyFilter(null, product))
    // }

    // console.log(tempFilter)
  }

  const checkBoxChanged = (e, item) => {
    let categories = [...categoryFilter]
    let index = categories.findIndex((x) => x.Id >= e.target.value)
    if (!e.target.checked) {
      categories = categories
        .slice(0, index)
        .concat(categories.slice(index + 1, categories.length))
    } else if (e.target.checked) {
      categories.push(item)
    }
    setCategoryFilter(categories)
    applyFilter(categories)
  }
  const removeFilter = () => {
    setFilter({})
    setCategoryFilter([])
    dispatch(actions.applyFilter(null, product))
  }

  return (
    <div className='container'>
      <div className='mb-2'>
        <h2 className='text-2xl  font-bold'>Categories</h2>
        <div className='flex flex-col space-y-3 p-2'>
          {product.categories.map((item, index) => {
            return (
              <div key={index}>
                <h2>{item.Category}</h2>
                {item.SubCategory.map((subItem, index) => (
                  <li key={index} className='list-none px-2'>
                    <input
                      type='checkbox'
                      name={subItem.name}
                      value={subItem.Id}
                      onChange={(e) => checkBoxChanged(e, subItem)}
                      checked={
                        categoryFilter.find((x) => x.Id === subItem.Id)
                          ? true
                          : false
                      }
                    />
                    <label className=''>{subItem.Name}</label>
                  </li>
                ))}
              </div>
            )
          })}
        </div>
      </div>
      <div className='mt-2'>
        <h2 className='text-2xl font-bold mb-2'>Shop by price</h2>
        {`Price: $${filter?.price?.min || 0} - $${filter?.price?.max || 0}`}
        <div className='space-y-5'>
          <p className='space-x-2'>
            <span>Min</span>
            <input
              type='range'
              id='min'
              min={1}
              max={250}
              step={1}
              onChange={(e) =>
                setFilter({
                  ...filter,
                  price: { ...filter.price, min: parseInt(e.target.value) },
                })
              }
            />
          </p>
          <p className='space-x-2'>
            <span>Max</span>
            <input
              type='range'
              id='max'
              min={1}
              max={250}
              step={1}
              onChange={(e) =>
                setFilter({
                  ...filter,
                  price: { ...filter.price, max: parseInt(e.target.value) },
                })
              }
            />
          </p>
        </div>
        <div className='flex flex-row mx-auto justify-center space-x-2 mt-5'>
          <button
            onClick={() => dispatch(actions.applyFilter(filter, product))}
            className='bg-green-600 text-white px-2 py-2 rounded-lg hover:border-2 hover:border-green-600 hover:rounded-lg hover:bg-white hover:text-black items-center'
          >
            Apply Filter
          </button>
          <button
            onClick={removeFilter}
            className='bg-black text-white px-2 py-2 rounded-lg hover:border-2 hover:border-black hover:rounded-lg hover:bg-white hover:text-black items-center'
          >
            Remove All Filter
          </button>
        </div>
      </div>
    </div>
  )
}

export default Sidebar
