import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import Home from "./components/pages";

export default function App() {
  return (
      <Router>
        <Home/>
      </Router>
  );
}
