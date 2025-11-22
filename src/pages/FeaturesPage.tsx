
import React from 'react'
import { 
  Zap, Palette, BarChart3, Shield, Smartphone, Code, 
  Users, Globe, Layers, Settings, Download, Share2 
} from 'lucide-react'

export default function FeaturesPage() {
  const mainFeatures = [
    {
      icon: Zap,
      title: 'Lightning Fast Creation',
      description: 'Create professional demos in minutes with our intuitive drag-and-drop interface.',
      image: 'https://picsum.photos/500/300?random=30',
      benefits: [
        'Drag-and-drop interface',
        'Pre-built templates',
        'Real-time preview',
        'Auto-save functionality'
      ]
    },
    {
      icon: Palette,
      title: 'Complete Customization',
      description: 'Match your brand perfectly with unlimited customization options.',
      image: 'https://picsum.photos/500/300?random=31',
      benefits: [
        'Custom themes and colors',
        'Brand asset integration',
        'Font customization',
        'Layout flexibility'
      ]
    },
    {
      icon: BarChart3,
      title: 'Advanced Analytics',
      description: 'Get detailed insights into how your demos perform and engage users.',
      image: 'https://picsum.photos/500/300?random=32',
      benefits: [
        'Real-time engagement tracking',
        'Conversion analytics',
        'User behavior insights',
        'Performance reports'
      ]
    }
  ]

  const allFeatures = [
    {
      icon: Shield,
      title: 'Enterprise Security',
      description: 'Bank-level security with SSO, GDPR compliance, and data protection.'
    },
    {
      icon: Smartphone,
      title: 'Mobile Optimized',
      description: 'Perfect viewing experience across all devices and screen sizes.'
    },
    {
      icon: Code,
      title: 'Easy Integration',
      description: 'Embed demos anywhere with simple code snippets and API access.'
    },
    {
      icon: Users,
      title: 'Team Collaboration',
      description: 'Work together with your team on demo creation and management.'
    },
    {
      icon: Globe,
      title: 'Global CDN',
      description: 'Fast loading times worldwide with our global content delivery network.'
    },
    {
      icon: Layers,
      title: 'Version Control',
      description: 'Track changes and manage different versions of your demos.'
    },
    {
      icon: Settings,
      title: 'Advanced Settings',
      description: 'Fine-tune every aspect of your demos with advanced configuration options.'
    },
    {
      icon: Download,
      title: 'Export Options',
      description: 'Download your demos in multiple formats for offline use.'
    },
    {
      icon: Share2,
      title: 'Sharing Controls',
      description: 'Control who can view your demos with advanced privacy settings.'
    }
  ]

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="gradient-bg text-white section-padding">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Powerful Features for
            <span className="block text-yellow-300">Amazing Demos</span>
          </h1>
          <p className="text-xl opacity-90 max-w-3xl mx-auto">
            Everything you need to create, customize, and optimize your product 
            demonstrations for maximum impact and conversion.
          </p>
        </div>
      </section>

      {/* Main Features */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {mainFeatures.map((feature, index) => {
            const Icon = feature.icon
            const isEven = index % 2 === 0
            
            return (
              <div key={index} className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${index > 0 ? 'mt-24' : ''}`}>
                <div className={isEven ? 'lg:order-1' : 'lg:order-2'}>
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-primary-100 rounded-lg mb-6">
                    <Icon className="w-6 h-6 text-primary-600" />
                  </div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">{feature.title}</h2>
                  <p className="text-xl text-gray-600 mb-6">{feature.description}</p>
                  <ul className="space-y-3">
                    {feature.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-center">
                        <div className="w-2 h-2 bg-primary-500 rounded-full mr-3"></div>
                        <span className="text-gray-700">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className={isEven ? 'lg:order-2' : 'lg:order-1'}>
                  <img
                    src={feature.image}
                    alt={`${feature.title} feature demonstration`}
                    className="w-full h-80 object-cover rounded-xl shadow-lg"
                  />
                </div>
              </div>
            )
          })}
        </div>
      </section>

      {/* All Features Grid */}
      <section className="section-padding bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Complete Feature Set
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover all the powerful features that make DemoGet the best choice 
              for creating professional product demonstrations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {allFeatures.map((feature, index) => {
              const Icon = feature.icon
              return (
                <div key={index} className="bg-white rounded-xl p-6 shadow-lg card-hover">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-primary-100 rounded-lg mb-4">
                    <Icon className="w-6 h-6 text-primary-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="gradient-bg text-white section-padding">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Experience All Features?
          </h2>
          <p className="text-xl opacity-90 mb-8">
            Start your free trial today and discover how DemoGet can transform 
            your product demonstrations.
          </p>
          <button className="bg-white text-primary-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-200">
            Start Free Trial
          </button>
        </div>
      </section>
    </div>
  )
}
