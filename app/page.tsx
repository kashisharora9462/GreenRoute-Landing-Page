"use client"

import type React from "react"
import { useState, useEffect } from "react"
import {
  TrendingDown,
  MapPin,
  BarChart3,
  Trees,
  Check,
  ArrowRight,
  Menu,
  X,
  Leaf,
  Globe,
  Zap,
  Star,
} from "lucide-react"

export default function GreenRoute() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [co2Saved, setCo2Saved] = useState(2500)
  const [routesOptimized, setRoutesOptimized] = useState(10000)
  const [companiesServed, setCompaniesServed] = useState(500)
  const [monthlyDeliveries, setMonthlyDeliveries] = useState(1000)
  const [formSubmitted, setFormSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    company: "",
    email: "",
    message: "",
  })
  const [mounted, setMounted] = useState(false)

  // Animated counters
  useEffect(() => {
    setMounted(true)

    const animateCounter = (target: number, setter: (value: React.SetStateAction<number>) => void, duration = 2000) => {
      const start = 0
      const increment = target / (duration / 16)
      let current = 0

      const timer = setInterval(() => {
        current += increment
        if (current >= target) {
          setter(target)
          clearInterval(timer)
        } else {
          setter(Math.floor(current))
        }
      }, 16)

      return timer
    }

    // Reset to 0 first, then animate
    setCo2Saved(0)
    setRoutesOptimized(0)
    setCompaniesServed(0)

    const timer1 = animateCounter(2500, setCo2Saved)
    const timer2 = animateCounter(10000, setRoutesOptimized)
    const timer3 = animateCounter(500, setCompaniesServed)

    return () => {
      clearInterval(timer1)
      clearInterval(timer2)
      clearInterval(timer3)
    }
  }, [])

  const estimatedSavings = Math.floor(monthlyDeliveries * 0.15 * 12)

  const handleFormSubmit = () => {
    if (formData.company && formData.email) {
      setFormSubmitted(true)
      setTimeout(() => {
        setFormSubmitted(false)
        setFormData({ company: "", email: "", message: "" })
      }, 3000)
    }
  }

  return (
    <div className="min-h-screen bg-linear-to-br from-slate-900 via-emerald-950 to-slate-900">
      {/* Floating particles background */}
      {mounted && (
        <div className="fixed inset-0 overflow-hidden pointer-events-none">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute animate-float opacity-20"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${15 + Math.random() * 10}s`,
              }}
            >
              <Leaf className="w-4 h-4 text-emerald-400" />
            </div>
          ))}
        </div>
      )}

      {/* Navigation */}
      <nav className="fixed w-full bg-slate-900/90 backdrop-blur-xl z-50 border-b border-emerald-500/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Globe className="h-8 w-8 text-emerald-400 animate-spin-slow" />
              <span className="ml-2 text-xl font-bold text-white">GreenRoute</span>
            </div>

            <div className="hidden md:flex space-x-8">
              <a href="#features" className="text-gray-300 hover:text-emerald-400 transition">
                Features
              </a>
              <a href="#testimonials" className="text-gray-300 hover:text-emerald-400 transition">
                Testimonials
              </a>
              <a href="#impact" className="text-gray-300 hover:text-emerald-400 transition">
                Impact
              </a>
              <a href="#contact" className="text-gray-300 hover:text-emerald-400 transition">
                Contact
              </a>
            </div>

            <div className="hidden md:block">
              <button className="bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-2 rounded-lg transition font-medium shadow-lg shadow-emerald-500/30">
                Get Started
              </button>
            </div>

            <button className="md:hidden text-white" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              {mobileMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden bg-slate-900 border-t border-emerald-500/20">
            <div className="px-4 py-4 space-y-3">
              <a href="#features" className="block text-gray-300 hover:text-emerald-400">
                Features
              </a>
              <a href="#testimonials" className="block text-gray-300 hover:text-emerald-400">
                Testimonials
              </a>
              <a href="#impact" className="block text-gray-300 hover:text-emerald-400">
                Impact
              </a>
              <a href="#contact" className="block text-gray-300 hover:text-emerald-400">
                Contact
              </a>
              <button className="w-full bg-emerald-600 text-white px-6 py-2 rounded-lg">Get Started</button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        {/* Animated Earth */}
        <div className="absolute -top-10 -right-20 w-96 h-96 opacity-30 pointer-events-none hidden lg:block">
          <div className="relative w-full h-full">
            <div className="absolute inset-0 rounded-full bg-linear-to-br from-emerald-400 via-blue-500 to-green-500 blur-xl animate-spin-slow"></div>
            <div className="absolute inset-8 rounded-full bg-linear-to-br from-emerald-500 to-blue-600 animate-pulse"></div>
            <div className="absolute inset-12 rounded-full bg-slate-900/50 backdrop-blur-sm"></div>
            <div
              className="absolute inset-0 rounded-full border-2 border-emerald-400/30 animate-ping"
              style={{ animationDuration: "3s" }}
            ></div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center bg-emerald-500/10 border border-emerald-500/30 rounded-full px-4 py-2 mb-6 animate-fade-in">
            <TrendingDown className="w-4 h-4 text-emerald-400 mr-2" />
            <span className="text-emerald-300 text-sm font-medium">Reducing 2,500+ tons of CO₂ monthly</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight animate-fade-in-up">
            Every Delivery Has a
            <span className="block bg-gradient-to-r from-emerald-400 via-green-300 to-emerald-500 bg-clip-text text-transparent animate-gradient">
              Carbon Footprint
            </span>
          </h1>

          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto animate-fade-in-up-delay">
            Optimize delivery routes with AI, reduce emissions in real-time, and track your environmental impact. Make
            every delivery count for the planet.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16 animate-fade-in-up-delay-2">
            <button className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 rounded-lg font-semibold flex items-center transition transform hover:scale-105 shadow-lg shadow-emerald-500/40">
              Calculate Your Impact
              <ArrowRight className="ml-2 w-5 h-5" />
            </button>
            <button className="border-2 border-emerald-400 text-emerald-400 hover:bg-emerald-400/10 px-8 py-4 rounded-lg font-semibold transition">
              See How It Works
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="bg-slate-800/50 backdrop-blur-sm border border-emerald-500/20 rounded-2xl p-6 hover:border-emerald-500/40 transition">
              <div className="text-4xl font-bold text-emerald-400 mb-2">{co2Saved.toLocaleString()}+</div>
              <div className="text-gray-400 text-sm">Tons CO₂ Saved</div>
            </div>
            <div className="bg-slate-800/50 backdrop-blur-sm border border-emerald-500/20 rounded-2xl p-6 hover:border-emerald-500/40 transition">
              <div className="text-4xl font-bold text-emerald-400 mb-2">{routesOptimized.toLocaleString()}+</div>
              <div className="text-gray-400 text-sm">Routes Optimized</div>
            </div>
            <div className="bg-slate-800/50 backdrop-blur-sm border border-emerald-500/20 rounded-2xl p-6 hover:border-emerald-500/40 transition">
              <div className="text-4xl font-bold text-emerald-400 mb-2">{companiesServed}+</div>
              <div className="text-gray-400 text-sm">Companies Trust Us</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-900/30 relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Sustainable Logistics, <span className="text-emerald-400">Simplified</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Powerful tools designed to reduce your carbon footprint while improving efficiency
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <MapPin className="w-8 h-8" />,
                title: "Smart Route Optimization",
                description: "AI-powered logistics choose the greenest paths for every delivery",
              },
              {
                icon: <BarChart3 className="w-8 h-8" />,
                title: "Real-Time Carbon Tracking",
                description: "Monitor CO₂ impact of every delivery decision instantly",
              },
              {
                icon: <Trees className="w-8 h-8" />,
                title: "Verified Offset Programs",
                description: "Partner with certified carbon offset projects worldwide",
              },
              {
                icon: <Zap className="w-8 h-8" />,
                title: "Impact Analytics Dashboard",
                description: "Visualize your sustainability wins and share with stakeholders",
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="group bg-linear-to-br from-slate-800/50 to-emerald-900/10 border border-emerald-500/20 rounded-2xl p-6 hover:border-emerald-500/50 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-xl hover:shadow-emerald-500/20"
              >
                <div className="bg-emerald-600/20 w-16 h-16 rounded-xl flex items-center justify-center mb-4 text-emerald-400 group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="testimonials" className="py-20 px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Trusted by <span className="text-emerald-400">Industry Leaders</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              See how forward-thinking companies are transforming their logistics while making real environmental impact
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {[
              {
                company: "LogiTech Solutions",
                initial: "LS",
                role: "VP of Operations",
                testimonial:
                  "GreenRoute reduced our delivery emissions by 34% in just 6 months. The ROI was immediate and the environmental impact is something we're genuinely proud of.",
                saved: "850",
                color: "from-emerald-500 to-teal-500",
                fuel: "48",
              },
              {
                company: "SwiftShip Express",
                initial: "SE",
                role: "Sustainability Director",
                testimonial:
                  "The platform pays for itself through fuel savings alone. But what really sets GreenRoute apart is how it empowers our team to take action on climate.",
                saved: "1,200",
                color: "from-green-500 to-emerald-500",
                fuel: "72",
              },
              {
                company: "EcoCommerce Co.",
                initial: "EC",
                role: "CEO",
                testimonial:
                  "Our customers love seeing our environmental commitment. It's become a key differentiator in our market. GreenRoute made sustainability a competitive advantage.",
                saved: "600",
                color: "from-teal-500 to-cyan-500",
                fuel: "35",
              },
            ].map((testimonial, index) => (
              <div
                key={index}
                className="group relative bg-slate-800/50 border border-emerald-500/20 rounded-2xl p-8 hover:border-emerald-500/40 transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:shadow-emerald-500/20"
              >
                <div className="absolute -top-4 left-8 text-6xl text-emerald-500/20 font-serif">"</div>

                {/* Company header with avatar */}
                <div className="flex items-start mb-6 relative z-10">
                  <div
                    className={`w-16 h-16 bg-linear-to-br ${testimonial.color} rounded-full flex items-center justify-center text-white font-bold text-2xl shadow-lg shadow-emerald-500/30`}
                  >
                    {testimonial.initial}
                  </div>
                  <div className="ml-4 flex-1">
                    <div className="text-white font-semibold text-lg">{testimonial.company}</div>
                    <div className="text-emerald-300 text-sm mb-2">{testimonial.role}</div>
                    <div className="flex text-yellow-400 gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-current" />
                      ))}
                    </div>
                  </div>
                </div>

                {/* Testimonial text */}
                <p className="text-gray-300 mb-6 text-base leading-relaxed">"{testimonial.testimonial}"</p>

                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-emerald-500/10 border border-emerald-500/30 rounded-xl p-3">
                    <div className="text-2xl font-bold text-emerald-400">{testimonial.saved}</div>
                    <div className="text-xs text-gray-400">tons CO₂ saved</div>
                  </div>
                  <div className="bg-emerald-500/10 border border-emerald-500/30 rounded-xl p-3">
                    <div className="text-2xl font-bold text-yellow-400">${testimonial.fuel}k</div>
                    <div className="text-xs text-gray-400">fuel savings</div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-emerald-500/10 border border-emerald-500/30 rounded-2xl p-8">
            <div className="grid md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-3xl font-bold text-emerald-400 mb-2">98%</div>
                <div className="text-gray-400">Customer Satisfaction</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-emerald-400 mb-2">45K+</div>
                <div className="text-gray-400">Tons CO₂ Prevented</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-emerald-400 mb-2">$12M</div>
                <div className="text-gray-400">Fuel Costs Saved</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-emerald-400 mb-2">50+</div>
                <div className="text-gray-400">Countries Served</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section id="impact" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-900/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Real-Time <span className="text-emerald-400">Environmental Impact</span>
            </h2>
            <p className="text-xl text-gray-400">
              Track and measure the positive difference your logistics decisions make
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Trees className="w-8 h-8" />,
                value: "2.3M",
                label: "Trees Protected",
                desc: "Equivalent to reforestation efforts",
              },
              {
                icon: <TrendingDown className="w-8 h-8" />,
                value: "45K+",
                label: "Tons CO₂ Eliminated",
                desc: "In the last 12 months",
              },
              {
                icon: <Globe className="w-8 h-8" />,
                value: "175",
                label: "Climate Projects Funded",
                desc: "Verified carbon offset initiatives",
              },
            ].map((stat, index) => (
              <div
                key={index}
                className="bg-slate-800/50 border border-emerald-500/20 rounded-2xl p-8 text-center hover:border-emerald-500/40 transition-all"
              >
                <div className="bg-emerald-600/20 w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-4 text-emerald-400">
                  {stat.icon}
                </div>
                <div className="text-4xl font-bold text-emerald-400 mb-2">{stat.value}</div>
                <div className="text-white font-semibold mb-2">{stat.label}</div>
                <div className="text-gray-400 text-sm">{stat.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section with Calculator */}
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-900/30">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Ready to Reduce Your Carbon Footprint?</h2>
            <p className="text-xl text-gray-400">Get a free impact assessment for your delivery operations</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Form */}
            <div className="bg-slate-800/50 border border-emerald-500/20 rounded-2xl p-8">
              <div className="space-y-6">
                <div>
                  <label className="block text-gray-300 mb-2 font-medium">Company Name</label>
                  <input
                    type="text"
                    className="w-full bg-slate-900/50 border border-emerald-500/30 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-emerald-500 transition"
                    placeholder="Your Company"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                  />
                </div>
                <div>
                  <label className="block text-gray-300 mb-2 font-medium">Email</label>
                  <input
                    type="email"
                    className="w-full bg-slate-900/50 border border-emerald-500/30 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-emerald-500 transition"
                    placeholder="you@company.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  />
                </div>
                <div>
                  <label className="block text-gray-300 mb-2 font-medium">
                    Monthly Deliveries: {monthlyDeliveries.toLocaleString()}
                  </label>
                  <input
                    type="range"
                    min="100"
                    max="10000"
                    step="100"
                    value={monthlyDeliveries}
                    onChange={(e) => setMonthlyDeliveries(Number.parseInt(e.target.value))}
                    className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-emerald-500"
                  />
                </div>
                <div>
                  <label className="block text-gray-300 mb-2 font-medium">Message (Optional)</label>
                  <textarea
                    className="w-full bg-slate-900/50 border border-emerald-500/30 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-emerald-500 transition h-24"
                    placeholder="Tell us about your delivery operations..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  ></textarea>
                </div>
                <button
                  onClick={handleFormSubmit}
                  className="w-full bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-4 rounded-lg font-semibold transition transform hover:scale-105 shadow-lg shadow-emerald-500/30 flex items-center justify-center"
                >
                  {formSubmitted ? (
                    <>
                      <Check className="mr-2" />
                      Request Sent!
                    </>
                  ) : (
                    <>
                      Get Free Assessment
                      <ArrowRight className="ml-2" />
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* Live Impact Calculator */}
            <div className="bg-linear-to-br from-emerald-900/30 to-slate-800/50 border border-emerald-500/30 rounded-2xl p-8 flex flex-col justify-center">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-white mb-4">Your Potential Impact</h3>
                <p className="text-gray-400">Based on {monthlyDeliveries.toLocaleString()} monthly deliveries</p>
              </div>
              <div className="space-y-6">
                <div className="bg-slate-900/50 rounded-xl p-6 border border-emerald-500/20">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-gray-400">Annual CO₂ Reduction</span>
                    <TrendingDown className="text-emerald-400" />
                  </div>
                  <div className="text-4xl font-bold text-emerald-400">~{estimatedSavings.toLocaleString()} kg</div>
                </div>
                <div className="bg-slate-900/50 rounded-xl p-6 border border-emerald-500/20">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-gray-400">Equivalent Trees Planted</span>
                    <Trees className="text-green-400" />
                  </div>
                  <div className="text-4xl font-bold text-green-400">~{Math.floor(estimatedSavings / 20)} trees</div>
                </div>
                <div className="bg-slate-900/50 rounded-xl p-6 border border-emerald-500/20">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-gray-400">Fuel Cost Savings</span>
                    <Zap className="text-yellow-400" />
                  </div>
                  <div className="text-4xl font-bold text-yellow-400">${(estimatedSavings * 0.8).toLocaleString()}</div>
                </div>
              </div>
              <p className="text-gray-400 text-sm mt-6 text-center">
                * Estimates based on industry averages and route optimization data
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-950 border-t border-emerald-500/20 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center mb-4">
                <Globe className="h-8 w-8 text-emerald-400" />
                <span className="ml-2 text-xl font-bold text-white">GreenRoute</span>
              </div>
              <p className="text-gray-400 mb-4">Making logistics sustainable, one delivery at a time.</p>
              <div className="flex items-center text-emerald-400 text-sm">
                <Trees className="w-4 h-4 mr-2 animate-pulse" />
                <span>12,450 trees planted today</span>
              </div>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-4">Product</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-emerald-400 transition">
                    Features
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-emerald-400 transition">
                    Pricing
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-emerald-400 transition">
                    Case Studies
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-emerald-400 transition">
                    API Docs
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-emerald-400 transition">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-emerald-400 transition">
                    Our Mission
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-emerald-400 transition">
                    Careers
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-emerald-400 transition">
                    Blog
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-emerald-400 transition">
                    Help Center
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-emerald-400 transition">
                    Contact Us
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-emerald-400 transition">
                    Partners
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-emerald-400 transition">
                    Status
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-emerald-500/20 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">© 2025 GreenRoute. All rights reserved.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-emerald-400 transition">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-emerald-400 transition">
                Terms of Service
              </a>
              <a href="#" className="text-gray-400 hover:text-emerald-400 transition">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </footer>

      <style jsx>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0) rotate(0deg);
          }
          50% {
            transform: translateY(-20px) rotate(180deg);
          }
        }

        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        @keyframes gradient {
          0%, 100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }

        @keyframes fade-in {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-float {
          animation: float linear infinite;
        }

        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }

        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 3s ease infinite;
        }

        .animate-fade-in {
          animation: fade-in 1s ease-out;
        }

        .animate-fade-in-up {
          animation: fade-in-up 1s ease-out;
        }

        .animate-fade-in-up-delay {
          animation: fade-in-up 1s ease-out 0.2s backwards;
        }

        .animate-fade-in-up-delay-2 {
          animation: fade-in-up 1s ease-out 0.4s backwards;
        }
      `}</style>
    </div>
  )
}
