import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import "../../assets/styles/tabs.css";
import Flow1 from "../flows/flow1";
import Flow2 from "../flows/flow2";
import Flow3 from "../flows/flow3";

function TabsView() {
	return (
		<Tabs
			defaultActiveKey="flow1"
			id="uncontrolled-tab-example"
			className="mb-3 fs-2 fw-bold custom-tabs"
			justify
		>
			<Tab eventKey="flow1" title="Flow 1">
				<Flow1 />
			</Tab>
			<Tab eventKey="flow2" title="Flow 2">
				<Flow2 />
			</Tab>
			<Tab eventKey="flow3" title="Flow 3">
				<Flow3 />
			</Tab>
		</Tabs>
	);
}

export default TabsView;
