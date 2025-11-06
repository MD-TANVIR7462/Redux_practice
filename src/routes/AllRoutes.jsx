import { createBrowserRouter } from "react-router";
import { adminPaths } from "./AdminRoutes";
import { mainPaths } from "./MainRoutes";
import MainLayout from "../layouts/MainLayout";
import DashboardLayout from "../layouts/DashboardLayout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <div>Error Page</div>,
    children: mainPaths,
  },

  {
    path: "/admin",
    element: <DashboardLayout />,
    children: adminPaths,
  },
]);

export default router;
