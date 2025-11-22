
import React from 'react'
import { ExternalLink, Play } from 'lucide-react'
import { useConfig } from '../../contexts/ConfigContext'

export default function DemoGallerySection() {
  const { extra } = useConfig()
  const demos = extra?.gallery?.items || [
    {
      title: 'SaaS Dashboard Demo',
      category: 'Software',
      image: 'https://picsum.photos/400/250?random=12',
      views: '2.5K',
      duration: '3:45'
    },
    {
      title: 'E-commerce Platform',
      category: 'Retail',
      image: 'https://picsum.photos/400/250?random=13',
      views: '1.8K',
      duration: '2:30'
    },
    {
      title: 'Mobile App Showcase',
      category: 'Mobile',
      image: 'https://picsum.photos/400/250?random=14',
      views: '3.2K',
      duration: '4:15'
    },
    {
      title: 'CRM System Tour',
      category: 'Business',
      image: 'https://picsum.photos/400/250?random=15',
      views: '1.9K',
      duration: '5:20'
    },
    {
      title: 'Analytics Platform',
      category: 'Data',
      image: 'https://picsum.photos/400/250?random=16',
      views: '2.1K',
      duration: '3:10'
    },
    {
      title: 'Design Tool Demo',
      category: 'Creative',
      image: 'https://picsum.photos/400/250?random=17',
      views: '2.8K',
      duration: '4:05'
    }
  ]

  return (
    <section className="section-padding bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {extra?.gallery?.title || 'Demo Gallery'}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {extra?.gallery?.description || "Explore demos created by our community. Get inspired and see what's possible with DemoGet."}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {demos.map((demo, index) => (
            <div key={index} className="card-hover bg-white rounded-xl border border-gray-200 overflow-hidden">
              <div className="relative">
                <img
                  src={demo.image}
                  alt={`${demo.title} - ${demo.category} demo`}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-200">
                  <button className="bg-white text-primary-600 rounded-full p-3 hover:bg-gray-100 transition-colors duration-200">
                    <Play size={24} />
                  </button>
                </div>
                <div className="absolute top-4 left-4 bg-primary-600 text-white px-2 py-1 rounded text-sm font-medium">
                  {demo.category}
                </div>
                <div className="absolute bottom-4 right-4 bg-black bg-opacity-70 text-white px-2 py-1 rounded text-sm">
                  {demo.duration}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{demo.title}</h3>
                <div className="flex items-center justify-between text-sm text-gray-500">
                  <span>{demo.views} views</span>
                  <button className="flex items-center space-x-1 text-primary-600 hover:text-primary-700 transition-colors duration-200">
                    <span>View Demo</span>
                    <ExternalLink size={14} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="border-2 border-primary-600 text-primary-600 px-8 py-3 rounded-lg font-semibold hover:bg-primary-600 hover:text-white transition-all duration-200">
            {extra?.gallery?.button_text || 'View All Demos'}
          </button>
        </div>
      </div>
    </section>
  )
}
