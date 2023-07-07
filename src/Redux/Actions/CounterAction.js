export const incrementAction = (data) =>{
    return{
        type: "INCREMENT",
        payload: data
    }   
}

export const decrementAction = (data) =>{
    return{
        type: "DECREMENT",
        payload: data
    }   
}