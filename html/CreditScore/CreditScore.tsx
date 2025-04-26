import { Card, CardContent } from '@/components/ui/card';

export default function CreditScore() {
  return (
    <Card className="bg-black text-white w-full max-w-md mx-auto">
      <CardContent className="p-6">
        <div className="flex items-center mb-8">
          <h1 className="text-3xl font-bold">Your</h1>
          <div className="w-6 h-6 mx-2 rounded-full bg-yellow-600 flex items-center justify-center overflow-hidden">
            <span className="text-xs">👤</span>
          </div>
          <h1 className="text-3xl font-bold">Credit</h1>
        </div>

        <h2 className="text-2xl mb-6">Dashboard</h2>

        <div className="flex gap-2 mb-8">
          <div className="border border-green-500 rounded-full px-4 py-2 text-sm flex-1 text-center bg-black">
            Transunion Score
          </div>
          <div className="border border-gray-800 rounded-full px-4 py-2 text-sm flex-1 text-center bg-black">
            Experian
          </div>
          <div className="border border-gray-800 rounded-full px-4 py-2 text-sm flex-1 text-center bg-black">
            Equifax
          </div>
        </div>

        <div className="text-center">
          <div className="flex items-end justify-center mb-1">
            <span className="text-8xl font-light">730</span>
            <div className="flex items-center ml-2 mb-4 text-sm">
              <span className="text-green-500">+6 pts</span>
              <span className="text-green-500 ml-1">↗</span>
            </div>
          </div>

          <div className="flex justify-end text-xs text-gray-400 mb-2">
            <span>5 Days ago</span>
          </div>
          <div className="flex justify-end text-xs text-gray-500 -mt-1 mb-2">
            <span>Updated</span>
          </div>

          <div className="text-red-400 mb-2">Excellent</div>

          <div className="relative h-3 w-full bg-gradient-to-r from-red-500 via-yellow-500 to-green-500 rounded-full">
            <div className="absolute top-0 right-12 w-1 h-3 bg-white"></div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}