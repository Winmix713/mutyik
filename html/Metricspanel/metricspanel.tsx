import { Card, CardContent } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { AreaChart, BarChart } from '@/components/charts';

export function MetricsPanel() {
  return (
    <Card className="bg-gradient-to-br from-background/80 to-background/50 border-slate-800/50 backdrop-blur-sm overflow-hidden">
      <CardContent className="p-6">
        <div className="grid grid-cols-3 gap-6">
          <div className="flex flex-col items-center">
            <div className="h-24 w-full mb-4">
              <AreaChart 
                className="h-24 w-full" 
                data={[20, 40, 30, 35, 45, 40, 50, 60, 55]}
                gradient="linear-gradient(to right, #FF423D, #FFD600, #00FFE0)"
              />
            </div>
            <div className="text-sm text-center text-muted-foreground">Credit Improvement</div>
            <div className="text-3xl font-bold flex items-center">
              <span className="text-white">72</span>
              <span className="text-slate-500 text-2xl">%</span>
            </div>
          </div>
          
          <div className="flex flex-col items-center">
            <div className="h-24 w-full mb-4">
              <BarChart 
                className="h-24 w-full" 
                data={[20, 40, 30, 55]}
                colors={{
                  bars: ['#121212', '#121212', '#121212', 'linear-gradient(to top, #FF423D, #FFD600, #00FFE0)']
                }}
              />
            </div>
            <div className="text-sm text-center text-muted-foreground">Users Daily</div>
            <div className="flex items-baseline">
              <span className="text-3xl font-bold text-white">1.2</span>
              <span className="text-2xl font-bold text-slate-500">M</span>
            </div>
          </div>
          
          <div className="flex flex-col items-center">
            <div className="h-24 w-full flex items-center justify-center mb-4">
              <div className="w-full h-20 relative">
                <div className="absolute inset-0 flex justify-center">
                  <div className="w-24 h-12 overflow-hidden relative">
                    <div className="w-24 h-24 rounded-full border-8 border-transparent border-t-slate-700 border-r-slate-700 border-b-slate-700 absolute bottom-0"></div>
                  </div>
                </div>
                
                <div className="absolute inset-0 flex justify-center">
                  <div className="w-24 h-12 overflow-hidden relative">
                    <div className="w-24 h-24 rounded-full border-8 border-transparent border-t-green-500 border-r-blue-500 border-b-yellow-500 absolute bottom-0" style={{ transform: 'rotate(-45deg)' }}></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="text-sm text-center text-muted-foreground">Report Accuracy</div>
            <div className="flex items-baseline">
              <span className="text-3xl font-bold text-white">99.9</span>
              <span className="text-2xl font-bold text-slate-500">%</span>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}