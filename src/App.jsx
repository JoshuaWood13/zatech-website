import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import ReCaptchaProvider from "./components/common/ReCaptchaProvider";
import Navbar from "./components/common/Navbar";
import Home from "./pages/Home";
import Report from "./pages/Report";
import SponsorshipPage from "./pages/Sponsorship";
import { SecurityUtils } from "./utils/securityUtils";
import './App.css'

function App() {
  // Initialize security monitoring
  useEffect(() => {
    SecurityUtils.initCSPMonitoring();
  }, []);

  return (
    <ReCaptchaProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/report" element={<Report/>} />
          <Route path="/sponsorship" element={<SponsorshipPage/>} />
        </Routes>
      </Router>
    </ReCaptchaProvider>
  );
}

export default App;