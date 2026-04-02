import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router";
import Home from './pages/Home/Home.tsx';
import Bounty from './pages/Bounty/Bounty.tsx'
import './index.css'
import App from './App.tsx'

const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/mission",
        element: <Mission />
      },
      {
        path:"/bounty",
        element: <Bounty/>
      },
      
    ],
  },
]);

// rendering

const rootElement = document.getElementById("root");

if (rootElement != null) {
	createRoot(rootElement).render(<RouterProvider router={router} />);
}
