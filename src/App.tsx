<<<<<<< HEAD
import { Outlet } from "react-router";
=======
 import { Outlet } from "react-router";
>>>>>>> 5afce613e392543617708e59b876d57627496749
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
