import { React, useEffect, useState, useContext } from "react";
import { useSelector, useDispatch } from "react-redux";
import MapContext from "../../context/mapcontext";
import axios from "axios";

// actions import
import { setUCName } from "../../redux/actions";

// bootstrap imports
import "bootstrap/dist/css/bootstrap.min.css";
import Card from "react-bootstrap/Card";
import Badge from "react-bootstrap/Badge";
import Dropdown from "react-bootstrap/Dropdown";
import ListGroup from "react-bootstrap/ListGroup";
import ListGroupItem from "react-bootstrap/ListGroupItem";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
// other imports
import pointInPolygon from "point-in-polygon";


const Statbox = () => {
  const dispatch = useDispatch();
  const map = useContext(MapContext);
  const features = useSelector((state) => state.status);
  const [uc_names, setUCNames] = useState([]);
  const [uc_geom, setUCGeom] = useState([]);
  const [uc_features, setUCFeatures] = useState({});
  const [year, setYear] = useState("2012");
  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);
  const [cods, setCods] = useState("");
  const [fileButtonState, setFileButtonState] = useState(false);
  // dummy activations for phase 3
  // should retrive uc_activations for target uc and year from backend. These should be in the form: [[long,lat]]
  const [activations, setActivations] = useState([ [34.10874428042537, 71.39019036083062], [2,2], [34.17297905300006, 71.42344173000004] ]);

  useEffect(() => {
    async function getAllNames() {
      try {
        const data = await axios.get("http://localhost:45000/namesandgeom");

        setUCNames(data.data.names);
        setUCGeom(data.data.geom);

        console.log("UC_Names and geoms retrieved.");
      } catch (err) {
        console.log(err);
      }
    }
    getAllNames();
  }, []);

  useEffect(() => {
    async function coordinateDecider() {
      try {
        setCods(features?.coords);
        console.log("Coordinates have been Set", features.coords);
      } catch (err) {
        console.log(err);
      }
    }
    coordinateDecider();
  }, [features.coords]);

  useEffect(() => {
    const getUCFeatures = async () => {
      try {
        const data = await axios.post("http://localhost:45000/query", {
          city: "Peshawar",
          uc: features.uc_name,
        });

        setUCFeatures(data.data.data[0]);
        setCods([
          (data.data.data[0]?.geometry?.splice(0, 2)[0] ?? "") +
            " , " +
            (data.data.data[0]?.geometry?.splice(0, 2)[1] ?? ""),
        ]);
        console.log("UC_Features retrieved.");
      } catch (err) {
        console.log("error:\n" + err);
      }
    };
    getUCFeatures();
    // console.log("UseEffec:\n" + uc_features);
  }, [features.uc_name]);

  const ucDropdownOnClick = (uc) => {
    // console.log("lmao i just got clicked");
    console.log("Inside OnClick: " + uc);
    dispatch(setUCName(uc));
    console.log("Flying to new UC");
    const features = map.current.querySourceFeatures("uc-layer", {
      sourceLayer: "Union_Council-bi1iuv",
    });
    const uc_obj = features?.filter((x) => x.properties.UC === uc)[0];
    // console.log("features: ", features);
    // console.log("uc_obj: ", uc_obj);

    map.current.flyTo({
      center: uc_obj?.geometry?.coordinates[0][0],
    });
    // map.current.setPaintProperty("uc-layer-highlight", "fill-opacity", 1);
    // map.current.setFilter("uc-layer-highlight", ["!=", "UC", uc]);
    console.log("flown");
  };

  const getConstructionUnits = (key) =>
    uc_features?.years?.filter((x) => x.year === year)[0]?.[key]?.toFixed(2) ??
    0;

  const fly = () => {
    let long = parseFloat(longitude);
    let lat = parseFloat(latitude);
    if (
      isNaN(lat) ||
      isNaN(long) ||
      long > parseFloat(180) ||
      long < parseFloat(-180) ||
      lat > parseFloat(90) ||
      lat < parseFloat(-90)
    ) {
      alert("Invalid Input");
    } else {
      map.current.flyTo({
        center: [long, lat],
        zoom: 19,
      });
      setCods([long.toString() + " , " + lat.toString()]);

      // set uc name according to entered coordinates
      let point = [long, lat];
      let targetIndex = null;
      for (let i = 0; i < uc_geom.length; i++)
      {
        if (pointInPolygon(point, uc_geom[i]))
        {
          targetIndex = i;
          break;
        }
      }
      dispatch(setUCName(uc_names[targetIndex]));

      
      // // check if point is an activation or not, if yes thne render pdf button
      // let Point = [lat, long];
      // for (let i = 0; i < activations.length; i++)
      // {
      //   if (activations[i][0] == Point[0] && activations[i][1] == Point[1])
      //   {
      //     console.log("setting state")
      //     setFileButtonState(true);
      //     break;
      //   }
      //   else
      //   {
      //     setFileButtonState(false);
      //   }
      // }
    }
  };

  useEffect(() => {
    const onClickFileStatusChecker = () => {
      // check if point is an activation or not, if yes thne render pdf button
      // should retrive uc_activations for target uc and year from backend. These should be in the form: [[long,lat]]4

      if (cods != null)
      {
        for (let i = 0; i < activations.length; i++)
        {
          let toCompare = activations[i][1].toString() + " , " + activations[i][0].toString();

          if (toCompare == cods[0])
          {
            console.log("comparison true")
            setFileButtonState(true);
            break;
          }
          else
          {
            setFileButtonState(false);
          }
        }
      }
    };
    
    onClickFileStatusChecker();
  }, [cods]);


  const fileOpener = () => {
    setFileButtonState(false);
    
    // open pdf file here
    alert("Opening File!");
  }

  const getUI = () => {
    return (
      <body>
        {/* filter section */}

        <Card>
          <Card.Body>
            <Card.Title>FILTERS</Card.Title>

            {/* all 3 filter drop downs */}
            <div class="filterbox-div">
              <Dropdown className="filter-dropdown">
                <Dropdown.Toggle
                  variant="success"
                  id="dropdown-basic"
                  key={features.uc_name ?? ""}
                >
                  {features.uc_name
                    ? features.uc_name
                    : "Select a Union Council"}
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  {uc_names.map((ucName) => (
                    <Dropdown.Item
                      key={ucName}
                      onClick={(e) => ucDropdownOnClick(ucName)}
                    >
                      {ucName}
                    </Dropdown.Item>
                  ))}
                </Dropdown.Menu>
              </Dropdown>

              <Dropdown class="filter-dropdown">
                <Dropdown.Toggle variant="success" id="dropdown-basic">
                  {year ? year : "Select a year"}
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  {uc_features?.years?.map((years) => (
                    <Dropdown.Item
                      key={years.year}
                      onClick={(e) => {
                        setYear(years.year);
                      }}
                    >
                      {years.year}
                    </Dropdown.Item>
                  ))}
                </Dropdown.Menu>
              </Dropdown>
              
              <Form>
                <Form.Group>
                  <Form.Label>Enter Latitude :</Form.Label>
                  <Form.Control
                    type="text"
                    // value={latitude}
                    onChange={(e) => {
                      setLatitude(e.target.value);
                    }}
                  ></Form.Control>
                </Form.Group>
                <Form.Group>
                  <Form.Label>Enter Longitude :</Form.Label>
                  <Form.Control
                    type="text"
                    // value={longitude}
                    onChange={(e) => {
                      setLongitude(e.target.value);
                    }}
                  ></Form.Control>
                </Form.Group>
              </Form>
              <button onClick={() => fly()}>✈️ Fly to </button>

            </div>
          </Card.Body>
        </Card>

        <h3>stats section</h3>
        <div class="statbox-div">
          <Card>
            <Card.Body>
              <Card.Title>{"STATISTICS \n (Current Selection)"}</Card.Title>

              {/* lists of all of stat items */}
              <ListGroup>
                <ListGroupItem variant="primary">
                  Coordinates
                  <Badge class="value-badge" id="badge1">
                    {cods}
                  </Badge>
                </ListGroupItem>

                <ListGroupItem variant="primary">
                  Union Coucil Name:
                  <Badge class="value-badge" id="badge2">
                    {features.uc_name ? features.uc_name : "None Selected"}
                  </Badge>
                </ListGroupItem>

                { fileButtonState ? (
                  <Button onClick={()=>fileOpener()}> Open Plot File </Button>// <Button onClick={window.location.href = 'www.youtube.com', ()=>fileOpener()}> Open Plot File </Button>
                  ) : (
                    <div></div>
                  )
                }

              </ListGroup>
            </Card.Body>
          </Card>
        </div>
      </body>
    );
  };

  return getUI();
};

export default Statbox;
