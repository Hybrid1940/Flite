import { useState } from "react";
import { HiSearch } from "react-icons/hi";
import Navbar from "./components/Navbar";
import PilotList from "./components/PilotList";
import FilterButton from "./components/FilterButton";

function MarketplacePage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCert, setSelectedCert] = useState("all");

  return (
    <div className="min-h-screen bg-gradient-page">
      {/* Navbar */}
      <Navbar />

      {/* Header Section */}
      <div className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm border-b border-gray-200 dark:border-slate-700 shadow-sm">
        <div className="section-container">
          <div className="mb-6">
            <h1 className="section-title">
              Flight Instructor Marketplace
            </h1>
            <p className="section-subtitle">
              Connect with certified flight instructors and find the perfect training match
            </p>
          </div>

          {/* Search and Filter Bar */}
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 relative">
              <input
                type="text"
                placeholder="Search by name, location, or specialty..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="input-search"
              />
              <HiSearch className="icon-search" />
            </div>

            <div className="flex gap-2">
              <FilterButton
                label="All"
                value="all"
                selectedCert={selectedCert}
                onClick={() => setSelectedCert("all")}
              />
              <FilterButton
                label="CFI"
                value="CFI"
                selectedCert={selectedCert}
                onClick={() => setSelectedCert("CFI")}
              />
              <FilterButton
                label="CFII"
                value="CFII"
                selectedCert={selectedCert}
                onClick={() => setSelectedCert("CFII")}
              />
              <FilterButton
                label="MEI"
                value="MEI"
                selectedCert={selectedCert}
                onClick={() => setSelectedCert("MEI")}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="section-container">
        <PilotList searchQuery={searchQuery} selectedCert={selectedCert} />
      </div>
    </div>
  );
}

export default MarketplacePage;
