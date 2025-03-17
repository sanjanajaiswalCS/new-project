import React from "react";

function Privacy() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 px-6 py-12">
      <div className="max-w-7xl  shadow-lg rounded-2xl p-8 text-center">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">Privacy Policy</h1>
        <p className="text-gray-600 text-lg">Effective Date: 10th March 2025</p>

        <div className="text-left text-gray-600 mt-4 space-y-4">
          <h3 className="text-xl font-semibold text-gray-800">1. Introduction</h3>
          <p>Welcome to AtYourServiceSupport.com. We respect your privacy and are committed to protecting it through this Privacy Policy.</p>

          <h3 className="text-xl font-semibold text-gray-800">2. Information We Collect</h3>
          <ul className="list-disc ml-6">
            <li>Personal Information: Name, email, phone number, billing info, and service preferences.</li>
            <li>Service Information: Requested services, scheduled appointments, and transaction history.</li>
            <li>Technical Data: IP address, browser type, device details, and cookies.</li>
            <li>User Communications: Feedback, reviews, and support interactions.</li>
          </ul>

          <h3 className="text-xl font-semibold text-gray-800">3. How We Use Your Information</h3>
          <ul className="list-disc ml-6">
            <li>Operate and maintain our Services.</li>
            <li>Facilitate service requests and manage appointments.</li>
            <li>Personalize user experience and communicate updates.</li>
            <li>Detect and prevent fraud or security breaches.</li>
          </ul>

          <h3 className="text-xl font-semibold text-gray-800">4. Sharing of Information</h3>
          <p>We do not sell or rent your personal information but may share it with service providers, legal authorities, and payment processors.</p>

          <h3 className="text-xl font-semibold text-gray-800">5. Data Security</h3>
          <p>We implement security measures to protect your information, but no method is 100% secure.</p>

          <h3 className="text-xl font-semibold text-gray-800">6. Your Rights and Choices</h3>
          <ul className="list-disc ml-6">
            <li>Access, update, or delete your personal information.</li>
            <li>Opt-out of marketing communications.</li>
            <li>Request a copy of your data.</li>
          </ul>

          <h3 className="text-xl font-semibold text-gray-800">7. Cookies and Tracking</h3>
          <p>We use cookies to improve user experience. You can manage cookie settings through your browser.</p>

          <h3 className="text-xl font-semibold text-gray-800">8. Third-Party Links</h3>
          <p>We are not responsible for the privacy policies of third-party websites linked from our site.</p>

          <h3 className="text-xl font-semibold text-gray-800">9. Changes to This Policy</h3>
          <p>We may update this Privacy Policy periodically, and changes will be posted here.</p>

          <h3 className="text-xl font-semibold text-gray-800">10. Contact Us</h3>
          <p>For privacy-related inquiries, contact us at [1800-202-2413].</p>
        </div>
      </div>
    </div>
  );
}

export default Privacy;
