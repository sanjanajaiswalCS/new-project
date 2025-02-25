import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12 mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h3 className="text-lg font-semibold mb-4">Money Back Policy</h3>
          <p className="text-gray-400">
            In the highly unlikely event that we are not able to fix your appliance, even for reasons beyond our control, we will refund the money.
          </p>
        </div>
        
        <div className="border-t border-gray-800 pt-8">
          <p className="text-sm text-gray-400 mb-4">
            Disclaimer: At Your Service Support is an independent service provider and not an authorized dealer or representative of any brand. All trademarks and brand names belong to their respective owners.
          </p>
          <p className="text-sm text-gray-400 mb-4">
            Our services are not affiliated with or endorsed by any manufacturer, and we are not responsible for warranty voidance or brand-specific claims. For official support, please contact the authorized service center.
          </p>
          <p className="text-sm text-gray-400 mb-4">
            All products are trademarks™ or registered® trademarks of their respective holders. Use of them does not imply any affiliation/endorsement by them with us.
          </p>
          <p className="text-sm text-gray-500">
            Copyright © At Your Service Support {new Date().getFullYear()} | Powered by At Your Service Support
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;