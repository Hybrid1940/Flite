import React from "react";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-50 to-white text-gray-900">
      {/* Navbar */}
      <nav className="flex items-center justify-between px-8 py-4 shadow-sm bg-white/80 backdrop-blur">
        <div className="text-2xl font-bold tracking-tight">
          ✈️ FlightConnect
        </div>
        <div className="space-x-4">
          <button className="px-4 py-2 rounded-xl text-sm font-medium hover:bg-gray-100">
            About
          </button>
          <button className="px-4 py-2 rounded-xl text-sm font-medium hover:bg-gray-100">
            Features
          </button>
          <button className="px-4 py-2 rounded-xl text-sm font-medium hover:bg-gray-100">
            Pricing
          </button>
          <button className="px-4 py-2 rounded-xl bg-sky-600 text-white text-sm font-semibold hover:bg-sky-700">
            Log In
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="flex flex-col items-center text-center px-6 py-24 max-w-5xl mx-auto">
        <h1 className="text-5xl font-extrabold leading-tight mb-6">
          Connecting Pilots and Students — <br /> One Flight at a Time
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mb-8">
          FlightConnect is a social platform designed to help student pilots find experienced flight instructors and independent pilots for mentorship, training, and discovery.
        </p>
        <div className="flex gap-4">
          <button className="px-6 py-3 rounded-2xl bg-sky-600 text-white font-semibold hover:bg-sky-700">
            Get Started
          </button>
          <button className="px-6 py-3 rounded-2xl border border-gray-300 font-semibold hover:bg-gray-50">
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
        <h2 className="text-4xl font-bold mb-4">Ready to Take Off?</h2>
        <p className="text-gray-600 mb-8 max-w-xl mx-auto">
          Whether you're an aspiring pilot or a seasoned aviator, FlightConnect helps you find the right people to fly with.
        </p>
        <button className="px-8 py-4 rounded-2xl bg-sky-600 text-white font-semibold hover:bg-sky-700">
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
    <div className="bg-white p-8 rounded-2xl shadow-sm">
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}
