import CreditScore from '@/components/dashboard/CreditScore';
import { Timeline } from '@/components/dashboard/Timeline';
import { PaymentTracker } from '@/components/dashboard/PaymentTracker';
import { MetricsPanel } from '@/components/dashboard/MetricsPanel';
import { ActionCards } from '@/components/dashboard/ActionCards';
import { PerformanceMetrics } from '@/components/dashboard/PerformanceMetrics';
import { GrowthCharts } from '@/components/dashboard/GrowthCharts';
import { CreditPros } from '@/components/dashboard/CreditPros';

const Dashboard = () => {
  return (
    <div className="min-h-screen w-full bg-gradient-to-b from-background/90 to-background p-4 md:p-8">
      <div className="max-w-7xl mx-auto">
        <header className="flex justify-between items-center mb-8">
          <h1 className="text-2xl md:text-3xl font-bold text-white flex items-center gap-2">
            <span className="text-yellow-400">🔥</span> Credit Dashboard
          </h1>
        </header>
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Left column */}
          <div className="lg:col-span-7 space-y-6">
            <Timeline />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <PaymentTracker />
              <CreditPros />
            </div>
            <GrowthCharts />
          </div>
          
          {/* Right column */}
          <div className="lg:col-span-5 space-y-6">
            <CreditScore />
            <ActionCards />
            <MetricsPanel />
            <PerformanceMetrics />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;