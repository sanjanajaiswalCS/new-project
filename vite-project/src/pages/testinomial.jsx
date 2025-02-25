import React from 'react';
import { Star } from 'lucide-react';
import { Phone } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      text: "Fantastic AC repair service! My AC was cooling again in no time. Highly recommend!",
      author: "Rahul Mehta",
      location: "Andheri"
    },
    {
      text: "Best AC service near me! Quick and professional.",
      author: "Pooja Sharma",
      location: "Bandra"
    },
    {
      text: "The technician fixed my split AC efficiently. Great job!",
      author: "Amit Singh",
      location: "Navi Mumbai"
    },
    {
      text: "Emergency AC repair at 10 PM, and they arrived on time! Amazing service.",
      author: "Vikram Joshi",
      location: "Dadar"
    },
    {
      text: "Best AC installation service in Mumbai. My new AC was installed neatly and quickly.",
      author: "Rohan Patel",
      location: "Malad"
    },
    {
      text: "AC repair was done perfectly. It now works like new!",
      author: "Shreya Verma",
      location: "Powai"
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">
          What Our Customers Say
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Don't just take our word for it - hear from our satisfied customers
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-xl shadow-lg"
          >
            <div className="flex gap-1 mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            <p className="text-gray-700 mb-4">"{testimonial.text}"</p>
            <div className="flex items-center justify-between text-sm">
              <span className="font-semibold text-gray-900">{testimonial.author}</span>
              <span className="text-gray-500">{testimonial.location}</span>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-16 text-center">
        <a
          href="tel:18002022413"
          className="inline-flex items-center gap-2 bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors"
        >
          <Phone className="h-5 w-5" />
          Join our satisfied customers
        </a>
      </div>
    </div>
  );
};

export default Testimonials;  