import "../App.css";
import { Link } from "react-router-dom";
import pages from "./pages";

interface NavProps {
  navLinks: {
    link: string;
    name: string;
  }[];
}

const NavBar = ({ navLinks }: NavProps) => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary m-3 px-4">
      <div className="container-fluid">
        {navLinks.map((nav) => (
          <Link to={nav["link"]}>
            <button
              className="fs-3 text-decoration-none text-reset"
              key={nav["name"]}
            >
              {nav["name"]}
            </button>
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default NavBar;
