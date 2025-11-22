
import React, { useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import HomePage from './pages/HomePage'
import FeaturesPage from './pages/FeaturesPage'
import PricingPage from './pages/PricingPage'
import AboutPage from './pages/AboutPage'
import ContactPage from './pages/ContactPage'
import BlogList from './pages/BlogList'
import BlogDetail from './pages/BlogDetail'
import LoginPage from './pages/LoginPage'
import SignupPage from './pages/SignupPage'
import { useConfig } from './contexts/ConfigContext'

export default function App() {
  const { basic } = useConfig()
  useEffect(() => {
    if (basic?.seo?.title) document.title = basic.seo.title
    const desc = document.querySelector('meta[name="description"]')
    if (desc) desc.setAttribute('content', basic?.seo?.description || '')
    else {
      const m = document.createElement('meta')
      m.setAttribute('name', 'description')
      m.setAttribute('content', basic?.seo?.description || '')
      document.head.appendChild(m)
    }
    const keys = document.querySelector('meta[name="keywords"]')
    if (keys) keys.setAttribute('content', basic?.seo?.keywords || '')
    else {
      const k = document.createElement('meta')
      k.setAttribute('name', 'keywords')
      k.setAttribute('content', basic?.seo?.keywords || '')
      document.head.appendChild(k)
    }
  }, [basic])
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/features" element={<FeaturesPage />} />
            <Route path="/pricing" element={<PricingPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/blog" element={<BlogList />} />
            <Route path="/blog/:slug" element={<BlogDetail />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/signup" element={<SignupPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}
