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
import PricingPage from "./Pages/PricingPage/PricingPage";
import ContactPage from "./Pages/ContactPage/ContactPage";
import BookingPage from "./Pages/BookingPage/BookingPage";
import ProjectInfoPage from "./Pages/ProjectPage/ProjectInfoPage";

function App() {
  return (
    <Router>
      <ScrollProvider>
        <Navbar />
        <div>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route
              path="/pricing/monthly"
              element={<PricingPage index={0} />}
            />
            <Route
              path="/pricing/traditional"
              element={<PricingPage index={1} />}
            />
            <Route path="/referens" element={<ProjectPage />} />
            <Route path="/referens/*" element={<ProjectInfoPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/login" element={<ProjectPage />} />
            <Route path="/booking/monthly" element={<BookingPage />} />
            <Route path="/booking/traditional" element={<BookingPage />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </div>
      </ScrollProvider>
      <Footer />
    </Router>
  );
}

export default App;
