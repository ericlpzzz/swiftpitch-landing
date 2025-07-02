"use client";
import { useState } from "react";

export default function Analyzer() {
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [show, setShow] = useState(false);

  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (!input.trim()) return;
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setShow(true);
    }, 2000);
  };

  return (
    <main className="max-w-3xl mx-auto px-6 py-16">
      <h1 className="text-3xl font-bold mb-4 text-center">Analyze a Freelance Job Post</h1>
      <p className="text-center text-gray-600 mb-8">
        Paste a job description to get a quality score and red flag alerts.
      </p>

      {!show && (
        <form onSubmit={handleSubmit}>
          <textarea
            value={input}
            onChange={(e) => setInput(e.target.value)}
            rows={8}
            placeholder="Paste job description..."
            className="w-full border p-4 rounded-md focus:outline-brand"
          />
          <button className="mt-4 px-6 py-3 bg-brand text-white rounded-md hover:bg-[#005f6b]">
            Analyze Post
          </button>
        </form>
      )}

      {loading && (
        <div className="mt-8 text-center text-brand font-semibold animate-pulse">
          Reading post… Checking context… Evaluating scope…
        </div>
      )}

      {show && (
        <div className="mt-10 space-y-6">
          <div className="text-center">
            <h2 className="text-2xl font-bold">Job Quality Score</h2>
            <p className="text-5xl text-yellow-500 font-extrabold mt-2">47/100</p>
            <p className="text-gray-600">⚠ Needs more clarity</p>
          </div>
          <div className="grid grid-cols-2 gap-3 text-sm">
            <span className="bg-green-100 text-green-800 px-3 py-2 rounded">✅ Good Context</span>
            <span className="bg-yellow-100 text-yellow-800 px-3 py-2 rounded">⚠ Missing Company Info</span>
            <span className="bg-red-100 text-red-800 px-3 py-2 rounded">🚩 Unrealistic Budget</span>
            <span className="bg-red-100 text-red-800 px-3 py-2 rounded">❌ Spec Work Requested</span>
            <span className="bg-yellow-100 text-yellow-800 px-3 py-2 rounded">⚠ Generic Language</span>
            <span className="bg-green-100 text-green-800 px-3 py-2 rounded">✅ Clear Deliverables</span>
          </div>
          <div className="bg-gray-50 p-4 border rounded">
            <p>• The job lacks company or product detail — tough to personalize.</p>
            <p>• Budget is likely too low for described scope.</p>
            <p>• Deliverables aren't clearly defined.</p>
          </div>
          <div className="bg-blue-50 p-4 border-l-4 border-blue-500">
            <p>👉 Ask clarifying questions in your proposal.</p>
            <p className="mt-1">👉 Flag unpaid spec work — Upwork forbids it.</p>
          </div>
          <div className="text-center mt-6">
            <a href="/proposal-generator" className="inline-block bg-brand text-white px-5 py-3 rounded hover:bg-[#005f6b]">
              Try SwiftPitch Proposal Generator →
            </a>
          </div>
        </div>
      )}
    </main>
  );
}
