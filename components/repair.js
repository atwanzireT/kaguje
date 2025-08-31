'use client';
import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';

const RepairServicesSection = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, systemTheme } = useTheme();
  const [activeTab, setActiveTab] = useState('phone');

  // Avoid hydration mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

  // Determine the effective theme
  const currentTheme = !mounted ? 'light' : theme === 'system' ? systemTheme : theme;

  // Theme configuration with yellow and green colors
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
      tabInactive: 'bg-gray-800 text-gray-300 hover:bg-gray-700'
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
      tabInactive: 'bg-gray-100 text-gray-700 hover:bg-gray-200'
    }
  };

  const activeTheme = themeClasses[currentTheme] || themeClasses.light;

  // Phone repair services
  const phoneServices = [
    {
      id: 1,
      title: 'Screen Replacement',
      description: 'Professional screen replacement for all phone models with warranty',
      features: ['Original/Quality screens', 'Warranty included', 'Quick service'],
      icon: '📱'
    },
    {
      id: 2,
      title: 'Battery Replacement',
      description: 'Get your phone battery replaced with high-quality batteries',
      features: ['Improved battery life', 'Genuine parts', 'Warranty included'],
      icon: '🔋'
    },
    {
      id: 3,
      title: 'Charging Port Repair',
      description: 'Fix charging issues with professional port replacement',
      features: ['Fast charging restored', 'Quality parts', 'Quick service'],
      icon: '⚡'
    },
    {
      id: 4,
      title: 'Water Damage Repair',
      description: 'Expert water damage treatment and component replacement',
      features: ['Deep cleaning', 'Component testing', 'Data recovery'],
      icon: '💧'
    }
  ];

  // Laptop repair services
  const laptopServices = [
    {
      id: 1,
      title: 'Screen Replacement',
      description: 'Professional laptop screen replacement for all brands',
      features: ['High-quality displays', 'Warranty included', 'Professional installation'],
      icon: '💻'
    },
    {
      id: 2,
      title: 'Hardware Upgrades',
      description: 'RAM, SSD, and other component upgrades for better performance',
      features: ['Performance boost', 'Genuine parts', 'Expert installation'],
      icon: '🔄'
    },
    {
      id: 3,
      title: 'Keyboard Replacement',
      description: 'Professional keyboard replacement for all laptop models',
      features: ['Original keyboards', 'Warranty included', 'Quick service'],
      icon: '⌨️'
    },
    {
      id: 4,
      title: 'Virus Removal',
      description: 'Complete virus removal and system optimization',
      features: ['Virus scanning', 'Malware removal', 'System protection setup'],
      icon: '🛡️'
    }
  ];

  // Other services
  const otherServices = [
    {
      id: 1,
      title: 'Software Installation',
      description: 'Professional software installation and setup',
      features: ['Windows/macOS', 'Drivers installation', 'Software configuration'],
      icon: '📀'
    },
    {
      id: 2,
      title: 'Data Recovery',
      description: 'Professional data recovery from damaged devices',
      features: ['HDD/SSD recovery', 'Phone data recovery', 'Backup solutions'],
      icon: '💾'
    },
    {
      id: 3,
      title: 'IT Lessons',
      description: 'Personalized IT lessons for beginners and advanced users',
      features: ['One-on-one sessions', 'Custom curriculum', 'Practical exercises'],
      icon: '👨‍💻'
    },
    {
      id: 4,
      title: 'Design Services',
      description: 'Flyers, logos, and business card designs',
      features: ['Professional designs', 'Multiple revisions', 'Print-ready files'],
      icon: '🎨'
    }
  ];

  return (
    <section className={`py-16 ${activeTheme.bg} transition-colors duration-300`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className={`text-3xl md:text-4xl font-bold ${activeTheme.text} mb-4`}>
            <span className="text-yellow-500">Phone</span> & <span className="text-green-500">Laptop</span> Repair Services
          </h2>
          <p className={`text-lg ${activeTheme.secondaryText} max-w-3xl mx-auto`}>
            Professional repair services with warranty. We fix all brands and models with high-quality parts.
          </p>
        </div>

        {/* Navigation Tabs */}
        <div className="flex justify-center mb-12 flex-wrap">
          <div className="inline-flex rounded-md shadow-sm">
            <button
              onClick={() => setActiveTab('phone')}
              className={`px-6 py-3 text-sm font-medium rounded-l-lg transition-colors ${
                activeTab === 'phone'
                  ? 'bg-yellow-500 text-white'
                  : `${activeTheme.tabInactive}`
              }`}
            >
              Phone Repair
            </button>
            <button
              onClick={() => setActiveTab('laptop')}
              className={`px-6 py-3 text-sm font-medium transition-colors ${
                activeTab === 'laptop'
                  ? 'bg-yellow-500 text-white'
                  : `${activeTheme.tabInactive}`
              }`}
            >
              Laptop Repair
            </button>
            <button
              onClick={() => setActiveTab('other')}
              className={`px-6 py-3 text-sm font-medium rounded-r-lg transition-colors ${
                activeTab === 'other'
                  ? 'bg-yellow-500 text-white'
                  : `${activeTheme.tabInactive}`
              }`}
            >
              Other Services
            </button>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {(activeTab === 'phone' ? phoneServices : activeTab === 'laptop' ? laptopServices : otherServices).map((service) => (
            <div
              key={service.id}
              className={`${activeTheme.cardBg} rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-all duration-300 border ${activeTheme.cardBorder} flex flex-col h-full`}
            >
              <div className="p-6 flex-grow">
                <div className={`flex items-center justify-center w-16 h-16 mb-4 rounded-full ${activeTheme.iconBg} mx-auto text-2xl`}>
                  {service.icon}
                </div>
                <h3 className={`text-xl font-bold ${activeTheme.text} mb-3 text-center`}>{service.title}</h3>
                <p className={`${activeTheme.secondaryText} mb-4 text-center`}>{service.description}</p>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <svg className="w-5 h-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      <span className={activeTheme.text}>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className={`px-6 py-4 ${activeTheme.techBg} border-t ${activeTheme.cardBorder}`}>
                <button className="w-full bg-yellow-500 hover:bg-yellow-600 text-white font-medium py-2 px-4 rounded-md transition-colors">
                  Contact for Pricing
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Services */}
        <div className={`${activeTheme.cardBg} rounded-xl shadow-md p-8 border ${activeTheme.cardBorder} mb-12`}>
          <h3 className={`text-2xl font-bold ${activeTheme.text} mb-6 text-center`}>Additional Services</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              'Flashing tools and software',
              'Software license activation',
              'Spy software installation',
              'Anti-virus installation',
              'System optimization',
              'Adobe Photoshop & AutoCAD',
              'iTunes Gift Card Sales',
              'Social Media Followers',
              'Graphic Design Services'
            ].map((service, index) => (
              <div key={index} className="flex items-start">
                <svg className="w-5 h-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                <span className={activeTheme.text}>{service}</span>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-yellow-500 to-green-500 rounded-xl shadow-lg p-8 md:p-12 text-center">
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">Need Professional Repair Services?</h3>
          <p className="text-yellow-100 mb-6 max-w-2xl mx-auto">
            We offer quality repairs with warranty. All our technicians are certified and experienced.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="bg-white hover:bg-gray-100 text-green-600 font-bold py-3 px-8 rounded-lg shadow-md transition-colors">
              Call Now: +256 776 504 996
            </button>
            <button className="bg-gray-900 hover:bg-gray-800 text-white font-bold py-3 px-8 rounded-lg shadow-md transition-colors">
              WhatsApp Us
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RepairServicesSection;