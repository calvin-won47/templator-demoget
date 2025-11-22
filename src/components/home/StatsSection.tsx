
import React from 'react'
import { TrendingUp, Users, Globe, Award } from 'lucide-react'
import { useConfig } from '../../contexts/ConfigContext'

export default function StatsSection() {
  const { extra } = useConfig()
  const defaults = [
    { value: '10,000+', label: 'Active Users', description: 'Companies trust DemoGet' },
    { value: '50M+', label: 'Demo Views', description: 'Demos viewed monthly' },
    { value: '300%', label: 'Conversion Boost', description: 'Average increase in sales' },
    { value: '4.9/5', label: 'Customer Rating', description: 'Based on 2,000+ reviews' }
  ]
  const icons = [Users, Globe, TrendingUp, Award]
  const stats = (extra?.stats?.items || defaults).map((s: any, i: number) => ({
    icon: icons[i] || Users,
    value: s.value,
    label: s.label,
    description: s.description,
  }))

  return (
    <section className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon
            return (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-primary-100 rounded-lg mb-4">
                  <Icon className="w-6 h-6 text-primary-600" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
                <div className="text-lg font-semibold text-gray-700 mb-1">{stat.label}</div>
                <div className="text-sm text-gray-500">{stat.description}</div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
