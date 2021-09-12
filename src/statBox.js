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


const StatBoxLoader = (listOfLists) => {
    // declaring react states
    const [UC_Name, set_UC_Name] = useState(listOfLists[0])
    const [sum_2021, set_sum_2021] = useState(listOfLists[1])
    const [Sum_Per_Area_2021, set_Sum_Per_Area_2021] = useState(listOfLists[2])
    const [Sum_Per_Shape_Area_2021, set_Sum_Per_Shape_Area_2021] = useState(listOfLists[3])
    const [sum_2012, set_sum_2012] = useState(listOfLists[4])
    const [Sum_Per_Area_2012, set_Sum_Per_Area_2012] = useState(listOfLists[5])
    const [Sum_Per_Shape_Area_2012, set_Sum_Per_Shape_Area_2012] = useState(listOfLists[6])
    const [New_Construction_Sum, set_New_Construction_Sum] = useState(listOfLists[7])
    const [Potential_Deconstruction_Sum, set_Potential_Deconstruction_Sum] = useState(listOfLists[8])
    const [New_Construction_Sum_Per_Area, set_New_Construction_Sum_Per_Area] = useState(listOfLists[9])
    const [New_Construction_Sum_Per_Shape_Area, set_New_Construction_Sum_Per_Shape_Area] = useState(listOfLists[10])
    const [Potential_Deconstruction_Sum_Per_Area, set_Potential_Deconstruction_Sum_Per_Area] = useState(listOfLists[11])
    const [Potential_Deconstruction_Sum_Per_Shape_Area, set_Potential_Deconstruction_Sum_Per_Shape_Area] = useState(listOfLists[12])


    // console.log(typeof(UC_Name))
    

    // const UCNAMEARRAY = Object.values(UC_Name);
    // // console.log(UCNAMEARRAY)

    // console.log(UC_Name)
    // console.log(UC_Name.length)

    // while (UC_Name.length == 0)
    // {
    //     console.log(UC_Name.length)
    // };


    // console.log(UC_Name && UC_Name[0]);



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
                                    { UC_Name[0] }
                                </Badge>
                            </ListGroupItem>

                            <ListGroupItem variant="primary">
                                Deconstructed Units:
                                <Badge class = "value-badge" >
                                    { UC_Name[1] }
                                </Badge>
                            </ListGroupItem>

                            <ListGroupItem variant="primary">
                                Construction / Unit Area:
                                <Badge class = "value-badge" >
                                    { UC_Name[2] }
                                </Badge>
                            </ListGroupItem>

                            <ListGroupItem variant="primary">
                            Deconstruction / Unit Area:
                                <Badge class = "value-badge">
                                    { UC_Name[3] }
                                </Badge>
                            </ListGroupItem>

                            <ListGroupItem variant="primary">
                                Total Tax Revenue:
                                <Badge class = "value-badge" >
                                    { 227 }
                                </Badge>
                            </ListGroupItem>
                            
                            <ListGroupItem variant="primary">
                            Tax Revenue / Unit Area:
                                <Badge class = "value-badge">
                                    { 221 }
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


