// 'use client'

// import React, { useState } from 'react';
// import Image from 'next/image';
// import Bg from '@/app/images/bgimg.jpg';

// export default function ContactPage() {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     phoneNumber: '',
//     message: '',
//   });

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
//     const { name, value } = e.target;
//     setFormData(prevState => ({
//       ...prevState,
//       [name]: value,
//     }));
//   };

//   const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();
//     console.log('Form submitted:', formData);
//     setFormData({
//       name: '',
//       email: '',
//       phoneNumber: '',
//       message: '',
//     });
//   };

//   return (
//     <div className="relative min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
//       <Image 
//         src={Bg}
//         alt="Contact page background"
//         fill
//         className="absolute inset-0 object-cover opacity-50" // Adjust opacity as needed
//         priority
//       />
//       <div className="relative max-w-md mx-auto bg-white rounded-lg shadow-md overflow-hidden z-10">
//         <div className="px-6 py-8">
//           <h2 className="text-2xl font-bold text-center text-gray-900 mb-8">Contact Us</h2>
//           <form onSubmit={handleSubmit} className="space-y-6">
//             <div>
//               <label htmlFor="name" className="block text-sm font-medium text-gray-700">
//                 Name
//               </label>
//               <input
//                 type="text"
//                 id="name"
//                 name="name"
//                 value={formData.name}
//                 onChange={handleChange}
//                 required
//                 className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
//               />
//             </div>
//             <div>
//               <label htmlFor="email" className="block text-sm font-medium text-gray-700">
//                 Email
//               </label>
//               <input
//                 type="email"
//                 id="email"
//                 name="email"
//                 value={formData.email}
//                 onChange={handleChange}
//                 required
//                 className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
//               />
//             </div>
//             <div>
//               <label htmlFor="phoneNumber" className="block text-sm font-medium text-gray-700">
//                 Phone Number
//               </label>
//               <input
//                 type="tel"
//                 id="phoneNumber"
//                 name="phoneNumber"
//                 value={formData.phoneNumber}
//                 onChange={handleChange}
//                 className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
//               />
//             </div>
//             <div>
//               <label htmlFor="message" className="block text-sm font-medium text-gray-700">
//                 Message
//               </label>
//               <textarea
//                 id="message"
//                 name="message"
//                 rows={4}
//                 value={formData.message}
//                 onChange={handleChange}
//                 required
//                 className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
//               ></textarea>
//             </div>
//             <div>
//               <button
//                 type="submit"
//                 className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
//               >
//                 Send Message
//               </button>
//             </div>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// }



// pages/contact.tsx
import React from 'react';

const Contact: React.FC = () => {
  return (
    <div className="py-16 bg-gray-100">
      <div className="max-w-7xl mx-auto px-6">
        <h1 className="text-4xl font-bold text-center mb-8">Contact Us</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Contact Form */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-4">Get in Touch</h2>
            <form>
              <div className="mb-4">
                <label className="block text-gray-700 mb-2" htmlFor="name">Name</label>
                <input
                  type="text"
                  id="name"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 mb-2" htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 mb-2" htmlFor="message">Message</label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full bg-blue-500 text-white font-semibold py-3 rounded-lg shadow-md hover:bg-blue-600 transition duration-300"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Details */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-4">Contact Information</h2>
            <p className="mb-2"><strong>Phone:</strong> (123) 456-7890</p>
            <p className="mb-2"><strong>Email:</strong> support@example.com</p>
            <p className="mb-2"><strong>Address:</strong> 123 Dispute St, Mediation City, ST 12345</p>
            <div className="mt-6">
              <h3 className="text-lg font-semibold mb-2">Follow Us</h3>
              <ul className="flex space-x-4">
                <li>
                  <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">LinkedIn</a>
                </li>
                <li>
                  <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">Twitter</a>
                </li>
                <li>
                  <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">Facebook</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
