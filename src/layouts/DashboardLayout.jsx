import { Outlet } from "react-router";

const DashboardLayout = () => {
  return (
    <div>
      <p>Sidebar</p>
      <Outlet />
      <p>ButtonBar</p>
    </div>
  );
};

export default DashboardLayout;
