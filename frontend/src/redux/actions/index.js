export const funname = () => {
    return {
        type: 'SomeType',
        payload: {}
    }
}

export const setCoordinates = (data, map) => {
    console.log("Inside setCoodinates");
    if (map === 1) {

        return {
            type: "coord_set_A",
            payload: data
        };
    }
    else if(map === 2) {
        return {
            type: "coord_set_B",
            payload: data
        };
    }
    else
        return null;
}

export const setUCName = (name, map) => {
    if(map === 1){

        return {
            type: "uc_name_set_A",
            payload: name
        }
    }
    else if(map === 2){
        return {
            type: "uc_name_set_B",
            payload: name
        };
    }
    else
        return null;
}