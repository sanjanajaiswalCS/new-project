import React from 'react';
import { Phone } from 'lucide-react';
import Testimonials from './testinomial';

const Services = () => {
  const services = [
    {
      title: 'AC Installation',
      image: 'https://t4.ftcdn.net/jpg/02/88/99/55/360_F_288995567_tlJhRceJcPolVLyYyTAXRFPKjftZTYQD.jpg',
      description: 'Seamless installations tailored to your home\'s unique setup.',
      features: [
        'Assess the ideal placement for optimal cooling',
        'Conduct a professional, standards-compliant installation',
        'Perform thorough post-installation testing and training'
      ]
    },
    {
      title: 'AC Repair',
      image: 'https://5.imimg.com/data5/SELLER/Default/2023/3/EW/SZ/SJ/94561917/air-conditioner-maintenance-service-500x500.PNG',
      description: 'Trust over 10 years of experience for quick and lasting repairs.',
      features: [
        'Professional repairs to restore your AC\'s efficiency',
        'We diagnose and resolve issues using high-quality tools and parts',
        'Test thoroughly to ensure complete resolution'
      ]
    },
    {
      title: 'AC Servicing',
      image: 'https://static.vecteezy.com/system/resources/thumbnails/016/273/822/small_2x/air-conditioning-cleaning-service-with-water-spray-photo.jpg',
      description: 'Regular servicing to enhance AC efficiency.',
      features: [
        'Cleaning, refrigerant checks, and lubrication',
        'Proactive system diagnostics and repairs',
        'Regular maintenance to keep your AC running smoothly'
      ]
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">Our Services</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Professional AC services delivered by certified technicians
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <div 
            key={index}
            className="bg-white rounded-xl shadow-lg overflow-hidden transition-transform hover:scale-105"
          >
            <img
              src={service.image}
              alt={service.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
              <p className="text-gray-600 mb-4">{service.description}</p>
              <ul className="space-y-2 mb-6">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-gray-700">
                    <span className="text-green-500 mr-2">✓</span>
                    {feature}
                  </li>
                ))}
              </ul>
              <a
                href="tel:18002022413"
                className="inline-flex items-center justify-center w-full gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
              >
                <Phone className="h-4 w-4" />
                <span>Book Now</span>
              </a>
            </div>
          </div>
        ))}
      </div>
      <Testimonials />
    </div>

  );
};

export default Services;