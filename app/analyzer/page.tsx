"use client";

import { useState } from "react";

export default function Analyzer() {
  const [jobText, setJobText] = useState("");
  const [loading, setLoading] = useState(false);
  const [showResult, setShowResult] = useState(false);

  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (!jobText.trim()) return;

    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setShowResult(true);
    }, 2000); // Simulate AI thinking
  };

  return (
    <main className="max-w-3xl mx-auto px-6 py-16">
      <h1 className="text-3xl font-bold mb-4 text-center">Analyze Any Freelance Job Post</h1>
      <p className="text-center text-gray-600 mb-10">
        Paste a job from Upwork, Freelancer, or Fiverr to spot issues before you waste time applying.
      </p>

      {!showResult && (
        <form onSubmit={handleSubmit}>
          <textarea
            value={jobText}
            onChange={(e) => setJobText(e.target.value)}
            rows={10}
            placeholder="Paste job description here..."
            className="w-full p-4 border rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-brand"
          />
          <button
            type="submit"
            className="bg-brand hover:bg-[#005f6b] text-white px-6 py-3 rounded-md mt-4 font-medium"
          >
            Analyze Post
          </button>
        </form>
      )}

      {loading && (
        <div className="text-center mt-10 text-brand font-medium animate-pulse">
          Reading post… Checking context… Evaluating scope…
        </div>
      )}

      {showResult && (
        <section className="mt-12">
          <div className="text-center">
            <h2 className="text-2xl font-bold">Job Quality Score</h2>
            <p className="text-5xl font-extrabold text-yellow-500 mt-2">47/100</p>
            <p className="text-sm text-gray-600 mb-6">⚠ Needs more clarity</p>
          </div>

          <div className="grid grid-cols-2 gap-4 text-sm mb-8">
            <span className="bg-green-100 text-green-800 px-3 py-2 rounded-md">✅ Good Context</span>
            <span className="bg-yellow-100 text-yellow-800 px-3 py-2 rounded-md">⚠ Missing Company Info</span>
            <span className="bg-red-100 text-red-800 px-3 py-2 rounded-md">🚩 Unrealistic Budget</span>
            <span className="bg-red-100 text-red-800 px-3 py-2 rounded-md">❌ Spec Work Requested</span>
            <span className="bg-yellow-100 text-yellow-800 px-3 py-2 rounded-md">⚠ Generic Language</span>
            <span className="bg-green-100 text-green-800 px-3 py-2 rounded-md">✅ Clear Deliverables</span>
          </div>

          <div className="bg-white border rounded-md p-6 mb-6 text-sm space-y-2">
            <p>• The job post doesn’t include company or product details, limiting personalization.</p>
            <p>• Budget seems low for scope of work described.</p>
            <p>• Deliverables are vague and open-ended.</p>
          </div>

          <div className="bg-blue-50 border-l-4 border-blue-400 p-6 text-sm text-gray-800 mb-10">
            <p>If you apply, ask clarifying questions in your proposal.</p>
            <p className="mt-2">Flag unpaid spec work — it's not allowed on Upwork.</p>
          </div>

          <div className="text-center">
            <p className="mb-3">Want help writing a better proposal?</p>
            <a
              href="/proposal-generator"
              className="bg-brand hover:bg-[#005f6b] text-white px-6 py-3 rounded-md font-medium text-sm"
            >
              Try SwiftPitch Proposal Generator →
            </a>
          </div>
        </section>
      )}
    </main>
  );
}
