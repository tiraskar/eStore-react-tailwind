import * as actionTypes from '../actions/actionsTypes'

const initialState = {
  item: [],
  itemPriceTotal: 0,
  totalItem: 0,
  totalQuantity: 0,
}

export const cart = (state = initialState, action) => {
  if (action.type === actionTypes.ADD_CART_TO_ITEM) {
    let itemExits = state.item.find((x) => x.Id === action.data.Id)
    if (itemExits) {
      itemExits.quantity += action.data.quantity || 1
      itemExits.itemTotal = itemExits.price * itemExits.quantity
      return {
        ...state,
        itemPriceTotal: state.item.reduce((a, b) => a + b.itemTotal || 0, 0),
        totalItem: state.item.length,
        totalQuantity: state.item.reduce((a, b) => a + b.quantity || 0, 0),
      }
    } else {
      let tempData = action.data
      tempData.quantity = action.data.quantity || 1
      tempData.itemTotal = tempData.price * tempData.quantity

      return {
        ...state,
        item: [...state.item, tempData],
        itemPriceTotal:
          state.item.reduce((a, b) => a + b.itemTotal || 0, 0) +
          tempData.itemTotal,
        totalItem: state.item.length,
        totalQuantity:
          state.item.reduce((a, b) => a + b.quantity || 0, 0) +
          tempData.quantity,
      }
    }
  }
  if (action.type === actionTypes.REMOVE_CART_ITEM) {
    let tempItem = state.item
    tempItem = tempItem.filter((x) => x.Id !== action.data.Id)
    return {
      ...state,
      item: [...tempItem],
      itemPriceTotal: tempItem.reduce((a, b) => a + b.itemTotal || 0, 0),
      totalItem: tempItem.length,
      totalQuantity: tempItem.reduce((a, b) => a + b.quantity || 0, 0),
    }
  }
  return state
}
