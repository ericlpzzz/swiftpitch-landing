"use client";

import Image from "next/image";

export default function Home() {
  return (
    <main className="max-w-6xl mx-auto px-6 pt-12 pb-32">
      {/* HERO */}
      <section className="text-center">
        <Image
          src="/1000044652.png"
          alt="SwiftPitch Logo"
          width={90}
          height={90}
          className="mx-auto mb-6"
        />
        <h1 className="text-4xl font-bold mb-4">Win More Jobs. Write Less.</h1>
        <p className="text-gray-600 text-lg max-w-xl mx-auto">
          SwiftPitch creates AI-powered freelance proposals in seconds—tailored to your profile, tone, and the job you're applying for.
        </p>
      </section>

      {/* TALLY FORM */}
      <section className="mt-12 text-center">
        <iframe
          data-tally-src="https://tally.so/r/w5Ye2M"
          loading="lazy"
          width="100%"
          height="300"
          frameBorder="0"
          title="SwiftPitch Waitlist"
        ></iframe>
        <script>
          {`var d=document,s=d.createElement("script");s.src="https://tally.so/widgets/embed.js";s.defer=true;d.body.appendChild(s);`}
        </script>
      </section>

      {/* BENEFITS */}
      <section className="mt-24 text-center">
        <h2 className="text-2xl font-semibold mb-8">Why SwiftPitch</h2>
        <div className="grid md:grid-cols-2 gap-10 text-left text-sm">
          <div>
            <h3 className="font-bold mb-1">Created for Freelancers, Not Corporates</h3>
            <p className="text-gray-600">SwiftPitch is reserved for Upwork and Freelancer.com freelancers only, not for enterprise teams, nor for broad-based writing programs.</p>
          </div>
          <div>
            <h3 className="font-bold mb-1">Tailored, Not Templated</h3>
            <p className="text-gray-600">We don't do copy-paste. SwiftPitch scans through the job description and tailors your proposal to your resume, niche, and favorite tone.</p>
          </div>
          <div>
            <h3 className="font-bold mb-1">Fast without Being Generic</h3>
            <p className="text-gray-600">Your proposal is prepared in seconds, but doesn’t seem like it was. SwiftPitch blends speed and precision.</p>
          </div>
          <div>
            <h3 className="font-bold mb-1">Designed to Get You Hired</h3>
            <p className="text-gray-600">Whatever we do—customizing tone, analytics, stored history—is for the sole aim of helping you secure more freelance business.</p>
          </div>
          <div>
            <h3 className="font-bold mb-1">You’re in Charge</h3>
            <p className="text-gray-600">Use once or daily. Pay-as-you-go, free options, and upgrades let SwiftPitch fit into your schedule.</p>
          </div>
          <div>
            <h3 className="font-bold mb-1">Future-Ready</h3>
            <p className="text-gray-600">We’re just getting started. Expect support for more platforms, better matching, and full analytics dashboards.</p>
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section className="mt-24 text-center">
        <h2 className="text-2xl font-semibold mb-6">Simple Pricing</h2>
        <div className="grid md:grid-cols-4 gap-6 text-left text-sm">
          {[
            {
              name: "Free",
              price: "€0/month",
              features: [
                "3 AI-generated proposals per month",
                "No saved proposal history",
                "Limited tone and niche customization",
                "Access to Upwork and Freelancer.com"
              ]
            },
            {
              name: "Starter",
              price: "€7.99/month",
              features: [
                "15 proposals per month",
                "Save and reuse proposal history",
                "Customize tone and freelancer niche",
                "Basic support"
              ]
            },
            {
              name: "Pro",
              price: "€19.99/month",
              features: [
                "50 proposals per month",
                "All Starter features included",
                "Analytics on proposal performance",
                "Portfolio and resume integration",
                "Faster proposal generation"
              ]
            },
            {
              name: "Agency",
              price: "€49.99/month",
              features: [
                "200 proposals per month",
                "Multi-profile and account switching",
                "White-label proposals",
                "Exportable templates",
                "Premium customer support"
              ]
            }
          ].map((plan) => (
            <div
              key={plan.name}
              className="bg-gray-50 p-6 rounded-md border hover:shadow"
            >
              <h3 className="text-lg font-semibold">{plan.name}</h3>
              <p className="text-sm text-gray-700 mb-3">{plan.price}</p>
              <ul className="space-y-2 text-gray-600">
                {plan.features.map((f, i) => (
                  <li key={i}>• {f}</li>
                ))}
              </ul>
              <button className="mt-4 text-sm bg-brand text-white px-4 py-2 rounded hover:bg-[#005f6b]">
                Get Started
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* TESTIMONIAL */}
      <section className="mt-24 text-center max-w-2xl mx-auto">
        <blockquote className="italic text-gray-800 text-lg">
          "I’ve never written a proposal in my life. SwiftPitch made me sound like a pro in under 60 seconds. I didn’t think it would work—then I got hired."
        </blockquote>
        <p className="mt-4 text-gray-600 font-medium">— Dominique, Saint Louis MO</p>
      </section>

      {/* FAQ */}
      <section className="mt-24">
        <h2 className="text-2xl font-semibold text-center mb-8">Frequently Asked Questions</h2>
        <div className="grid md:grid-cols-2 gap-6 text-sm text-gray-700">
          <div>
            <h3 className="font-bold">What is SwiftPitch?</h3>
            <p>AI-generated proposals tailored to you and the job post in seconds.</p>
          </div>
          <div>
            <h3 className="font-bold">How is this different from templates?</h3>
            <p>Templates are generic. SwiftPitch is personalized, fast, and powerful.</p>
          </div>
          <div>
            <h3 className="font-bold">Will this help me win jobs?</h3>
            <p>It won't guarantee wins — but it improves relevance and response rates.</p>
          </div>
          <div>
            <h3 className="font-bold">Is an account required?</h3>
            <p>Nope. Try it free. Upgrade later if you want more features.</p>
          </div>
        </div>
      </section>
    </main>
  );
}
