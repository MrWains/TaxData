const initialState = {
    coords_A: null,
    coords_B: null,
    uc_name_A: null,
    uc_name_B: null,
    uc_features: null
}

const statReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SomeType':
            console.log("some func ran");
            return state;
        case 'UPDATE':
            return state
        case 'coord_set_A':
            return { ...state, coords_A: action.payload };
        case 'coord_set_B':
            return { ...state, coords_B: action.payload};
        case "uc_name_set_A":
            return { ...state, uc_name_A: action.payload };
        case "uc_name_set_B":
            return { ...state, uc_name_B: action.payload };
        default:
            return state
    }
}

export default statReducer;