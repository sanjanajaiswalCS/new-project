import React from 'react';
import { Star } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      text: "AC was fully functional in zero time with proper servicing. Would recommend to others",
      author: "Rahul Mehta",
      location: "Andheri",
      rating: 4.5, // Rating between 4 and 5
    },
    {
      text: "Serviced my AC and it got ready in 45 minutes. Amazing service",
      author: "Pooja Sharma",
      location: "Bandra",
      rating: 4, // Rating between 4 and 5
    },
    {
      text: "Nice work! The technician has fixed my split AC unit in no time.",
      author: "Amit Singh",
      location: "Navi Mumbai",
      rating: 4, // Rating between 4 and 5
    },
    {
      text: "I received AC service at my home pretty late - around 10 PM. They turned up on time and did wonderful work.",
      author: "Vikram Joshi",
      location: "Dadar",
      rating: 4.5, // Rating between 4 and 5
    },
    {
      text: "The AC installment service is the best in Mumbai. The new AC unit was set up into my living room flawlessly.",
      author: "Rohan Patel",
      location: "Malad",
      rating: 5, // Rating between 4 and 5
    },
    {
      text: "The AC repair was done fast. It works as good as new.",
      author: "Shreya Verma",
      location: "Powai",
      rating: 4, // Rating between 4 and 5
    },
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
          <div key={index} className="bg-white p-6 rounded-xl shadow-lg">
            {/* Star Rating */}
            <div className="flex gap-1 mb-4">
              {[...Array(5)].map((_, i) => {
                const starValue = i + 1; // Star value (1 to 5)
                const rating = testimonial.rating; // Rating for this testimonial

                if (rating >= starValue) {
                  // Fully filled star
                  return <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />;
                } else if (rating >= starValue - 0.5) {
                  // Half-filled star
                  return <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />;
                } else {
                  // Empty star
                  return <Star key={i} className="h-5 w-5 fill-gray-300 text-gray-300" />;
                }
              })}
            </div>

            {/* Testimonial Text */}
            <p className="text-gray-700 mb-4">"{testimonial.text}"</p>

            {/* Author and Location */}
            <div className="flex items-center justify-between text-sm">
              <span className="font-semibold text-gray-900">{testimonial.author}</span>
              <span className="text-gray-500">{testimonial.location}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;