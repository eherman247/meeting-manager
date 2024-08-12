import "./App.css";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import JoinGroup from "./pages/joinGroup";
import CreateGroup from "./pages/createGroup";
import ManageGroup from "./pages/manageGroup";
import Layout from "./Layout";

function App() {
  return (
    <Router>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/createGroup" element={<CreateGroup />} />
          <Route path="/joinGroup" element={<JoinGroup />} />
          <Route path="/manageGroup" element={<ManageGroup />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
