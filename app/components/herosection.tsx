// components/HeroSection.tsx
import React from 'react';

const HeroSection: React.FC = () => {
  return (
    <section className="relative w-full h-screen bg-cover bg-center bg-no-repeat flex items-center justify-center text-center" style={{ backgroundImage: "url('/images/hero-background.jpg')" }}>
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative z-10 max-w-3xl px-6 text-white">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
          Resolve Disputes with Ease and Efficiency
        </h1>
        <p className="text-lg md:text-xl lg:text-2xl mb-8">
          Our platform helps you settle conflicts smoothly, affordably, and confidentially.
        </p>
        <a
          href="/contact"
          className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-md text-lg transition duration-300"
        >
          Get Started
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
