import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import technologies from "./data/technologies.js";
import TechnologiesView from "./views/technologiesView.jsx";

const routes = [
  {
    path: "/",
    element: <App />,
  },
];

technologies.forEach((t) => {
  routes.push({
    path: t.name,
    element: <TechnologiesView technologies={t} />,
  });
});

const router = createBrowserRouter(routes);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
