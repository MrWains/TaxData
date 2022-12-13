import "./App.css";
import TabsView from "./components/tabs";
import Login from "./components/auth/login";

function App() {
	return (
		<div className="App">
			<div className="App-header">
				<Login />
			</div>
		</div>
	);
}

export default App;
