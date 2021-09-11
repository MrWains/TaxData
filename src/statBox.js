import React from 'react';
import { useState } from "react";

import Button from 'react-bootstrap/Button';
import Dropdown from 'react-bootstrap/Dropdown';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import { ListGroupItem, Badge } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


const statBoxLoader = () => {





    return (
        <body>

            <Card>
                <Card.Body>
                    <Card.Title>FILTERS</Card.Title>
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



            <div class="statbox-div">


                <Card>
                    <Card.Body>
                        <Card.Title>
                            {"STATISTICS \n (Current Selection)"}

                        </Card.Title>

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
                                    345
                                </Badge>
                            </ListGroupItem>

                            <ListGroupItem variant="primary">
                                Deconstructed Units:
                                <Badge class = "value-badge" >
                                23
                                </Badge>
                            </ListGroupItem>

                            <ListGroupItem variant="primary">
                                Construction / Unit Area:
                                <Badge class = "value-badge" >
                                    50
                                </Badge>
                            </ListGroupItem>

                            <ListGroupItem variant="primary">
                            Deconstruction / Unit Area:
                                <Badge class = "value-badge">
                                    2.5
                                </Badge>
                            </ListGroupItem>


                            <ListGroupItem variant="primary">
                                Total Tax Revenue:
                                <Badge class = "value-badge" >
                                    PKR 20 M
                                </Badge>
                            </ListGroupItem>


                            
                            <ListGroupItem variant="primary">
                            Tax Revenue / Unit Area:
                                <Badge class = "value-badge">
                                PKR 3,00,845
                                </Badge>
                            </ListGroupItem>

                        </ListGroup>
                    </Card.Body>
                </Card>



            </div>




        </body>

    );



};

export default statBoxLoader;


