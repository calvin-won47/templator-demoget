
import React from 'react'
import { Check, X } from 'lucide-react'
import { Link } from 'react-router-dom'
import { useConfig } from '../../contexts/ConfigContext'

export default function PricingSection() {
  const { extra } = useConfig()
  const plans = [
    {
      name: 'Starter',
      price: 'Free',
      period: '',
      description: 'Perfect for individuals and small teams getting started',
      features: [
        { name: '3 demos per month', included: true },
        { name: 'Basic templates', included: true },
        { name: 'Standard analytics', included: true },
        { name: 'Email support', included: true },
        { name: 'Custom branding', included: false },
        { name: 'Advanced analytics', included: false },
        { name: 'Priority support', included: false },
        { name: 'Team collaboration', included: false }
      ],
      cta: 'Get Started',
      popular: false
    },
    {
      name: 'Professional',
      price: '$29',
      period: '/month',
      description: 'Ideal for growing businesses and marketing teams',
      features: [
        { name: 'Unlimited demos', included: true },
        { name: 'Premium templates', included: true },
        { name: 'Advanced analytics', included: true },
        { name: 'Priority support', included: true },
        { name: 'Custom branding', included: true },
        { name: 'Team collaboration', included: true },
        { name: 'API access', included: false },
        { name: 'White-label solution', included: false }
      ],
      cta: 'Start Free Trial',
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$99',
      period: '/month',
      description: 'For large organizations with advanced needs',
      features: [
        { name: 'Unlimited everything', included: true },
        { name: 'Custom templates', included: true },
        { name: 'Enterprise analytics', included: true },
        { name: 'Dedicated support', included: true },
        { name: 'White-label solution', included: true },
        { name: 'API access', included: true },
        { name: 'SSO integration', included: true },
        { name: 'Custom integrations', included: true }
      ],
      cta: 'Contact Sales',
      popular: false
    }
  ]

  return (
    <section className="section-padding bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {extra?.pricing?.title || 'Simple, Transparent Pricing'}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {extra?.pricing?.description || 'Choose the plan that fits your needs. All plans include our core features with no hidden fees.'}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative bg-white rounded-2xl border-2 p-8 ${
                plan.popular
                  ? 'border-primary-500 shadow-xl scale-105'
                  : 'border-gray-200 shadow-lg'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-primary-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                    Most Popular
                  </span>
                </div>
              )}

              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                <p className="text-gray-600 mb-4">{plan.description}</p>
                <div className="flex items-baseline justify-center">
                  <span className="text-4xl font-bold text-gray-900">{plan.price}</span>
                  <span className="text-gray-600 ml-1">{plan.period}</span>
                </div>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center">
                    {feature.included ? (
                      <Check className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                    ) : (
                      <X className="w-5 h-5 text-gray-400 mr-3 flex-shrink-0" />
                    )}
                    <span
                      className={
                        feature.included ? 'text-gray-900' : 'text-gray-400'
                      }
                    >
                      {feature.name}
                    </span>
                  </li>
                ))}
              </ul>

              <Link
                to={plan.name === 'Enterprise' ? '/contact' : '/signup'}
                className={`block w-full text-center py-3 px-6 rounded-lg font-semibold transition-all duration-200 ${
                  plan.popular
                    ? 'btn-primary text-white'
                    : 'border-2 border-gray-300 text-gray-700 hover:border-primary-500 hover:text-primary-600'
                }`}
              >
                {plan.cta}
              </Link>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">
            {extra?.pricing?.footer_note || 'All plans include a 14-day free trial. No credit card required.'}
          </p>
          <Link
            to="/pricing"
            className="text-primary-600 hover:text-primary-700 font-semibold"
          >
            {extra?.pricing?.footer_link_text || 'View detailed pricing comparison →'}
          </Link>
        </div>
      </div>
    </section>
  )
}
