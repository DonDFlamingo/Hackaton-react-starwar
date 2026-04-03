import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router";
import Bounty from "./pages/Bounty/Bounty.tsx";
import Mission from "./pages/Mission/Mission.tsx";
import Profil from "./pages/Profil/Profil.tsx";
import "./index.css";
import App from "./App.tsx";
import Home from "./pages/Home/Home.tsx";

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
				element: <Mission />,
			},
			{
				path: "/bounty",
				element: <Bounty />,
			},
			{
				path: "/profil",
				element: <Profil />,
			},
		],
	},
]);

// rendering

const rootElement = document.getElementById("root");

if (rootElement != null) {
	createRoot(rootElement).render(<RouterProvider router={router} />);
}
