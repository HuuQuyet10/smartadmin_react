const reducer = (state = {
    latlngs: []
}, action) => {
    let newState = { ...state }
    switch (action.type) {
        case "NEWS-UPDATE-DATA":
            newState = { ...state, ...action.data || {} }
            return newState;
        default:
            return state
    }

}       
export default reducer