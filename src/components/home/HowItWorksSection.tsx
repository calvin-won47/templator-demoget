
import React from 'react'
import { Upload, Edit, Share, BarChart } from 'lucide-react'
import { useConfig } from '../../contexts/ConfigContext'

export default function HowItWorksSection() {
  const { extra } = useConfig()
  const defaults = [
    { title: 'Upload Your Content', description: 'Import your screenshots, videos, or connect to your app.', image: 'https://picsum.photos/300/200?random=8' },
    { title: 'Customize & Edit', description: 'Add interactions, annotations, and branding.', image: 'https://picsum.photos/300/200?random=9' },
    { title: 'Publish & Share', description: 'Share via link, embed on your website, or present.', image: 'https://picsum.photos/300/200?random=10' },
    { title: 'Track Performance', description: 'Monitor engagement with detailed analytics.', image: 'https://picsum.photos/300/200?random=11' }
  ]
  const icons = [Upload, Edit, Share, BarChart]
  const steps = (extra?.how_it_works?.steps || defaults).map((s: any, i: number) => ({
    icon: icons[i] || Upload,
    title: s.title,
    description: s.description,
    image: s.image,
  }))

  return (
    <section className="section-padding bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {extra?.how_it_works?.title || 'How It Works'}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {extra?.how_it_works?.description || 'Create professional product demos in four simple steps.'}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => {
            const Icon = step.icon
            return (
              <div key={index} className="text-center">
                <div className="relative mb-6">
                  <img
                    src={step.image}
                    alt={`Step ${index + 1}: ${step.title}`}
                    className="w-full h-48 object-cover rounded-lg shadow-lg"
                  />
                  <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-12 h-12 bg-primary-600 rounded-full flex items-center justify-center shadow-lg">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                </div>
                <div className="bg-white text-primary-600 rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm mx-auto mb-4">
                  {index + 1}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            )
          })}
        </div>

        <div className="text-center mt-12">
          <button className="btn-primary text-white px-8 py-4 rounded-lg font-semibold text-lg">
            {extra?.how_it_works?.cta_text || 'Start Creating Your Demo'}
          </button>
        </div>
      </div>
    </section>
  )
}
