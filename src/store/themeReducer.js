const defaultState = {
  dark: false
}

export const themeReducer = (state = defaultState, action) => {
  switch (action.type) {
    case "SWITCH_THEME":
      return {...defaultState, dark: action.payload}
    default:
      return state
  }
}