const defaultState = {
  num: 0
}

export const countReducer = (state = defaultState, action) => {
  switch (action.type) {
    case 'INCREASE':
      return {...state, num: state.num + 1} 
    case 'DECREASE':
      return {...state, num: state.num - 1} 
    default:
      return state
  }
}

// Action Creators 
export const increaceCount = () => {
  return { type: 'INCREASE' }
}
export const decreaceCount = () => {
  return { type: 'DECREASE' }
}