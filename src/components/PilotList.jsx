import { HiEmojiSad } from "react-icons/hi";
import PilotCard from "./PilotCard";
import { pilots } from "../data/pilot";

function PilotList({ searchQuery = "", selectedCert = "all" }) {
  // Filter pilots based on search query and certification
  const filteredPilots = pilots.filter((pilot) => {
    const matchesSearch =
      pilot.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      pilot.bio.toLowerCase().includes(searchQuery.toLowerCase()) ||
      pilot.courses.some((course) =>
        course.toLowerCase().includes(searchQuery.toLowerCase())
      );

    const matchesCert =
      selectedCert === "all" || pilot.certifications.includes(selectedCert);

    return matchesSearch && matchesCert;
  });

  if (filteredPilots.length === 0) {
    return (
      <div className="empty-state">
        <HiEmojiSad className="empty-state-icon" />
        <h3 className="empty-state-title">
          No instructors found
        </h3>
        <p className="empty-state-text">
          Try adjusting your search or filter criteria
        </p>
      </div>
    );
  }

  return (
    <>
      <div className="mb-6 flex items-center justify-between">
        <p className="text-body-large">
          Showing <span className="font-semibold text-gray-900">{filteredPilots.length}</span>{" "}
          {filteredPilots.length === 1 ? "instructor" : "instructors"}
        </p>
      </div>
      <div className="grid-cards">
        {filteredPilots.map((pilot) => (
          <PilotCard key={pilot.id} pilot={pilot} />
        ))}
      </div>
    </>
  );
}

export default PilotList;
