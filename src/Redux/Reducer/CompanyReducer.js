const companyInitialState = {
    addCompany: {},
}


export const companyDataReducer = (state = companyInitialState, action) =>{
    switch (action.type) {
        case "":
            return {...state, addCompany: action.payload}
        default:
            return state
    }
}