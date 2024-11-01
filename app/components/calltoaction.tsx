// components/CallToAction.tsx
import React from 'react';

const CallToAction: React.FC = () => {
  return (
    <section className="py-16 bg-blue-500 text-white">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold mb-4">Ready to Resolve Your Dispute?</h2>
        <p className="mb-8 text-lg">
          Our platform provides a seamless and efficient way to resolve your conflicts. Get started today for a smoother resolution process!
        </p>
        <a href="/contact" className="inline-block bg-white text-blue-500 font-semibold py-3 px-6 rounded-lg shadow-md transition duration-300 hover:bg-gray-100">
          Get Started
        </a>
      </div>
    </section>
  );
};

export default CallToAction;
