import React from 'react';
import Image from 'next/image';
import { Scale, Users, Gavel, Globe, Briefcase, Users2 } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
// import { Badge } from "@/components/ui/badge"

const founders = [
  {
    name: 'Mrs. Radha Srinivasan',
    role: 'Founder',
    image: '/images/radha-srinivasan.jpg',
  },
  {
    name: 'Mr. Mrityunjay Dutta Banik',
    role: 'Founder',
    image: '/images/mrityunjay-dutta-banik.jpg',
  },
];

const services = [
  { icon: Scale, title: 'Online Dispute Resolution (ODR)' },
  { icon: Users2, title: 'Alternative Dispute Resolution (ADR)' },
  { icon: Users, title: 'Mediation' },
  { icon: Briefcase, title: 'Conciliation' },
  { icon: Gavel, title: 'Litigation' },
];

const AboutSection: React.FC = () => {
  return (
    <section className="bg-gradient-to-b from-gray-50 to-white py-24">
      <div className="container mx-auto px-4 space-y-24">
        <div className="text-center">
          <h1 className="text-5xl font-bold mb-6 text-gray-900">About Us</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            CADDRS: Pioneering the future of legal technology and dispute resolution
          </p>
        </div>

        <Card className="overflow-hidden">
          <CardHeader className="bg-blue-600 text-white p-6">
            <CardTitle className="text-3xl font-semibold">Our Philosophy</CardTitle>
          </CardHeader>
          <CardContent className="p-8">
            <blockquote className="italic text-gray-700 border-l-4 border-blue-500 pl-6 mb-6 text-xl">
              &quot;Genuine tragedies in the world are not conflicts between right and wrong. They are conflicts between two rights.&quot;
              <footer className="text-gray-600 mt-2 text-lg">- Hegel</footer>
            </blockquote>
            <p className="text-xl text-gray-700 leading-relaxed">
              The zeal, enthusiasm, courage, and dedication that &quot;I want to do something&quot; leads to this firm. During such conflicts, mediation is required to protect both parties&apos; interests and resolve disputes through settlement and mediation.
            </p>
          </CardContent>
        </Card>

        <div className="grid md:grid-cols-2 gap-12">
          <Card className="overflow-hidden transition-all duration-300 hover:shadow-lg">
            <CardHeader className="bg-green-600 text-white p-6">
              <CardTitle className="text-3xl font-semibold">Our Vision</CardTitle>
            </CardHeader>
            <CardContent className="p-8">
              <p className="text-xl text-gray-700 leading-relaxed">
                We aspire to be a renowned law tech service provider with an online and digital platform through ODR (Online Dispute Resolution).
              </p>
            </CardContent>
          </Card>
          <Card className="overflow-hidden transition-all duration-300 hover:shadow-lg">
            <CardHeader className="bg-purple-600 text-white p-6">
              <CardTitle className="text-3xl font-semibold">Our Mission</CardTitle>
            </CardHeader>
            <CardContent className="p-8">
              <p className="text-xl text-gray-700 leading-relaxed">
                Our mission is to work on the resolution of global techno-legal disputes and provide global digital legal services. As technology improves and the legal landscape changes drastically, it&apos;s necessary for conflicts to be resolved or mediated in a short span of time.
              </p>
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardHeader className="bg-indigo-600 text-white p-6">
            <CardTitle className="text-3xl font-semibold">What We Do</CardTitle>
          </CardHeader>
          <CardContent className="p-8">
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <div key={index} className="flex items-center space-x-4 bg-gray-50 p-4 rounded-xl transition-all duration-300 hover:bg-gray-100">
                  <service.icon className="w-10 h-10 text-indigo-600" />
                  <span className="text-gray-800 font-medium">{service.title}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="bg-orange-600 text-white p-6">
            <CardTitle className="text-3xl font-semibold">About ODR</CardTitle>
          </CardHeader>
          <CardContent className="p-8">
            <p className="text-xl text-gray-700 leading-relaxed mb-6">
              Online Dispute Resolution (ODR) is a concept that primarily involves using information and communication technology (ICT) tools to simplify the resolution of disputes without being physically present. ODR is revolutionizing the Indian justice system by making dispute resolution more accessible, cost-effective, and efficient.
            </p>
            <h3 className="text-2xl font-semibold mb-4 text-gray-800">Key benefits of ODR include:</h3>
            <ul className="list-disc list-inside text-xl text-gray-700 space-y-3">
              <li>Cost-effectiveness compared to traditional court proceedings</li>
              <li>Convenience and quicker resolution of disputes</li>
              <li>Customizable processes to suit specific case requirements</li>
              <li>Encouragement of dispute resolution by removing physical barriers</li>
              <li>Reduction of implicit biases in the resolution process</li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="bg-teal-600 text-white p-6">
            <CardTitle className="text-3xl font-semibold">Our Team</CardTitle>
          </CardHeader>
          <CardContent className="p-8">
            <div className="grid md:grid-cols-2 gap-12 mb-12">
              {founders.map((founder) => (
                <div key={founder.name} className="text-center">
                  <div className="relative w-64 h-64 mx-auto mb-6 rounded-full overflow-hidden shadow-lg">
                    <Image
                      src={founder.image}
                      alt={founder.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <h3 className="text-2xl font-semibold text-gray-800">{founder.name}</h3>
                  <p className="text-xl text-gray-600">{founder.role}</p>
                </div>
              ))}
            </div>
            <p className="text-xl text-gray-700 leading-relaxed text-center">
              CADDRS is founded by professionals and family friends Mrs. Radha Srinivasan and Mr. Mrityunjay Dutta Banik. We have a dedicated team of professional legal and IT experts who understand individual and corporate requirements.
            </p>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-r from-blue-600 to-blue-800 text-white overflow-hidden">
          <CardContent className="p-10 text-center">
            <h3 className="text-3xl font-semibold mb-6">Our Goal</h3>
            <p className="text-xl leading-relaxed mb-8">
              CADDRS started with a mission to be a Global leader in Legal and Technology with the process of ODR.
            </p>
            <div className="flex justify-center items-center space-x-3">
              <Globe className="w-8 h-8" />
              <span className="text-2xl font-medium">Global Leader in Legal Technology</span>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default AboutSection;

