<<<<<<< HEAD
import "./App.css";
import Mission from "./pages/Mission/Mission";

function App() {
	return (
		<>
			<Mission />
		</>
	);
}
=======
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
>>>>>>> dev

export default App;
