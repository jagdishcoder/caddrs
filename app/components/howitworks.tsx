// components/HowItWorks.tsx
import React from 'react';
import { FaRegFileAlt, FaCheckCircle, FaComments, FaHandshake } from 'react-icons/fa';

const HowItWorks: React.FC = () => {
  const steps = [
    {
      icon: <FaRegFileAlt className="h-12 w-12 text-blue-500" />,
      title: "Submit Your Dispute",
      description: "Provide us with the details of your dispute to begin the resolution process.",
    },
    {
      icon: <FaCheckCircle className="h-12 w-12 text-blue-500" />,
      title: "Select Resolution Method",
      description: "Choose from various resolution methods tailored to your needs.",
    },
    {
      icon: <FaComments className="h-12 w-12 text-blue-500" />,
      title: "Communicate with Mediator",
      description: "Engage in a discussion with a qualified mediator to resolve your dispute.",
    },
    {
      icon: <FaHandshake className="h-12 w-12 text-blue-500" />,
      title: "Resolve and Conclude",
      description: "Achieve a mutually satisfactory resolution and close the dispute.",
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">How It Works</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="text-center p-6 bg-gray-50 rounded-lg shadow-md hover:shadow-lg transition duration-300">
              <div className="flex justify-center mb-4">{step.icon}</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
