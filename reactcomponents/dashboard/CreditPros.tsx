import { Card, CardContent } from '@/components/ui/card';
import { CalendarDays } from 'lucide-react';

export function CreditPros() {
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
            <CalendarDays className="w-7 h-7 text-white/80" />
          </div>
          <div>
            <h2 className="text-2xl font-light text-white/90">Credit Pros</h2>
          </div>
        </div>
        
        <div className="flex flex-col">
          <div className="flex items-baseline gap-2">
            <div 
              className="text-[5rem] font-light text-white leading-none"
              style={{ textShadow: '0 2px 4px rgba(0,0,0,0.2)' }}
            >5</div>
            <div className="text-2xl text-white/40 font-light mt-4">Sprints</div>
          </div>
          
          <div className="mt-6">
            <div className="flex justify-between items-center">
              <div className="text-2xl font-light text-white">
                9<span className="text-xl ml-1 text-white/80">+</span>
              </div>
              <div className="text-sm text-white/50">Iterations</div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}