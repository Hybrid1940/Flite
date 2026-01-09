import { Routes, Route, Navigate } from "react-router-dom";
import LandingPage from "./LandingPage";
import MarketplacePage from "./MarketplacePage";
import "./App.css";

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/marketplace" element={<MarketplacePage />} />

      {/* Optional fallback */}
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
}

export default App;
