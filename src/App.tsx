import "./App.css";
import NavBar from "./components/NavBar";
import { BrowserRouter as Router } from "react-router-dom";
import SideBar from "./components/SideBar";

export default function App() {
  return (
    <>
      <Router>
        <SideBar />
        <NavBar />
      </Router>
    </>
  );
}
