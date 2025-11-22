
import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Zap } from 'lucide-react'
import { useConfig } from '../../contexts/ConfigContext'

export default function CTASection() {
  const { extra } = useConfig()
  return (
    <section className="gradient-bg text-white section-padding">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center justify-center w-16 h-16 bg-white bg-opacity-20 rounded-full mb-8">
          <Zap className="w-8 h-8 text-yellow-300" />
        </div>
        
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
          {extra?.cta?.title_line1 || 'Ready to Transform Your'}
          <span className="block text-yellow-300">{extra?.cta?.title_line2 || 'Product Demos?'}</span>
        </h2>
        
        <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
          {extra?.cta?.description || 'Join thousands of companies already using DemoGet to create engaging product demonstrations that convert visitors into customers.'}
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
          <Link
            to="/signup"
            className="bg-white text-primary-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-200 flex items-center space-x-2"
          >
            <span>{extra?.cta?.primary_cta_text || 'Start Your Free Trial'}</span>
            <ArrowRight size={20} />
          </Link>
          <Link
            to="/contact"
            className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-primary-600 transition-all duration-200"
          >
            {extra?.cta?.secondary_cta_text || 'Schedule a Demo'}
          </Link>
        </div>
        
        <div className="flex flex-col sm:flex-row items-center justify-center space-y-2 sm:space-y-0 sm:space-x-8 text-sm opacity-80">
          {(extra?.cta?.bullets || ['✓ 14-day free trial','✓ No credit card required','✓ Setup in 5 minutes']).map((b: string, i: number) => (
            <div key={i}>{b}</div>
          ))}
        </div>
      </div>
    </section>
  )
}
