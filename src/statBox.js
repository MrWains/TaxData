import React from 'react';
import { useState } from "react";

import Button from 'react-bootstrap/Button';
import Dropdown from 'react-bootstrap/Dropdown';
import Card from 'react-bootstrap/Card';

const statBoxLoader = () => {





    return (
        <body>
            <div class="filterbox-div">
                <Card>
                    <Card.Body>
                        <Card.Title>FILTERS</Card.Title>
                            
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

                    </Card.Body>
                </Card>

            </div>
            
            <div class="statbox-div">
            "This is statbox div"
            
            
            </div>
            
            
            

        </body>

    );



};

export default statBoxLoader;


