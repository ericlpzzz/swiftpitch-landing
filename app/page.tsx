import Link from "next/link";

export default function Home() {
  return (
    <main className="text-gray-900 bg-white">
      {/* HERO */}
      <section className="min-h-[90vh] flex items-center justify-center text-center px-6 py-24">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Win More Jobs. Write Less.</h1>
          <p className="text-lg md:text-xl text-gray-600 mb-8">
            SwiftPitch creates AI-powered freelance proposals in seconds—tailored to your profile, tone, and the job you're applying for.
            <br />Skip the writing. Start getting replies.
          </p>
          <a href="#pricing" className="inline-block px-8 py-4 bg-brand text-white font-semibold rounded-md hover:bg-[#005f6b] transition">
            Try It Free
          </a>
        </div>
      </section>

      {/* BENEFITS */}
      <section className="bg-gray-50 py-20 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-12">Why SwiftPitch</h2>
          <div className="grid md:grid-cols-3 gap-8 text-left text-gray-700">
            <div>
              <h3 className="font-semibold mb-2">Built for Freelancers</h3>
              <p>Not for corporates or general AI tools. SwiftPitch is made for Upwork and Freelancer.com professionals.</p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Tailored, Not Templated</h3>
              <p>SwiftPitch analyzes the job, your resume, and niche to create a unique, compelling proposal—every time.</p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Fast Without Being Generic</h3>
              <p>Get proposals in seconds that feel personalized and high quality—not AI spam.</p>
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
      <section id="pricing" className="bg-gray-50 py-20 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-12">Pricing & Features</h2>
          <div className="grid md:grid-cols-4 gap-8 text-left">
            <div className="bg-white p-6 rounded border shadow-sm">
              <h3 className="font-bold text-lg mb-1">Free Plan</h3>
              <p className="text-gray-600 mb-4">€0/month</p>
              <ul className="text-sm space-y-2 text-gray-700 mb-4">
                <li>• 3 proposals/month</li>
                <li>• No saved history</li>
                <li>• Limited tone/niche</li>
                <li>• Upwork & Freelancer support</li>
              </ul>
              <button className="w-full py-2 bg-brand text-white rounded hover:bg-[#005f6b]">Get Started</button>
            </div>
            <div className="bg-white p-6 rounded border shadow-sm">
              <h3 className="font-bold text-lg mb-1">Starter</h3>
              <p className="text-gray-600 mb-4">€7.99/month</p>
              <ul className="text-sm space-y-2 text-gray-700 mb-4">
                <li>• 15 proposals/month</li>
                <li>• Save and reuse proposals</li>
                <li>• Customize tone/niche</li>
                <li>• Basic support</li>
              </ul>
              <button className="w-full py-2 bg-brand text-white rounded hover:bg-[#005f6b]">Get Started</button>
            </div>
            <div className="bg-white p-6 rounded border shadow-sm">
              <h3 className="font-bold text-lg mb-1">Pro</h3>
              <p className="text-gray-600 mb-4">€19.99/month</p>
              <ul className="text-sm space-y-2 text-gray-700 mb-4">
                <li>• 50 proposals/month</li>
                <li>• All Starter features</li>
                <li>• Analytics & integrations</li>
                <li>• Faster proposal generation</li>
              </ul>
              <button className="w-full py-2 bg-brand text-white rounded hover:bg-[#005f6b]">Get Started</button>
            </div>
            <div className="bg-white p-6 rounded border shadow-sm">
              <h3 className="font-bold text-lg mb-1">Agency</h3>
              <p className="text-gray-600 mb-4">€49.99/month</p>
              <ul className="text-sm space-y-2 text-gray-700 mb-4">
                <li>• 200 proposals/month</li>
                <li>• White-label & export</li>
                <li>• Multi-profile support</li>
                <li>• Premium support</li>
              </ul>
              <button className="w-full py-2 bg-brand text-white rounded hover:bg-[#005f6b]">Get Started</button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-6 text-center">
        <h2 className="text-2xl font-semibold mb-4">Got questions or feedback?</h2>
        <p className="text-gray-600">DM us on Reddit at <a href="https://reddit.com/u/Wizlea" className="text-brand underline">u/Wizlea</a></p>
        <p className="mt-4 text-sm text-gray-500">Want beta access? <a href="https://tally.so/r/w5Ye2M" className="underline">Sign up here</a>.</p>
      </section>
    </main>
  );
}
