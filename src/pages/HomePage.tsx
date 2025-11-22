
import React from 'react'
import HeroSection from '../components/home/HeroSection'
import FeaturesSection from '../components/home/FeaturesSection'
import HowItWorksSection from '../components/home/HowItWorksSection'
import TestimonialsSection from '../components/home/TestimonialsSection'
import PricingSection from '../components/home/PricingSection'
import CTASection from '../components/home/CTASection'
import StatsSection from '../components/home/StatsSection'
import DemoGallerySection from '../components/home/DemoGallerySection'

export default function HomePage() {
  return (
    <div>
      <HeroSection />
      <StatsSection />
      <FeaturesSection />
      <HowItWorksSection />
      <DemoGallerySection />
      <TestimonialsSection />
      <PricingSection />
      <CTASection />
    </div>
  )
}
