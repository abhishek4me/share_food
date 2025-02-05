import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <div className="relative bg-white pt-20">
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1488459716781-31db52582fe9?auto=format&fit=crop&q=80"
          alt="Food donation background"
          className="w-full h-full object-cover opacity-10"
        />
      </div>
      
      <div className="relative z-10 container mx-auto px-4 py-32">
        <div className="max-w-3xl">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Share Food, <span className="text-rose-500">Share Love</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Join our mission to reduce food waste and feed those in need. 
            Every donation makes a difference in someone's life.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="px-8 py-4 bg-rose-500 text-white rounded-lg hover:bg-rose-600 flex items-center justify-center">
              Start Donating
              <ArrowRight className="ml-2 h-5 w-5" />
            </button>
            <button className="px-8 py-4 border-2 border-rose-500 text-rose-500 rounded-lg hover:bg-rose-50">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;