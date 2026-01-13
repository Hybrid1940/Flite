import { Routes, Route, Navigate } from "react-router-dom";
import LandingPage from "./LandingPage";
import MarketplacePage from "./MarketplacePage";
import SettingsPage from "./SettingsPage";
import MyInstructorsPage from "./MyInstructorsPage";
import ProfilePage from "./ProfilePage";
import "./App.css";

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/marketplace" element={<MarketplacePage />} />
      <Route path="/settings" element={<SettingsPage />} />
      <Route path="/my-instructors" element={<MyInstructorsPage />} />
      <Route path="/profile" element={<ProfilePage />} />

      {/* Optional fallback */}
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
}

export default App;
