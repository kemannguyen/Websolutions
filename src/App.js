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
import Footer from "./Components/Footer";

function App() {
  return (
    <Router>
      <ScrollProvider>
        <Navbar />
        <div>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/referens" element={<ProjectPage />} />
            <Route path="/contact" element={<ProjectPage />} />
            <Route path="/login" element={<ProjectPage />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </div>
      </ScrollProvider>
      <Footer />
    </Router>
  );
}

export default App;
