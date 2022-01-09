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

export const setUCYear = (year, map) => {
    if(map === 1)
    {
        return {
            type: "uc_year_set_A",
            payload: year
        }
    }
    else if(map === 2)
    {
        return {
            type: "uc_year_set_B",
            payload: year
        };
    }
    else
        return null;
}

export const setUCSum = (sum, map) => {
    if(map === 1)
    {
        return {
            type: "uc_sum_set_A",
            payload: sum
        }
    }
    else if(map === 2)
    {
        return {
            type: "uc_sum_set_B",
            payload: sum
        };
    }
    else
        return null;
}
