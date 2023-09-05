const initialState = {
  enquiry: {},
}

export const SignUpReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ENQUIRY":
      return { ...state, enquiry: action.payload }

    default:
      return state
  }
}
