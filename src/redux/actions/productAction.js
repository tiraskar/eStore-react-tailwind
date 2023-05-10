import * as actionTypes from './actionsTypes'

import axios from 'axios'

import {
  img1,
  img2,
  img3,
  img4,
  img5,
  img6,
  img7,
  img8,
  img9,
} from '../../assets/images/images'

const productCategories = [
  {
    Id: 1,
    Category: 'Kids',
    SubCategory: [
      {
        Id: 1,
        Name: 'Dresses',
      },
      {
        Id: 2,
        Name: 'Jacket',
      },
    ],
  },
  {
    Id: 2,
    Category: 'Mens',
    SubCategory: [
      {
        Id: 1,
        Name: 'T-shirt',
      },
      {
        Id: 2,
        Name: 'Jacket',
      },
    ],
  },
]

const product = [
  { Id: 1, name: 'Jacket', pic: img1, price: '$488' },
  { Id: 2, name: 'Bag', pic: img2, price: '$488' },
  { Id: 3, name: 'Ladies', pic: img3, price: '$488' },
  { Id: 4, name: 'Jeans', pic: img4, price: '$488' },
  { Id: 5, name: 'Shoes', pic: img5, price: '$488' },
  { Id: 6, name: 'Leather Bag', pic: img6, price: '$488' },
  { Id: 7, name: 'Hello', pic: img7, price: '$488' },
  { Id: 8, name: 'Scarf', pic: img8, price: '$488' },
  { Id: 9, name: 'Shoes', pic: img9, price: '$488' },
]

export const getProductCategories = () => async (dispatch) => {
  let tempCat = []
  await axios({
    method: 'get',
    url: 'http://localhost:5000/product/api/getCategories',
  }).then((res) => {
    // console.log('Response:', res.data)
    res.data.data.map((item) => {
      let t = {
        Id: item.id,
        Category: item.category,
        SubCategory: [],
      }
      return tempCat.push(t)
    })
  })
  dispatch({
    type: actionTypes.PRODUCT_CATEGORIES,
    data: productCategories,
  })
}

export const getProducts = () => async (dispatch) => {
  await axios({
    method: 'get',
    url: 'http://localhost:5000/product/api/getProducts',
  }).then((res) => {
    try {
      let productList = res.data.data.map((item) => {
        return {
          Id: item.id,
          categoryId: item.categoryid,
          name: item.productname,
          imageSrc: `http://localhost:5000/${item.productimg}`,
          price: item.price,
        }
      })
      // console.log(productList)
      dispatch(_getProducts(productList))
      dispatch(_getFilteredProducts(productList))
    } catch (error) {}
  })
  // dispatch({
  //   type: actionTypes.PRODUCT,
  //   data: product,
  // })
}

const _getProducts = (data) => {
  return {
    type: actionTypes.PRODUCT,
    data,
  }
}
const _getFilteredProducts = (data) => {
  return {
    type: actionTypes.FILTER_PRODUCT,
    data,
  }
}

export const applyFilter = (param, data) => async (dispatch) => {
  let query = buildQuery(param)
  console.log('Query:', query)

  let filteredData = filterData(data.products, query)

  dispatch(_getFilteredProducts(filteredData))
  console.log(filteredData)
}

const buildQuery = (filter) => {
  let query = {}
  for (let keys in filter) {
    query[keys] = filter[keys]
  }
  return query
}

const filterData = (data, query) => {
  const keysHavingMinMax = ['price']
  const filteredData = data.filter((item) => {
    for (let keys in query) {
      if (query[keys] === undefined) return false
      else if (keysHavingMinMax.includes(keys)) {
        if (query[keys]['min'] !== null && item[keys] < query[keys]['min']) {
          return false
        } else if (
          query[keys]['max'] !== null &&
          item[keys] > query[keys]['max']
        ) {
          return false
        }
      } else if (query[keys].includes(item[keys])) return false
    }
    return true
  })
  return filteredData
}
