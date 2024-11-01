// // components/Testimonials.tsx
// import React from 'react';

// interface Testimonial {
//   image: string;
//   name: string;
//   role: string;
//   quote: string;
// }

// const testimonials: Testimonial[] = [
//   {
//     image: '/images/client1.jpg', // Update with the path to client images
//     name: 'Jane Doe',
//     role: 'Business Owner',
//     quote: "This platform helped us resolve our dispute quickly and professionally. We could focus on our business without dragging on the conflict.",
//   },
//   {
//     image: '/images/client2.jpg',
//     name: 'John Smith',
//     role: 'Consumer',
//     quote: "The resolution process was smooth and fair. I was able to communicate effectively and settle the issue with no hassle.",
//   },
//   {
//     image: '/images/client3.jpg',
//     name: 'Emily White',
//     role: 'HR Manager',
//     quote: "The mediation services were excellent. Our workplace dispute was handled with care, and everyone felt heard.",
//   },
// ];

// const Testimonials: React.FC = () => {
//   return (
//     <section className="py-16 bg-gray-50">
//       <div className="max-w-7xl mx-auto px-6">
//         <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Client Success Stories</h2>
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//           {testimonials.map((testimonial, index) => (
//             <div
//               key={index}
//               className="bg-white p-6 rounded-lg shadow-md transition duration-300 hover:shadow-lg"
//             >
//               <img
//                 src={testimonial.image}
//                 alt={`${testimonial.name}'s photo`}
//                 className="w-20 h-20 rounded-full mx-auto mb-4 object-cover"
//               />
//               <h3 className="text-xl font-semibold text-center text-gray-800">{testimonial.name}</h3>
//               <p className="text-center text-gray-500 text-sm mb-4">{testimonial.role}</p>
//               <p className="text-center text-gray-600 italic">"{testimonial.quote}"</p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Testimonials;
