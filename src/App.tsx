import { Outlet } from "react-router";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/Footer/Footer"

import "./App.css";

const App = () => {
	return (
		<>
			<Navbar />
			<Outlet />
      <Footer />
		</>
	);
};

export default App;
