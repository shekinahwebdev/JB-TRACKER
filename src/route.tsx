import { createBrowserRouter, Navigate } from "react-router-dom";
import { lazy } from "react";
const DashBoard = lazy(() => import("./pages/dashboard/DashBoard"));
const Application = lazy(() => import("./pages/applications/Application"));
const Insight = lazy(() => import("./pages/analytics/Insight"));
const Settings = lazy(() => import("./pages/settings/Settings"));
const DashBoardLayout = lazy(() => import("./DashBoardLayout"));
const Register = lazy(() => import("./auth/Register"));
const Calendar = lazy(() => import("./pages/calender/Calender"));

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
      {
        path: "calender",
        element: <Calendar />,
      },
    ],
  },
  {
    path: "/register",
    element: <Register />,
  },
]);

export default router;
