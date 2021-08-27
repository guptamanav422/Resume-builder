let initialState={
    fname:"",
    lname:"",
    email:"",
    city:"",
    state:"",
    phone:"",
    degree:"",
    college:"",
    cgpa:"",
    year:"",
}

let detailReducer=(state=initialState,action)=>{
    switch(action.type){
        case "SET_DETAILS":
            return{...state,...action.payload}
        default:
            return state;
    }
}

export default detailReducer;