'use client'

import React, { useState } from 'react'
import { FaGavel, FaUsers, FaShoppingCart, FaBuilding } from 'react-icons/fa'

interface Service {
  icon: React.ReactNode
  title: string
  brief: string
  details: string
}

export default function ServicesOverview() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null)

  const services: Service[] = [
    {
      icon: <FaGavel className="h-8 w-8 text-blue-500" />,
      title: "Corporate Disputes",
      brief: "Resolve family conflicts with sensitivity and fairness.",
      details: "Our platform provides professional mediators to help resolve issues such as divorce, custody, and inheritance in a supportive environment.",
    },
    {
      icon: <FaUsers className="h-8 w-8 text-blue-500" />,
      title: "Workplace Disputes",
      brief: "Address workplace conflicts with structured mediation.",
      details: "We offer mediation for employee grievances, discrimination cases, and conflict between colleagues to help maintain a harmonious workplace.",
    },
    {
      icon: <FaShoppingCart className="h-8 w-8 text-blue-500" />,
      title: "Consumer Disputes",
      brief: "Resolve consumer and vendor conflicts efficiently.",
      details: "Our service covers disputes related to faulty products, services not rendered, and contract breaches, helping consumers and businesses reach an agreement.",
    },
    {
      icon: <FaBuilding className="h-8 w-8 text-blue-500" />,
      title: "Property Disputes",
      brief: "Mediation for landlord-tenant or neighbor issues.",
      details: "We provide mediation services for rental disputes, boundary conflicts, and other property-related disagreements to foster peaceful resolutions.",
    },
  ]

  const handleToggle = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index)
  }

  return (
    <section className="py-16 bg-gray-100">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Our Services</h2>
        <div className="space-y-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md cursor-pointer transition duration-300"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  {service.icon}
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800">{service.title}</h3>
                    <p className="text-gray-600">{service.brief}</p>
                  </div>
                </div>
                <button
                  className="text-blue-500 text-xl focus:outline-none"
                  onClick={() => handleToggle(index)}
                  aria-expanded={expandedIndex === index}
                  aria-controls={`details-${index}`}
                >
                  {expandedIndex === index ? "-" : "+"}
                </button>
              </div>
              {expandedIndex === index && (
                <div
                  id={`details-${index}`}
                  className="mt-4 text-gray-600 transition duration-300"
                >
                  {service.details}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}