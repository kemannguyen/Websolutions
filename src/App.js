import logo from "./logo.svg";
import "./App.css";
import LandingPage from "./Pages/LandingPage/LandingPage";
import Navbar from "./Components/Navbar";
import {
  Navigate,
  Route,
  BrowserRouter as Router,
  Routes,
} from "react-router-dom";
import ProjectPage from "./Pages/ProjectPage/ProjectPage";
import { ScrollProvider } from "./Components/ScrollContext";

function App() {
  return (
    <Router>
      <ScrollProvider>
        <Navbar />
        <div>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/projects" element={<ProjectPage />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </div>
      </ScrollProvider>
    </Router>
  );
}

export default App;
