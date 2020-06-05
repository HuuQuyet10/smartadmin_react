const reducer = (state = {
    listCitys: []
}, action) => {
    let newState = { ...state }
    switch (action.type) {
        case 'LIST-CITY-UPDATE-DATA':
            newState = { ...state, ...action.data || {} }
            return newState;
        default:
            return state
    }

}
export default reducer
