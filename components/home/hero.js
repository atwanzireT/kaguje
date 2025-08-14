"use client";
import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useTheme } from 'next-themes';

const HeroSection = () => {
  const { theme, systemTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const floatElementsRef = useRef([]);

  // Theme configuration with explicit color classes
  const themeConfig = {
    dark: {
      bg: 'bg-gray-900',
      text: 'text-white',
      textMuted: 'text-gray-300',
      primary: 'bg-gradient-to-r from-yellow-400 to-yellow-500',
      secondary: 'bg-gradient-to-r from-teal-400 to-teal-500',
      accent: 'yellow-500',
      accentText: 'text-yellow-500',
      accentBg: 'bg-yellow-500/10',
      border: 'border-gray-700',
      dotColor: '#4b5563', // gray-600
      highlight: 'bg-teal-500/30',
      buttonSecondary: 'border-teal-400 text-teal-400 hover:bg-teal-500/10',
      deviceBg: 'bg-gray-800',
      deviceBorder: 'border-gray-700/50'
    },
    light: {
      bg: 'bg-gray-50',
      text: 'text-gray-800',
      textMuted: 'text-gray-600',
      primary: 'bg-gradient-to-r from-yellow-500 to-yellow-600',
      secondary: 'bg-gradient-to-r from-teal-500 to-teal-600',
      accent: 'yellow-600',
      accentText: 'text-yellow-600',
      accentBg: 'bg-yellow-600/10',
      border: 'border-gray-300',
      dotColor: '#9ca3af', // gray-400
      highlight: 'bg-teal-500/20',
      buttonSecondary: 'border-teal-600 text-teal-600 hover:bg-teal-500/05',
      deviceBg: 'bg-gray-100',
      deviceBorder: 'border-gray-300/50'
    }
  };

  // Wait until component has mounted to show theme-dependent content
  useEffect(() => {
    setMounted(true);
  }, []);

  // Parallax effect for floating elements
  useEffect(() => {
    if (!mounted) return;

    const handleMouseMove = (e) => {
      floatElementsRef.current.forEach((el, index) => {
        if (el) {
          const speed = 0.02 + (index * 0.01);
          const x = (window.innerWidth - e.clientX * speed) / 100;
          const y = (window.innerHeight - e.clientY * speed) / 100;
          el.style.transform = `translate(${x}px, ${y}px)`;
        }
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mounted]);

  // Don't render anything on the server to avoid hydration mismatch
  if (!mounted) {
    return (
      <section className="relative min-h-screen flex items-center overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 py-32 w-full">
          {/* Empty placeholder with same dimensions */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="h-[500px]"></div>
          </div>
        </div>
      </section>
    );
  }

  // Determine the effective theme (user preference or system)
  const currentTheme = theme === 'system' ? systemTheme : theme;
  const colors = currentTheme === 'dark' ? themeConfig.dark : themeConfig.light;

  return (
    <section className={`relative ${colors.bg} min-h-screen flex items-center overflow-hidden transition-colors duration-500`}>
      {/* Large dot pattern background */}
      <div className="absolute inset-0 w-full h-full opacity-20 overflow-hidden">
        <div 
          className="absolute top-0 left-0 w-full h-full"
          style={{
            backgroundImage: `radial-gradient(circle at center, ${colors.dotColor} 3px, transparent 3px)`,
            backgroundSize: '40px 40px'
          }}
        />
      </div>

      {/* Floating accent shapes */}
      <div 
        ref={el => floatElementsRef.current[0] = el}
        className={`absolute top-1/4 left-1/4 w-20 h-20 rounded-full ${colors.accentBg} blur-xl animate-float-slow`}
      />
      <div 
        ref={el => floatElementsRef.current[1] = el}
        className={`absolute bottom-1/3 right-1/4 w-28 h-28 rounded-full bg-teal-500/20 blur-xl animate-float-medium`}
      />
      <div 
        ref={el => floatElementsRef.current[2] = el}
        className={`absolute top-1/3 right-1/3 w-24 h-24 rounded-full ${colors.accentBg.replace('10', '15')} blur-xl animate-float-fast`}
      />
      
      {/* Main content container */}
      <div className="relative max-w-7xl mx-auto px-6 py-32 z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Text content */}
          <div className="text-center lg:text-left space-y-6">
            <div className={`inline-block px-5 py-2.5 ${colors.accentBg} backdrop-blur-md rounded-full border ${colors.border} transition-all`}>
              <span className={`${colors.accentText} font-medium text-sm`}>Innovating Since 2023</span>
            </div>
            
            <h1 className={`text-5xl md:text-6xl lg:text-7xl font-bold ${colors.text} leading-tight`}>
              <span className={`text-transparent bg-clip-text ${colors.primary}`}>Beyond</span>
              <span className={`text-transparent bg-clip-text ${colors.secondary}`}> Tech</span>
              <span className={`block ${colors.text} mt-3`}>Boundaries</span>
            </h1>
            
            <p className={`text-xl ${colors.textMuted} max-w-2xl mx-auto lg:mx-0`}>
              Where cutting-edge accessories meet flawless digital craftsmanship and
              <span className="relative inline-block mx-1.5">
                <span className="relative z-10">precision repairs</span>
                <span className={`absolute bottom-0 left-0 w-full h-2 ${colors.highlight} -rotate-1 z-0`} />
              </span>
              for your devices.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link 
                href="/phone-accessories" 
                className={`px-8 py-4 ${colors.primary} text-white font-medium rounded-lg shadow-lg hover:shadow-xl transition-all hover:scale-[1.02]`}
              >
                Explore Accessories
              </Link>
              
              <Link 
                href="/contact" 
                className={`px-8 py-4 bg-transparent border-2 ${colors.buttonSecondary} font-medium rounded-lg hover:shadow-lg transition-all relative overflow-hidden`}
              >
                <span className="relative z-10">Book Consultation</span>
                <span className={`absolute inset-0 rounded-md bg-teal-500/0 hover:bg-teal-500/10 transition-all`} />
              </Link>
            </div>
          </div>
          
          {/* Device showcase */}
          <div className="relative h-[400px] lg:h-[500px]">
            <div className="absolute inset-0 flex items-center justify-center">
              {/* Phone */}
              <div className="relative w-52 h-80 animate-float-medium">
                <div className={`absolute inset-0 ${colors.deviceBg} rounded-3xl shadow-2xl ${colors.deviceBorder} border overflow-hidden`}>
                  <Image
                    src="/images/phone-screen.jpg"
                    alt="Phone with accessories"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
                <div className={`absolute left-0 top-1/2 w-2 h-20 ${currentTheme === 'dark' ? 'bg-gray-700' : 'bg-gray-400'} -translate-y-1/2 rounded-r-md`} />
              </div>
              
              {/* Laptop */}
              <div className="absolute w-72 h-44 animate-float-slow">
                <div className={`absolute inset-0 ${colors.deviceBg} rounded-xl shadow-2xl ${colors.deviceBorder} border overflow-hidden`}>
                  <Image
                    src="/images/laptop-screen.jpg"
                    alt="Web development"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
                <div className={`absolute -bottom-4 left-1/2 w-4/5 h-4 ${currentTheme === 'dark' ? 'bg-gray-800' : 'bg-gray-200'} -translate-x-1/2 rounded-b-lg`} />
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce z-10">
        <div className={`w-6 h-10 border-2 ${currentTheme === 'dark' ? 'border-yellow-500' : 'border-yellow-600'} rounded-full flex justify-center p-1`}>
          <div className={`w-1 h-2 ${currentTheme === 'dark' ? 'bg-yellow-500' : 'bg-yellow-600'} rounded-full animate-scroll`} />
        </div>
      </div>

      {/* Animation styles */}
      <style jsx global>{`
        @keyframes float-slow {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-25px) rotate(3deg); }
        }
        @keyframes float-medium {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-15px) rotate(-2deg); }
        }
        @keyframes float-fast {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-10px) rotate(1deg); }
        }
        @keyframes scroll {
          0% { transform: translateY(0); opacity: 0.5; }
          50% { transform: translateY(6px); opacity: 1; }
          100% { transform: translateY(0); opacity: 0.5; }
        }
        .animate-float-slow { animation: float-slow 8s ease-in-out infinite; }
        .animate-float-medium { animation: float-medium 6s ease-in-out infinite; }
        .animate-float-fast { animation: float-fast 4s ease-in-out infinite; }
        .animate-scroll { animation: scroll 1.5s ease-in-out infinite; }
      `}</style>
    </section>
  );
};

export default HeroSection;