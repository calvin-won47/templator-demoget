
import React from 'react'
import { Link } from 'react-router-dom'
import { Play, ArrowRight, Star, Users, Zap } from 'lucide-react'
import { useConfig } from '../../contexts/ConfigContext'

export default function HeroSection() {
  const { basic, extra } = useConfig()
  return (
    <section className="gradient-bg text-white section-padding overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="animate-fade-in">
            <div className="flex items-center space-x-2 mb-6">
              <div className="flex items-center space-x-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} className="text-yellow-400 fill-current" />
                ))}
              </div>
              <span className="text-sm opacity-90">{extra?.hero?.trust_label || 'Trusted by 10,000+ companies'}</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              {basic.hero.slogan}
            </h1>
            
            <p className="text-xl opacity-90 mb-8 max-w-lg">
              {basic.hero.description}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Link
                to="/signup"
                className="bg-white text-primary-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-200 flex items-center justify-center space-x-2"
              >
                <span>{extra?.hero?.primary_cta_text || 'Start Free Trial'}</span>
                <ArrowRight size={20} />
              </Link>
              <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-primary-600 transition-all duration-200 flex items-center justify-center space-x-2">
                <Play size={20} />
                <span>{extra?.hero?.secondary_cta_text || 'Watch Demo'}</span>
              </button>
            </div>
            
            <div className="flex items-center space-x-8 text-sm opacity-80">
              <div className="flex items-center space-x-2">
                <Users size={16} />
                <span>10,000+ users</span>
              </div>
              <div className="flex items-center space-x-2">
                <Zap size={16} />
                <span>5-min setup</span>
              </div>
              <div className="flex items-center space-x-2">
                <Star size={16} />
                <span>4.9/5 rating</span>
              </div>
            </div>
          </div>
          
          {/* Right Content - Demo Preview */}
          <div className="animate-slide-up">
            <div className="relative">
              <div className="bg-white rounded-2xl shadow-2xl p-8 transform rotate-3 hover:rotate-0 transition-transform duration-300">
                <img
                  src="https://picsum.photos/600/400?random=1"
                  alt="DemoGet dashboard showing interactive demo creation interface"
                  className="w-full h-64 object-cover rounded-lg mb-4"
                />
                <div className="space-y-3">
                  <div className="h-4 bg-gray-200 rounded w-3/4"></div>
                  <div className="h-4 bg-gray-200 rounded w-1/2"></div>
                  <div className="flex space-x-2">
                    <div className="h-8 bg-primary-100 rounded w-20 flex items-center justify-center">
                      <span className="text-primary-600 text-xs font-medium">Demo</span>
                    </div>
                    <div className="h-8 bg-green-100 rounded w-20 flex items-center justify-center">
                      <span className="text-green-600 text-xs font-medium">Live</span>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 bg-yellow-400 text-yellow-900 px-3 py-1 rounded-full text-sm font-semibold animate-bounce-slow">
                New!
              </div>
              <div className="absolute -bottom-4 -left-4 bg-green-500 text-white px-4 py-2 rounded-lg text-sm font-semibold shadow-lg">
                ✓ 99% Uptime
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
