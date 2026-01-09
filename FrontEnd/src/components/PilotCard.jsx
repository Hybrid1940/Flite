import { FaStar } from "react-icons/fa";
import { HiBadgeCheck, HiCheck, HiCalendar } from "react-icons/hi";

function PilotCard({ pilot }) {
  const getAvailabilityBadgeClass = (availability) => {
    const classes = {
      "Weekdays": "badge-availability badge-availability-weekdays",
      "Weekends": "badge-availability badge-availability-weekends",
      "Flexible": "badge-availability badge-availability-flexible",
    };
    return classes[availability] || "badge-availability badge-availability-default";
  };

  return (
    <div className="group card card-hover">
      {/* Header with gradient */}
      <div className="card-header-gradient">
        <div className="relative z-10">
          <h2 className="text-heading-small mb-1">{pilot.name}</h2>
          <div className="flex items-center gap-2 mt-2">
            <div className="flex items-center">
              <FaStar className="icon-star" />
              <span className="ml-1 font-semibold text-lg">{pilot.rating}</span>
            </div>
            <span className="text-sky-100 text-sm">
              ({pilot.totalReviews} {pilot.totalReviews === 1 ? 'review' : 'reviews'})
            </span>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="card-content">
        {/* Certifications Badges */}
        <div className="flex flex-wrap gap-2 mb-4">
          {pilot.certifications.map((cert, index) => (
            <span key={index} className="badge-certification">
              {cert}
            </span>
          ))}
        </div>

        {/* Bio */}
        <p className="text-body leading-relaxed mb-5 line-clamp-2">
          {pilot.bio}
        </p>

        {/* Courses Offered */}
        <div className="mb-5">
          <h3 className="text-sm font-semibold text-gray-900 mb-2 flex items-center">
            <HiBadgeCheck className="icon-small mr-1.5 icon-sky" />
            Courses Offered
          </h3>
          <div className="space-y-1.5">
            {pilot.courses.map((course, index) => (
              <div key={index} className="flex items-start text-body-dark">
                <HiCheck className="icon-small mr-2 mt-0.5 text-sky-500 flex-shrink-0" />
                <span>{course}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Footer with Availability and Price */}
        <div className="pt-4 border-t border-gray-100">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <HiCalendar className="icon-small icon-gray" />
              <span className={getAvailabilityBadgeClass(pilot.availability)}>
                {pilot.availability}
              </span>
            </div>
            <div className="text-right">
              <div className="text-2xl font-bold text-gray-900">${pilot.hourlyRate}</div>
              <div className="text-xs text-gray-500">per hour</div>
            </div>
          </div>

          <button className="w-full btn-gradient">
            View Full Profile
          </button>
        </div>
      </div>
    </div>
  );
}

export default PilotCard;
