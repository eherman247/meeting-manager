import "./App.css";
import MainPageBody from "./components/MainPageBody";
import NavBar from "./components/NavBar";

function App() {
  const navLinks = ["Home", "Join Group", "Manage Group", "Create Group"];

  return (
    <div className="p-2 ">
      <div className="mb-2 border bg-light">
        <h1 className="text-center">Meeting Manager</h1>
        <NavBar navLinks={navLinks}></NavBar>
      </div>
      <MainPageBody></MainPageBody>
    </div>
  );
}

export default App;
