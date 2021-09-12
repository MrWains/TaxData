// react imports
import React from 'react';
import { useState } from "react";

// bootstrap imports
import Dropdown from 'react-bootstrap/Dropdown';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import ListGroupItem from 'react-bootstrap/ListGroupItem';
import Badge from 'react-bootstrap/Badge';
import 'bootstrap/dist/css/bootstrap.min.css';

// importing local DB and d3 to manipulate csv
import * as d3 from 'd3';
import localDB from './Final_Df.csv';

const StatBoxLoader = () => {
    // declaring react states
    const [UC_Name, set_UC_Name] = useState([])
    const [sum_2021, set_sum_2021] = useState([])
    const [Sum_Per_Area_2021, set_Sum_Per_Area_2021] = useState([])
    const [Sum_Per_Shape_Area_2021, set_Sum_Per_Shape_Area_2021] = useState([])
    const [sum_2012, set_sum_2012] = useState([])
    const [Sum_Per_Area_2012, set_Sum_Per_Area_2012] = useState([])
    const [Sum_Per_Shape_Area_2012, set_Sum_Per_Shape_Area_2012] = useState([])
    const [New_Construction_Sum, set_New_Construction_Sum] = useState([])
    const [Potential_Deconstruction_Sum, set_Potential_Deconstruction_Sum] = useState([])
    const [New_Construction_Sum_Per_Area, set_New_Construction_Sum_Per_Area] = useState([])
    const [New_Construction_Sum_Per_Shape_Area, set_New_Construction_Sum_Per_Shape_Area] = useState([])
    const [Potential_Deconstruction_Sum_Per_Area, set_Potential_Deconstruction_Sum_Per_Area] = useState([])
    const [Potential_Deconstruction_Sum_Per_Shape_Area, set_Potential_Deconstruction_Sum_Per_Shape_Area] = useState([])

    //reading localDB as csv file
    d3.csv(localDB).then(function(localDB) 
    {
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
        let list_New_Construction_Sum_Per_Shape_Area =[]
        let list_Potential_Deconstruction_Sum_Per_Area = []
        let list_Potential_Deconstruction_Sum_Per_Shape_Area = []

        localDB.map((item) => {
            list_UC_Name.concat(item.UC.toString())
            list_sum_2021.concat(item.Sum_2021.toString())
            list_Sum_Per_Area_2021.concat(item.Sum_Per_Area_2021.toString()) 
            list_Sum_Per_Shape_Area_2021.concat(item.Sum_Per_Shape_Area_2021.toString()) 
            list_sum_2012.concat(item.Sum_2012.toString())
            list_Sum_Per_Area_2012.concat(item.Sum_Per_Area_2012.toString()) 
            list_Sum_Per_Shape_Area_2012.concat(item.Sum_Per_Shape_Area_2012.toString()) 
            list_New_Construction_Sum.concat(item.New_Construction_Sum.toString())
            list_Potential_Deconstruction_Sum.concat(item.Potential_Deconstruction_Sum.toString()) 
            list_New_Construction_Sum_Per_Area.concat(item.New_Construction_Sum_Per_Area.toString())
            list_New_Construction_Sum_Per_Shape_Area.concat(item.New_Construction_Sum_Per_Shape_Area.toString())
            list_Potential_Deconstruction_Sum_Per_Area.concat(item.Potential_Deconstruction_Sum_Per_Area.toString())
            list_Potential_Deconstruction_Sum_Per_Shape_Area.concat(item.Potential_Deconstruction_Sum_Per_Shape_Area.toString())
        })

        // now that all items have been read into lists, update states
        set_UC_Name(list_UC_Name)
        set_sum_2021(list_sum_2021)
        set_Sum_Per_Area_2021(list_Sum_Per_Area_2021)
        set_Sum_Per_Shape_Area_2021(list_Sum_Per_Shape_Area_2021)
        set_sum_2012(list_sum_2012)
        set_Sum_Per_Area_2012(list_Sum_Per_Area_2012)
        set_Sum_Per_Shape_Area_2012(list_Sum_Per_Shape_Area_2012)
        set_New_Construction_Sum(list_New_Construction_Sum)
        set_Potential_Deconstruction_Sum(list_Potential_Deconstruction_Sum)
        set_New_Construction_Sum_Per_Area(list_New_Construction_Sum_Per_Area)
        set_New_Construction_Sum_Per_Shape_Area(list_New_Construction_Sum_Per_Shape_Area)
        set_Potential_Deconstruction_Sum_Per_Area(list_Potential_Deconstruction_Sum_Per_Area)
        set_Potential_Deconstruction_Sum_Per_Shape_Area(list_Potential_Deconstruction_Sum_Per_Shape_Area)
    }).catch(function(err) 
    {
        throw err;
    })


    return (
        <body>
            {/* filter section */}
            <Card>
                <Card.Body>
                    <Card.Title>FILTERS</Card.Title>

                    {/* all 3 filter drop downs */}
                    <div class="filterbox-div">
                        <Dropdown class="filter-dropdown">
                            <Dropdown.Toggle variant="success" id="dropdown-basic">
                                Select Union Council
                            </Dropdown.Toggle>
                            <Dropdown.Menu>
                                <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>

                        <Dropdown class="filter-dropdown">
                            <Dropdown.Toggle variant="success" id="dropdown-basic">
                                Select Year
                            </Dropdown.Toggle>
                            <Dropdown.Menu>
                                <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>

                        <Dropdown class="filter-dropdown">
                            <Dropdown.Toggle variant="success" id="dropdown-basic">
                                Data Description
                            </Dropdown.Toggle>
                            <Dropdown.Menu>
                                <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>

                    </div>

                </Card.Body>
            </Card>


            {/* stats section */}
            <div class="statbox-div">
                <Card>
                    <Card.Body>
                        <Card.Title>{"STATISTICS \n (Current Selection)"}</Card.Title>

                        {/* lists of all of stat items */}
                        <ListGroup>
                            <ListGroupItem variant="primary">
                                Coordinates
                                <Badge class = "value-badge" >
                                    72.0018, 34.0019
                                </Badge>
                            </ListGroupItem>

                            <ListGroupItem variant="primary">
                                Constructed Units:
                                <Badge class = "value-badge" >
                                    {sum_2021[0]}
                                </Badge>
                            </ListGroupItem>

                            <ListGroupItem variant="primary">
                                Deconstructed Units:
                                <Badge class = "value-badge" >
                                    {sum_2021[0]}
                                </Badge>
                            </ListGroupItem>

                            <ListGroupItem variant="primary">
                                Construction / Unit Area:
                                <Badge class = "value-badge" >
                                    {sum_2021[0]}
                                </Badge>
                            </ListGroupItem>

                            <ListGroupItem variant="primary">
                            Deconstruction / Unit Area:
                                <Badge class = "value-badge">
                                    {sum_2021[0]}
                                </Badge>
                            </ListGroupItem>

                            <ListGroupItem variant="primary">
                                Total Tax Revenue:
                                <Badge class = "value-badge" >
                                    {sum_2021[0]}
                                </Badge>
                            </ListGroupItem>
                            
                            <ListGroupItem variant="primary">
                            Tax Revenue / Unit Area:
                                <Badge class = "value-badge">
                                    {sum_2021[0]}
                                </Badge>
                            </ListGroupItem>

                        </ListGroup>
                    </Card.Body>
                </Card>
            
            </div>
        
        </body>

    );
};

export default StatBoxLoader;


