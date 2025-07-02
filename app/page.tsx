"use client";
import { useRef } from "react";

export default function Home() {
  const pricingRef = useRef<HTMLDivElement>(null);

  const scrollToPricing = () => {
    pricingRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <main className="text-gray-900 bg-white">
      {/* HERO */}
      <section className="min-h-[90vh] flex items-center justify-center text-center px-6 py-24">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Win More Jobs. Write Less.</h1>
          <p className="text-lg md:text-xl text-gray-600 mb-8">
            SwiftPitch creates AI-powered freelance proposals in seconds—tailored to your profile, tone, and the job you're applying for.
          </p>
          <button
            onClick={scrollToPricing}
            className="inline-block px-8 py-4 bg-brand text-white font-semibold rounded-md hover:bg-[#005f6b] transition"
          >
            Try It Free
          </button>
        </div>
      </section>

      {/* WHY SWIFTPITCH */}
      <section className="bg-gray-50 py-20 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-12">Why Choose SwiftPitch</h2>
          <div className="grid md:grid-cols-3 gap-8 text-left text-gray-700">
            <div>
              <h3 className="font-semibold mb-2">Created for Freelancers</h3>
              <p>SwiftPitch is reserved for Upwork and Freelancer.com freelancers only, not for enterprise teams or generic AI tools.</p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Tailored, Not Templated</h3>
              <p>We don't do copy-paste. SwiftPitch scans job posts and tailors your proposal to your resume, niche, and tone.</p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Fast Without Being Generic</h3>
              <p>Your proposal is ready in seconds — but doesn’t feel like it. SwiftPitch blends speed and precision.</p>
            </div>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="py-20 px-6 text-center">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold mb-12">How It Works</h2>
          <div className="grid md:grid-cols-3 gap-12 text-left text-gray-700">
            <div>
              <h3 className="font-semibold mb-2">1. Paste Job URL</h3>
              <p>Drop in a job post link from Upwork or Freelancer.com</p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">2. Upload Resume</h3>
              <p>Or connect your LinkedIn profile to help us personalize it</p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">3. Get Proposal</h3>
              <p>Receive a smart, ready-to-send proposal in seconds</p>
            </div>
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section ref={pricingRef} className="bg-gray-50 py-20 px-6" id="pricing">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-12">Pricing & Features</h2>
          <div className="grid md:grid-cols-4 gap-8 text-left">
            {[
              {
                name: "Free",
                price: "€0",
                features: [
                  "3 proposals/month",
                  "No saved history",
                  "Limited tone/niche",
                  "Upwork & Freelancer support"
                ]
              },
              {
                name: "Starter",
                price: "€7.99",
                features: [
                  "15 proposals/month",
                  "Save & reuse history",
                  "Tone & niche control",
                  "Basic support"
                ]
              },
              {
                name: "Pro",
                price: "€19.99",
                features: [
                  "50 proposals/month",
                  "Analytics + integrations",
                  "Resume + portfolio match",
                  "Fastest generation"
                ]
              },
              {
                name: "Agency",
                price: "€49.99",
                features: [
                  "200 proposals/month",
                  "Multi-profile switching",
                  "White-label proposals",
                  "Premium support"
                ]
              }
            ].map((plan) => (
              <div key={plan.name} className="bg-white p-6 rounded border shadow-sm">
                <h3 className="font-bold text-lg mb-1">{plan.name}</h3>
                <p className="text-gray-600 mb-4">{plan.price}/month</p>
                <ul className="text-sm space-y-2 text-gray-700 mb-4">
                  {plan.features.map((f) => (
                    <li key={f}>• {f}</li>
                  ))}
                </ul>
                <button
                  onClick={scrollToPricing}
                  className="w-full py-2 bg-brand text-white rounded hover:bg-[#005f6b]"
                >
                  Get Started
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIAL */}
      <section className="bg-white py-16 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <blockquote className="text-xl italic text-gray-700 mb-6">
            “I used to spend 30–40 minutes writing each proposal. SwiftPitch cuts that down to seconds — and the responses feel better, too.”
          </blockquote>
          <p className="font-semibold text-gray-900">— Dominique · Saint Louis, MO</p>
        </div>
      </section>

      {/* TALLY SIGNUP CTA */}
      <section className="py-16 px-6 text-center">
        <div className="max-w-xl mx-auto">
          <h2 className="text-2xl font-semibold mb-4">Join the Beta Waitlist</h2>
          <iframe
            data-tally-src="https://tally.so/embed/w5Ye2M?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1"
            loading="lazy"
            width="100%"
            height="200"
            className="rounded-lg border"
            title="SwiftPitch Waitlist"
          ></iframe>
          <p className="mt-6 text-gray-600 text-sm">
            Got feedback? DM us on Reddit at <a href="https://reddit.com/u/Wizlea" className="text-brand underline">u/Wizlea</a>
          </p>
        </div>
      </section>
    </main>
  );
}