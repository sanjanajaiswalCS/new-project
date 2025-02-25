import React from 'react';
import { Phone, Mail, Clock, MapPin } from 'lucide-react';

const Contact = () => {
  const contactInfo = [
    {
      icon: <Phone className="h-6 w-6" />,
      title: "Call Us",
      content: "1800-202-2413",
      action: "tel:18002022413",
      buttonText: "Call Now"
    },
    {
      icon: <Mail className="h-6 w-6" />,
      title: "Email Us",
      content: "at@atyourservicesupport.com",
      action: "mailto:at@atyourservicesupport.com",
      buttonText: "Send Email"
    },
    {
      icon: <Clock className="h-6 w-6" />,
      title: "Working Hours",
      content: "24/7 Emergency Service",
      special: true
    },
    {
      icon: <MapPin className="h-6 w-6" />,
      title: "Service Areas",
      content: "All Over Mumbai",
      special: true
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">Contact Us</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Get in touch with us today for professional AC services
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
        {contactInfo.map((info, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-xl shadow-lg text-center"
          >
            <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-100 text-blue-600 rounded-full mb-4">
              {info.icon}
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              {info.title}
            </h3>
            <p className="text-gray-600 mb-4">{info.content}</p>
            {!info.special && (
              <a
                href={info.action}
                className="inline-flex items-center justify-center w-full gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
              >
                {info.buttonText}
              </a>
            )}
          </div>
        ))}
      </div>

      <div className="bg-blue-600 rounded-2xl p-12 text-center text-white">
        <h2 className="text-3xl font-bold mb-6">Need Immediate Assistance?</h2>
        <p className="text-xl mb-8">
          Our expert technicians are ready to help you 24/7
        </p>
        <a
          href="tel:18002022413"
          className="inline-flex items-center gap-2 bg-white text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors"
        >
          <Phone className="h-5 w-5" />
          CALL NOW 1800-202-2413
        </a>
      </div>
    </div>
  );
};

export default Contact;
