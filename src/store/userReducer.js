const defaultState = {
  user: '',
  age: undefined
}

export const userReducer = (state = defaultState, action) => {
  switch (action.type) {
    case 'ADD_USER':
      return {...state, user: action.payload.name, age: action.payload.age}
    default:
      return state
  }
}

export const addUser = (data) => {
  return { type: 'ADD_USER',  payload: data}
}