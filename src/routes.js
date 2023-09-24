import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App/App";
import SiteLogo from "./App/SiteLogo";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/updates",
    element: (
      <div>
        <SiteLogo />
        updates
      </div>
    ),
  },
  {
    path: "/about",
    element: (
      <div>
        <SiteLogo />
        about
      </div>
    ),
  },
]);

export default routes;
