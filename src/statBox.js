// react imports
import React from "react";
import { useState } from "react";
import reactmap from './ReactMaps.js';
// bootstrap imports
import Dropdown from "react-bootstrap/Dropdown";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import ListGroupItem from "react-bootstrap/ListGroupItem";
import Badge from "react-bootstrap/Badge";
import "bootstrap/dist/css/bootstrap.min.css";

function StatBoxLoader (props) 
{
  // data parsing from from props
  const receivedData = props.data
  const receivedCoordinates = props.coordinates
  console.log("Stats" + receivedCoordinates)
  // declaring react states
  const [UC_Name_List, set_UC_Name_List] = useState(receivedData[0]);
  const [sum_2021_List, set_sum_2021_List] = useState(receivedData[1]);
  const [Sum_Per_Area_2021_List, set_Sum_Per_Area_2021_List] = useState(receivedData[2]);
  const [Sum_Per_Shape_Area_2021_List, set_Sum_Per_Shape_Area_2021_List] = useState(receivedData[3]);
  const [sum_2012_List, set_sum_2012_List] = useState(receivedData[4]);
  const [Sum_Per_Area_2012_List, set_Sum_Per_Area_2012_List] = useState(receivedData[5]);
  const [Sum_Per_Shape_Area_2012_List, set_Sum_Per_Shape_Area_2012_List] = useState(receivedData[6]);
  const [New_Construction_Sum_List, set_New_Construction_Sum_List] = useState(receivedData[7]);
  const [Potential_Deconstruction_Sum_List, set_Potential_Deconstruction_Sum_List] =useState(receivedData[8]);
  const [New_Construction_Sum_Per_Area_List, set_New_Construction_Sum_Per_Area_List] =useState(receivedData[9]);
  const [New_Construction_Sum_Per_Shape_Area_List, set_New_Construction_Sum_Per_Shape_Area_List] = useState(receivedData[10]);
  const [Potential_Deconstruction_Sum_Per_Area_List, set_Potential_Deconstruction_Sum_Per_Area_List] = useState(receivedData[11]);
  const [Potential_Deconstruction_Sum_Per_Shape_Area_List, set_Potential_Deconstruction_Sum_Per_Shape_Area_List] = useState(receivedData[12]);
  // hardcoded values to be used
  const [yearValues, setYearValues] = useState([2021,2012])
  const [descriptionValues, setDescriptionValues] = useState(["Absolute Sums", "Sums Per Unit Area", "Sums Per Unit Shape Area"])
  // filter values that are hardcoded initially but may be updated
  const [currentYear, setCurrentYear] = useState(2021)
  const [currentUC, setCurrentUC] = useState("")
  // states that are used for screen rendering of values
   const [UC_Name, set_UC_Name] = useState("");
   const [sum, set_sum] = useState(0);
   const [Sum_Per_Area, set_Sum_Per_Area] = useState(0);
   const [Sum_Per_Shape_Area, set_Sum_Per_Shape_Area] = useState(0);
   const [New_Construction_Sum, set_New_Construction_Sum] = useState(0);
   const [Potential_Deconstruction_Sum, set_Potential_Deconstruction_Sum] = useState(0);
   const [New_Construction_Sum_Per_Area, set_New_Construction_Sum_Per_Area] = useState(0);
   const [New_Construction_Sum_Per_Shape_Area, set_New_Construction_Sum_Per_Shape_Area] = useState(0);
   const [Potential_Deconstruction_Sum_Per_Area, set_Potential_Deconstruction_Sum_Per_Area] = useState(0);
   const [Potential_Deconstruction_Sum_Per_Shape_Area, set_Potential_Deconstruction_Sum_Per_Shape_Area] = useState(0);

  /////////////// Juggar code
  const [uc0, set_uc0] = useState("");
  setTimeout(function () {
    set_uc0(UC_Name_List[0]);
  }, 200);
  /////////////// Juggar code


  // function that takes state name as parameter from dropdown and updates all data in statbox
  const updateStateInfo = (state, year) => {
    // if (year == 2021 && currentYear == 2021 && state == "" && currentUC == "")
    // {
    //   // load data of all peshawar for year 2021
    //   console.log("here")

    // } 
    // else if (year != 2021 && currentYear != 2021 && state == "" && currentUC == "")
    // {
    //   // here we have to show data of selected UC for selected Year
    //   console.log("hereee")
    //   // let targetIndex = UC_Name_List.indexOf(state)
      
    //   // load all data of peshawar for the selected year
    //   // set_UC_Name(state);
    //   // set_New_Construction_Sum(New_Construction_Sum_List[targetIndex]);
    //   // set_Potential_Deconstruction_Sum(Potential_Deconstruction_Sum_List[targetIndex]);
    //   // set_New_Construction_Sum_Per_Area(New_Construction_Sum_Per_Area_List[targetIndex]);
    //   // set_New_Construction_Sum_Per_Shape_Area(New_Construction_Sum_Per_Shape_Area_List[targetIndex]);
    //   // set_Potential_Deconstruction_Sum_Per_Area(Potential_Deconstruction_Sum_Per_Area_List[targetIndex]);
    //   // set_Potential_Deconstruction_Sum_Per_Shape_Area(Potential_Deconstruction_Sum_Per_Shape_Area_List[targetIndex]);
    //   // set_sum(sum_2021_List[targetIndex]);
    //   // set_Sum_Per_Area(Sum_Per_Area_2021_List[targetIndex]);
    //   // set_Sum_Per_Shape_Area(Sum_Per_Shape_Area_2021_List[targetIndex]);
    // }
    // else if (state != "")
    {
      // here we have to show data of selected UC for selected Year
      let targetIndex = UC_Name_List.indexOf(state)

      // update all values for rendering
      set_UC_Name(state);
      set_New_Construction_Sum(New_Construction_Sum_List[targetIndex]);
      set_Potential_Deconstruction_Sum(Potential_Deconstruction_Sum_List[targetIndex]);
      set_New_Construction_Sum_Per_Area(New_Construction_Sum_Per_Area_List[targetIndex]);
      set_New_Construction_Sum_Per_Shape_Area(New_Construction_Sum_Per_Shape_Area_List[targetIndex]);
      set_Potential_Deconstruction_Sum_Per_Area(Potential_Deconstruction_Sum_Per_Area_List[targetIndex]);
      set_Potential_Deconstruction_Sum_Per_Shape_Area(Potential_Deconstruction_Sum_Per_Shape_Area_List[targetIndex]);

      if (year == 2021)
      {
        set_sum(sum_2021_List[targetIndex]);
        set_Sum_Per_Area(Sum_Per_Area_2021_List[targetIndex]);
        set_Sum_Per_Shape_Area(Sum_Per_Shape_Area_2021_List[targetIndex]);
      }
      if (year != 2021)
      {
        set_sum(sum_2012_List[targetIndex]);
        set_Sum_Per_Area(Sum_Per_Area_2012_List[targetIndex]);
        set_Sum_Per_Shape_Area(Sum_Per_Shape_Area_2012_List[targetIndex]);
      }
      // set currentUC state for further ease of filter calculations
      setCurrentUC(state);
      setCurrentYear(year)
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
              <Dropdown.Toggle variant="success" id="dropdown-basic">{currentUC?currentUC:"Select a Union Council"}</Dropdown.Toggle>
              <Dropdown.Menu>
                {UC_Name_List.map((ucName) => (
                  <Dropdown.Item onClick={(e) => {updateStateInfo(e.target.text,currentYear)}}>{ucName}</Dropdown.Item>
                 ))}
              </Dropdown.Menu>
              
            </Dropdown>

            <Dropdown class="filter-dropdown">
              <Dropdown.Toggle variant="success" id="dropdown-basic">{currentYear?currentYear:"Select a year"}</Dropdown.Toggle>
              <Dropdown.Menu>
                {yearValues.map((year) => (
                  <Dropdown.Item onClick={(e) => {updateStateInfo(currentUC, e.target.text)}}>{year}</Dropdown.Item>
                ))}
              </Dropdown.Menu>
            </Dropdown>

            <Dropdown class="filter-dropdown">
              <Dropdown.Toggle variant="success" id="dropdown-basic">
                Data Description
              </Dropdown.Toggle>
              <Dropdown.Menu>
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
                <Badge class="value-badge">{receivedCoordinates}</Badge>
              </ListGroupItem>

              <ListGroupItem variant="primary">
                Union Coucil Name:
                <Badge class="value-badge">{UC_Name}</Badge>
              </ListGroupItem>

              <ListGroupItem variant="primary">
                Total Constructed Units:
                <Badge class="value-badge">{sum}</Badge>
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
                <Badge class="value-badge">{Sum_Per_Area}</Badge>
              </ListGroupItem>

              <ListGroupItem variant="primary">
                Deconstruction / Unit Area:
                <Badge class="value-badge">{Potential_Deconstruction_Sum_Per_Area}</Badge>
              </ListGroupItem>

              <ListGroupItem variant="primary">
                Total Construction / Unit Shape Area:
                <Badge class="value-badge">{Sum_Per_Shape_Area}</Badge>
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
