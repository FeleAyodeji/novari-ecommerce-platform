"use client";

import { useState } from "react";

export function NewsletterSection() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Newsletter signup:", email);
    setEmail("");
  };

  return (
    <section className="w-full py-16 md:py-24 bg-gray-50">
      <div className="max-w-2xl mx-auto px-4 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 text-balance">
          Stay Updated with Novari
        </h2>
        <p className="text-gray-600 text-lg mb-8 text-pretty">
          Receive exclusive offers, new collection announcements, and
          horologyinsights directly to your inbox.
        </p>

        <form
          onSubmit={handleSubmit}
          className="flex flex-col sm:flex-row gap-3"
        >
          <input
            type="email"
            placeholder="Enter your email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="flex-1 px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-slate-800"
          />
          <button
            type="submit"
            className="bg-slate-800 hover:bg-slate-900 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-200 whitespace-nowrap"
          >
            Subscribe Now
          </button>
        </form>
      </div>
    </section>
  );
}
