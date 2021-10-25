export const funname = () => {
    return {
        type: 'SomeType',
        payload: {}
    }
}

export const setCoordinates = (data) => {
    console.log("Inside setCoodinates");
    return {
        type: "coord_set",
        payload: data
    };
}

export const setUCName = (name) => {
    return {
        type: "uc_name_set",
        payload: name
    }
}