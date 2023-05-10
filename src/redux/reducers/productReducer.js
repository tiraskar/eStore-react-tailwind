import * as actionTypes from '../actions/actionsTypes'

const initialState = {
  categories: [],
  products: [],
  filteredProduct: [],
}

export const product = (state = initialState, action) => {
  if (action.type === actionTypes.PRODUCT_CATEGORIES) {
    return {
      ...state,
      categories: action.data,
    }
  }
  if (action.type === actionTypes.PRODUCT) {
    return {
      ...state,
      products: action.data,
    }
  }
  if (action.type === actionTypes.FILTER_PRODUCT) {
    return {
      ...state,
      filteredProduct: action.data,
    }
  }

  return state
}
