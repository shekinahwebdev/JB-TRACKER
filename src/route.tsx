import { createBrowserRouter, Navigate } from "react-router-dom";
import DashBoard from "./pages/dashboard/DashBoard";
import Application from "./pages/applications/Application";
import Insight from "./pages/analytics/Insight";
import Settings from "./pages/settings/Settings";
import DashBoardLayout from "./DashBoardLayout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Navigate to="/mainboard" replace />,
  },
  {
    path: "/mainboard",
    element: <DashBoardLayout />,
    children: [
      {
        index: true,
        element: <Application />,
      },
      {
        path: "dashboard",
        element: <DashBoard />,
      },
      {
        path: "insight",
        element: <Insight />,
      },
      {
        path: "settings",
        element: <Settings />,
      },
    ],
  },
]);

export default router;
