'use client';

import { useState, useEffect } from 'react';
import { 
  PlayIcon, 
  SparklesIcon, 
  CpuChipIcon, 
  VideoCameraIcon,
  EyeIcon,
  BoltIcon,
  CheckIcon,
  ArrowRightIcon
} from '@heroicons/react/24/outline';
import { transform } from 'typescript';

export default function Home() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeFeature, setActiveFeature] = useState(0);

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setActiveFeature((prev) => (prev + 1) % 5);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const features = [
    {
      icon: <VideoCameraIcon className="w-8 h-8" />,
      title: "Fully Automated Video Creation",
      description: "Upload a script, write one, or describe your idea — our AI handles the rest with perfect timing, visuals, and animations."
    },
    {
      icon: <EyeIcon className="w-8 h-8" />,
      title: "Narration & Visuals Perfectly Synced",
      description: "Voiceovers are auto-timed with motion graphics, transitions, and B-roll — eliminating the need for manual syncing."
    },
    {
      icon: <SparklesIcon className="w-8 h-8" />,
      title: "Smart Motion Graphics & Templates",
      description: "Text boxes, transitions, 3D scenes, and visual highlights are inserted and animated automatically."
    },
    {
      icon: <CpuChipIcon className="w-8 h-8" />,
      title: "Editable Scenes with Full Creative Control",
      description: "Need changes? Swap visuals, edit voiceovers, or adjust animations on any scene — you're always in control."
    },
    {
      icon: <BoltIcon className="w-8 h-8" />,
      title: "One-Click Export or Auto Upload to YouTube",
      description: "Export your video to a YouTube-ready format or let the platform upload it directly."
    }
  ];

  const pricingPlans = [
    {
      name: "Starter",
      price: "$99",
      period: "/month",
      description: "For youtubers",
      features: [
        "Videos: 4/month (20 min max each)",
        "YouTube Channels: 1 connected",
        "Includes script, voice, visuals"
      ],
      popular: false
    },
    {
      name: "Growth",
      price: "$199",
      period: "/month",
      description: "Growth - $199/month",
      features: [
        "12 videos (20 min each)",
        "3 YouTube channels",
        "Mid-tier automation & export"
      ],
      popular: true
    },
    {
      name: "Scale",
      price: "$499",
      period: "/month",
      description: "Scale - $499/month",
      features: [
        "40 videos (20 min each)",
        "10 YouTube channels",
        "Best value per video"
      ],
      popular: false
    }
  ];

  const niches = [
    { title: "3D Animated Documentaries", image: "https://images.pexels.com/photos/3862132/pexels-photo-3862132.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop" },
    { title: "Historical Deep Dives", image: "https://images.pexels.com/photos/159711/books-bookstore-book-reading-159711.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop" },
    { title: "Geopolitics & Geography", image: "https://images.pexels.com/photos/335393/pexels-photo-335393.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop" },
    { title: "Science & Astronomy", image: "https://images.pexels.com/photos/2156/sky-earth-space-working.jpg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop" },
    { title: "True Crime & Investigations", image: "https://images.pexels.com/photos/8369648/pexels-photo-8369648.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop" },
    { title: "Motivational & Personal Growth", image: "https://images.pexels.com/photos/1181677/pexels-photo-1181677.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop" },
    { title: "Business & Finance", image: "https://images.pexels.com/photos/159888/pexels-photo-159888.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop" },
    { title: "Celebrity Scandals & Biographies", image: "https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0f172a] via-[#312e81] to-[#0a0a23] overflow-hidden relative" style={{background: "transform"}}>
      {/* Animated Network Background */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {[...Array(18)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-cyan-400/30 blur-2xl animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${32 + Math.random() * 48}px`,
              height: `${32 + Math.random() * 48}px`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${3 + Math.random() * 4}s`
            }}
          ></div>
        ))}
        {/* Simple lines (simulate network) */}
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute bg-gradient-to-r from-cyan-400/30 to-purple-500/30 h-0.5 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 80}%`,
              top: `${Math.random() * 100}%`,
              width: `${120 + Math.random() * 180}px`,
              transform: `rotate(${Math.random() * 360}deg)`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${3 + Math.random() * 4}s`
            }}
          ></div>
        ))}
      </div>

      <main className="relative z-10">
        {/* Hero Section */}
        <section className="min-h-screen flex flex-col items-center justify-center px-4 sm:px-5 lg:px-8">
          <div className={`max-w-6xl mx-auto text-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            {/* Neon Title */}
            <div className="mb-8 px-4" style={{marginTop: "100px"}}>
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-gray-50 drop-shadow-[0_0_16px_#22d3ee] mb-4">
                Fully-Automated Viral Documentaries
              </h1>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white/90 mb-4 drop-shadow-lg">
                From Script to Final Cut — Powered by AI
              </h2>
              <p className="text-lg text-gray-200 max-w-3xl mx-auto drop-shadow-md">
                For editors and content creators who want to automate high-quality YouTube videos in minutes.
              </p>
            </div>
            <div className="relative mb-12 group">
              <div className="relative w-full max-w-4xl mx-auto bg-gradient-to-r from-gray-800 to-gray-900 rounded-2xl overflow-hidden shadow-2xl transform hover:scale-105 transition-all duration-500">
                <div className="aspect-video bg-gradient-to-br from-gray-700 to-gray-800 flex items-center justify-center relative">
                  <img 
                    src="https://images.pexels.com/photos/3862132/pexels-photo-3862132.jpeg?auto=compress&cs=tinysrgb&w=800&h=450&fit=crop"
                    alt="Video Preview"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                    <button className="w-20 h-20 bg-white/90 rounded-full flex items-center justify-center hover:bg-white transition-all duration-300 hover:scale-110 shadow-2xl">
                      <PlayIcon className="w-8 h-8 text-gray-800 ml-1" />
                    </button>
                  </div>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-purple-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
            </div>
            {/* CTA Button */}
            <button className="mt-8 bg-gradient-to-r from-cyan-400 via-teal-400 to-purple-500 bg-[length:200%_200%] animate-gradient-x text-white font-bold py-4 px-10 rounded-full text-xl shadow-xl border-2 border-cyan-400/40 hover:from-cyan-300 hover:to-purple-400 hover:scale-105 transition-all duration-300 flex items-center justify-center mx-auto">
              Send Message
              <svg className="w-6 h-6 ml-2 text-cyan-200 animate-bounce" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </button>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4 sm:px-5 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl font-bold text-center text-white mb-16">
              Smart Video Automation
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className={`relative p-6 rounded-2xl border transition-all duration-700 hover:scale-105 ${
                    activeFeature === index
                      ? 'bg-gradient-to-br from-blue-500/20 to-purple-600/20 border-blue-400/50 shadow-2xl shadow-blue-500/25'
                      : 'bg-white/5 border-gray-700 hover:border-gray-600'
                  } ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                  style={{ transitionDelay: `${index * 120 + 300}ms` }}
                >
                  <div className={`mx-auto w-16 h-16 rounded-full flex items-center justify-center mb-4 ${
                    activeFeature === index
                      ? 'bg-gradient-to-r from-blue-500 to-purple-600'
                      : 'bg-gray-700'
                  }`}>
                    <div className="mx-auto text-white">
                      {feature.icon}
                    </div>
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    {feature.description}
                  </p>
                  {activeFeature === index && (
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-600/10 rounded-2xl animate-pulse"></div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Waitlist Section */}
        <section className="py-20 px-4 sm:px-5 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-white mb-8">
              Join the Waitlist
            </h2>
            <div className="relative">
              <button className="bg-white/30 backdrop-blur text-white font-bold py-4 px-12 rounded-full text-xl shadow-2xl hover:bg-white/50 hover:text-gray-900 transition-all duration-300 hover:scale-105 transform flex items-center mx-auto border border-white/30">
                Sign Up
                <ArrowRightIcon className="w-6 h-6 ml-2" />
              </button>
              <div className="absolute -top-2 -right-2 w-4 h-4 bg-red-500 rounded-full animate-ping"></div>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-20 px-4 sm:px-5 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl font-bold text-center text-white mb-16">
              Pricing
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {pricingPlans.map((plan, index) => (
                <div
                  key={index}
                  className={`relative p-8 rounded-3xl border transition-all duration-500 hover:scale-105 ${
                    plan.popular
                      ? 'bg-gradient-to-br from-purple-500/20 to-blue-600/20 border-purple-400/50 shadow-2xl shadow-purple-500/25 scale-105'
                      : 'bg-white/5 border-gray-700 hover:border-gray-600'
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-purple-500 to-blue-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </div>
                  )}
                  
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <div className="flex items-baseline justify-center mb-2">
                      <span className="text-4xl font-bold text-white">{plan.price}</span>
                      <span className="text-gray-400 ml-1">{plan.period}</span>
                    </div>
                    <p className="text-gray-400">{plan.description}</p>
                  </div>
                  
                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start">
                        <CheckIcon className="w-5 h-5 text-green-400 mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-300 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <button className={`w-full py-3 px-6 rounded-full font-semibold transition-all duration-300 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white shadow-lg'
                      : 'bg-white/10 hover:bg-white/20 text-white border border-gray-600'
                  }`}>
                    Get Started
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Niches Section */}
        <section className="py-20 px-4 sm:px-5 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl font-bold text-center text-white mb-16">
              Niches coming soon...
            </h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {niches.map((niche, index) => (
                <div
                  key={index}
                  className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-gray-800 to-gray-900 hover:scale-105 transition-all duration-500 shadow-xl hover:shadow-2xl"
                >
                  <div className="aspect-video overflow-hidden">
                    <img
                      src={niche.image}
                      alt={niche.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <h3 className="text-white font-semibold text-sm leading-tight">
                      {niche.title}
                    </h3>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500/0 to-purple-600/0 group-hover:from-blue-500/20 group-hover:to-purple-600/20 transition-all duration-500"></div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}