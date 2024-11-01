import Image from 'next/image'
// import jagu from "@"

const founders = [
  {
    name: 'Sampath',
    role: 'Co-Founder',
    image: '/images/sampath.jpg',
  },
  {
    name: 'Mritunjay',
    role: 'Co-Founder',
    image: '/images/mritunjay.jpg',
  },
  {
    name: 'Jagdish T',
    role: 'Technical Lead',
    image: '/images/jagdish.jpg',
  },
]

export default function Aboutus() {
  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-center mb-12">About Us</h1>
        
        <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
          <h2 className="text-3xl font-semibold mb-6">Our Vision</h2>
          <p className="text-lg mb-4">
            We aspire to be a renowned law tech service provider with an online and digital platform through ODR (Online Dispute Resolution).
          </p>
          <h2 className="text-3xl font-semibold mb-6 mt-8">Our Mission</h2>
          <p className="text-lg mb-4">
            Our mission is to work on the resolution of global techno-legal disputes and provide global digital legal services.
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
          <h2 className="text-3xl font-semibold mb-6">About ODR</h2>
          <p className="text-lg mb-4">
            Online Dispute Resolution (ODR) is a concept that primarily involves using information and communication technology (ICT) tools to simplify the resolution of disputes without being physically present. ODR is revolutionizing the Indian justice system by making dispute resolution more accessible, cost-effective, and efficient.
          </p>
          <p className="text-lg mb-4">
            Key benefits of ODR include:
          </p>
          <ul className="list-disc list-inside text-lg mb-4 space-y-2">
            <li>Cost-effectiveness compared to traditional court proceedings</li>
            <li>Convenience and quicker resolution of disputes</li>
            <li>Customizable processes to suit specific case requirements</li>
            <li>Encouragement of dispute resolution by removing physical barriers</li>
            <li>Reduction of implicit biases in the resolution process</li>
          </ul>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-3xl font-semibold mb-6">Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {founders.map((founder) => (
              <div key={founder.name} className="text-center">
                <div className="relative w-48 h-48 mx-auto mb-4 rounded-full overflow-hidden">
                  <Image
                    src={founder.image}
                    alt={founder.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="text-xl font-semibold">{founder.name}</h3>
                <p className="text-gray-600">{founder.role}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}