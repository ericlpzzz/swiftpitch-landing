export default function Privacy() {
  return (
    <main className="max-w-2xl mx-auto px-6 py-20 text-sm">
      <h1 className="text-2xl font-bold mb-4">Privacy Policy</h1>
      <p className="text-gray-700 mb-4">
        SwiftPitch respects your privacy. We don’t sell your data. We only collect:
      </p>
      <ul className="list-disc pl-5 text-gray-700 space-y-2 mb-6">
        <li>Your email (if you join the waitlist)</li>
        <li>Your usage data (via analytics)</li>
        <li>Anything you paste (not stored unless you save it)</li>
      </ul>
      <p className="text-gray-700">
        You can contact us anytime at <span className="underline">support@swiftpitch.ai</span>.
      </p>
    </main>
  );
}
