import React from "react";

function About() {
  return (
    <div className="flex flex-col items-center justify-center  min-h-screen bg-gray-100 px-6 py-12">
      <div className="max-w-7xl  rounded-2xl p-8 text-center">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">About Us</h1>
        <p className="text-gray-600 text-lg leading-relaxed">
        Welcome to <a href="https://www.AtYourServiceSupport.com" className="font-semibold text-blue-600 underline" target="_blank" rel="noopener noreferrer">AtYourServiceSupport.com</a>, where exceptional service meets reliability. We are a team of dedicated professionals passionate about delivering top-notch solutions tailored to your needs. From routine maintenance to expert repairs, we ensure every job is done with precision and care. 
       </p>
        <p className="mt-4 text-gray-600 text-lg leading-relaxed">
          Our mission is simple—make your life easier with seamless, hassle-free service. With years of industry expertise, we blend skill, innovation, and customer-first values to provide outstanding results. No shortcuts, no compromises—just honest, high-quality work you can trust.
        </p>
        <p className="mt-4 text-lg text-gray-800 font-semibold">
          <span className="text-blue-600">At Your Service</span> isn’t just our name—it’s our promise.
        </p>
        </div>
        <div className="max-w-7xl  rounded-2xl p-8 text-center">

        <h2 className="text-2xl font-bold text-gray-800 mt-10">Terms of Service</h2>
        <p className="text-gray-600 text-lg mt-2">Effective Date: 10 March 2025</p>
        
        <div className="text-left text-gray-600  space-y-4">
          <h3 className="text-xl font-semibold text-gray-800">1. Introduction</h3>
          <p>Welcome to AtYourServiceSupport.com. These Terms of Service (“Terms”) govern your use of our website and services (“Services”). By accessing or using our Services, you agree to comply with these Terms. If you do not agree, please do not use our Services.</p>
          
          <h3 className="text-xl font-semibold text-gray-800">2. Services Offered</h3>
          <p>We provide professional servicing, maintenance, and repair solutions. The availability of our services may vary based on location and scheduling.</p>
          
          <h3 className="text-xl font-semibold text-gray-800">3. User Responsibilities</h3>
          <ul className="list-disc ml-6">
            <li>Provide accurate and up-to-date personal and contact information.</li>
            <li>Ensure accessibility for scheduled service appointments.</li>
            <li>Make full payment for services rendered as per the agreed terms.</li>
            <li>Refrain from engaging in fraudulent or unlawful activities.</li>
          </ul>
          
          <h3 className="text-xl font-semibold text-gray-800">4. Booking and Payments</h3>
          <ul className="list-disc ml-6">
            <li>Service appointments can be booked through our website or customer support.</li>
            <li>Payment terms will be provided before service confirmation.</li>
            <li>We accept various payment methods, including credit/debit cards and online transfers.</li>
            <li>Cancellations or rescheduling must be requested at least 12hours     in advance.</li>
          </ul>
          
          <h3 className="text-xl font-semibold text-gray-800">5. Warranty and Liability</h3>
          <ul className="list-disc ml-6">
            <li>We provide a limited warranty for our services, subject to specific conditions.</li>
            <li>We are not responsible for any pre-existing damages to serviced items.</li>
            <li>Liability for any direct or indirect damages is limited to the total amount paid for the service.</li>
          </ul>
          
          <h3 className="text-xl font-semibold text-gray-800">6. Service Limitations</h3>
          <p>We reserve the right to refuse or cancel services due to safety concerns, unavailability of parts, or violation of these Terms.</p>
          
          <h3 className="text-xl font-semibold text-gray-800">7. Privacy Policy</h3>
          <p>Your use of our Services is also governed by our Privacy Policy, available <a href="https://www.AtYourServiceSupport.com/privacy" className="font-semibold text-blue-600 underline" target="_blank" rel="noopener noreferrer">here</a>.</p>
          
          <h3 className="text-xl font-semibold text-gray-800">8. Changes to Terms</h3>
          <p>We may update these Terms periodically. Any changes will be posted on this page with an updated effective date.</p>
          
          <h3 className="text-xl font-semibold text-gray-800">9. Contact Us</h3>
          <p>For any questions or concerns regarding these Terms, please contact us at [1800-202-2413].</p>
        </div>
      </div>
    </div>
  );
}

export default About;
