import NavBar from "./components/NavBar";
import { Outlet } from "react-router-dom";

const Layout = () => {
  const navLinks = [
    { link: "/", name: "Home" },
    { link: "/joinGroup", name: "Join Group" },
    { link: "/manageGroup", name: "Manage Group" },
    { link: "/createGroup", name: "Create Group" },
  ];
  return (
    <>
      <div className="p-2 ">
        <div className="mb-2 border bg-light">
          <h1 className="text-center">Meeting Manager</h1>
          <NavBar navLinks={navLinks} />
        </div>
        <main>
          <Outlet />
        </main>
      </div>
    </>
  );
};

export default Layout;
