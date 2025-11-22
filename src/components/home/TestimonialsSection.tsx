
import React from 'react'
import { Star, Quote } from 'lucide-react'
import { useConfig } from '../../contexts/ConfigContext'

export default function TestimonialsSection() {
  const { extra } = useConfig()
  const testimonials = extra?.testimonials?.items || [
    {
      name: 'Sarah Johnson',
      role: 'VP of Marketing',
      company: 'TechCorp',
      image: 'https://picsum.photos/80/80?random=20',
      rating: 5,
      text: 'DemoGet transformed how we showcase our product. Our conversion rates increased by 300% after implementing interactive demos on our landing pages.'
    },
    {
      name: 'Michael Chen',
      role: 'Sales Director',
      company: 'InnovateLabs',
      image: 'https://picsum.photos/80/80?random=21',
      rating: 5,
      text: 'The ease of creating professional demos is incredible. Our sales team can now create custom demos for each prospect in minutes, not days.'
    },
    {
      name: 'Emily Rodriguez',
      role: 'Product Manager',
      company: 'StartupXYZ',
      image: 'https://picsum.photos/80/80?random=22',
      rating: 5,
      text: 'DemoGet helped us explain our complex product in a simple, engaging way. The analytics feature gives us valuable insights into user behavior.'
    },
    {
      name: 'David Thompson',
      role: 'CEO',
      company: 'GrowthCo',
      image: 'https://picsum.photos/80/80?random=23',
      rating: 5,
      text: 'Best investment we made this year. The ROI from DemoGet has been phenomenal. Our demos now convert 5x better than static presentations.'
    },
    {
      name: 'Lisa Wang',
      role: 'Marketing Manager',
      company: 'ScaleUp Inc',
      image: 'https://picsum.photos/80/80?random=24',
      rating: 5,
      text: 'The customization options are endless. We can match our brand perfectly and create demos that truly represent our product experience.'
    },
    {
      name: 'James Wilson',
      role: 'Head of Sales',
      company: 'Enterprise Solutions',
      image: 'https://picsum.photos/80/80?random=25',
      rating: 5,
      text: 'DemoGet streamlined our entire sales process. Prospects understand our value proposition immediately, leading to shorter sales cycles.'
    }
  ]

  return (
    <section className="section-padding bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {extra?.testimonials?.title || 'Loved by Teams Worldwide'}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {extra?.testimonials?.description || 'Join thousands of companies that trust DemoGet to showcase their products and drive conversions.'}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white rounded-xl p-6 shadow-lg card-hover">
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} size={16} className="text-yellow-400 fill-current" />
                ))}
              </div>
              
              <div className="relative mb-6">
                <Quote className="absolute -top-2 -left-2 text-primary-200" size={24} />
                <p className="text-gray-700 leading-relaxed pl-6">
                  "{testimonial.text}"
                </p>
              </div>
              
              <div className="flex items-center">
                <img
                  src={testimonial.image}
                  alt={`${testimonial.name} - ${testimonial.role} at ${testimonial.company}`}
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <div className="font-semibold text-gray-900">{testimonial.name}</div>
                  <div className="text-sm text-gray-600">
                    {testimonial.role} at {testimonial.company}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="inline-flex items-center space-x-2 text-gray-600">
            <div className="flex items-center">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={20} className="text-yellow-400 fill-current" />
              ))}
            </div>
            <span className="font-semibold">{extra?.testimonials?.rating_left || '4.9/5'}</span>
            <span>{extra?.testimonials?.rating_right || 'based on 2,000+ reviews'}</span>
          </div>
        </div>
      </div>
    </section>
  )
}
