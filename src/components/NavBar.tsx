import "../App.css";

interface NavProps {
  navLinks: string[];
}

const NavBar = ({ navLinks }: NavProps) => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary m-3 px-4">
      <div className="container-fluid">
        {navLinks.map((nav) => (
          <a className="fs-3 text-decoration-none text-reset">{nav}</a>
        ))}
      </div>
    </nav>
  );
};

export default NavBar;
