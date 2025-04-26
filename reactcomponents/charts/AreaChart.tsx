import { useEffect, useRef } from 'react';
import { cn } from '@/lib/utils';

interface AreaChartProps extends React.HTMLAttributes<HTMLDivElement> {
  data: number[];
  gradient?: string;
  height?: number;
  showDots?: boolean;
  smoothing?: number;
}

export function AreaChart({ 
  data, 
  gradient = 'linear-gradient(to top, rgba(0, 255, 224, 0.2) 0%, rgba(0, 255, 224, 0) 100%)', 
  className,
  showDots = true,
  smoothing = 0.2,
  ...props 
}: AreaChartProps) {
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
    
    if (data.length < 2) return;
    
    // Normalize data to fit canvas
    const maxValue = Math.max(...data);
    const normalizedData = data.map(value => 1 - (value / maxValue) * 0.8);
    
    // Draw path
    const pointSpacing = rect.width / (data.length - 1);
    
    // Create bezier curves
    ctx.beginPath();
    ctx.moveTo(0, normalizedData[0] * rect.height);
    
    for (let i = 0; i < normalizedData.length - 1; i++) {
      const x1 = i * pointSpacing;
      const y1 = normalizedData[i] * rect.height;
      const x2 = (i + 1) * pointSpacing;
      const y2 = normalizedData[i + 1] * rect.height;
      
      const cpx1 = x1 + (x2 - x1) * smoothing;
      const cpy1 = y1;
      const cpx2 = x2 - (x2 - x1) * smoothing;
      const cpy2 = y2;
      
      ctx.bezierCurveTo(cpx1, cpy1, cpx2, cpy2, x2, y2);
    }
    
    // Create the line stroke
    const strokeGradient = ctx.createLinearGradient(0, 0, rect.width, 0);
    strokeGradient.addColorStop(0, '#FF423D');
    strokeGradient.addColorStop(0.5, '#FFD600');
    strokeGradient.addColorStop(1, '#00FFE0');
    
    ctx.strokeStyle = strokeGradient;
    ctx.lineWidth = 2;
    ctx.stroke();
    
    // Create the fill gradient
    ctx.lineTo(rect.width, rect.height);
    ctx.lineTo(0, rect.height);
    ctx.closePath();
    
    // Create fill gradient
    const fillGradient = ctx.createLinearGradient(rect.width / 2, 0, rect.width / 2, rect.height);
    fillGradient.addColorStop(0, 'rgba(0, 255, 224, 0.2)');
    fillGradient.addColorStop(1, 'rgba(0, 255, 224, 0)');
    
    ctx.fillStyle = fillGradient;
    ctx.fill();
    
    // Draw dots
    if (showDots) {
      for (let i = 0; i < normalizedData.length; i++) {
        const x = i * pointSpacing;
        const y = normalizedData[i] * rect.height;
        
        // Draw outer glow
        const gradient = ctx.createRadialGradient(x, y, 0, x, y, 6);
        gradient.addColorStop(0, 'rgba(0, 255, 224, 0.7)');
        gradient.addColorStop(1, 'rgba(0, 255, 224, 0)');
        
        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(x, y, 6, 0, Math.PI * 2);
        ctx.fill();
        
        // Draw inner dot
        ctx.fillStyle = '#00FFE0';
        ctx.beginPath();
        ctx.arc(x, y, 3, 0, Math.PI * 2);
        ctx.fill();
      }
    }
  }, [data, showDots, smoothing]);
  
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