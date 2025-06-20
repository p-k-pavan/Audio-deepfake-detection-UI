import React from 'react';
import { ShieldCheck, Brain, Volume2, CheckCircle, Clock, Mic, Code } from 'lucide-react';
import { Link } from 'react-router-dom';

const features = [
  {
    title: "Enterprise-Grade Security",
    desc: "Real-time manipulation detection with 98.3% accuracy to safeguard your audio integrity against sophisticated attacks.",
    icon: <ShieldCheck className="text-indigo-600 w-6 h-6" />,
    stats: "98.3% Accuracy"
  },
  {
    title: "Pre-Trained Detection Models",
    desc: "Deploy immediately with models trained on 30000+ audio samples across dialects.",
    icon: <CheckCircle className="text-green-600 w-6 h-6" />,
    stats: "30k+ Samples"
  },
  {
    title: "Cross-Platform Compatibility",
    desc: "Supports all major voice platforms including Microsoft Azure, Google Wavenet, AWS Polly, and ElevenLabs.",
    icon: <Brain className="text-purple-600 w-6 h-6" />,
    stats: "15+ Integrations"
  },
  {
    title: "Noise & Codec Resilience",
    desc: "Maintains 99.5%+ accuracy even with background noise, compression artifacts, and low-bitrate audio.",
    icon: <Volume2 className="text-yellow-500 w-6 h-6" />,
    stats: "95% Noise Immunity"
  },
  {
    title: "Real-Time Analysis",
    desc: "200ms average response time with our optimized detection algorithms for high-volume enterprise use.",
    icon: <Clock className="text-pink-500 w-6 h-6" />,
    stats: "200ms Response"
  },
  {
    title: "Seamless Integration",
    desc: "Simple API and SDK options for WAV, and streaming audio with developer-friendly documentation.",
    icon: <Code className="text-blue-500 w-6 h-6" />,
    stats: "3-Line Integration"
  },
];

const stats = [
  { value: "99.3%", label: "Detection Accuracy" },
  { value: "200ms", label: "Average Response" },
  { value: "30K+", label: "Training Samples" },
  { value: "1", label: "Present  Languages" },
];

const Hero = () => {
  return (
    <div className='font-sans text-gray-800'>
      {/* Navbar would be included here in the actual implementation */}
      
      {/* Hero Banner */}
      <section className='relative my-12 mx-4 md:mx-24 bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-500 text-white rounded-3xl p-8 shadow-xl overflow-hidden mt-24'>
        {/* Decorative elements */}
        <div className='absolute top-0 left-0 w-full h-full opacity-10'>
          <div className='absolute top-20 left-20 w-40 h-40 rounded-full bg-white'></div>
          <div className='absolute bottom-10 right-10 w-60 h-60 rounded-full bg-white'></div>
        </div>
        
        <div className='relative z-10'>
          <div className='text-center mb-2'>
            <span className='inline-block px-3 py-1 text-xs font-semibold bg-white/20 rounded-full backdrop-blur-sm'>
              ENTERPRISE SECURITY SOLUTION
            </span>
          </div>
          <h1 className='text-4xl md:text-6xl font-black text-center mb-6 leading-tight'>
            Advanced Audio Deepfake <br className='hidden md:block'/>Detection
          </h1>
          <p className='text-center text-lg md:text-2xl font-light max-w-4xl mx-auto'>
            Protect your organization from evolving voice-based threats with our AI-powered detection platform—trained on thousands of manipulated audio samples to identify deepfakes with military-grade precision.
          </p>
          
          <div className='mt-10 flex flex-col md:flex-row justify-center gap-4'>
            <button className='px-8 py-3 bg-white text-indigo-600 font-bold rounded-lg hover:bg-gray-100 transition duration-300 shadow-lg'>
              <Link to={"/dashboard"}>
              Try it now
              </Link>
            </button>
            <button className='px-8 py-3 bg-transparent border-2 border-white text-white font-bold rounded-lg hover:bg-white/10 transition duration-300'>
              Technical Documentation
            </button>
          </div>
        </div>
      </section>

      {/* Trust Badges */}
      <div className='flex flex-wrap justify-center gap-6 my-12 px-4'>
        {["Fortune 500", "Financial Institutions", "Government Agencies", "Healthcare Providers"].map((item, index) => (
          <div key={index} className='flex items-center gap-2 text-gray-600'>
            <CheckCircle className='w-4 h-4 text-green-500' />
            <span className='text-sm font-medium'>{item}</span>
          </div>
        ))}
      </div>

      {/* Stats Section */}
      <section className='bg-gray-50 py-12'>
        <div className='max-w-7xl mx-auto px-4'>
          <div className='grid grid-cols-2 md:grid-cols-4 gap-8'>
            {stats.map((stat, index) => (
              <div key={index} className='text-center'>
                <p className='text-3xl md:text-4xl font-bold text-indigo-600'>{stat.value}</p>
                <p className='text-gray-600 mt-2'>{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Image Section */}
      <div className='w-full flex justify-center my-16 px-4'>
        <div className='relative w-full max-w-4xl'>
          <img 
            src='./FLOWCHAT.gif' 
            alt='Audio Analysis Dashboard' 
            className='w-full rounded-xl border-8 border-white'
          />
          <div className='absolute -bottom-6 -right-6 bg-white p-4 rounded-lg shadow-lg hidden md:block'>
            <div className='flex items-center gap-2'>
              <Mic className='w-5 h-5 text-indigo-600' />
              <span className='font-medium text-gray-800'>Audio Analysis</span>
            </div>
          </div>
        </div>
      </div>

      {/* Features Grid */}
      <section className='px-4 md:px-8 py-16 bg-white'>
        <div className='max-w-7xl mx-auto'>
          <div className='text-center mb-12'>
            <h2 className='text-3xl md:text-4xl font-bold text-gray-800'>Enterprise-Grade Detection Capabilities</h2>
            <p className='text-lg text-gray-600 mt-4 max-w-3xl mx-auto'>
              Trusted by security teams worldwide to protect against voice cloning, synthetic media, and audio manipulation attacks.
            </p>
          </div>

          <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
            {features.map((feat, index) => (
              <div key={index} className='group bg-gray-50 p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 border border-transparent hover:border-indigo-100'>
                <div className='mb-4 flex items-center justify-between'>
                  <div className='p-3 rounded-lg bg-indigo-50 group-hover:bg-indigo-100 transition'>
                    {feat.icon}
                  </div>
                  <span className='text-xs font-semibold px-2 py-1 bg-indigo-100 text-indigo-800 rounded'>
                    {feat.stats}
                  </span>
                </div>
                <h3 className='text-xl font-semibold mb-3 text-gray-800'>{feat.title}</h3>
                <p className='text-gray-600'>{feat.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className='bg-gradient-to-r from-indigo-500 to-purple-600 text-white py-16 px-4'>
        <div className='max-w-4xl mx-auto text-center'>
          <h2 className='text-3xl md:text-4xl font-bold mb-6'>Ready to Secure Your Audio Channels?</h2>
          <p className='text-xl mb-8 opacity-90'>
            Schedule a consultation with our team experts to evaluate your deepfake detection needs.
          </p>
          <div className='flex flex-col sm:flex-row justify-center gap-4'>
            <button className='px-8 py-3 bg-white text-indigo-600 font-bold rounded-lg hover:bg-gray-100 transition duration-300 shadow-lg'>
              Contact Sales
            </button>
            <button className='px-8 py-3 bg-transparent border-2 border-white text-white font-bold rounded-lg hover:bg-white/10 transition duration-300'>
              View Case Studies
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
export default Hero