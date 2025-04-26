import { useState } from 'react';
import { CreditCard, Banknote, Car, Home, Wallet, GraduationCap } from 'lucide-react';

const actions = [
  { 
    icon: <CreditCard className="w-6 h-6" />, 
    color: '#FFD600',
    name: 'Cards',
    description: 'Manage credit cards and payments'
  },
  { 
    icon: <Banknote className="w-6 h-6" />, 
    color: '#00FF94',
    name: 'Cash',
    description: 'Track your cash flow and expenses'
  },
  { 
    icon: <Car className="w-6 h-6" />, 
    color: '#00FFE0',
    name: 'Auto',
    description: 'Vehicle loans and financing'
  },
  { 
    icon: <Home className="w-6 h-6" />, 
    color: '#0066FF',
    name: 'Home',
    description: 'Mortgage and property loans'
  },
  { 
    icon: <Wallet className="w-6 h-6" />, 
    color: '#8F00FF',
    name: 'Wallet',
    description: 'Digital payment solutions'
  },
  { 
    icon: <GraduationCap className="w-6 h-6" />, 
    color: '#FF423D',
    name: 'Learn',
    description: 'Financial education resources'
  },
];

export function ActionCards() {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [activeIndex, setActiveIndex] = useState(null);

  return (
    <div className="grid grid-cols-2 gap-6 p-4">
      {actions.map((action, index) => (
        <div
          key={index}
          className="flex items-center justify-center"
        >
          <button
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
            onMouseDown={() => setActiveIndex(index)}
            onMouseUp={() => setActiveIndex(null)}
            onTouchStart={() => setActiveIndex(index)}
            onTouchEnd={() => setActiveIndex(null)}
            onBlur={() => {
              setHoveredIndex(null);
              setActiveIndex(null);
            }}
            className="relative w-32 h-32 rounded-full bg-black cursor-pointer overflow-hidden outline-none transition-all duration-300"
            style={{
              transform: activeIndex === index ? 'scale(0.95)' : hoveredIndex === index ? 'scale(1.05)' : 'scale(1)',
              boxShadow: activeIndex === index 
                ? `0 2px 8px rgba(0, 0, 0, 0.5), 0 0 20px ${action.color}60`
                : hoveredIndex === index 
                  ? `0 8px 16px rgba(0, 0, 0, 0.4), 0 0 25px ${action.color}40` 
                  : `0 4px 12px rgba(0, 0, 0, 0.3)`
            }}
          >
            {/* Glow effect at bottom */}
            <div 
              className="absolute bottom-0 left-0 right-0 h-16 transition-opacity duration-300"
              style={{
                background: `radial-gradient(circle at center bottom, ${action.color} 0%, transparent 70%)`,
                filter: 'blur(10px)',
                opacity: activeIndex === index ? 0.7 : hoveredIndex === index ? 0.6 : 0.4
              }}
            />
            
            {/* Hover glow effect around the entire button */}
            {hoveredIndex === index && (
              <div 
                className="absolute inset-0 transition-opacity duration-300"
                style={{
                  background: `radial-gradient(circle at center, transparent 40%, ${action.color}30 100%)`,
                  filter: 'blur(8px)',
                  opacity: activeIndex === index ? 0.8 : 0.4
                }}
              />
            )}
            
            {/* Icon container */}
            <div className="absolute inset-0 flex items-center justify-center transition-transform duration-300"
              style={{
                transform: activeIndex === index ? 'scale(0.9)' : hoveredIndex === index ? 'scale(1.2)' : 'scale(1)'
              }}
            >
              <div 
                className="text-center transition-all duration-300"
                style={{ 
                  color: action.color,
                  filter: `drop-shadow(0 0 8px ${action.color}70)`
                }}
              >
                {action.icon}
              </div>
            </div>
            
            {/* Active press effect */}
            {activeIndex === index && (
              <div 
                className="absolute inset-0 bg-black opacity-20"
              />
            )}
            
            {/* Pulse animation on hover */}
            {hoveredIndex === index && !activeIndex === index && (
              <div 
                className="absolute inset-0 rounded-full animate-pulse"
                style={{
                  background: `radial-gradient(circle at center, transparent 60%, ${action.color}20 100%)`,
                  animation: 'pulse 2s infinite'
                }}
              />
            )}
          </button>
        </div>
      ))}
      
      <style jsx>{`
        @keyframes pulse {
          0% { opacity: 0.4; }
          50% { opacity: 0.8; }
          100% { opacity: 0.4; }
        }
      `}</style>
    </div>
  );
}