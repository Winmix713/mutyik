import { useState } from 'react';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { CheckCircle2, XCircle, CreditCard, AlertTriangle, Calculator } from 'lucide-react';
import { cn } from '@/lib/utils';

type MonthData = {
  name: string;
  isPaid: boolean;
};

const MONTHS_2023: MonthData[] = [
  { name: 'Jan', isPaid: false },
  { name: 'Feb', isPaid: true },
  { name: 'Mar', isPaid: true },
  { name: 'Apr', isPaid: true },
  { name: 'May', isPaid: false },
  { name: 'Jun', isPaid: true },
  { name: 'Jul', isPaid: true },
  { name: 'Aug', isPaid: true },
  { name: 'Sep', isPaid: false },
  { name: 'Oct', isPaid: true },
  { name: 'Nov', isPaid: true },
  { name: 'Dec', isPaid: false },
];

const MONTHS_2024: MonthData[] = [
  { name: 'Jan', isPaid: false },
  { name: 'Feb', isPaid: false },
  { name: 'Mar', isPaid: false },
  { name: 'Apr', isPaid: false },
  { name: 'May', isPaid: false },
  { name: 'Jun', isPaid: false },
  { name: 'Jul', isPaid: false },
  { name: 'Aug', isPaid: false },
  { name: 'Sep', isPaid: false },
  { name: 'Oct', isPaid: false },
  { name: 'Nov', isPaid: false },
  { name: 'Dec', isPaid: false },
];

export function Timeline() {
  const [year, setYear] = useState('2023');
  
  return (
    <Card className="bg-gradient-to-br from-slate-950 to-slate-900 border-0 overflow-hidden rounded-3xl">
      <CardHeader className="border-b border-slate-800/30 flex flex-row justify-between items-center pb-2 px-8 pt-6">
        <h2 className="text-3xl font-normal text-white">Timeline</h2>
        <div className="flex gap-12 text-lg">
          <button className={cn("pb-2 transition-colors", 
            "border-b-2 border-slate-600 text-slate-400")}>
            Details
          </button>
          <button className={cn("pb-2 transition-colors", 
            "border-b-0 text-slate-600")}>
            Updates
          </button>
        </div>
      </CardHeader>
      <CardContent className="p-8">
        <Tabs defaultValue="2023" onValueChange={setYear} className="w-full">
          <div className="flex items-start justify-between mb-8">
            <TabsList className="bg-transparent p-0 h-auto">
              <TabsTrigger 
                value="2023"
                className={cn(
                  "text-5xl font-normal px-1 py-0 h-auto data-[state=active]:bg-transparent",
                  year === '2023' ? "text-white" : "text-slate-600"
                )}
              >
                2023
              </TabsTrigger>
              <TabsTrigger 
                value="2024"
                className={cn(
                  "text-5xl font-normal px-1 py-0 h-auto data-[state=active]:bg-transparent ml-4",
                  year === '2024' ? "text-white" : "text-slate-600"
                )}
              >
                2024
              </TabsTrigger>
            </TabsList>
            
            <div className="flex flex-col items-end text-lg">
              <span className="text-slate-400">First Payment</span>
              <span className="text-white">03.02.2023</span>
            </div>
          </div>

          <TabsContent value="2023" className="m-0">
            <div className="grid grid-cols-6 gap-4">
              {MONTHS_2023.slice(0, 6).map((month) => (
                <div key={month.name} className="flex flex-col items-center">
                  <span className="text-lg text-slate-400 mb-3">{month.name}</span>
                  <div className={cn(
                    "w-20 h-20 rounded-2xl flex items-center justify-center relative",
                    month.isPaid ? 
                      "bg-slate-900 border border-green-500" : 
                      (month.name === "Jan" ? "bg-slate-800 border-0" : "bg-slate-900 border border-red-500")
                  )}>
                    {month.isPaid ? (
                      <CheckCircle2 className="w-10 h-10 text-green-400" />
                    ) : (
                      month.name === "Jan" ? 
                        <div className="w-4 h-4 rounded-full bg-slate-600" /> :
                        <XCircle className="w-10 h-10 text-red-400" />
                    )}
                  </div>
                </div>
              ))}
            </div>
            
            <div className="grid grid-cols-6 gap-4 mt-8">
              {MONTHS_2023.slice(6, 12).map((month) => (
                <div key={month.name} className="flex flex-col items-center">
                  <span className="text-lg text-slate-400 mb-3">{month.name}</span>
                  <div className={cn(
                    "w-20 h-20 rounded-2xl flex items-center justify-center relative",
                    month.isPaid ? 
                      "bg-slate-900 border border-green-500" : 
                      "bg-slate-900 border border-red-500"
                  )}>
                    {month.isPaid ? (
                      <CheckCircle2 className="w-10 h-10 text-green-400" />
                    ) : (
                      <XCircle className="w-10 h-10 text-red-400" />
                    )}
                  </div>
                </div>
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="2024" className="m-0">
            <div className="grid grid-cols-6 gap-4">
              {MONTHS_2024.slice(0, 6).map((month) => (
                <div key={month.name} className="flex flex-col items-center">
                  <span className="text-lg text-slate-400 mb-3">{month.name}</span>
                  <div className="w-20 h-20 rounded-2xl flex items-center justify-center bg-slate-800 relative">
                    <div className="w-4 h-4 rounded-full bg-slate-600" />
                  </div>
                </div>
              ))}
            </div>
          </TabsContent>
        </Tabs>
        
        <div className="flex gap-4 mt-16">
          <button className="flex-1 py-4 px-6 rounded-full bg-white hover:bg-slate-100 transition-colors text-black text-lg flex items-center justify-center gap-2">
            <CreditCard className="w-5 h-5" /> Make a payment
          </button>
          <button className="flex-1 py-4 px-6 rounded-full bg-slate-800/50 hover:bg-slate-700/50 transition-colors text-white text-lg flex items-center justify-center gap-2">
            <AlertTriangle className="w-5 h-5" /> Create Dispute
          </button>
          <button className="flex-1 py-4 px-6 rounded-full bg-slate-800/50 hover:bg-slate-700/50 transition-colors text-white text-lg flex items-center justify-center gap-2">
            <Calculator className="w-5 h-5" /> Calculate
          </button>
        </div>
      </CardContent>
    </Card>
  );
}