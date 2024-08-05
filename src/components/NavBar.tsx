import "../App.css";

interface NavProps {
  navLinks: string[];
}

const NavBar = ({ navLinks }: NavProps) => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary mx-3">
      <div className="container-fluid">
        {navLinks.map((nav) => (
          <a>{nav}</a>
        ))}
      </div>
    </nav>
  );
};

export default NavBar;
