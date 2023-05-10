import * as actionTypes from './actionsTypes'

export const addCartItem = (data) => async (dispatch) => {
  dispatch(_addCartItem(data))
}

const _addCartItem = (data) => {
  return {
    type: actionTypes.ADD_CART_TO_ITEM,
    data,
  }
}

export const removerCartItem = (data) => async (dispatch) => {
  dispatch(_removeCartItem(data))
}

const _removeCartItem = (data) => {
  return {
    type: actionTypes.REMOVE_CART_ITEM,
    data,
  }
}
