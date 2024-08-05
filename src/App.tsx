import "./App.css";
import NavBar from "./components/NavBar";

function App() {
  const navLinks = ["Home", "Join Group", "Manage Group", "Create Group"];
  return (
    <div className="background-orange">
      <NavBar navLinks={navLinks}></NavBar>
    </div>
  );
}

export default App;
