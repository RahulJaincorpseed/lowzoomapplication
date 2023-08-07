const initialState = {
    token : "",
    roles: [],
    user: {},
}

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case "TOKEN":
      return {...state, token : action.payload}
    case "ROLES":
      return {...state, roles: action.payload}      
    default:
      return state
  }
}
