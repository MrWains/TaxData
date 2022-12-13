const initialState = {
	coords: null,
	uc_name: null,
	uc_features: null,
};

const statReducer = (state = initialState, action) => {
	switch (action.type) {
		case "SomeType":
			console.log("some func ran");
			return state;
		case "UPDATE":
			return state;
		case "coord_set":
			return { ...state, coords: action.payload };
		case "uc_name_set":
			return { ...state, uc_name: action.payload };
		default:
			return state;
	}
};

export default statReducer;
