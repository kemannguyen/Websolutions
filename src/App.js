import logo from "./logo.svg";
import "./App.css";
import LandingPage from "./Pages/LandingPage/LandingPage";
import Navbar from "./Components/Navbar";

function App() {
  return (
    <div>
      <Navbar />
      <LandingPage />
    </div>
  );
}

export default App;
