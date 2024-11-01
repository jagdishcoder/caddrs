// pages/blog.tsx
import React from 'react';

interface BlogPost {
  title: string;
  summary: string;
  date: string;
  link: string;
}

const Blogs: React.FC = () => {
  // Sample blog posts data
  const blogPosts: BlogPost[] = [
    {
      title: "Understanding Online Dispute Resolution",
      summary: "Explore how online dispute resolution works and its benefits over traditional methods.",
      date: "October 15, 2024",
      link: "/blog/understanding-online-dispute-resolution",
    },
    {
      title: "Top Tips for Effective Mediation",
      summary: "Learn essential tips that can help you become a better mediator and resolve disputes effectively.",
      date: "September 30, 2024",
      link: "/blog/top-tips-for-effective-mediation",
    },
    {
      title: "The Future of Conflict Resolution",
      summary: "Discover emerging trends in conflict resolution and what the future holds for mediators.",
      date: "September 15, 2024",
      link: "/blog/the-future-of-conflict-resolution",
    },
    {
      title: "Navigating Family Disputes with Care",
      summary: "Get insights into resolving family disputes while maintaining relationships and emotional health.",
      date: "August 25, 2024",
      link: "/blog/navigating-family-disputes-with-care",
    },
  ];

  return (
    <div className="py-16 bg-gray-100">
      <div className="max-w-7xl mx-auto px-6">
        <h1 className="text-4xl font-bold text-center mb-8">Blog</h1>
        <div className="space-y-8">
          {blogPosts.map((post, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300">
              <h2 className="text-2xl font-semibold mb-2">
                <a href={post.link} className="text-blue-500 hover:underline">{post.title}</a>
              </h2>
              <p className="text-gray-600 mb-2">{post.summary}</p>
              <p className="text-gray-400 text-sm">{post.date}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blogs;
