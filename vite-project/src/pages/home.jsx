import React from 'react';
import { Phone } from 'lucide-react';

const Home = () => {
  const sections = [
    {
      id: 'about',
      title: 'At Our Air Conditioner Service Center',
      content: 'We pride ourselves on being the go-to destination for all air conditioner needs. Our state-of-the-art facility, combined with our team of expert technicians, enables us to provide top-notch repair, maintenance, and installation services for all types of air conditioning units.',
      image: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&q=80&w=800',
      reverse: false
    },
    {
      id: 'story',
      title: 'Our Story',
      content: 'Founded on the principles of quality, integrity, and customer satisfaction, At Your Service Support has been serving the community for 10 years. Our journey began with a simple goal: to provide reliable and efficient air conditioning solutions that make life easier.',
      image: 'https://5.imimg.com/data5/JF/FW/MY-30394071/ac-installation-services-500x500.jpg',
      reverse: true
    },
    {
      id: 'team',
      title: 'Our Team',
      content: 'Our team of expert technicians is the backbone of our operation. With 10+ years of combined experience, they possess the knowledge and skills to tackle even the most complex air conditioning issues.',
      image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&q=80&w=800',
      reverse: false
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 overflow-hidden lg:px-8 py-12">
      <section className="text-center mb-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">
          Welcome to Air Conditioner Service Support
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Your trusted partner for all air conditioning solutions
        </p>
      </section>

      {sections.map((section) => (
        <section 
          key={section.id}
          className={`flex flex-col md:flex-row items-center gap-12 py-16 ${
            section.reverse ? 'md:flex-row-reverse' : ''
          }`}
        >
          <div className="flex-1">
            <img
              src={section.image}
              alt={section.title}
              className="rounded-lg shadow-xl w-full h-[400px] object-cover"
            />
          </div>
          <div className="flex-1">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              {section.title}
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              {section.content}
            </p>
          </div>
        </section>
      ))}

      <section className="bg-blue-600 rounded-2xl p-12 text-center text-white mt-16">
        <h2 className="text-3xl font-bold mb-6">Need More Help?</h2>
        <p className="text-xl mb-8">Connect instantly with our Support Team</p>
        <a
          href="tel:18002022413"
          className="inline-flex items-center gap-2 bg-white text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors"
        >
          <Phone className="h-5 w-5" />
          CALL NOW 1800-202-2413
        </a>
      </section>
    </div>
  );
};

export default Home;
