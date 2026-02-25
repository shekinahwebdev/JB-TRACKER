import { createBrowserRouter, Navigate } from "react-router-dom";
// import DashBoard from "./pages/dashboard/DashBoard";
// import Application from "./pages/applications/Application";
// import Insight from "./pages/analytics/Insight";
// import Settings from "./pages/settings/Settings";
// import DashBoardLayout from "./DashBoardLayout";
// import Register from "./auth/Register";
import { lazy } from "react";

const DashBoard = lazy(() => import("./pages/dashboard/DashBoard"));
const Application = lazy(() => import("./pages/applications/Application"));
const Insight = lazy(() => import("./pages/analytics/Insight"));
const Settings = lazy(() => import("./pages/settings/Settings"));
const DashBoardLayout = lazy(() => import("./DashBoardLayout"));
const Register = lazy(() => import("./auth/Register"));

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
  {
    path: "/register",
    element: <Register />,
  },
]);

export default router;
