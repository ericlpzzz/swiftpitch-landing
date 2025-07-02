import "./globals.css";

export const metadata = {
  title: "SwiftPitch",
  description: "AI proposals that win freelance jobs — fast."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-white text-gray-900">
        <nav className="flex justify-between items-center px-6 py-4 shadow">
          <a href="/" className="text-lg font-bold text-brand">SwiftPitch</a>
          <div className="space-x-4 text-sm">
            <a href="/analyzer" className="hover:underline">Job Analyzer</a>
            <a href="/proposal-generator" className="hover:underline">Proposal Generator</a>
            <a href="/about" className="hover:underline">About</a>
          </div>
        </nav>
        {children}
        <footer className="text-center text-xs text-gray-600 py-10 border-t mt-12">
          <p>© 2025 SwiftPitch · <a href="/terms" className="underline">Terms</a> · <a href="/privacy" className="underline">Privacy</a></p>
          <p className="mt-1">Questions? DM us on Reddit: <a href="https://reddit.com/u/Wizlea" className="text-brand underline">u/Wizlea</a></p>
        </footer>
      </body>
    </html>
  );
}
