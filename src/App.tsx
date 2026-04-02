<<<<<<< HEAD
import Bounty from "./pages/Bounty/Bounty";
=======
import { Outlet } from 'react-router'
import Navbar from './components/navbar/Navbar'
import './App.css'
>>>>>>> 0a7162d8385ae855eff3ca6f2892e1d10eda5c9d

import "./App.css";

const App = () => {
  return (
<<<<<<< HEAD
    <div>
      <Bounty />
    </div>
  );
};
=======
    <>
    <Navbar />
    <Outlet />
     
    </>
  )
}
>>>>>>> 0a7162d8385ae855eff3ca6f2892e1d10eda5c9d

export default App;
