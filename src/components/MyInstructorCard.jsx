import { HiClock, HiCurrencyDollar, HiCheckCircle, HiCalendar } from "react-icons/hi";
import { Link } from "react-router-dom";
import "../styles/myInstructors.css";

function MyInstructorCard({ instructor }) {
  const progressPercentage = instructor.progress;
  const hoursRemaining = instructor.totalHoursRequired - instructor.hoursCompleted;
  const lessonsRemaining = instructor.totalLessons - instructor.lessonsCompleted;

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", { 
      month: "short", 
      day: "numeric", 
      year: "numeric" 
    });
  };

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 0,
    }).format(amount);
  };

  return (
    <div className="my-instructor-card">
      {/* Header */}
      <div className="my-instructor-header">
        <div className="my-instructor-header-content">
          <div>
            <h3 className="my-instructor-name">{instructor.name}</h3>
            <div className="my-instructor-badges">
              {instructor.certifications.map((cert, index) => (
                <span key={index} className="my-instructor-badge">
                  {cert}
                </span>
              ))}
            </div>
          </div>
          <div className="my-instructor-rating">
            <span className="my-instructor-rating-value">⭐ {instructor.rating}</span>
          </div>
        </div>
      </div>

      {/* Course Info */}
      <div className="my-instructor-content">
        <div className="my-instructor-course">
          <h4 className="my-instructor-course-title">{instructor.course}</h4>
          <p className="my-instructor-course-detail">
            Started {formatDate(instructor.startDate)}
          </p>
        </div>

        {/* Progress Section */}
        <div className="my-instructor-progress-section">
          <div className="my-instructor-progress-header">
            <span className="my-instructor-progress-label">Overall Progress</span>
            <span className="my-instructor-progress-percentage">{progressPercentage}%</span>
          </div>
          <div className="my-instructor-progress-bar">
            <div
              className="my-instructor-progress-fill"
              style={{ width: `${progressPercentage}%` }}
            ></div>
          </div>
        </div>

        {/* Metrics Grid */}
        <div className="my-instructor-metrics">
          <div className="my-instructor-metric">
            <HiClock className="my-instructor-metric-icon" />
            <div className="my-instructor-metric-content">
              <span className="my-instructor-metric-value">
                {instructor.hoursCompleted}/{instructor.totalHoursRequired}
              </span>
              <span className="my-instructor-metric-label">Hours</span>
              <span className="my-instructor-metric-remaining">
                {hoursRemaining} remaining
              </span>
            </div>
          </div>

          <div className="my-instructor-metric">
            <HiCheckCircle className="my-instructor-metric-icon" />
            <div className="my-instructor-metric-content">
              <span className="my-instructor-metric-value">
                {instructor.lessonsCompleted}/{instructor.totalLessons}
              </span>
              <span className="my-instructor-metric-label">Lessons</span>
              <span className="my-instructor-metric-remaining">
                {lessonsRemaining} remaining
              </span>
            </div>
          </div>
        </div>

        {/* Cost Section */}
        <div className="my-instructor-cost-section">
          <div className="my-instructor-cost-header">
            <HiCurrencyDollar className="my-instructor-cost-icon" />
            <span className="my-instructor-cost-title">Cost Breakdown</span>
          </div>
          <div className="my-instructor-cost-details">
            <div className="my-instructor-cost-item">
              <span className="my-instructor-cost-label">Total Cost:</span>
              <span className="my-instructor-cost-value">
                {formatCurrency(instructor.totalCost)}
              </span>
            </div>
            <div className="my-instructor-cost-item">
              <span className="my-instructor-cost-label">Paid:</span>
              <span className="my-instructor-cost-value-paid">
                {formatCurrency(instructor.paidAmount)}
              </span>
            </div>
            <div className="my-instructor-cost-item my-instructor-cost-item-remaining">
              <span className="my-instructor-cost-label">Remaining:</span>
              <span className="my-instructor-cost-value-remaining">
                {formatCurrency(instructor.remainingCost)}
              </span>
            </div>
          </div>
        </div>

        {/* Next Lesson */}
        {instructor.nextLesson && (
          <div className="my-instructor-next-lesson">
            <HiCalendar className="my-instructor-next-lesson-icon" />
            <div className="my-instructor-next-lesson-content">
              <span className="my-instructor-next-lesson-label">Next Lesson:</span>
              <span className="my-instructor-next-lesson-date">
                {formatDate(instructor.nextLesson)}
              </span>
            </div>
          </div>
        )}

        {/* Actions */}
        <div className="my-instructor-actions">
          <Link
            to={`/instructor/${instructor.instructorId}`}
            className="my-instructor-button-primary"
          >
            View Profile
          </Link>
          <button className="my-instructor-button-secondary">
            Schedule Lesson
          </button>
        </div>
      </div>
    </div>
  );
}

export default MyInstructorCard;
