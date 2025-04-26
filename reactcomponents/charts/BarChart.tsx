import { useEffect, useRef } from 'react';
import { cn } from '@/lib/utils';

interface BarChartProps extends React.HTMLAttributes<HTMLDivElement> {
  data: number[];
  colors?: {
    bars?: string[];
    background?: string;
  };
  spacing?: number;
}

export function BarChart({ 
  data, 
  colors = {
    bars: [],
    background: 'transparent'
  },
  spacing = 2,
  className,
  ...props 
}: BarChartProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    // Set canvas size with higher pixel density
    const dpr = window.devicePixelRatio || 1;
    const rect = canvas.getBoundingClientRect();
    canvas.width = rect.width * dpr;
    canvas.height = rect.height * dpr;
    ctx.scale(dpr, dpr);
    
    // Clear canvas
    ctx.clearRect(0, 0, rect.width, rect.height);
    
    if (data.length === 0) return;
    
    // Normalize data to fit canvas
    const maxValue = Math.max(...data);
    const normalizedData = data.map(value => (value / maxValue) * 0.9);
    
    // Calculate bar width
    const barWidth = rect.width / data.length / spacing;
    const barSpacing = (rect.width - barWidth * data.length) / (data.length + 1);
    
    // Draw bars
    for (let i = 0; i < normalizedData.length; i++) {
      const height = normalizedData[i] * rect.height;
      const x = barSpacing + i * (barWidth + barSpacing);
      const y = rect.height - height;
      
      const barColor = colors.bars && colors.bars[i] ? colors.bars[i] : '#00FFE0';
      
      // Draw bar
      if (barColor.includes('linear-gradient')) {
        // Create a gradient
        const gradient = ctx.createLinearGradient(x, y, x, rect.height);
        const gradientStops = barColor.match(/rgba?\([^)]+\)|#[0-9a-f]{3,8}/gi);
        
        if (gradientStops) {
          const stopCount = gradientStops.length;
          for (let j = 0; j < stopCount; j++) {
            gradient.addColorStop(j / (stopCount - 1), gradientStops[j]);
          }
        }
        
        ctx.fillStyle = gradient;
      } else {
        ctx.fillStyle = barColor;
      }
      
      // Draw rounded top rect
      const radius = barWidth / 2;
      ctx.beginPath();
      ctx.moveTo(x, y + radius);
      ctx.lineTo(x, rect.height);
      ctx.lineTo(x + barWidth, rect.height);
      ctx.lineTo(x + barWidth, y + radius);
      ctx.arc(x + barWidth / 2, y + radius, radius, 0, Math.PI, true);
      ctx.closePath();
      ctx.fill();
    }
  }, [data, colors, spacing]);
  
  return (
    <div className={cn("relative w-full h-full", className)} {...props}>
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full"
        style={{ width: '100%', height: '100%' }}
      />
    </div>
  );
}