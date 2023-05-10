import { combineReducers } from 'redux'

import { topMenu } from './topMenuReducer'
import { product } from './productReducer'
import { cart } from './cartReducer'
const rootReducer = combineReducers({
  // tm: topMenu
  topMenu,
  product,
  cart,
})

export default rootReducer
