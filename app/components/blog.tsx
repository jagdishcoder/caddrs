// components/ResourcesBlog.tsx
import React from 'react';

interface Resource {
  title: string;
  description: string;
  link: string;
}

const resources: Resource[] = [
  {
    title: 'Understanding Mediation: A Complete Guide',
    description: 'Learn what mediation is and how it can help resolve disputes effectively.',
    link: '/resources/understanding-mediation',
  },
  {
    title: 'Your Rights as a Consumer',
    description: 'Find out your rights as a consumer and how to protect them.',
    link: '/resources/consumer-rights',
  },
  {
    title: 'Negotiation Tips for Successful Outcomes',
    description: 'Essential tips and techniques to improve your negotiation skills.',
    link: '/resources/negotiation-tips',
  },
];

const recentPosts: Resource[] = [
  {
    title: '5 Common Disputes and How to Resolve Them',
    description: 'Explore common disputes and effective ways to resolve them.',
    link: '/blog/common-disputes',
  },
  {
    title: 'The Benefits of Online Dispute Resolution',
    description: 'Why online dispute resolution is becoming increasingly popular.',
    link: '/blog/benefits-of-odr',
  },
  {
    title: 'How to Choose the Right Mediator',
    description: 'Key factors to consider when selecting a mediator for your dispute.',
    link: '/blog/choosing-a-mediator',
  },
];

const ResourcesBlog: React.FC = () => {
  return (
    <section className="py-16 bg-gray-100">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Resources & Blog</h2>
        
        <div className="mb-12">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">Helpful Resources</h3>
          <div className="space-y-4">
            {resources.map((resource, index) => (
              <div key={index} className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition duration-300">
                <h4 className="text-xl font-semibold text-gray-800">
                  <a href={resource.link} className="hover:text-blue-600">{resource.title}</a>
                </h4>
                <p className="text-gray-600">{resource.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">Recent Blog Posts</h3>
          <div className="space-y-4">
            {recentPosts.map((post, index) => (
              <div key={index} className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition duration-300">
                <h4 className="text-xl font-semibold text-gray-800">
                  <a href={post.link} className="hover:text-blue-600">{post.title}</a>
                </h4>
                <p className="text-gray-600">{post.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResourcesBlog;
