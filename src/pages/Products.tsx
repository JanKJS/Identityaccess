import React, { useState } from 'react'
import Header from '../components/Header'
import About from '../components/About'
import Features from '../components/Features'
import Screenshots from '../components/Screenshots'
import Pricing from '../components/Pricing'
import Footer from '../components/Footer'
import CookieConsent from '../components/CookieConsent'
import TermsOfService from '../components/TermsOfService'
import PrivacyPolicy from '../components/PrivacyPolicy'

export function Products() {
  const [showTerms, setShowTerms] = useState(false)
  const [showPrivacy, setShowPrivacy] = useState(false)

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900">
      <Header />
      <About />
      <Features />
      <Screenshots />
      <Pricing />
      <Footer
        onShowTerms={() => setShowTerms(true)}
        onShowPrivacy={() => setShowPrivacy(true)}
      />
      <CookieConsent />

      {showTerms && <TermsOfService onClose={() => setShowTerms(false)} />}
      {showPrivacy && <PrivacyPolicy onClose={() => setShowPrivacy(false)} />}
    </div>
  )
}