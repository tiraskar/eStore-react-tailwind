const initialState = []

export const topMenu = (state = initialState, action) => {
  if (action.type === 'menu') {
    return action.data
  }
  return state
}
