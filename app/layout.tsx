import "./globals.css";
import Head from "next/head";

export const metadata = {
  title: "SwiftPitch",
  description: "AI proposals that win freelance jobs — fast."
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
      <body className="bg-white text-gray-900">
        {/* nav + content + footer */}
        ...
      </body>
    </html>
  );
}
