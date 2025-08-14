'use client';
import { useState } from 'react';
import { useTheme } from 'next-themes';
import Image from 'next/image';

const services = [
  {
    id: 1,
    title: 'Custom Website Development',
    description: 'Tailored web solutions designed to meet your specific business needs with pixel-perfect implementation.',
    icon: (
      <svg className="w-8 h-8 text-yellow-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    ),
    features: [
      'Responsive design',
      'Custom UI/UX',
      'Performance optimized',
      'SEO-friendly'
    ],
    technologies: ['React', 'Next.js', 'Tailwind CSS', 'TypeScript']
  },
  {
    id: 2,
    title: 'E-commerce Solutions',
    description: 'Powerful online stores that convert visitors into customers with seamless shopping experiences.',
    icon: (
      <svg className="w-8 h-8 text-yellow-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
    features: [
      'Product management',
      'Secure checkout',
      'Payment gateways',
      'Inventory system'
    ],
    technologies: ['Shopify', 'WooCommerce', 'BigCommerce', 'Headless commerce']
  },
  {
    id: 3,
    title: 'CMS Development',
    description: 'Easy-to-manage websites with powerful content management systems for non-technical users.',
    icon: (
      <svg className="w-8 h-8 text-yellow-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
      </svg>
    ),
    features: [
      'WordPress customization',
      'Headless CMS options',
      'Custom content types',
      'Editor-friendly interfaces'
    ],
    technologies: ['WordPress', 'Strapi', 'Sanity', 'Contentful']
  },
  {
    id: 4,
    title: 'Website Maintenance',
    description: 'Ongoing support and updates to keep your website secure, fast, and up-to-date.',
    icon: (
      <svg className="w-8 h-8 text-yellow-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    features: [
      'Security updates',
      'Performance monitoring',
      'Content updates',
      'Backup solutions'
    ],
    technologies: ['Automated backups', 'Uptime monitoring', 'Security audits']
  }
];

const processSteps = [
  {
    id: 1,
    title: 'Discovery',
    description: 'We analyze your requirements and define project scope',
    icon: '🔍'
  },
  {
    id: 2,
    title: 'Design',
    description: 'Wireframing and prototyping the user experience',
    icon: '🎨'
  },
  {
    id: 3,
    title: 'Development',
    description: 'Building the solution with clean, maintainable code',
    icon: '💻'
  },
  {
    id: 4,
    title: 'Testing',
    description: 'Rigorous quality assurance across devices',
    icon: '🧪'
  },
  {
    id: 5,
    title: 'Launch',
    description: 'Deployment and performance monitoring',
    icon: '🚀'
  },
  {
    id: 6,
    title: 'Maintenance',
    description: 'Ongoing support and updates',
    icon: '🛠️'
  }
];

export default function WebDevelopmentSection() {
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
      iconBg: 'bg-yellow-900/20'
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
      iconBg: 'bg-yellow-50'
    }
  };

  const activeTheme = themeClasses[currentTheme] || themeClasses.light;

  return (
    <section className={`py-16 ${activeTheme.bg} transition-colors duration-300`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className={`text-3xl md:text-4xl font-bold ${activeTheme.text} mb-4`}>
            <span className="text-yellow-500">Web</span> <span className="text-teal-500">Development</span> Services
          </h2>
          <p className={`text-lg ${activeTheme.secondaryText} max-w-3xl mx-auto`}>
            We build high-performance websites and web applications tailored to your business goals
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
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {processSteps.map((step) => (
                <div
                  key={step.id}
                  className={`${activeTheme.cardBg} rounded-xl shadow-md p-6 hover:shadow-lg transition-all duration-300 border ${activeTheme.cardBorder}`}
                >
                  <div className="flex items-center mb-4">
                    <span className="text-2xl mr-3">{step.icon}</span>
                    <h3 className={`text-xl font-bold ${activeTheme.text}`}>{step.title}</h3>
                  </div>
                  <p className={activeTheme.secondaryText}>{step.description}</p>
                </div>
              ))}
            </div>
            <div className={`mt-10 ${activeTheme.cardBg} rounded-xl shadow-md p-8 border ${activeTheme.cardBorder}`}>
              <h3 className={`text-2xl font-bold ${activeTheme.text} mb-6 text-center`}>Our Technology Stack</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {['React', 'Next.js', 'Node.js', 'Tailwind CSS'].map((tech) => (
                  <div key={tech} className="text-center">
                    <div className={`${activeTheme.techBg} rounded-lg p-4 h-24 flex items-center justify-center mb-2`}>
                      <Image
                        src={`/tech-logos/${tech.toLowerCase()}${currentTheme === 'dark' ? '-white' : ''}.svg`}
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
        <div className="bg-gradient-to-r from-yellow-500 to-yellow-600 rounded-xl shadow-lg p-8 md:p-12 text-center">
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">Ready to build something amazing?</h3>
          <p className="text-yellow-100 mb-6 max-w-2xl mx-auto">
            Let&rsquo;s discuss your project and how we can help bring your vision to life.
          </p>
          <button className="bg-white hover:bg-gray-100 text-yellow-600 font-bold py-3 px-8 rounded-lg shadow-md transition-colors">
            Get a Free Consultation
          </button>
        </div>
      </div>
    </section>
  );
}