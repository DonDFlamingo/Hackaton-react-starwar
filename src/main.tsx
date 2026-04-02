<<<<<<< HEAD
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";

createRoot(document.getElementById("root")!).render(
	<StrictMode>
		<App />
	</StrictMode>,
);
=======
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router";
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
        element: <Mission />,
      },
      
    ],
  },
]);

// rendering

const rootElement = document.getElementById("root");

if (rootElement != null) {
  createRoot(rootElement).render(
    <RouterProvider router={router} />
  );
}
>>>>>>> dev
