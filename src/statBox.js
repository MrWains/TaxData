// react imports
import React from "react";
import { useState } from "react";

// bootstrap imports
import Dropdown from "react-bootstrap/Dropdown";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import ListGroupItem from "react-bootstrap/ListGroupItem";
import Badge from "react-bootstrap/Badge";
import "bootstrap/dist/css/bootstrap.min.css";

const StatBoxLoader = (listOfLists) => {
  // declaring react states
  const [UC_Name_List, set_UC_Name_List] = useState(listOfLists[0]);
  const [sum_2021_List, set_sum_2021_List] = useState(listOfLists[1]);
  const [Sum_Per_Area_2021_List, set_Sum_Per_Area_2021_List] = useState(listOfLists[2]);
  const [Sum_Per_Shape_Area_2021_List, set_Sum_Per_Shape_Area_2021_List] = useState(listOfLists[3]);
  const [sum_2012_List, set_sum_2012_List] = useState(listOfLists[4]);
  const [Sum_Per_Area_2012_List, set_Sum_Per_Area_2012_List] = useState(listOfLists[5]);
  const [Sum_Per_Shape_Area_2012_List, set_Sum_Per_Shape_Area_2012_List] = useState(listOfLists[6]);
  const [New_Construction_Sum_List, set_New_Construction_Sum_List] = useState(listOfLists[7]);
  const [Potential_Deconstruction_Sum_List, set_Potential_Deconstruction_Sum_List] =useState(listOfLists[8]);
  const [New_Construction_Sum_Per_Area_List, set_New_Construction_Sum_Per_Area_List] =useState(listOfLists[9]);
  const [New_Construction_Sum_Per_Shape_Area_List, set_New_Construction_Sum_Per_Shape_Area_List] = useState(listOfLists[10]);
  const [Potential_Deconstruction_Sum_Per_Area_List, set_Potential_Deconstruction_Sum_Per_Area_List] = useState(listOfLists[11]);
  const [Potential_Deconstruction_Sum_Per_Shape_Area_List, set_Potential_Deconstruction_Sum_Per_Shape_Area_List] = useState(listOfLists[12]);
  // hardcoded values to be used
  const [yearValues, setYearValues] = useState([2021,2012])
  const [descriptionValues, setDescriptionValues] = useState(["Absolute Sums", "Sums Per Unit Area", "Sums Per Unit Shape Area"])
  // states that are used for screen rendering of values
  const [UC_Name, set_UC_Name] = useState("");
  const [sum_2021, set_sum_2021] = useState();
  const [Sum_Per_Area_2021, set_Sum_Per_Area_2021] = useState();
  const [Sum_Per_Shape_Area_2021, set_Sum_Per_Shape_Area_2021] = useState();
  const [sum_2012, set_sum_2012] = useState();
  const [Sum_Per_Area_2012, set_Sum_Per_Area_2012] = useState();
  const [Sum_Per_Shape_Area_2012, set_Sum_Per_Shape_Area_2012] = useState();
  const [New_Construction_Sum, set_New_Construction_Sum] = useState();
  const [Potential_Deconstruction_Sum, set_Potential_Deconstruction_Sum] =useState();
  const [New_Construction_Sum_Per_Area, set_New_Construction_Sum_Per_Area] =useState();
  const [New_Construction_Sum_Per_Shape_Area, set_New_Construction_Sum_Per_Shape_Area] = useState();
  const [Potential_Deconstruction_Sum_Per_Area, set_Potential_Deconstruction_Sum_Per_Area] = useState();
  const [Potential_Deconstruction_Sum_Per_Shape_Area, set_Potential_Deconstruction_Sum_Per_Shape_Area] = useState();
  // filter values that are hardcoded initially but may be updated
  const [currentYear, setCurrentYear] = useState(2021)
  const [currentUC, setCurrentUC] = useState("")

  /////////////// Juggar code
  const [uc0, set_uc0] = useState("");
  setTimeout(function () {
    set_uc0(UC_Name_List[0]);
  }, 200);
  /////////////// Juggar code

  // function that takes state name as parameter from dropdown and updates all data in statbox
  const updateStateInfo = (state) => {
    
    if (currentYear == 2021 && state == "" && currentUC == "")
    {
      // load data of all peshawar for year 2021
    } 
    else if (currentYear != 2021 && state == "" && currentUC == "")
    {
      // load all data of peshawar for the selected year
    }
    else if (state != "")
    {
      // here we have to show data of selected UC for selected Year
      let targetIndex = UC_Name_List.indexOf(state)

      // update all values for rendering
      set_UC_Name(state);
      set_sum_2021(sum_2021_List[targetIndex]);
      set_Sum_Per_Area_2021(Sum_Per_Area_2021_List[targetIndex]);
      set_Sum_Per_Shape_Area_2021(Sum_Per_Shape_Area_2021_List[targetIndex]);
      set_sum_2012(sum_2012_List[targetIndex]);
      set_Sum_Per_Area_2012(Sum_Per_Area_2012_List[targetIndex]);
      set_Sum_Per_Shape_Area_2012(Sum_Per_Shape_Area_2012_List[targetIndex]);
      set_New_Construction_Sum(New_Construction_Sum_List[targetIndex]);
      set_Potential_Deconstruction_Sum(Potential_Deconstruction_Sum_List[targetIndex]);
      set_New_Construction_Sum_Per_Area(New_Construction_Sum_Per_Area_List[targetIndex]);
      set_New_Construction_Sum_Per_Shape_Area(New_Construction_Sum_Per_Shape_Area_List[targetIndex]);
      set_Potential_Deconstruction_Sum_Per_Area(Potential_Deconstruction_Sum_Per_Area_List[targetIndex]);
      set_Potential_Deconstruction_Sum_Per_Shape_Area(Potential_Deconstruction_Sum_Per_Shape_Area_List[targetIndex]);
      // set currentUC state for further ease of filter calculations
      setCurrentUC(state)
    }
  };

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
                {UC_Name_List.map((ucName) => (
                  <Dropdown.Item onClick={(e) => {updateStateInfo(e.target.text)}}>{ucName}</Dropdown.Item>
                ))}
              </Dropdown.Menu>
            </Dropdown>

            <Dropdown class="filter-dropdown">
              <Dropdown.Toggle variant="success" id="dropdown-basic">
                Select Year
              </Dropdown.Toggle>
              <Dropdown.Menu>
                {yearValues.map((year) => (
                  <Dropdown.Item onClick={(e) => {updateStateInfo(e.target.text)}}>{year}</Dropdown.Item>
                ))}
              </Dropdown.Menu>
            </Dropdown>

            <Dropdown class="filter-dropdown">
              <Dropdown.Toggle variant="success" id="dropdown-basic">
                Data Description
              </Dropdown.Toggle>
              <Dropdown.Menu>
                
                {/* make function here */}
                {descriptionValues.map((descp) => (
                  <Dropdown.Item href="#/action-2">{descp}</Dropdown.Item>
                ))}

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
                <Badge class="value-badge">72.0018, 34.0019</Badge>
              </ListGroupItem>

              <ListGroupItem variant="primary">
                Union Coucil Name:
                <Badge class="value-badge">{UC_Name}</Badge>
              </ListGroupItem>

              <ListGroupItem variant="primary">
                Total Constructed Units:
                <Badge class="value-badge">{sum_2021}</Badge>
              </ListGroupItem>

              <ListGroupItem variant="primary">
                Total Deconstructed Units:
                <Badge class="value-badge">{Potential_Deconstruction_Sum}</Badge>
              </ListGroupItem>

              <ListGroupItem variant="primary">
                Total New Constructed Units:
                <Badge class="value-badge">{New_Construction_Sum}</Badge>
              </ListGroupItem>

              <ListGroupItem variant="primary">
                Total Construction / Unit Area:
                <Badge class="value-badge">{Sum_Per_Area_2021}</Badge>
              </ListGroupItem>

              <ListGroupItem variant="primary">
                Deconstruction / Unit Area:
                <Badge class="value-badge">{Potential_Deconstruction_Sum_Per_Area}</Badge>
              </ListGroupItem>

              <ListGroupItem variant="primary">
                Total Construction / Unit Shape Area:
                <Badge class="value-badge">{Sum_Per_Shape_Area_2021}</Badge>
              </ListGroupItem>

              <ListGroupItem variant="primary">
                Deconstruction / Unit Shape Area:
                <Badge class="value-badge">{Potential_Deconstruction_Sum_Per_Shape_Area}</Badge>
              </ListGroupItem>

              <ListGroupItem variant="primary">
                New Construction / Unit Area:
                <Badge class="value-badge">{New_Construction_Sum_Per_Area}</Badge>
              </ListGroupItem>

              <ListGroupItem variant="primary">
                New Construction / Unit Shape Area:
                <Badge class="value-badge">{New_Construction_Sum_Per_Shape_Area}</Badge>
              </ListGroupItem>
              
              <ListGroupItem variant="primary">
                Total Tax Revenue:
                <Badge class="value-badge">{"PKR 227"}</Badge>
              </ListGroupItem>

              <ListGroupItem variant="primary">
                Tax Revenue / Unit Area:
                <Badge class="value-badge">{"PKR 221"}</Badge>
              </ListGroupItem>
            </ListGroup>
          </Card.Body>
        </Card>
      </div>
    </body>
  );
};

export default StatBoxLoader;
