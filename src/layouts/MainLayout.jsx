import { Outlet } from "react-router";

const MainLayout = () => {
  return (
    <div className="max-w-[1400px] h-screen mx-auto p-5">
      {/* <p>Navbar</p> */}
      <Outlet />
      {/* <p>footer</p> */}
    </div>
  );
};

export default MainLayout;
