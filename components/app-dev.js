'use client';
import { useState } from 'react';
import { useTheme } from 'next-themes';
import Image from 'next/image';

const services = [
  {
    id: 1,
    title: 'Cross-Platform Apps',
    description: 'Build once, run anywhere with our cross-platform development solutions',
    icon: (
      <svg className="w-8 h-8 text-yellow-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    features: [
      'Single codebase for iOS & Android',
      'Faster development cycle',
      'Consistent user experience',
      'Cost-effective solution'
    ],
    technologies: ['React Native', 'Flutter', 'Xamarin', 'Ionic']
  },
  {
    id: 2,
    title: 'Native iOS Apps',
    description: 'High-performance apps optimized for Apple devices',
    icon: (
      <svg className="w-8 h-8 text-yellow-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.5v15m7.5-7.5h-15" />
      </svg>
    ),
    features: [
      'Swift & Objective-C development',
      'Full Apple ecosystem integration',
      'Optimized for performance',
      'App Store compliance'
    ],
    technologies: ['Swift', 'SwiftUI', 'UIKit', 'Core Data']
  },
  {
    id: 3,
    title: 'Native Android Apps',
    description: 'Custom Android applications built for scalability',
    icon: (
      <svg className="w-8 h-8 text-yellow-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    features: [
      'Kotlin & Java development',
      'Material Design implementation',
      'Google Play Store ready',
      'Android SDK expertise'
    ],
    technologies: ['Kotlin', 'Jetpack', 'Room', 'Coroutines']
  },
  {
    id: 4,
    title: 'App Maintenance',
    description: 'Keep your app running smoothly with ongoing support',
    icon: (
      <svg className="w-8 h-8 text-yellow-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    features: [
      'Bug fixes and updates',
      'Performance optimization',
      'Security patches',
      'Feature enhancements'
    ],
    technologies: ['Updates', 'Monitoring', 'Analytics', 'Testing']
  }
];

const processSteps = [
  {
    id: 1,
    title: 'Discovery',
    description: 'We analyze your requirements, target audience, and business objectives to create a solid foundation for your app.',
    icon: '🔍'
  },
  {
    id: 2,
    title: 'Planning',
    description: 'We develop a detailed project roadmap with milestones, deliverables, and technical specifications.',
    icon: '📝'
  },
  {
    id: 3,
    title: 'UI/UX Design',
    description: 'Our designers create intuitive interfaces and engaging user experiences tailored to your brand.',
    icon: '🎨'
  },
  {
    id: 4,
    title: 'Development',
    description: 'Our developers build your app using modern technologies and best coding practices.',
    icon: '💻'
  },
  {
    id: 5,
    title: 'Testing',
    description: 'We rigorously test your app across devices and scenarios to ensure quality and performance.',
    icon: '🧪'
  },
  {
    id: 6,
    title: 'Launch',
    description: 'We deploy your app to the stores and monitor initial performance metrics.',
    icon: '🚀'
  }
];

