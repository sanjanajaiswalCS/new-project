import React from 'react';
import { Phone } from 'lucide-react';
const Home = () => { 
  
  const sections = [
    {
      id: 'about',
      title: 'What We Do',
      content: 'We pride ourselves on being the go-to destination for all air conditioner needs. Our state-of-the-art facility, combined with our team of certified technician enables us to provide top-notch repair, maintenance, and installation services for all types of air conditioning units.',
      image: 'https://acservicesmumbai.com/wp-content/uploads/2024/10/6_7_11zon.webp',
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
      content: 'Our team of certified technicianis the backbone of our operation. With 10+ years of combined experience, they possess the knowledge and skills to tackle even the most complex air conditioning issues.',
      image: 'https://img.freepik.com/free-photo/coworkers-servicing-hvac-system_482257-91024.jpg',
      reverse: false
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 overflow-hidden lg:px-8 py-12">
   
        <meta name="description" content="Need fast AC repair? Call 1800-202-2413 for 24/7 emergency service. Our licensed techs provide reliable, affordable AC solutions. Customer satisfaction guaranteed!" />
        <meta 
        name="keywords" 
        content={` AC Service Center In Mumbai,  Air Conditioner Service Center,  Service Center,  AC Service Center Near Me,  Call Center,  Service Centre Number,  Authorised Service Centre,  AC Service Centre Near Me,  AC Service Centre Number,  Service Centre Near Me,  AC Call Centre,  AC Help Center,  AC Authorised Service Centre,  AC Service Center No, Service Center Of  AC,  Call Center Number, AC  Service Centre,  Authorised Service Center,  Service Centre Contact Number,  Service Centre Phone Number,  Service Center No,  AC Service Call Center,  AC Service Center Phone Number,  AC Call Center,  Authorized Service Centre,  AC Service Center Contact Number,  Authorised Service Centre Near Me,  AC Service Center Near Me Contact Number,  Company Service Centre,  AC Authorised Service Centre Near Me,  Service Centre AC,  Authorised Service Center Near Me,  AC Service Centre Phone Number,  Inverter AC Service Centre,  AC Customer Care,  AC Installation Customer Care,  AC Toll Free No,  AC Service Customer Care,  AC Customer Care No, Customer Care  AC,  Customer Care AC,  Customer Care Service,  Freezer Customer Care,  AC Toll Free, Customer Care No Of  AC,  AC Customer Care Service, AC  Customer Care,  Customer No,  AC Helpline No, Customer Care Of  AC,  Window AC Customer Care,  AC Repair Near Me,  AC Service Near Me`}
      /> <meta name="keywords" content="AC repair, emergency AC service, fast AC fix, air conditioning repair, 24/7 AC service" />
        <meta name="robots" content="index, follow" />
      
      <section className="text-center mb-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">
          Customer Service Center
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Your trusted partner for  air conditioning solutions
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
