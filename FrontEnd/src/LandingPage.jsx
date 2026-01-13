import React from "react";
import { useNavigate } from "react-router-dom";

export default function LandingPage() {
  const navigate = useNavigate();

  const handleLogIn = () => {
    navigate("/marketplace");
  };

  return (
    <div className="min-h-screen bg-gradient-landing text-gray-900">
      {/* Navbar */}
      <nav className="flex items-center justify-between px-8 py-4 shadow-sm bg-white/80 backdrop-blur">
        <div className="text-2xl font-bold tracking-tight">
          ✈️ FlightConnect
        </div>
        <div className="space-x-4">
          <button className="btn-nav">
            About
          </button>
          <button className="btn-nav">
            Features
          </button>
          <button className="btn-nav">
            Pricing
          </button>
          <button className="btn-nav-primary" onClick={handleLogIn}>
            Log In
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="flex flex-col items-center text-center px-6 py-24 max-w-5xl mx-auto">
        <h1 className="text-heading-large mb-6">
          Connecting Pilots and Students — <br /> One Flight at a Time
        </h1>
        <p className="text-body-large max-w-2xl mb-8">
          FlightConnect is a social platform designed to help student pilots find experienced flight instructors and independent pilots for mentorship, training, and discovery.
        </p>
        <div className="flex gap-4">
          <button className="btn-primary">
            Get Started
          </button>
          <button className="btn-secondary">
            Learn More
          </button>
        </div>
      </section>

      {/* Features */}
      <section className="px-8 py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10">
          <Feature
            title="Verified Pilots"
            description="Browse profiles of verified pilots and instructors with logged hours, aircraft experience, and certifications."
          />
          <Feature
            title="Student Matching"
            description="Students can connect with pilots based on location, aircraft type, and training goals."
          />
          <Feature
            title="Aviation Community"
            description="Share flights, ask questions, and build relationships within a trusted aviation-focused network."
          />
        </div>
      </section>

      {/* Call to Action */}
      <section className="px-6 py-24 text-center">
        <h2 className="text-heading-medium mb-4">Ready to Take Off?</h2>
        <p className="text-body-large mb-8 max-w-xl mx-auto">
          Whether you're an aspiring pilot or a seasoned aviator, FlightConnect helps you find the right people to fly with.
        </p>
        <button className="btn-primary px-8 py-4">
          Join FlightConnect
        </button>
      </section>

      {/* Footer */}
      <footer className="px-8 py-6 border-t text-sm text-gray-500 text-center">
        © {new Date().getFullYear()} FlightConnect. All rights reserved.
      </footer>
    </div>
  );
}

function Feature({ title, description }) {
  return (
    <div className="card p-8 shadow-sm">
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-body-large">{description}</p>
    </div>
  );
}
