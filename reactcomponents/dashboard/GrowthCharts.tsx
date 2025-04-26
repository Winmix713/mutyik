import { Card, CardContent } from '@/components/ui/card';
import { AreaChart, BarChart } from '@/components/charts';

export function GrowthCharts() {
  return (
    <Card 
      className="relative bg-gradient-to-br from-black/30 to-black/10 backdrop-blur-xl border-0 rounded-3xl overflow-hidden"
      style={{
        boxShadow: `inset 0 2px 4px rgba(255, 255, 255, 0.1),
                    0 20px 40px -10px rgba(0, 0, 0, 0.5)`
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-white/[0.04] to-transparent"></div>
      <CardContent className="relative p-8">
        <div className="grid grid-cols-2 gap-12">
          <div className="flex flex-col">
            <div 
              className="bg-black/40 text-white px-4 py-1.5 rounded-full text-sm inline-self-start mb-8"
              style={{
                boxShadow: `inset 0 1px 2px rgba(0, 0, 0, 0.2),
                           0 1px 2px rgba(255, 255, 255, 0.1)`
              }}
            >
              48%
            </div>
            
            <div className="h-40 relative">
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-xl"></div>
              <AreaChart 
                className="h-40 w-full" 
                data={[10, 15, 25, 35, 50, 70, 85]}
                gradient="linear-gradient(90deg, #FF423D 0%, #FFD600 50%, #00FFE0 100%)"
                showDots={false}
                smoothing={0.3}
              />
            </div>
            
            <div className="flex justify-between mt-4 text-sm text-white/50">
              <span>Apr</span>
              <span>May</span>
              <span>Jun</span>
              <span>Jul</span>
            </div>
            
            <div className="flex items-baseline mt-6">
              <div 
                className="text-6xl font-light text-white"
                style={{ textShadow: '0 2px 4px rgba(0,0,0,0.2)' }}
              >48%</div>
              <div className="text-xl text-white/40 ml-4">User Growth</div>
            </div>
          </div>
          
          <div className="flex flex-col">
            <div 
              className="bg-black/40 text-white px-4 py-1.5 rounded-full text-sm inline-self-start mb-8"
              style={{
                boxShadow: `inset 0 1px 2px rgba(0, 0, 0, 0.2),
                           0 1px 2px rgba(255, 255, 255, 0.1)`
              }}
            >
              56%
            </div>
            
            <div className="h-40 relative">
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-xl"></div>
              <BarChart 
                className="h-40 w-full" 
                data={[20, 25, 30, 40, 45, 80, 50]}
                colors={{
                  bars: [
                    '#1a1a1a', '#1a1a1a', '#1a1a1a', '#1a1a1a', '#1a1a1a', 
                    'linear-gradient(to top, #805b10, #ffd700)',
                    '#1a1a1a'
                  ]
                }}
                spacing={1.2}
              />
            </div>
            
            <div className="flex justify-between mt-4 text-sm text-white/50">
              <span>Apr</span>
              <span>May</span>
              <span>Jun</span>
              <span>Jul</span>
            </div>
            
            <div className="flex items-baseline mt-6">
              <div 
                className="text-6xl font-light text-white"
                style={{ textShadow: '0 2px 4px rgba(0,0,0,0.2)' }}
              >56%</div>
              <div className="text-xl text-white/40 ml-4">User Satisfaction</div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}