export default function AppDevelopmentSection() {
  const [activeTab, setActiveTab] = useState('services');
  const { theme: themeMode, systemTheme } = useTheme();

  // Determine the effective theme (user preference or system)
  const currentTheme = themeMode === 'system' ? systemTheme : themeMode;

  // Theme configuration
  const themeClasses = {
    dark: {
      bg: 'bg-gray-900',
      text: 'text-white',
      secondaryText: 'text-gray-300',
      cardBg: 'bg-gray-800',
      cardBorder: 'border-gray-700',
      cardHover: 'hover:bg-gray-700',
      buttonText: 'text-white',
      techBg: 'bg-gray-700',
      techText: 'text-gray-200',
      iconBg: 'bg-yellow-900/20',
      timelineBg: 'bg-gray-700'
    },
    light: {
      bg: 'bg-gray-50',
      text: 'text-gray-900',
      secondaryText: 'text-gray-600',
      cardBg: 'bg-white',
      cardBorder: 'border-gray-200',
      cardHover: 'hover:bg-gray-50',
      buttonText: 'text-white',
      techBg: 'bg-gray-100',
      techText: 'text-gray-800',
      iconBg: 'bg-yellow-50',
      timelineBg: 'bg-gray-200'
    }
  };

  const activeTheme = themeClasses[currentTheme] || themeClasses.light;

  return (
    <section className={`py-16 ${activeTheme.bg} transition-colors duration-300`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className={`text-3xl md:text-4xl font-bold ${activeTheme.text} mb-4`}>
            <span className="text-yellow-500">Mobile App</span> <span className="text-teal-500">Development</span>
          </h2>
          <p className={`text-lg ${activeTheme.secondaryText} max-w-3xl mx-auto`}>
            We create engaging mobile experiences that users love and businesses rely on
          </p>
        </div>

        {/* Navigation Tabs */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex rounded-md shadow-sm">
            <button
              onClick={() => setActiveTab('services')}
              className={`px-6 py-3 text-sm font-medium rounded-l-lg transition-colors ${
                activeTab === 'services'
                  ? 'bg-yellow-500 text-white'
                  : `${activeTheme.cardBg} ${activeTheme.text} hover:${activeTheme.cardHover} border ${activeTheme.cardBorder}`
              }`}
            >
              Our Services
            </button>
            <button
              onClick={() => setActiveTab('process')}
              className={`px-6 py-3 text-sm font-medium rounded-r-lg transition-colors ${
                activeTab === 'process'
                  ? 'bg-yellow-500 text-white'
                  : `${activeTheme.cardBg} ${activeTheme.text} hover:${activeTheme.cardHover} border ${activeTheme.cardBorder}`
              }`}
            >
              Our Process
            </button>
          </div>
        </div>

        {/* Services Tab */}
        {activeTab === 'services' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {services.map((service) => (
              <div
                key={service.id}
                className={`${activeTheme.cardBg} rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-all duration-300 border ${activeTheme.cardBorder} flex flex-col h-full`}
              >
                <div className="p-6 flex-grow">
                  <div className={`flex items-center justify-center w-16 h-16 mb-4 rounded-full ${activeTheme.iconBg} mx-auto`}>
                    {service.icon}
                  </div>
                  <h3 className={`text-xl font-bold ${activeTheme.text} mb-3 text-center`}>{service.title}</h3>
                  <p className={`${activeTheme.secondaryText} mb-4 text-center`}>{service.description}</p>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, index) => (
                      <li key={index} className="flex items-start">
                        <svg className="w-5 h-5 text-teal-500 mt-0.5 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                        <span className={activeTheme.text}>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-auto">
                    <h4 className={`text-sm font-semibold ${activeTheme.secondaryText} mb-2`}>Technologies:</h4>
                    <div className="flex flex-wrap gap-2">
                      {service.technologies.map((tech, index) => (
                        <span
                          key={index}
                          className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${activeTheme.techBg} ${activeTheme.techText}`}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
                <div className={`px-6 py-4 ${activeTheme.techBg} border-t ${activeTheme.cardBorder}`}>
                  <button className="w-full bg-yellow-500 hover:bg-yellow-600 text-white font-medium py-2 px-4 rounded-md transition-colors">
                    Learn More
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Process Tab */}
        {activeTab === 'process' && (
          <div className="mb-12">
            <div className="relative">
              {/* Timeline line */}
              <div className={`hidden lg:block absolute left-1/2 top-0 h-full w-0.5 ${activeTheme.timelineBg} transform -translate-x-1/2`}></div>
              
              <div className="space-y-8 lg:space-y-0">
                {processSteps.map((step, index) => (
                  <div 
                    key={step.id} 
                    className={`relative lg:flex ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center justify-between`}
                  >
                    {/* Timeline dot */}
                    <div className="hidden lg:flex absolute left-1/2 w-6 h-6 bg-yellow-500 rounded-full transform -translate-x-1/2 items-center justify-center z-10">
                      <span className="text-white text-xs font-bold">{index + 1}</span>
                    </div>
                    
                    {/* Content */}
                    <div className={`lg:w-5/12 ${index % 2 === 0 ? 'lg:pr-8' : 'lg:pl-8'} mb-6 lg:mb-0`}>
                      <div className={`${activeTheme.cardBg} rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow duration-300 border ${activeTheme.cardBorder}`}>
                        <div className="flex items-center mb-3">
                          <span className="text-2xl mr-3">{step.icon}</span>
                          <h3 className={`text-xl font-bold ${activeTheme.text}`}>{step.title}</h3>
                        </div>
                        <p className={activeTheme.secondaryText}>{step.description}</p>
                      </div>
                    </div>
                    
                    {/* Spacer for even items */}
                    <div className="hidden lg:block lg:w-2/12"></div>
                  </div>
                ))}
              </div>
            </div>

            {/* Technology Stack */}
            <div className={`mt-16 ${activeTheme.cardBg} rounded-xl shadow-md p-8 border ${activeTheme.cardBorder}`}>
              <h3 className={`text-2xl font-bold ${activeTheme.text} mb-6 text-center`}>Our Technology Stack</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {['React Native', 'Swift', 'Kotlin', 'Flutter'].map((tech) => (
                  <div key={tech} className="text-center">
                    <div className={`${activeTheme.techBg} rounded-lg p-4 h-24 flex items-center justify-center mb-2`}>
                      <Image
                        src={`/tech-logos/${tech.toLowerCase().replace(' ', '-')}.svg`}
                        alt={tech}
                        width={80}
                        height={80}
                        className="h-12 w-auto"
                      />
                    </div>
                    <span className={`${activeTheme.text} font-medium`}>{tech}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-teal-500 to-teal-600 rounded-xl shadow-lg p-8 md:p-12 text-center">
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">Ready to build your app?</h3>
          <p className="text-teal-100 mb-6 max-w-2xl mx-auto">
            Let&rsquo;s turn your idea into a successful mobile application.
          </p>
          <button className="bg-white hover:bg-gray-100 text-teal-600 font-bold py-3 px-8 rounded-lg shadow-md transition-colors">
            Get a Free Quote
          </button>
        </div>
      </div>
    </section>
  );
}