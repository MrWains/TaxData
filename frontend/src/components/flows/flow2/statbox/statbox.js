import { React, useEffect, useState, useContext } from "react";
import { useSelector, useDispatch } from "react-redux";
import MapContext from "../../../../context/mapcontext";
import axios from "axios";

// actions import
import {
	setUCName,
	setUCSum,
	setUCYear,
	setActivations,
} from "../../../../redux/actions";

// bootstrap imports
import "bootstrap/dist/css/bootstrap.min.css";
import Card from "react-bootstrap/Card";
import Badge from "react-bootstrap/Badge";
import Dropdown from "react-bootstrap/Dropdown";
import ListGroup from "react-bootstrap/ListGroup";
import ListGroupItem from "react-bootstrap/ListGroupItem";

const Statbox = (props) => {
	const dispatch = useDispatch();
	const map = useContext(MapContext);
	const [uc_names, setUCNames] = useState([]);
	const [uc_features, setUCFeatures] = useState({});
	const [year, setYear] = useState("2012");

	// importing global states
	const features = useSelector((state) => state.status);

	useEffect(() => {
		async function getAllNames() {
			try {
				const data = await axios.get("http://localhost:45000/names");
				// console.log(data.data.names);
				setUCNames(data.data.names);
				console.log("UC_Names retrieved.");
			} catch (err) {
				console.log(err);
			}
		}
		getAllNames();
	}, []);

	useEffect(() => {
		const getUCFeatures = async () => {
			try {
				const data = await axios.post("http://localhost:45000/query", {
					city: "Peshawar",
					uc: props.mnum == 1 ? features.uc_name_A : features.uc_name_B,
				});

				setUCFeatures(data.data.data[0]);

				// globally store the features of one UC for comparison
				if (
					features.uc_name_A == features.uc_name_B &&
					features.uc_year_A != features.uc_year_B
				) {
					// extract years' data for the target UC
					const uc_feature_years = data.data.data[0].years;

					// search for yearA and yearB indices and set the sums' global states
					for (let i = 0; i < uc_feature_years.length; i++) {
						if (uc_feature_years[i].year == features.uc_year_A) {
							dispatch(setUCSum(uc_feature_years[i].sum, 1));
							dispatch(setActivations(uc_feature_years[i].activations, 1));
						}
						if (uc_feature_years[i].year == features.uc_year_B) {
							dispatch(setUCSum(uc_feature_years[i].sum, 2));
							dispatch(setActivations(uc_feature_years[i].activations, 2));
						}
					}

					// can add count of 2 and increment at each dispath, if count 2, break the loop
				}
			} catch (err) {
				console.log("error:\n" + err);
			}
		};
		getUCFeatures();
	}, [
		features.uc_name_A,
		features.uc_name_B,
		features.uc_year_A,
		features.uc_year_B,
	]);

	const ucDropdownOnClick = (uc) => {
		dispatch(setUCName(uc, props.mnum));

		const features = map.current.querySourceFeatures("uc-layer", {
			sourceLayer: "Union_Council-bi1iuv",
		});
		const uc_obj = features?.filter((x) => x.properties.UC === uc)[0];

		map.current.flyTo({
			center: uc_obj.geometry.coordinates[0][0],
		});
		map.current.setPaintProperty("uc-layer-highlight", "fill-opacity", 1);
		map.current.setFilter("uc-layer-highlight", ["!=", "UC", uc]);
	};

	const getConstructionUnits = (key) =>
		uc_features?.years?.filter((x) => x.year === year)[0]?.[key]?.toFixed(2) ??
		0;

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
									{props.mnum == 1
										? features.uc_name_A
											? features.uc_name_A
											: "Select a Union Council"
										: features.uc_name_B
										? features.uc_name_B
										: "Select a Union Council"}
								</Dropdown.Toggle>
								<Dropdown.Menu className="force-scroll">
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
												dispatch(setUCYear(years.year, props.mnum));
											}}
										>
											{years.year}
										</Dropdown.Item>
									))}
								</Dropdown.Menu>
							</Dropdown>

							{/* <Dropdown class="filter-dropdown">
                            <Dropdown.Toggle variant="success" id="dropdown-basic">
                                Data Description
                            </Dropdown.Toggle>
                            <Dropdown.Menu>
                                {descriptionValues.map((descp) => (
                                    <Dropdown.Item href="#/action-2">{descp}</Dropdown.Item>
                                ))}
                            </Dropdown.Menu>
                        </Dropdown> */}
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
										{(uc_features?.geometry?.splice(0, 2)[0] ?? "") +
											" , " +
											(uc_features?.geometry?.splice(0, 2)[1] ?? "")}
									</Badge>
								</ListGroupItem>

								<ListGroupItem variant="primary">
									Union Coucil Name:
									<Badge class="value-badge" id="badge2">
										{props.mnum == 1
											? features.uc_name_A
												? features.uc_name_A
												: "None Selected"
											: features.uc_name_B
											? features.uc_name_B
											: "None Selected"}
									</Badge>
								</ListGroupItem>

								<ListGroupItem variant="primary">
									Total Constructed Units:
									<Badge class="value-badge" id="badge3">
										{getConstructionUnits("sum")}
									</Badge>{" "}
									{/*sum*/}
								</ListGroupItem>

								{/* <ListGroupItem variant="primary">
                                Total Deconstructed Units:
                                <Badge class="value-badge" id="badge4">{Potential_Deconstruction_Sum}</Badge>
                            </ListGroupItem> */}

								{/* <ListGroupItem variant="primary">
                                Total New Constructed Units:
                                <Badge class="value-badge">{New_Construction_Sum}</Badge>
                            </ListGroupItem> */}

								<ListGroupItem variant="primary">
									Total Construction / Unit Area:
									<Badge class="value-badge" id="badge5">
										{getConstructionUnits("sum_per_area")}
									</Badge>{" "}
									{/*Sum_Per_Area*/}
								</ListGroupItem>

								{/* <ListGroupItem variant="primary">
                                Deconstruction / Unit Area:
                                <Badge class="value-badge" id="badge6">{Potential_Deconstruction_Sum_Per_Area}</Badge>
                            </ListGroupItem> */}

								<ListGroupItem variant="primary">
									Total Construction / Unit Shape Area:
									<Badge class="value-badge" id="badge7">
										{getConstructionUnits("sum_per_shape_area")}
									</Badge>{" "}
									{/*Sum_Per_Shape_Area*/}
								</ListGroupItem>

								{/* <ListGroupItem variant="primary">
                                Deconstruction / Unit Shape Area:
                                <Badge class="value-badge" id="badge8">{Potential_Deconstruction_Sum_Per_Shape_Area}</Badge>
                            </ListGroupItem> */}

								{/* <ListGroupItem variant="primary">
                                New Construction / Unit Area:
                                <Badge class="value-badge">{New_Construction_Sum_Per_Area}</Badge>
                            </ListGroupItem> */}

								{/* <ListGroupItem variant="primary">
                                New Construction / Unit Shape Area:
                                <Badge class="value-badge">{New_Construction_Sum_Per_Shape_Area}</Badge>
                            </ListGroupItem> */}

								<ListGroupItem variant="primary">
									Total Tax Revenue:
									<Badge class="value-badge" id="badge9">
										{"PKR 227"}
									</Badge>
								</ListGroupItem>

								<ListGroupItem variant="primary">
									Tax Revenue / Unit Area:
									<Badge class="value-badge" id="badge10">
										{"PKR 221"}
									</Badge>
								</ListGroupItem>
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
