
import React from 'react'
import { Zap, Palette, BarChart3, Shield, Smartphone, Code } from 'lucide-react'
import { useConfig } from '../../contexts/ConfigContext'

export default function FeaturesSection() {
  const { extra } = useConfig()
  const defaults = [
    { title: 'Lightning Fast Setup', description: 'Create professional demos in minutes, not hours.', image: 'https://picsum.photos/400/300?random=2' },
    { title: 'Customizable Design', description: 'Match your brand perfectly with custom themes and layouts.', image: 'https://picsum.photos/400/300?random=3' },
    { title: 'Advanced Analytics', description: 'Track engagement and conversion rates.', image: 'https://picsum.photos/400/300?random=4' },
    { title: 'Enterprise Security', description: 'Bank-level security with SSO and GDPR.', image: 'https://picsum.photos/400/300?random=5' },
    { title: 'Mobile Optimized', description: 'Perfect viewing experience across all devices.', image: 'https://picsum.photos/400/300?random=6' },
    { title: 'Easy Integration', description: 'Embed demos anywhere with simple snippets.', image: 'https://picsum.photos/400/300?random=7' }
  ]
  const icons = [Zap, Palette, BarChart3, Shield, Smartphone, Code]
  const items = (extra?.features?.items || defaults).map((item: any, i: number) => ({
    icon: icons[i] || Zap,
    title: item.title,
    description: item.description,
    image: item.image,
  }))

  return (
    <section className="section-padding bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {extra?.features?.title_line1 || 'Everything You Need to Create'}
            <span className="gradient-text block">{extra?.features?.title_line2 || 'Amazing Demos'}</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {extra?.features?.description || 'Powerful features designed to help you create, customize, and optimize your product demonstrations for maximum impact.'}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {items.map((feature, index) => {
            const Icon = feature.icon
            return (
              <div key={index} className="card-hover bg-white rounded-xl border border-gray-200 p-6">
                <div className="mb-4">
                  <img
                    src={feature.image}
                    alt={`${feature.title} feature demonstration`}
                    className="w-full h-48 object-cover rounded-lg mb-4"
                  />
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-primary-100 rounded-lg">
                    <Icon className="w-6 h-6 text-primary-600" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
