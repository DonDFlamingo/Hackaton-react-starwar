import { Outlet } from "react-router";
import Navbar from "./components/navbar/Navbar";

import "./App.css";


const App = () => {
	return (
		<>
			<Navbar />
			<Outlet />
		</>
	);
};

export default App;
