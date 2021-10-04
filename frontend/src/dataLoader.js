// react imports
import React from 'react';

// importing local DB and d3 to manipulate csv
import * as d3 from 'd3';
import localDB from './local_DB_df.csv';


const dataLoader = () => {

    // local lists to read local DB data
    let list_UC_Name = []
    let list_sum_2021 = []
    let list_Sum_Per_Area_2021 = [] 
    let list_Sum_Per_Shape_Area_2021 = [] 
    let list_sum_2012 = []
    let list_Sum_Per_Area_2012 = [] 
    let list_Sum_Per_Shape_Area_2012 = [] 
    let list_New_Construction_Sum = []
    let list_Potential_Deconstruction_Sum = [] 
    let list_New_Construction_Sum_Per_Area = []
    let list_New_Construction_Sum_Per_Shape_Area = []
    let list_Potential_Deconstruction_Sum_Per_Area = []
    let list_Potential_Deconstruction_Sum_Per_Shape_Area = []
    let toReturn = []

    d3.csv(localDB, function(data) 
    {
        list_UC_Name.push(data.UC);
        list_sum_2021.push(data.Sum_2021)
        list_Sum_Per_Area_2021.push(data.Sum_Per_Area_2021)
        list_Sum_Per_Shape_Area_2021.push(data.Sum_Per_Shape_Area_2021)
        list_sum_2012.push(data.Sum_2012)
        list_Sum_Per_Area_2012.push(data.Sum_Per_Area_2012)
        list_Sum_Per_Shape_Area_2012.push(data.Sum_Per_Shape_Area_2012)
        list_New_Construction_Sum.push(data.New_Construction_Sum)
        list_Potential_Deconstruction_Sum.push(data.Potential_Deconstruction_Sum)
        list_New_Construction_Sum_Per_Area.push(data.New_Construction_Sum_Per_Area)
        list_New_Construction_Sum_Per_Shape_Area.push(data.New_Construction_Sum_Per_Shape_Area)
        list_Potential_Deconstruction_Sum_Per_Area.push(data.Potential_Deconstruction_Sum_Per_Area)
        list_Potential_Deconstruction_Sum_Per_Shape_Area.push(data.Potential_Deconstruction_Sum_Per_Shape_Area)
    });

    toReturn.push(list_UC_Name)
    toReturn.push(list_sum_2021)
    toReturn.push(list_Sum_Per_Area_2021)
    toReturn.push(list_Sum_Per_Shape_Area_2021)
    toReturn.push(list_sum_2012)
    toReturn.push(list_Sum_Per_Area_2012)
    toReturn.push(list_Sum_Per_Shape_Area_2012)
    toReturn.push(list_New_Construction_Sum)
    toReturn.push(list_Potential_Deconstruction_Sum)
    toReturn.push(list_New_Construction_Sum_Per_Area)
    toReturn.push(list_New_Construction_Sum_Per_Shape_Area)
    toReturn.push(list_Potential_Deconstruction_Sum_Per_Area)
    toReturn.push(list_Potential_Deconstruction_Sum_Per_Shape_Area)


    return ( toReturn );
};

export default dataLoader;

