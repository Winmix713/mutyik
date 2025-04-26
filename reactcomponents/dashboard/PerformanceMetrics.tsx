import { Card, CardContent } from '@/components/ui/card';

const COLORS = [
  { name: 'Yellow', hex: '#FFD600', label: 'FFD600' },
  { name: 'Red', hex: '#FF423D', label: 'FF423D' },
  { name: 'Purple', hex: '#8F00FF', label: '8F00FF' },
  { name: 'Blue', hex: '#0066FF', label: '0066FF' },
  { name: 'Cyan', hex: '#00FFE0', label: '00FFE0' },
  { name: 'White', hex: '#FFFFFF', label: 'FFFFFF' },
];

export function PerformanceMetrics() {
  return (
    <div className="bg-black p-8 w-full">
      <div className="grid grid-cols-3 gap-8">
        {COLORS.map((color, index) => (
          <div key={index} className="flex flex-col items-center relative">
            <span className="text-sm text-white font-mono mb-2">#{color.label}</span>
            <div className="relative w-32 h-32 flex items-center justify-center">
              <div 
                className="absolute inset-0 rounded-full opacity-30"
                style={{ 
                  background: `radial-gradient(circle, ${color.hex} 0%, transparent 70%)`,
                }}
              />
              <div 
                className="absolute w-14 h-14 rounded-full"
                style={{ backgroundColor: color.hex }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}