import { HiUserGroup, HiTrendingUp, HiCurrencyDollar } from "react-icons/hi";
import Navbar from "./components/Navbar";
import MyInstructorCard from "./components/MyInstructorCard";
import { myInstructors } from "./data/myInstructors";
import "./styles/myInstructors.css";

function MyInstructorsPage() {
  // Calculate summary statistics
  const totalInstructors = myInstructors.length;
  const totalRemainingCost = myInstructors.reduce(
    (sum, instructor) => sum + instructor.remainingCost,
    0
  );
  const averageProgress =
    myInstructors.reduce((sum, instructor) => sum + instructor.progress, 0) /
    totalInstructors;
  const totalHoursCompleted = myInstructors.reduce(
    (sum, instructor) => sum + instructor.hoursCompleted,
    0
  );
  const totalHoursRequired = myInstructors.reduce(
    (sum, instructor) => sum + instructor.totalHoursRequired,
    0
  );

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 0,
    }).format(amount);
  };

  return (
    <div className="my-instructors-page">
      <Navbar />

      {/* Header */}
      <header className="section-header">
        <div className="section-container">
          <h1 className="section-title">My Instructors</h1>
          <p className="section-subtitle">
            Track your progress and manage your flight training
          </p>
        </div>
      </header>

      <div className="my-instructors-container section-container">

        {/* Summary Cards */}
        <div className="my-instructors-summary">
          <div className="my-instructors-summary-card">
            <div className="my-instructors-summary-icon-wrapper my-instructors-summary-icon-primary">
              <HiUserGroup className="my-instructors-summary-icon" />
            </div>
            <div className="my-instructors-summary-content">
              <span className="my-instructors-summary-value">{totalInstructors}</span>
              <span className="my-instructors-summary-label">Active Instructors</span>
            </div>
          </div>

          <div className="my-instructors-summary-card">
            <div className="my-instructors-summary-icon-wrapper my-instructors-summary-icon-success">
              <HiTrendingUp className="my-instructors-summary-icon" />
            </div>
            <div className="my-instructors-summary-content">
              <span className="my-instructors-summary-value">
                {Math.round(averageProgress)}%
              </span>
              <span className="my-instructors-summary-label">Average Progress</span>
            </div>
          </div>

          <div className="my-instructors-summary-card">
            <div className="my-instructors-summary-icon-wrapper my-instructors-summary-icon-warning">
              <HiCurrencyDollar className="my-instructors-summary-icon" />
            </div>
            <div className="my-instructors-summary-content">
              <span className="my-instructors-summary-value">
                {formatCurrency(totalRemainingCost)}
              </span>
              <span className="my-instructors-summary-label">Remaining Cost</span>
            </div>
          </div>

          <div className="my-instructors-summary-card">
            <div className="my-instructors-summary-icon-wrapper my-instructors-summary-icon-info">
              <HiTrendingUp className="my-instructors-summary-icon" />
            </div>
            <div className="my-instructors-summary-content">
              <span className="my-instructors-summary-value">
                {totalHoursCompleted}/{totalHoursRequired}
              </span>
              <span className="my-instructors-summary-label">Total Hours</span>
            </div>
          </div>
        </div>

        {/* Instructors List */}
        {myInstructors.length === 0 ? (
          <div className="my-instructors-empty">
            <HiUserGroup className="my-instructors-empty-icon" />
            <h3 className="my-instructors-empty-title">No Active Instructors</h3>
            <p className="my-instructors-empty-text">
              Start exploring instructors in the marketplace to begin your flight training journey.
            </p>
          </div>
        ) : (
          <div className="my-instructors-list">
            {myInstructors.map((instructor) => (
              <MyInstructorCard key={instructor.id} instructor={instructor} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default MyInstructorsPage;
