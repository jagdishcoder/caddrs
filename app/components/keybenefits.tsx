// components/KeyBenefits.tsx
import { FaMoneyBillWave, FaShieldAlt, FaMobileAlt, FaUserFriends } from 'react-icons/fa';
import React from "react";

const KeyBenefits: React.FC = () => {
  const benefits = [
    {
      icon: <FaMoneyBillWave className="h-12 w-12 text-blue-500" />,
      title: "Affordable",
      description: "Cost-effective solutions for resolving disputes.",
    },
    {
      icon: <FaShieldAlt className="h-12 w-12 text-blue-500" />,
      title: "Quick and Confidential",
      description: "Your privacy is our priority, with fast dispute resolutions.",
    },
    {
      icon: <FaMobileAlt className="h-12 w-12 text-blue-500" />,
      title: "Easy-to-Use Interface",
      description: "User-friendly platform accessible on all devices.",
    },
    {
      icon: <FaUserFriends className="h-12 w-12 text-blue-500" />,
      title: "Trusted Experts",
      description: "Work with experienced professionals in dispute resolution.",
    },
  ];

  return (
    <section className="py-16 bg-gray-100">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Why Choose Us</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="text-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition duration-300">
              <div className="flex justify-center mb-4">{benefit.icon}</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">{benefit.title}</h3>
              <p className="text-gray-600">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default KeyBenefits;
