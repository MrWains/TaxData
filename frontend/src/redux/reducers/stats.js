const initialState = {
    ////////////////////////////////// Flow 1 and 3 global states
    coords: null,
    uc_name: null,
    uc_features: null,
    ////////////////////////////////// Flow 2 global states
    coords_A: null,
    coords_B: null,
    uc_name_A: null,
    uc_name_B: null,
    uc_year_A: '2012',
    uc_year_B: '2012',
    uc_sum_A: null,
    uc_sum_B: null,
    uc_Activations_A: null,
    uc_Activations_B: null,
}

const statReducer = (state = initialState, action) => {
    switch (action.type) {
        ////////////////////////////////// Flow 1 and 3 work
        case 'SomeType':
            // console.log("some func ran");
            return state;
        case 'UPDATE':
            return state
        case 'coord_set':
            return { ...state, coords: action.payload };
        case "uc_name_set":
            return { ...state, uc_name: action.payload };
        ////////////////////////////////// Flow 2 global work
        case 'coord_set_A':
            return { ...state, coords_A: action.payload };
        case 'coord_set_B':
            return { ...state, coords_B: action.payload};
        case "uc_name_set_A":
            return { ...state, uc_name_A: action.payload };
        case "uc_name_set_B":
            return { ...state, uc_name_B: action.payload };
        case "uc_year_set_A":
            return { ...state, uc_year_A: action.payload };
        case "uc_year_set_B":
            return { ...state, uc_year_B: action.payload };
        case "uc_sum_set_A":
            return { ...state, uc_sum_A: action.payload };
        case "uc_sum_set_B":
            return { ...state, uc_sum_B: action.payload };
        case "uc_Activations_set_A":
            return { ...state, uc_Activations_A: action.payload };
        case "uc_Activations_set_B":
            return { ...state, uc_Activations_B: action.payload };
        ////////////////////////////////// Flow 1, 2 and 3 default work
        default:
            return state
    }
}

export default statReducer;