import React from 'react';
import Image from 'next/image';
import { Users, Scale, Gavel, Globe } from 'lucide-react';

const AboutSection: React.FC = () => {
  return (
    <section className="py-16 bg-gradient-to-b from-white to-blue-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">About CADDRS</h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            The zeal, enthusiasm, courage, and dedication that &quot;I want to do something&quot; leads to this firm.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-gray-800">Our Philosophy</h3>
            <blockquote className="italic text-gray-600 border-l-4 border-blue-500 pl-4">
              &quot;Genuine tragedies in the world are not conflicts between right and wrong. They are conflicts between two rights.&quot;
              <footer className="text-gray-500 mt-2">- Hegel</footer>
            </blockquote>
            <p className="text-gray-600">
              During such conflicts, mediation is required to protect both parties&apos; interests and resolve disputes through settlement and mediation.
            </p>
          </div>
          <div className="relative h-64 md:h-auto">
            <Image
              src="/images/mediation-illustration.svg"
              alt="Mediation Illustration"
              layout="fill"
              objectFit="contain"
              className="rounded-lg"
            />
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-8 mb-16">
          <h3 className="text-2xl font-semibold text-gray-800 mb-6">What We Do</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: Scale, title: 'Online Dispute Resolution (ODR)' },
              { icon: Users, title: 'Alternative Dispute Resolution (ADR)' },
              { icon: Users, title: 'Mediation' },
              { icon: Users, title: 'Conciliation' },
              { icon: Gavel, title: 'Litigation' },
            ].map((item, index) => (
              <div key={index} className="flex items-center space-x-4">
                <item.icon className="w-8 h-8 text-blue-500" />
                <span className="text-gray-700">{item.title}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div className="order-2 md:order-1 relative h-64 md:h-auto">
            <Image
              src="/images/team-illustration.svg"
              alt="Team Illustration"
              layout="fill"
              objectFit="contain"
              className="rounded-lg"
            />
          </div>
          <div className="order-1 md:order-2 space-y-6">
            <h3 className="text-2xl font-semibold text-gray-800">Our Team</h3>
            <p className="text-gray-600">
              CADDRS is founded by professionals and family friends Mrs. Radha Srinivasan and Mr. Mrityunjay Dutta Banik. We have a dedicated team of professional legal and IT experts who understand individual and corporate requirements.
            </p>
          </div>
        </div>

        <div className="bg-blue-600 text-white rounded-xl p-8 text-center">
          <h3 className="text-2xl font-semibold mb-4">Our Mission</h3>
          <p className="text-lg leading-relaxed mb-6">
            As technology improves and the legal landscape changes drastically, it&apos;s necessary for conflicts to be resolved or mediated in a short span of time. CADDRS started with a mission to be a Global leader in Legal and Technology with the process of ODR.
          </p>
          <div className="flex justify-center items-center space-x-2">
            <Globe className="w-6 h-6" />
            <span className="text-xl font-medium">Global Leader in Legal Technology</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

