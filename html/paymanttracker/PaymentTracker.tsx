import { Card, CardContent } from '@/components/ui/card';
import { CalendarClock } from 'lucide-react';

export function PaymentTracker() {
  const total = 38;
  const onTime = 24;
  
  return (
    <Card 
      className="relative bg-gradient-to-br from-black/30 to-black/10 backdrop-blur-xl border-0 rounded-3xl overflow-hidden hover:scale-[1.02] transition-transform duration-300"
      style={{
        boxShadow: `inset 0 2px 4px rgba(255, 255, 255, 0.1),
                    0 20px 40px -10px rgba(0, 0, 0, 0.5)`
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-white/[0.04] to-transparent"></div>
      <CardContent className="relative p-8">
        <div className="flex items-center gap-4 mb-8">
          <div 
            className="w-14 h-14 rounded-full bg-gradient-to-br from-black/50 to-black/30 flex items-center justify-center"
            style={{
              boxShadow: `inset 0 2px 4px rgba(255, 255, 255, 0.1),
                         inset 0 -2px 4px rgba(0, 0, 0, 0.2),
                         0 4px 8px rgba(0, 0, 0, 0.2)`
            }}
          >
            <CalendarClock className="w-7 h-7 text-white/80" />
          </div>
          <div>
            <h2 className="text-2xl font-light text-white/90">Payments</h2>
            <p className="text-white/50 text-sm">on Time</p>
          </div>
        </div>
        
        <div className="flex flex-col">
          <div className="flex items-baseline gap-2">
            <div className="text-[4rem] font-light text-white leading-none" style={{ textShadow: '0 2px 4px rgba(0,0,0,0.2)' }}>24</div>
            <div className="text-xl text-white/40 font-light">/ 38</div>
          </div>
          
          <div className="flex justify-between items-center mt-8">
            <div className="text-sm text-white/50">Last 5 payments</div>
            <div className="flex gap-2">
              {[1, 2, 3, 4, 5].map((_, i) => (
                <div 
                  key={i} 
                  className={`w-2 h-2 rounded-full transition-transform duration-300 hover:scale-150 ${
                    i < 4 
                      ? 'bg-[#00FF94] shadow-[0_0_10px_rgba(0,255,148,0.5)]' 
                      : 'bg-white/10'
                  }`}
                  style={{
                    boxShadow: i < 4 ? `0 0 10px rgba(0, 255, 148, 0.5),
                                       inset 0 1px 1px rgba(255, 255, 255, 0.2)` : ''
                  }}
                />
              ))}
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}