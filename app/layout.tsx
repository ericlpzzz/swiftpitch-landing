import "./globals.css";
import Head from "next/head";
import Link from "next/link";

export const metadata = {
  title: "SwiftPitch",
  description: "AI-powered freelance proposals for Upwork and Freelancer.com"
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="SwiftPitch helps freelancers generate smarter proposals, faster — powered by AI." />
        <meta property="og:title" content="SwiftPitch – Win More Freelance Jobs" />
        <meta property="og:description" content="AI-powered proposals tailored to your profile, tone, and niche. Built for Upwork & Fiverr." />
        <meta property="og:image" content="/og-image.png" />
        <meta property="og:url" content="https://swiftpitch-landing.vercel.app/" />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <body className="bg-white text-gray-900 font-sans">
        <header className="border-b">
          <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
            <Link href="/" className="flex items-center space-x-2">
              <img src="/logo.png" alt="SwiftPitch Logo" className="h-7 w-auto" />
              <span className="text-xl font-semibold text-brand">SwiftPitch</span>
            </Link>
            <nav className="space-x-6 text-sm text-gray-700">
              <Link href="/analyzer">Analyzer</Link>
              <Link href="/proposal-generator">Proposal Generator</Link>
              <Link href="/about">About</Link>
            </nav>
          </div>
        </header>

        <main>{children}</main>

        <footer className="border-t mt-10">
          <div className="max-w-6xl mx-auto px-6 py-6 text-sm text-gray-600 flex flex-col sm:flex-row justify-between items-center">
            <p>© {new Date().getFullYear()} SwiftPitch. All rights reserved.</p>
            <div className="space-x-4 mt-2 sm:mt-0">
              <Link href="/terms">Terms</Link>
              <Link href="/privacy">Privacy</Link>
              <a href="https://reddit.com/u/Wizlea" target="_blank" rel="noopener noreferrer">Contact</a>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
