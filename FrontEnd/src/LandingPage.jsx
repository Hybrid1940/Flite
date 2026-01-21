import React from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "./components/Navbar";

export default function LandingPage() {
  const navigate = useNavigate();

  const handleLogIn = () => {
    navigate("/marketplace");
  };

  return (
    <div className="min-h-screen bg-gradient-landing text-gray-900 dark:text-gray-50">
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <section className="section-container">
        <div className="flex flex-col items-center text-center px-6 py-24 max-w-5xl mx-auto">
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
        </div>
      </section>

      {/* Features */}
      <section className="px-8 py-20 bg-gray-50 dark:bg-slate-800">
        <div className="section-container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
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
        </div>
      </section>

      {/* Call to Action */}
      <section className="section-container">
        <div className="px-6 py-24 text-center">
          <h2 className="text-heading-medium mb-4">Ready to Take Off?</h2>
          <p className="text-body-large mb-8 max-w-xl mx-auto">
            Whether you're an aspiring pilot or a seasoned aviator, FlightConnect helps you find the right people to fly with.
          </p>
          <button className="btn-primary px-8 py-4">
            Join FlightConnect
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-8 py-6 border-t border-gray-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-sm text-gray-500 dark:text-gray-400 text-center">
        © {new Date().getFullYear()} FlightConnect. All rights reserved.
      </footer>
    </div>
  );
}

function Feature({ title, description }) {
  return (
    <div className="bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-sm border border-gray-200 dark:border-slate-700 hover:shadow-md dark:hover:shadow-lg transition-all">
      <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-gray-50">{title}</h3>
      <p className="text-body-large">{description}</p>
    </div>
  );
}
