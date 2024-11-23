import React from 'react';
import Image from 'next/image';
// import { ArrowRight } from 'lucide-react';

const HeroSection: React.FC = () => {
  return (
    <section className="relative w-full min-h-screen bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 flex items-center justify-center px-4 py-16">
      {/* <div className="absolute inset-0 opacity-10">
        <Image
          src="/images/network-background.jpg"
          alt=""
          layout="fill"
          objectFit="cover"
          quality={100}
        />
      </div> */}
      <div className="relative z-10 max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between">
        <div className="text-white text-center lg:text-left lg:w-1/2 mb-12 lg:mb-0">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold mb-4 tracking-tight">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-indigo-400">
              CADDRS
            </span>
          </h1>
          <p className="text-xl md:text-2xl font-medium mb-6 text-blue-200">
          Central Alternative Digital Dispute Resolution and Services
          </p>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">
            Resolve Disputes Online with Confidence
          </h2>
          <p className="text-lg md:text-xl mb-8 text-blue-100 max-w-xl mx-auto lg:mx-0">
            Experience efficient, affordable, and confidential conflict resolution in the digital age. Our platform empowers you to settle disputes smoothly.
          </p>
          <div className="flex flex-col sm:flex-row justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-4">
            <a
              href="/services"
              className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 md:text-lg transition duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-lg"
            >
              Our Services
              {/* <ArrowRight className="ml-2 -mr-1 h-5 w-5" /> */}
            </a>
            <a
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-blue-200 bg-blue-900 hover:bg-blue-800 md:text-lg transition duration-300 ease-in-out"
            >
              Contact Us
            </a>
          </div>
        </div>
        <div className="lg:w-1/2 flex justify-center lg:justify-end">
          <div className="relative w-full max-w-lg">
            <div className="absolute top-0 -left-4 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
            <div className="absolute top-0 -right-4 w-72 h-72 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
            <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
            <div className="relative">
              <Image
                src="/images/dispute-resolution-illustration.svg"
                alt="Online Dispute Resolution Illustration"
                width={500}
                height={500}
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

