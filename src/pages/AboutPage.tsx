
import React from 'react'
import { Users, Target, Award, Globe } from 'lucide-react'

export default function AboutPage() {
  const team = [
    {
      name: 'Sarah Johnson',
      role: 'CEO & Co-founder',
      image: 'https://picsum.photos/300/300?random=40',
      bio: 'Former VP of Product at TechCorp with 15+ years in SaaS.'
    },
    {
      name: 'Michael Chen',
      role: 'CTO & Co-founder',
      image: 'https://picsum.photos/300/300?random=41',
      bio: 'Ex-Google engineer passionate about developer tools.'
    },
    {
      name: 'Emily Rodriguez',
      role: 'Head of Design',
      image: 'https://picsum.photos/300/300?random=42',
      bio: 'Award-winning designer from Apple and Airbnb.'
    },
    {
      name: 'David Thompson',
      role: 'VP of Engineering',
      image: 'https://picsum.photos/300/300?random=43',
      bio: 'Scaling expert who built systems at Netflix.'
    }
  ]

  const values = [
    {
      icon: Users,
      title: 'Customer First',
      description: 'Every decision we make starts with our customers. Their success is our success.'
    },
    {
      icon: Target,
      title: 'Innovation',
      description: 'We constantly push boundaries to create better solutions for demo creation.'
    },
    {
      icon: Award,
      title: 'Excellence',
      description: 'We strive for excellence in everything we do, from code to customer service.'
    },
    {
      icon: Globe,
      title: 'Accessibility',
      description: 'Making powerful demo tools accessible to businesses of all sizes worldwide.'
    }
  ]

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="gradient-bg text-white section-padding">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            About
            <span className="block text-yellow-300">DemoGet</span>
          </h1>
          <p className="text-xl opacity-90">
            We're on a mission to help businesses showcase their products in the most 
            engaging and effective way possible.
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Our Story
              </h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  DemoGet was born out of frustration. As product managers and marketers, 
                  we struggled to create compelling product demonstrations that truly 
                  showcased our software's value.
                </p>
                <p>
                  Traditional methods were time-consuming, expensive, and often failed to 
                  engage our audience. We knew there had to be a better way.
                </p>
                <p>
                  In 2022, we set out to build the demo creation platform we wished we had. 
                  Today, DemoGet helps thousands of companies create stunning product 
                  demonstrations that convert visitors into customers.
                </p>
              </div>
            </div>
            <div>
              <img
                src="https://picsum.photos/600/400?random=50"
                alt="DemoGet team working together in modern office"
                className="w-full h-80 object-cover rounded-xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section-padding bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Values
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              These core values guide everything we do and shape how we build 
              products and serve our customers.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon
              return (
                <div key={index} className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-100 rounded-full mb-6">
                    <Icon className="w-8 h-8 text-primary-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Meet Our Team
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We're a diverse team of designers, engineers, and product experts 
              passionate about helping businesses succeed.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div key={index} className="text-center">
                <img
                  src={member.image}
                  alt={`${member.name} - ${member.role}`}
                  className="w-48 h-48 object-cover rounded-full mx-auto mb-6"
                />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{member.name}</h3>
                <p className="text-primary-600 font-medium mb-3">{member.role}</p>
                <p className="text-gray-600 text-sm">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section-padding bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              By the Numbers
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-primary-600 mb-2">10,000+</div>
              <div className="text-gray-600">Happy Customers</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary-600 mb-2">50M+</div>
              <div className="text-gray-600">Demo Views</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary-600 mb-2">99.9%</div>
              <div className="text-gray-600">Uptime</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary-600 mb-2">24/7</div>
              <div className="text-gray-600">Support</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="gradient-bg text-white section-padding">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Join Our Journey
          </h2>
          <p className="text-xl opacity-90 mb-8">
            Be part of the future of product demonstrations. Start creating 
            amazing demos today.
          </p>
          <button className="bg-white text-primary-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-200">
            Get Started Now
          </button>
        </div>
      </section>
    </div>
  )
}
